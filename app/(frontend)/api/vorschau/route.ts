import config from "@payload-config";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "payload";

/**
 * Team-Vorschau: Angemeldete Teammitglieder (Admin, Redakteur, Autor) können die echte Seite
 * auch während der Wartung ansehen. Alle anderen werden zum Login geschickt.
 *
 *   /api/vorschau            → Vorschau starten
 *   /api/vorschau?ende=1     → Vorschau beenden
 *   /api/vorschau?zu=/pfad   → nach dem Start dorthin (nur interne Pfade)
 */
export const dynamic = "force-dynamic";

const TEAM = new Set(["admin", "redakteur", "autor"]);

function safePath(p: string | null) {
  // nur interne Pfade – verhindert Weiterleitungen auf fremde Seiten
  return p && p.startsWith("/") && !p.startsWith("//") && !p.includes("\\") ? p : "/startseite";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const draft = await draftMode();

  if (url.searchParams.get("ende")) {
    draft.disable();
    redirect("/startseite");
  }

  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: request.headers });
  const role = (user as { role?: string } | null)?.role;
  if (!user || !role || !TEAM.has(role)) {
    redirect("/admin/login?redirect=%2Fapi%2Fvorschau");
  }

  draft.enable();
  redirect(safePath(url.searchParams.get("zu")));
}
