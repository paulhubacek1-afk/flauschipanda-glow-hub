import { sql } from "@payloadcms/db-postgres";
import type { Payload } from "payload";

/**
 * Ergänzt neue Datenbank-Spalten, die nach dem ersten Einrichten dazugekommen sind.
 *
 * Die Produktionsdatenbank übernimmt Schemaänderungen nicht automatisch. Statt riskanter
 * Migrationen wird hier beim Start nur HINZUGEFÜGT, was fehlt („IF NOT EXISTS“) –
 * es wird nie etwas gelöscht oder verändert. Mehrfaches Ausführen ist gefahrlos.
 */
export async function ensureSchema(payload: Payload) {
  const drizzle = (payload.db as unknown as { drizzle?: { execute: (q: unknown) => Promise<unknown> } }).drizzle;
  if (!drizzle) return;
  try {
    await drizzle.execute(sql`
      ALTER TABLE IF EXISTS "site_settings"
        ADD COLUMN IF NOT EXISTS "maintenance_enabled" boolean DEFAULT false,
        ADD COLUMN IF NOT EXISTS "maintenance_title" varchar,
        ADD COLUMN IF NOT EXISTS "maintenance_message" varchar,
        ADD COLUMN IF NOT EXISTS "maintenance_until" timestamp(3) with time zone
    `);
  } catch (err) {
    payload.logger.error({ err }, "[schema] Wartungsmodus-Spalten konnten nicht ergänzt werden");
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
    try {
      await drizzle.execute(sql.raw(`ALTER TYPE "enum_categories_icon" ADD VALUE IF NOT EXISTS '${value}'`));
    } catch (err) {
      payload.logger.warn({ err }, `[schema] Symbol „${value}“ konnte nicht ergänzt werden`);
    }
  }
}
