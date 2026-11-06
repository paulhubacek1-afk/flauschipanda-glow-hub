import { sql } from "@payloadcms/db-postgres";
import type { Payload } from "payload";

/**
 * Ergänzt neue Datenbank-Spalten, die nach dem ersten Einrichten dazugekommen sind.
 *
 * Die Produktionsdatenbank übernimmt Schemaänderungen nicht automatisch. Statt riskanter
 * Migrationen wird hier beim Start nur HINZUGEFÜGT, was fehlt („IF NOT EXISTS“) –
 * es wird nie etwas gelöscht oder verändert. Mehrfaches Ausführen ist gefahrlos.
 */
/** Zeilen aus einem drizzle/pg-Ergebnis lesen (je nach Treiber `rows` oder direkt ein Array). */
const rowsOf = (res: unknown): Record<string, unknown>[] =>
  Array.isArray(res) ? (res as Record<string, unknown>[]) : (((res as { rows?: unknown[] } | null)?.rows ?? []) as Record<string, unknown>[]);

export async function ensureSchema(payload: Payload) {
  const drizzle = (payload.db as unknown as { drizzle?: { execute: (q: unknown) => Promise<unknown> } }).drizzle;
  if (!drizzle) return;

  /*
   * WICHTIG: ALTER TABLE braucht eine exklusive Sperre auf die Tabelle – auch bei „IF NOT EXISTS“,
   * wenn die Spalte längst existiert. Läuft gleichzeitig eine Schreib-Transaktion (z. B. das Befüllen
   * von Seiten), wartet das ALTER, und alle weiteren Abfragen auf diese Tabelle stauen sich dahinter.
   * Das hat Builds (Timeout nach 60 s) und Seitenaufrufe blockiert.
   * Deshalb zuerst ohne Sperre im Katalog nachsehen und nur dann ändern, wenn wirklich etwas fehlt.
   */
  let known: Set<string>;
  try {
    const res = await drizzle.execute(sql`
      SELECT table_name || '.' || column_name AS k FROM information_schema.columns WHERE table_schema = current_schema()
      UNION ALL
      SELECT tablename || '#' FROM pg_catalog.pg_tables WHERE schemaname = current_schema()
      UNION ALL
      SELECT '@' || indexname FROM pg_catalog.pg_indexes WHERE schemaname = current_schema()
      UNION ALL
      SELECT 'enum_categories_icon:' || e.enumlabel FROM pg_catalog.pg_enum e
        JOIN pg_catalog.pg_type t ON t.oid = e.enumtypid WHERE t.typname = 'enum_categories_icon'
    `);
    known = new Set(rowsOf(res).map((r) => String(r.k)));
  } catch (err) {
    payload.logger.warn({ err }, "[schema] Katalog konnte nicht gelesen werden – Schema-Prüfung übersprungen");
    return;
  }
  const hasColumns = (table: string, columns: string[]) => !known.has(`${table}#`) || columns.every((c) => known.has(`${table}.${c}`));
  const hasTable = (table: string) => known.has(`${table}#`);
  const hasIndex = (name: string) => known.has(`@${name}`);

  if (
    hasColumns("site_settings", [
      "maintenance_enabled", "maintenance_title", "maintenance_message", "maintenance_until",
      "homepage_badge", "homepage_title_lead", "homepage_title_highlight", "homepage_description", "merch_url",
    ]) &&
    hasColumns("users", ["bamboo", "bamboo_state"]) &&
    hasTable("fp_counters") &&
    hasColumns("pages", ["text_source", "pros_cons_pros", "pros_cons_cons", "pros_cons_note"]) &&
    hasColumns("_pages_v", ["version_text_source", "version_pros_cons_pros", "version_pros_cons_cons", "version_pros_cons_note"]) &&
    ["header_links", "footer_links", "social_links", "powered_by"].every(
      (n) => hasTable(`site_settings_${n}`) && hasIndex(`site_settings_${n}_order_idx`) && hasIndex(`site_settings_${n}_parent_id_idx`),
    ) &&
    known.has("enum_categories_icon:monitor") &&
    known.has("enum_categories_icon:atom")
  ) {
    return; // alles vorhanden – keine Sperren nötig
  }

  // Ab hier fehlt tatsächlich etwas. Nie länger als ein paar Sekunden auf eine Sperre warten,
  // damit ein Start niemals die ganze Website aufhält – beim nächsten Start wird es erneut versucht.
  try {
    await drizzle.execute(sql.raw(`SET lock_timeout = '5s'`));
  } catch {
    /* ohne Timeout weiter */
  }
  try {
    await drizzle.execute(sql`
      ALTER TABLE IF EXISTS "site_settings"
        ADD COLUMN IF NOT EXISTS "maintenance_enabled" boolean DEFAULT false,
        ADD COLUMN IF NOT EXISTS "maintenance_title" varchar,
        ADD COLUMN IF NOT EXISTS "maintenance_message" varchar,
        ADD COLUMN IF NOT EXISTS "maintenance_until" timestamp(3) with time zone,
        ADD COLUMN IF NOT EXISTS "homepage_badge" varchar,
        ADD COLUMN IF NOT EXISTS "homepage_title_lead" varchar,
        ADD COLUMN IF NOT EXISTS "homepage_title_highlight" varchar,
        ADD COLUMN IF NOT EXISTS "homepage_description" varchar
    `);
  } catch (err) {
    payload.logger.error({ err }, "[schema] Wartungsmodus-Spalten konnten nicht ergänzt werden");
  }
  // Bambus-Konten: Punktestand und Panda-Ausrüstung werden direkt beim Benutzer gespeichert.
  // IF NOT EXISTS macht das Ergänzen auch für bestehende Produktionsdatenbanken sicher.
  try {
    await drizzle.execute(sql.raw(`
      ALTER TABLE IF EXISTS "users"
        ADD COLUMN IF NOT EXISTS "bamboo" numeric DEFAULT 25,
        ADD COLUMN IF NOT EXISTS "bamboo_state" jsonb DEFAULT '{"count":25,"off":[],"views":0}'::jsonb
    `));
  } catch (err) {
    payload.logger.error({ err }, "[schema] Bambus-Kontofelder konnten nicht ergänzt werden");
  }
  // kleine Zähler außerhalb von Payload (z. B. wie oft die GreenTech-Pflanze gegossen wurde)
  try {
    await drizzle.execute(sql`
      CREATE TABLE IF NOT EXISTS "fp_counters" (
        "key" varchar(64) PRIMARY KEY,
        "value" bigint NOT NULL DEFAULT 0,
        "updated_at" timestamp(3) with time zone NOT NULL DEFAULT now()
      )
    `);
  } catch (err) {
    payload.logger.warn({ err }, "[schema] Zähler-Tabelle konnte nicht angelegt werden");
  }
  // Textherkunft der Seiten („auto“ = automatisch erzeugt, „bearbeitet“ = von Hand geändert) – auch in den Versionen
  for (const q of [
    `ALTER TABLE IF EXISTS "pages" ADD COLUMN IF NOT EXISTS "text_source" varchar`,
    `ALTER TABLE IF EXISTS "_pages_v" ADD COLUMN IF NOT EXISTS "version_text_source" varchar`,
  ]) {
    try {
      await drizzle.execute(sql.raw(q));
    } catch (err) {
      payload.logger.warn({ err }, "[schema] Spalte für Textherkunft konnte nicht ergänzt werden");
    }
  }
  // Redaktionelle Vor- und Nachteile pro Seite.
  // Die Felder sind optional; bestehende Inhalte bleiben unverändert.
  for (const q of [
    `ALTER TABLE IF EXISTS "pages"
      ADD COLUMN IF NOT EXISTS "pros_cons_pros" varchar,
      ADD COLUMN IF NOT EXISTS "pros_cons_cons" varchar,
      ADD COLUMN IF NOT EXISTS "pros_cons_note" varchar`,
    `ALTER TABLE IF EXISTS "_pages_v"
      ADD COLUMN IF NOT EXISTS "version_pros_cons_pros" varchar,
      ADD COLUMN IF NOT EXISTS "version_pros_cons_cons" varchar,
      ADD COLUMN IF NOT EXISTS "version_pros_cons_note" varchar`,
  ]) {
    try {
      await drizzle.execute(sql.raw(q));
    } catch (err) {
      payload.logger.warn({ err }, "[schema] Vor-/Nachteile-Spalten konnten nicht ergänzt werden");
    }
  }
  // Website-Links (Website-Einstellungen → Links): Shop-Adresse und Link-Listen
  const linkTable = (name: string, newTab: boolean) => `
    CREATE TABLE IF NOT EXISTS "site_settings_${name}" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL REFERENCES "site_settings"("id") ON DELETE CASCADE,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar,
      "url" varchar${newTab ? `,
      "new_tab" boolean DEFAULT false` : ""}
    )`;
  for (const q of [
    `ALTER TABLE IF EXISTS "site_settings" ADD COLUMN IF NOT EXISTS "merch_url" varchar`,
    linkTable("header_links", true),
    linkTable("footer_links", true),
    linkTable("social_links", false),
    linkTable("powered_by", false),
    `CREATE INDEX IF NOT EXISTS "site_settings_header_links_order_idx" ON "site_settings_header_links" ("_order")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_header_links_parent_id_idx" ON "site_settings_header_links" ("_parent_id")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_footer_links_order_idx" ON "site_settings_footer_links" ("_order")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_footer_links_parent_id_idx" ON "site_settings_footer_links" ("_parent_id")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_social_links_order_idx" ON "site_settings_social_links" ("_order")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_social_links_parent_id_idx" ON "site_settings_social_links" ("_parent_id")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_powered_by_order_idx" ON "site_settings_powered_by" ("_order")`,
    `CREATE INDEX IF NOT EXISTS "site_settings_powered_by_parent_id_idx" ON "site_settings_powered_by" ("_parent_id")`,
  ]) {
    try {
      await drizzle.execute(sql.raw(q));
    } catch (err) {
      payload.logger.warn({ err }, "[schema] Link-Einstellungen: Tabelle/Spalte konnte nicht ergänzt werden");
    }
  }
  // neue Auswahlwerte für Kategorie-Symbole (Postgres-Enum)
  for (const value of ["monitor", "atom"]) {
    if (known.has(`enum_categories_icon:${value}`)) continue;
    try {
      await drizzle.execute(sql.raw(`ALTER TYPE "enum_categories_icon" ADD VALUE IF NOT EXISTS '${value}'`));
    } catch (err) {
      payload.logger.warn({ err }, `[schema] Symbol „${value}“ konnte nicht ergänzt werden`);
    }
  }
  try {
    await drizzle.execute(sql.raw(`SET lock_timeout = 0`));
  } catch {
    /* Verbindung wird ohnehin neu aufgebaut */
  }
}
