import type { Payload } from "payload";

import { contentPacks } from "../content-packs";
import type { ContentPack, PackPage } from "../content-packs/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Doc = Record<string, any>;

/**
 * Übernimmt Inhaltspakete (content-packs/) ins CMS.
 *
 * Sicherheitsregeln – es wird NIE etwas überschrieben oder gelöscht:
 *  • Unterthemen werden nur angelegt, solange die Kategorie noch gar keine Unterthemen hat.
 *  • Seiten werden nur in Paket-Unterthemen angelegt, die noch keine einzige Seite haben
 *    (so wird ein abgebrochener erster Lauf vervollständigt).
 *  • Gelöschte oder geänderte Inhalte im Admin bleiben daher gelöscht bzw. geändert.
 *  • Gleichzeitige Starts sind harmlos: URLs sind eindeutig, doppelte Anlagen schlagen fehl.
 */
const context = { skipChecks: true, skipRevalidate: true };

async function find(payload: Payload, collection: "categories" | "groups" | "pages", where: Doc, limit = 1) {
  return payload.find({ collection, where, limit, depth: 0, overrideAccess: true, draft: true });
}

function pageData(p: PackPage, groupId: number | string) {
  return {
    title: p.title,
    label: p.label,
    slug: p.slug,
    group: groupId,
    pageType: p.pageType,
    _status: "published",
    publishedAt: new Date().toISOString(),
    markdown: p.markdown.trim(),
    faq: (p.faq ?? []).map((f) => ({ q: f.q, a: f.a })),
    comparison: p.comparison
      ? {
          title: p.comparison.title,
          columns: p.comparison.columns.map((name) => ({ name })),
          rows: p.comparison.rows.map((r) => ({ label: r.label, values: r.values.map((value) => ({ value })) })),
          note: p.comparison.note,
        }
      : undefined,
    donation: true,
    seo: {
      metaDescription: p.description,
      focusKeyword: p.focusKeyword,
      linkAnchors: (p.linkAnchors ?? []).map((anchor) => ({ anchor })),
      noindex: false,
    },
    sources: (p.sources ?? []).map((s) => ({ title: s.title, url: s.url })),
    factCheck: { required: true, status: "ausstehend" },
    reviewIntervalMonths: 12,
  };
}

