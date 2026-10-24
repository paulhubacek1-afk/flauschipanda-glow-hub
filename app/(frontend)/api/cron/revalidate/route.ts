import { timingSafeEqual } from "node:crypto";

import { revalidatePath } from "next/cache";

/**
 * Cronjob-Endpunkt für geplante Veröffentlichungen.
 * Aufruf: GET /api/cron/revalidate  mit Header  Authorization: Bearer <CRON_SECRET>
 *
 * Speichern im CMS aktualisiert die Website sofort. Seiten mit einem "Veröffentlichen ab"-Datum
 * in der Zukunft erscheinen spätestens nach einer Stunde (ISR) – dieser Aufruf beschleunigt das.
 * Idempotent: mehrfaches Ausführen ist gefahrlos.
 */
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const given = Buffer.from(request.headers.get("authorization") ?? "");
  const expected = Buffer.from(`Bearer ${secret ?? ""}`);
  // zeitkonstanter Vergleich – verrät nicht, wie viele Zeichen stimmen
  if (!secret || given.length !== expected.length || !timingSafeEqual(given, expected)) {
    return Response.json({ ok: false, error: "Nicht autorisiert" }, { status: 401 });
  }
  revalidatePath("/", "layout");
  const now = new Date().toISOString();
  console.info(`[cron] revalidate ${now}`);
  return Response.json({ ok: true, revalidatedAt: now });
}
