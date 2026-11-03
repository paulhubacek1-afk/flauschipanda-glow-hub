import config from "@payload-config";
import { getPayload } from "payload";

export const dynamic = "force-dynamic";

const MAX_BAMBOO = 99999;

function sameSite(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const expectedHost = forwardedHost || new URL(request.url).host;
    return new URL(origin).host === expectedHost;
  } catch {
    return false;
  }
}

function accountSummary(user: Record<string, unknown>) {
  const stored = user.bambooState && typeof user.bambooState === "object"
    ? (user.bambooState as Record<string, unknown>)
    : {};
  const storedCount = Number(user.bamboo);
  const sourceCount = Number.isFinite(storedCount) ? storedCount : Number(stored.count) || 0;
  const count = Math.max(0, Math.min(MAX_BAMBOO, Math.floor(sourceCount)));
  return {
    count,
    off: Array.isArray(stored.off) ? stored.off.filter((item): item is string => typeof item === "string").slice(0, 30) : [],
    views: Math.max(0, Math.floor(Number(stored.views) || 0)),
    thanked: typeof stored.thanked === "string" ? stored.thanked.slice(0, 10) : undefined,
    skin: typeof stored.skin === "string" ? stored.skin.slice(0, 48) : undefined,
    visits: stored.visits && typeof stored.visits === "object" ? stored.visits : undefined,
    custom: stored.custom && typeof stored.custom === "object" ? stored.custom : undefined,
    daily: typeof stored.daily === "string" ? stored.daily.slice(0, 10) : undefined,
    gachaNextAt: Number.isFinite(Number(stored.gachaNextAt)) ? Number(stored.gachaNextAt) : undefined,
    gachaLastOfferAt: Number.isFinite(Number(stored.gachaLastOfferAt)) ? Number(stored.gachaLastOfferAt) : undefined,
  };
}

async function authenticatedUser(request: Request) {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: request.headers });
  if (!user) return { payload, user: null, doc: null };
  const doc = await payload.findByID({
    collection: "users",
    id: user.id,
    depth: 0,
    overrideAccess: true,
  });
  return { payload, user, doc: doc as unknown as Record<string, unknown> };
}

export async function GET(request: Request) {
  try {
    const { user, doc } = await authenticatedUser(request);
    if (!user || !doc) {
      return Response.json({ authenticated: false }, { headers: { "Cache-Control": "no-store" } });
    }
    return Response.json(
      {
        authenticated: true,
        user: {
          id: String(user.id),
          username: String((user as { username?: string }).username ?? ""),
          name: String((user as { name?: string }).name ?? ""),
          role: String((user as { role?: string }).role ?? "nutzer"),
        },
        bamboo: accountSummary(doc),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[konto]", error);
    return Response.json(
      { authenticated: false, message: "Das Konto konnte nicht geladen werden." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}

export async function PATCH(request: Request) {
  if (!sameSite(request)) return Response.json({ message: "Ungültige Anfrage." }, { status: 403 });

  try {
    const { payload, user, doc } = await authenticatedUser(request);
    if (!user || !doc) {
      return Response.json({ message: "Bitte melde dich zuerst an." }, { status: 401 });
    }

    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || !Number.isFinite(Number(body.count))) {
      return Response.json({ message: "Ungültiger Bambus-Spielstand." }, { status: 400 });
    }

    const previous = Math.max(0, Math.min(MAX_BAMBOO, Math.floor(Number(doc.bamboo) || 0)));
    const requested = Math.max(0, Math.min(MAX_BAMBOO, Math.floor(Number(body.count))));
    const count = Math.max(previous, requested);
    const safeState = {
      count,
      off: Array.isArray(body.off) ? body.off.filter((item): item is string => typeof item === "string").slice(0, 30) : [],
      views: Math.max(0, Math.floor(Number(body.views) || 0)),
      thanked: typeof body.thanked === "string" ? body.thanked.slice(0, 10) : undefined,
      skin: typeof body.skin === "string" ? body.skin.slice(0, 48) : undefined,
      visits: body.visits && typeof body.visits === "object" ? body.visits : undefined,
      custom: body.custom && typeof body.custom === "object" ? body.custom : undefined,
      daily: typeof body.daily === "string" ? body.daily.slice(0, 10) : undefined,
      gachaNextAt: Number.isFinite(Number(body.gachaNextAt)) ? Number(body.gachaNextAt) : undefined,
      gachaLastOfferAt: Number.isFinite(Number(body.gachaLastOfferAt)) ? Number(body.gachaLastOfferAt) : undefined,
    };

    await payload.update({
      collection: "users",
      id: user.id,
      overrideAccess: true,
      data: { bamboo: count, bambooState: safeState },
    });

    return Response.json(
      { ok: true, bamboo: safeState },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[konto/update]", error);
    return Response.json({ message: "Der Spielstand konnte nicht gespeichert werden." }, { status: 500 });
  }
}
