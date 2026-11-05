/**
 * Gemeinsamer CSRF-/Same-Origin-Schutz für die eigenen API-Routen (/api/konto …).
 *
 * Wichtig: Die erlaubte Herkunft wird NICHT aus dem Header `x-forwarded-host` abgeleitet.
 * Dieser Header kann von einem Client bzw. einem vorgelagerten Proxy gesetzt werden und darf
 * deshalb keine Sicherheitsentscheidung tragen. Stattdessen wird der `Origin`-Header gegen
 * eine feste Liste vertrauenswürdiger Domains geprüft (identisch zur Payload-CSRF-Konfiguration
 * in payload.config.ts) und – als Absicherung für die eigene Domain – zusätzlich gegen den vom
 * Browser gesetzten `Host`-Header verglichen.
 */

/** Feste Liste vertrauenswürdiger Herkünfte (nur Host-Teil), aus den Umgebungsvariablen. */
const trustedHosts = new Set(
  [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
    process.env.VERCEL_BRANCH_URL && `https://${process.env.VERCEL_BRANCH_URL}`,
    process.env.NODE_ENV !== "production" && "http://localhost:3000",
  ]
    .filter((o): o is string => Boolean(o))
    .map((o) => {
      try {
        return new URL(o).host;
      } catch {
        return "";
      }
    })
    .filter(Boolean),
);

/**
 * True, wenn die Anfrage von der eigenen Website kommt (gleiche Herkunft).
 * Fehlt der `Origin`-Header, gilt die Anfrage als nicht vertrauenswürdig.
 */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  // 1) Feste Allowlist (eigene Domain + bekannte Vercel-Adressen dieses Projekts).
  if (trustedHosts.has(originHost)) return true;

  // 2) Absicherung: Vergleich mit dem vom Browser gesetzten Host der Zieladresse.
  //    `Host` wird vom Browser auf das tatsächliche Ziel gesetzt und kann von fremdem
  //    JavaScript nicht gefälscht werden – anders als `x-forwarded-host`.
  const host = request.headers.get("host");
  return Boolean(host) && originHost === host;
}
