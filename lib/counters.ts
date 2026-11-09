import config from "@payload-config";
import { sql } from "@payloadcms/db-postgres";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

/**
 * Kleine anonyme Zähler in der Tabelle „fp_counters“ (siehe cms/ensure-schema.ts).
 * Gespeichert werden nur Zahlen – keine IP-Adressen, keine Cookies, keine personenbezogenen Daten.
 */

type Exec = { execute: (q: unknown) => Promise<unknown> };

async function db(): Promise<Exec | null> {
  if (!String(process.env.DATABASE_URI ?? "").trim()) return null;
  const payload = await getPayload({ config });
  return ((payload.db as unknown as { drizzle?: Exec }).drizzle ?? null) as Exec | null;
}

function rowsOf(res: unknown): { key?: string; value?: string | number }[] {
  const r = res as { rows?: { key?: string; value?: string | number }[] } | { key?: string; value?: string | number }[];
  return Array.isArray(r) ? r : (r?.rows ?? []);
}

export async function readCounters(keys: string[]): Promise<Record<string, number>> {
  const out: Record<string, number> = Object.fromEntries(keys.map((k) => [k, 0]));
  const d = await db();
  if (!d || !keys.length) return out;
  const res = await d.execute(sql`SELECT "key", "value" FROM "fp_counters" WHERE "key" IN (${sql.join(keys.map((k) => sql`${k}`), sql`, `)})`);
  for (const row of rowsOf(res)) if (row.key) out[row.key] = Number(row.value ?? 0);
  return out;
}

export async function incrementCounters(keys: string[]): Promise<Record<string, number>> {
  const out: Record<string, number> = {};
  const d = await db();
  if (!d) return out;
  for (const key of keys) {
    const res = await d.execute(sql`
      INSERT INTO "fp_counters" ("key", "value", "updated_at") VALUES (${key}, 1, now())
      ON CONFLICT ("key") DO UPDATE SET "value" = "fp_counters"."value" + 1, "updated_at" = now()
      RETURNING "value"
    `);
    out[key] = Number(rowsOf(res)[0]?.value ?? 0);
  }
  return out;
}

/**
 * Besucherzählung an/aus. Standard: AUS – jede Zählung ist ein Schreibzugriff auf die Datenbank
 * und hält die (nach Rechenzeit abgerechnete) Neon-Datenbank wach.
 * Einschalten mit der Umgebungsvariable NEXT_PUBLIC_VISITOR_COUNTER=on (danach neu deployen).
 */
export const visitorCountingEnabled = () => process.env.NEXT_PUBLIC_VISITOR_COUNTER === "on";

/** Datum in Wien als JJJJ-MM-TT (für den Tageszähler). */
export function viennaDay(d = new Date()) {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Vienna" }).format(d);
}

export const VISITS_TOTAL = "besuche";
export const visitsDayKey = (day = viennaDay()) => `besuche:${day}`;

/** Zähler höchstens einmal pro Stunde aus der Datenbank lesen (statt bei jedem Neuaufbau der Startseite). */
const hourly = <A extends unknown[], T>(name: string, fn: (...args: A) => Promise<T>) =>
  unstable_cache(fn, ["counters-v1", name], { tags: ["counters"], revalidate: 3600 });

const readVisitorStats = hourly("visitors", async (dayKey: string) => {
  const c = await readCounters([VISITS_TOTAL, dayKey]);
  return { total: c[VISITS_TOTAL] ?? 0, today: c[dayKey] ?? 0 };
});

/** Besucherzahlen für die Startseite – Fehler werden still als 0 behandelt. */
export async function getVisitorStats(): Promise<{ total: number; today: number }> {
  if (!visitorCountingEnabled()) return { total: 0, today: 0 };
  try {
    return await readVisitorStats(visitsDayKey());
  } catch {
    return { total: 0, today: 0 };
  }
}

export const pageViewKey = (path: string) => `seite:${path}`;

const readPopularPaths = hourly("popular", async (limit: number) => {
  const d = await db();
  if (!d) return [] as { path: string; views: number }[];
  const res = await d.execute(
    sql`SELECT "key", "value" FROM "fp_counters" WHERE "key" LIKE 'seite:%' ORDER BY "value" DESC LIMIT ${Math.max(1, Math.min(50, limit))}`,
  );
  return rowsOf(res)
    .filter((r) => typeof r.key === "string")
    .map((r) => ({ path: String(r.key).slice(6), views: Number(r.value ?? 0) }));
});

/** Meistgelesene Seiten (Pfad → Aufrufe), absteigend. */
export async function getPopularPaths(limit = 12): Promise<{ path: string; views: number }[]> {
  if (!visitorCountingEnabled()) return [];
  try {
    return await readPopularPaths(limit);
  } catch {
    return [];
  }
}

