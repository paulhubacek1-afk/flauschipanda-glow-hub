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
  // neue Auswahlwerte für Kategorie-Symbole (Postgres-Enum)
  for (const value of ["monitor"]) {
    try {
      await drizzle.execute(sql.raw(`ALTER TYPE "enum_categories_icon" ADD VALUE IF NOT EXISTS '${value}'`));
    } catch (err) {
      payload.logger.warn({ err }, `[schema] Symbol „${value}“ konnte nicht ergänzt werden`);
    }
  }
}
