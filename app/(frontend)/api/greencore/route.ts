import config from "@payload-config";
import { sql } from "@payloadcms/db-postgres";
import { getPayload } from "payload";

/**
 * Wie oft die GreenCore-Pflanze schon „gegossen“ wurde (= Besuche auf GreenCore-Seiten).
 * Je mehr Leute lesen, desto größer wird die Pflanze, die der Panda gießt.
 *
 *   GET  → { count }   (kurz zwischengespeichert)
 *   POST → zählt einen Besuch (höchstens einmal pro IP alle 30 Minuten, nur von der eigenen Website)
 *
 * Gespeichert wird nur die Gesamtzahl – keine IP-Adressen, keine personenbezogenen Daten.
 */
export const dynamic = "force-dynamic";

const KEY = "greencore_waterings";
const WINDOW_MS = 30 * 60_000;
const recent = new Map<string, number>();

type Exec = { execute: (q: unknown) => Promise<{ rows?: { value?: string | number }[] } | unknown> };

async function db(): Promise<Exec | null> {
  const payload = await getPayload({ config });
  return ((payload.db as unknown as { drizzle?: Exec }).drizzle ?? null) as Exec | null;
}

function rowsOf(res: unknown): { value?: string | number }[] {
  const r = res as { rows?: { value?: string | number }[] } | { value?: string | number }[];
  return Array.isArray(r) ? r : (r?.rows ?? []);
}

async function read(): Promise<number> {
  const d = await db();
  if (!d) return 0;
  const res = await d.execute(sql`SELECT "value" FROM "fp_counters" WHERE "key" = ${KEY}`);
  return Number(rowsOf(res)[0]?.value ?? 0);
}

export async function GET() {
  try {
    return Response.json({ count: await read() }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } });
  } catch {
    return Response.json({ count: 0 }, { headers: { "Cache-Control": "no-store" } });
  }
}

function sameSite(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameSite(request)) return Response.json({ ok: false }, { status: 403 });
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unbekannt";
  const now = Date.now();
  if (recent.size > 5000) for (const [k, t] of recent) if (now - t > WINDOW_MS) recent.delete(k);
  const last = recent.get(ip);
  try {
    if (last && now - last < WINDOW_MS) return Response.json({ count: await read(), counted: false });
    recent.set(ip, now);
    const d = await db();
    if (!d) return Response.json({ count: 0, counted: false });
    const res = await d.execute(sql`
      INSERT INTO "fp_counters" ("key", "value", "updated_at") VALUES (${KEY}, 1, now())
      ON CONFLICT ("key") DO UPDATE SET "value" = "fp_counters"."value" + 1, "updated_at" = now()
      RETURNING "value"
    `);
    return Response.json({ count: Number(rowsOf(res)[0]?.value ?? 0), counted: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ count: 0, counted: false }, { status: 200, headers: { "Cache-Control": "no-store" } });
  }
}