async function applyPack(payload: Payload, pack: ContentPack): Promise<number> {
  let cat = (await find(payload, "categories", { slug: { equals: pack.categorySlug } })).docs[0] as Doc | undefined;
  if (!cat && pack.createCategory) {
    // Kategorie gibt es noch nicht → einmalig anlegen (danach im Admin frei änderbar)
    try {
      cat = (await payload.create({
        collection: "categories",
        overrideAccess: true,
        context,
        data: {
          title: pack.createCategory.title,
          slug: pack.categorySlug,
          description: pack.createCategory.description,
          icon: pack.icon ?? "paw",
          hue: pack.hue ?? 195,
        } as never,
      })) as Doc;
    } catch {
      cat = (await find(payload, "categories", { slug: { equals: pack.categorySlug } })).docs[0] as Doc | undefined;
    }
  }
  if (!cat) return 0;

  const existingGroups = (await find(payload, "groups", { category: { equals: cat.id } }, 200)).docs as Doc[];
  const packSlugs = new Set(pack.groups.map((g) => g.slug));
  const ownGroups = existingGroups.filter((g) => packSlugs.has(g.slug));
  // Kategorie hat bereits eigene (fremde) Unterthemen → Paket nicht anwenden
  if (existingGroups.length > 0 && ownGroups.length === 0) return 0;
  const createGroups = existingGroups.length === 0;

  let changes = 0;

  // Symbol/Farbe nur setzen, solange noch die Standardwerte eingestellt sind
  if (createGroups && pack.icon && (cat.icon ?? "paw") === "paw") {
    try {
      await payload.update({
        collection: "categories",
        id: cat.id,
        data: { icon: pack.icon, ...(pack.hue != null && (cat.hue ?? 195) === 195 ? { hue: pack.hue } : {}) } as never,
        overrideAccess: true,
        context,
      });
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Symbol für ${pack.categorySlug} nicht gesetzt`);
    }
  }

  for (const [gi, g] of pack.groups.entries()) {
    const groupPath = `/${pack.categorySlug}/${g.slug}`;
    let group = ownGroups.find((x) => x.slug === g.slug);

    if (!group) {
      if (!createGroups) continue; // vom Team gelöschtes Unterthema nicht wiederherstellen
      try {
        group = (await payload.create({
          collection: "groups",
          data: { title: g.title, slug: g.slug, category: cat.id, description: g.description, order: (gi + 1) * 10 } as never,
          overrideAccess: true,
          context,
        })) as Doc;
        changes++;
      } catch {
        // parallel angelegt? → nachschlagen
        group = (await find(payload, "groups", { path: { equals: groupPath } })).docs[0] as Doc | undefined;
        if (!group) {
          payload.logger.warn(`[inhalte] Unterthema ${groupPath} konnte nicht angelegt werden`);
          continue;
        }
      }
    }

    const pagesInGroup = (await find(payload, "pages", { group: { equals: group.id } })).totalDocs ?? 0;
    // Neu angelegtes Unterthema hat 0 Seiten; bestehendes nur befüllen, wenn es noch leer ist
    if (pagesInGroup > 0 && !createGroups) continue;

    for (const p of g.pages) {
      const pagePath = `${groupPath}/${p.slug}`;
      try {
        const exists = (await find(payload, "pages", { path: { equals: pagePath } })).docs.length > 0;
        if (exists) continue;
        await payload.create({ collection: "pages", data: pageData(p, group.id) as never, overrideAccess: true, context });
        changes++;
      } catch (err) {
        payload.logger.warn({ err }, `[inhalte] Seite ${pagePath} konnte nicht angelegt werden`);
      }
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Geplante, noch leere Seiten befüllen                                */
/* ------------------------------------------------------------------ */

const isEmptyRich = (c: unknown) => {
  const children = (c as { root?: { children?: Doc[] } } | null)?.root?.children ?? [];
  return !children.some((n) => (n.children?.length ?? 0) > 0 || n.type !== "paragraph");
};

/** Zeitbudget pro Start, damit ein Kaltstart nie lange blockiert – der Rest folgt beim nächsten Start. */
const FILL_BUDGET_MS = 40_000;

async function fillEmptyPages(payload: Payload): Promise<number> {
  const { fillPages } = await import("../content-packs/fill");
  if (!fillPages.length) return 0;
  const res = await payload.find({
    collection: "pages",
    limit: 2000,
    depth: 0,
    draft: true,
    overrideAccess: true,
    pagination: false,
    select: { path: true, markdown: true, content: true, pageType: true, _status: true, seo: true } as never,
  });
  const byPath = new Map((res.docs as Doc[]).map((d) => [String(d.path ?? ""), d]));
  const started = Date.now();
  let changes = 0;

  for (const f of fillPages) {
    if (Date.now() - started > FILL_BUDGET_MS) break;
    const doc = byPath.get(`/${f.path}`);
    if (!doc) continue; // Seite gibt es (nicht mehr) – nichts anlegen
    if (doc.pageType === "money") continue; // Money Pages schreibt das Team selbst (mit Partnerlinks)
    if (String(doc.markdown ?? "").trim() || !isEmptyRich(doc.content)) continue; // schon Inhalt → nie überschreiben
    const seo = (doc.seo ?? {}) as Doc;
    try {
      await payload.update({
        collection: "pages",
        id: doc.id,
        overrideAccess: true,
        context,
        data: {
          _status: "published",
          publishedAt: new Date().toISOString(),
          markdown: f.markdown.trim(),
          faq: (f.faq ?? []).map(([q, a]) => ({ q, a })),
          ...(f.comparison
            ? {
                comparison: {
                  title: f.comparison.title,
                  columns: f.comparison.columns.map((name) => ({ name })),
                  rows: f.comparison.rows.map((r) => ({ label: r.label, values: r.values.map((value) => ({ value })) })),
                  note: f.comparison.note,
                },
              }
            : {}),
          seo: {
            ...seo,
            metaDescription: seo.metaDescription || f.description,
            focusKeyword: seo.focusKeyword || f.focusKeyword,
            linkAnchors: seo.linkAnchors?.length ? seo.linkAnchors : (f.linkAnchors ?? []).map((anchor) => ({ anchor })),
          },
          sources: (f.sources ?? []).map((s) => ({ title: s.title, url: s.url })),
          factCheck: { required: true, status: "ausstehend" },
        } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Seite /${f.path} konnte nicht befüllt werden`);
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Money Pages: vorbereitete Partnerlink-Plätze                         */
/* ------------------------------------------------------------------ */

const SLOTS_PER_PAGE = 3;

/**
 * Legt für jede Money Page ohne eigene Produkte drei Platzhalter-Partnerlinks an und verknüpft sie
 * (Seite → Tab „Monetarisierung“). Platzhalter erscheinen nie auf der Website. Zum Aktivieren:
 * Produkt öffnen → Name, Partnerlink und Text eintragen → Haken „Platzhalter-Link“ entfernen.
 */
async function ensureAffiliateSlots(payload: Payload): Promise<number> {
  const pages = (
    await payload.find({
      collection: "pages",
      where: { pageType: { equals: "money" } },
      limit: 500,
      depth: 0,
      draft: true,
      overrideAccess: true,
      pagination: false,
      select: { title: true, path: true, products: true, group: true, _status: true } as never,
    })
  ).docs as Doc[];
  const existing = (
    await payload.find({
      collection: "affiliates",
      where: { key: { like: "platz-" } },
      limit: 3000,
      depth: 0,
      overrideAccess: true,
      pagination: false,
      select: { key: true } as never,
    })
  ).docs as Doc[];
  const keys = new Set(existing.map((a) => String(a.key)));
  let changes = 0;

  for (const page of pages) {
    if ((page.products ?? []).length > 0) continue;
    if (keys.has(`platz-${page.id}-1`)) continue; // schon einmal angelegt (ggf. vom Team wieder entfernt)
    const ids: (number | string)[] = [];
    try {
      for (let i = 1; i <= SLOTS_PER_PAGE; i++) {
        const a = (await payload.create({
          collection: "affiliates",
          overrideAccess: true,
          context,
          data: {
            name: `Partnerlink ${i} · ${page.title}`,
            key: `platz-${page.id}-${i}`,
            url: "https://partnerlink-eintragen.invalid",
            label: page.title,
            pitch: "Hier kurz und ehrlich beschreiben, warum ihr das Produkt empfehlt. Danach den Partnerlink eintragen und den Haken „Platzhalter-Link“ entfernen.",
            topics: page.group ? [{ relationTo: "groups", value: typeof page.group === "object" ? page.group.id : page.group }] : [],
            active: true,
            placeholder: true,
          } as never,
        })) as Doc;
        ids.push(a.id);
      }
      await payload.update({
        collection: "pages",
        id: page.id,
        overrideAccess: true,
        context,
        draft: page._status !== "published",
        data: { products: ids } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Partnerlink-Plätze für ${page.path} nicht angelegt`);
    }
  }
  return changes;
}

/* ------------------------------------------------------------------ */
/* Umbenennung: Panda GreenCore → Panda GreenTech (einmalig)            */
/* ------------------------------------------------------------------ */

/** Spendenlink für Panda GreenTech – das GoFundMe-Profil mit allen Aktionen. */
export const GREENTECH_DONATE_URL = "https://www.gofundme.com/u/296ae88c-0583-4f07-bf00-8577db624b44";
const OLD_DONATE_URL = "https://www.gofundme.com/f/panda-greentech-nachhaltige-energie-fur-die-zukunft";
const swap = (v: unknown) => (typeof v === "string" ? v.replace(/GreenCore/g, "GreenTech").replace(/\/panda-branding\/greencore/g, "/panda-branding/greentech") : v);

async function renameGreenTech(payload: Payload): Promise<number> {
  let changes = 0;
  // Unterthema /panda-branding/greencore → /panda-branding/greentech (Seiten-URLs ziehen automatisch mit)
  const group = (await find(payload, "groups", { path: { equals: "/panda-branding/greencore" } })).docs[0] as Doc | undefined;
  if (group) {
    await payload.update({ collection: "groups", id: group.id, overrideAccess: true, context, data: { title: swap(group.title), slug: "greentech", description: swap(group.description) } as never });
    changes++;
  }
  // Seitentitel/-adressen mit „GreenCore“
  const pages = (await payload.find({ collection: "pages", where: { title: { like: "GreenCore" } }, draft: true, limit: 50, depth: 0, overrideAccess: true })).docs as Doc[];
  for (const p of pages) {
    await payload.update({
      collection: "pages",
      id: p.id,
      overrideAccess: true,
      context,
      draft: p._status !== "published",
      data: { title: swap(p.title), label: swap(p.label), slug: String(p.slug).replace(/greencore/g, "greentech") } as never,
    });
    changes++;
  }
  // Kategorie-Beschreibung
  const cat = (await find(payload, "categories", { slug: { equals: "panda-branding" } })).docs[0] as Doc | undefined;
  if (cat && /GreenCore/.test(String(cat.description ?? ""))) {
    await payload.update({ collection: "categories", id: cat.id, overrideAccess: true, context, data: { description: swap(cat.description) } as never });
    changes++;
  }
  // Website-Einstellungen: Texte umbenennen, Spendenlink und Zweck setzen, falls noch leer
  const settings = (await payload.findGlobal({ slug: "site-settings", depth: 0, overrideAccess: true })) as Doc;
  const g = (settings.greencore ?? {}) as Doc;
  const next: Doc = {};
  for (const k of ["name", "headline", "text", "notice", "aboutHref", "purpose"]) if (typeof g[k] === "string" && swap(g[k]) !== g[k]) next[k] = swap(g[k]);
  if (!g.url || g.url === OLD_DONATE_URL) next.url = GREENTECH_DONATE_URL;
  if (!g.purpose)
    next.purpose =
      "Material, Bauteile, Prototypen, Tests und Werkzeug für die Entwicklung umweltfreundlicher Energie-Ideen wie Panda HomeCore.";
  if (Object.keys(next).length) {
    await payload.updateGlobal({ slug: "site-settings", overrideAccess: true, context, data: { greencore: { ...g, ...next } } as never });
    changes++;
  }
  return changes;
}

/** Alten Link zur einzelnen Spendenaktion in Seiten durch das GoFundMe-Profil ersetzen (einmalig, idempotent). */
async function updateDonateLinks(payload: Payload): Promise<number> {
  const res = await payload.find({
    collection: "pages",
    where: { or: [{ markdown: { contains: OLD_DONATE_URL } }, { "sources.url": { equals: OLD_DONATE_URL } }] },
    draft: true,
    limit: 100,
    depth: 0,
    overrideAccess: true,
  });
  let changes = 0;
  for (const p of res.docs as Doc[]) {
    const md = String(p.markdown ?? "")
      .replace(/\[Zur Spendenaktion[^\]]*\]\(https:\/\/www\.gofundme\.com\/f\/panda-greentech[^)]*\)/g, `[Zur Spendenseite von Panda GreenTech auf GoFundMe](${GREENTECH_DONATE_URL})`)
      .split(OLD_DONATE_URL)
      .join(GREENTECH_DONATE_URL);
    const sources = ((p.sources ?? []) as Doc[]).map((s) =>
      s.url === OLD_DONATE_URL ? { title: "GoFundMe – Panda GreenTech", url: GREENTECH_DONATE_URL } : { title: s.title, url: s.url },
    );
    // doppelte Quellen (Profil war teils schon eingetragen) zusammenführen
    const seen = new Set<string>();
    const unique = sources.filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true)));
    try {
      await payload.update({
        collection: "pages",
        id: p.id,
        overrideAccess: true,
        context,
        draft: p._status !== "published",
        data: { markdown: md, sources: unique } as never,
      });
      changes++;
    } catch (err) {
      payload.logger.warn({ err }, `[inhalte] Spendenlink in ${p.path} nicht ersetzt`);
    }
  }
  return changes;
}

export async function applyContentPacks(payload: Payload) {
  if (process.env.CONTENT_PACKS === "off") return;
  let total = 0;
  const run = async (name: string, step: (p: Payload) => Promise<number>) => {
    try {
      const n = await step(payload);
      if (n) payload.logger.info(`[inhalte] ${name}: ${n} Einträge`);
      total += n;
    } catch (err) {
      payload.logger.error({ err }, `[inhalte] ${name} fehlgeschlagen`);
    }
  };
  await run("GreenTech-Umbenennung", renameGreenTech);
  await run("GreenTech-Spendenlink", updateDonateLinks);
  for (const pack of contentPacks) {
    try {
      const n = await applyPack(payload, pack);
      if (n) payload.logger.info(`[inhalte] ${pack.id}: ${n} Einträge angelegt`);
      total += n;
    } catch (err) {
      payload.logger.error({ err }, `[inhalte] Paket ${pack.id} fehlgeschlagen`);
    }
  }
  await run("Seiten befüllen", fillEmptyPages);
  await run("Partnerlink-Plätze", ensureAffiliateSlots);
  if (total > 0) {
    try {
      const { revalidatePath } = await import("next/cache");
      revalidatePath("/", "layout");
    } catch {
      /* außerhalb einer Anfrage – der nächste Cache-Ablauf übernimmt */
    }
  }
}
