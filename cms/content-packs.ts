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
  const cat = (await find(payload, "categories", { slug: { equals: pack.categorySlug } })).docs[0] as Doc | undefined;
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

export async function applyContentPacks(payload: Payload) {
  if (process.env.CONTENT_PACKS === "off") return;
  let total = 0;
  for (const pack of contentPacks) {
    try {
      const n = await applyPack(payload, pack);
      if (n) payload.logger.info(`[inhalte] ${pack.id}: ${n} Einträge angelegt`);
      total += n;
    } catch (err) {
      payload.logger.error({ err }, `[inhalte] Paket ${pack.id} fehlgeschlagen`);
    }
  }
  if (total > 0) {
    try {
      const { revalidatePath } = await import("next/cache");
      revalidatePath("/", "layout");
    } catch {
      /* außerhalb einer Anfrage – der nächste Cache-Ablauf übernimmt */
    }
  }
}
