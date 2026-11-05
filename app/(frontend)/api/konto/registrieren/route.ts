import config from "@payload-config";
import { getPayload } from "payload";

import { isSameOrigin } from "@/lib/security";

export const dynamic = "force-dynamic";

function passwordIsStrong(password: string) {
  const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((pattern) => pattern.test(password)).length;
  return password.length >= 12 && classes >= 3;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ message: "Ungültige Anfrage." }, { status: 403 });

  const body = (await request.json().catch(() => null)) as
    | { username?: unknown; name?: unknown; email?: unknown; password?: unknown }
    | null;
  const username = String(body?.username ?? "").trim().toLowerCase();
  const name = String(body?.name ?? "").trim().slice(0, 60);
  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");

  if (!/^[a-z0-9_.-]{3,24}$/.test(username)) {
    return Response.json(
      { message: "Der Benutzername muss 3–24 Zeichen lang sein und darf nur Buchstaben, Zahlen, Punkt, _ und - enthalten." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json({ message: "Bitte gib eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }
  if (!passwordIsStrong(password)) {
    return Response.json(
      { message: "Das Passwort braucht mindestens 12 Zeichen und drei von vier Arten: Kleinbuchstaben, Großbuchstaben, Zahlen und Sonderzeichen." },
      { status: 400 },
    );
  }

  try {
    const payload = await getPayload({ config });
    // Öffentliche Registrierungen erst erlauben, wenn die Admin-Ersteinrichtung erledigt ist.
    // Sonst könnte eine erste öffentliche Anmeldung den automatischen Admin-Bootstrap blockieren.
    const administrators = await payload.count({
      collection: "users",
      where: { role: { equals: "admin" } },
      overrideAccess: true,
    });
    if (administrators.totalDocs === 0) {
      return Response.json(
        { message: "Die Website wird gerade eingerichtet. Die Registrierung wird nach der Admin-Ersteinrichtung freigeschaltet." },
        { status: 503 },
      );
    }

    const existing = await payload.find({
      collection: "users",
      where: { or: [{ username: { equals: username } }, { email: { equals: email } }] },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    });
    if (existing.totalDocs > 0) {
      return Response.json({ message: "Benutzername oder E-Mail-Adresse ist bereits vergeben." }, { status: 409 });
    }

    const initialState = { count: 25, off: [], views: 0 };
    await payload.create({
      collection: "users",
      overrideAccess: true,
      context: { publicRegistration: true },
      data: {
        username,
        name: name || username,
        email,
        password,
        role: "nutzer",
        bamboo: 25,
        bambooState: initialState,
      },
    });

    return Response.json(
      { ok: true, bamboo: 25, message: "Dein Konto ist erstellt. 25 Bambus wurden gutgeschrieben!" },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[konto/registrieren]", error);
    return Response.json(
      { message: "Das Konto konnte gerade nicht erstellt werden. Bitte prüfe deine Angaben und versuche es erneut." },
      { status: 500 },
    );
  }
}
