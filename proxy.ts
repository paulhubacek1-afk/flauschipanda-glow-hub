import { type NextRequest, NextResponse } from "next/server";

/**
 * Schutz vor automatisierten Login-Angriffen (Passwort-Raten).
 *
 * Zusätzlich zur Kontosperre von Payload (5 Fehlversuche → 15 Min. gesperrt) wird hier pro
 * IP-Adresse begrenzt, wie oft Login-, Passwort- und Registrierungs-Endpunkte aufgerufen
 * werden dürfen. Die Zählung liegt im Arbeitsspeicher der jeweiligen Server-Instanz –
 * das bremst Angreifer zuverlässig, ersetzt aber keine Firewall (siehe README).
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 Minuten
const MAX_ATTEMPTS = 10; // pro IP und Zeitfenster
const hits = new Map<string, { count: number; reset: number }>();

function clientIp(req: NextRequest) {
  // `x-real-ip` wird von der Plattform (Vercel) auf die echte Client-IP gesetzt und kann vom
  // Client nicht vorangestellt werden. `x-forwarded-for` lässt sich dagegen mit beliebigen
  // Werten „auffüllen“ (der linke Eintrag wäre dann angreiferkontrolliert) und würde das
  // Zählen pro IP aushebeln – deshalb zuerst `x-real-ip`.
  const realIp = req.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || "unbekannt";
}

export function proxy(req: NextRequest) {
  if (req.method !== "POST") return NextResponse.next();

  const now = Date.now();
  // Speicher klein halten
  if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);

  const key = `${clientIp(req)}:${req.nextUrl.pathname}`;
  const entry = hits.get(key);
  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return NextResponse.next();
  }
  entry.count += 1;
  if (entry.count > MAX_ATTEMPTS) {
    const retry = Math.ceil((entry.reset - now) / 1000);
    return NextResponse.json(
      { errors: [{ message: "Zu viele Versuche. Bitte warte ein paar Minuten und versuche es dann erneut." }] },
      { status: 429, headers: { "Retry-After": String(retry) } },
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/users/login",
    "/api/users/forgot-password",
    "/api/users/reset-password",
    "/api/users/first-register",
    "/api/users/unlock",
    "/api/konto/registrieren",
  ],
};
