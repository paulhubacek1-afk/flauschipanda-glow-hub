/**
 * Erstimport ins CMS:  npm run seed
 *
 * Legt aus lib/hierarchy.ts alle Kategorien, Unterthemen und Seiten an, übernimmt die
 * vorhandenen Inhalte aus content/**.md, die Affiliate-Produkte aus lib/affiliate.ts und
 * markiert Money/Traffic Pages laut lib/page-types.ts.
 *
 * Idempotent: Was es schon gibt (gleiche URL bzw. Kennung), wird übersprungen –
 * Änderungen aus dem Admin werden nie überschrieben. Mehrfaches Ausführen ist gefahrlos.
 */
import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { getPayload } from "payload";

import config from "../payload.config";
import { affiliateProducts } from "../lib/affiliate";
import { allPageNodes, hierarchy } from "../lib/hierarchy";
import { pageTypeFor } from "../lib/page-types";
import { donationConfig } from "../lib/site";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Doc = Record<string, any>;

const payload = await getPayload({ config });
const context = { skipChecks: true, skipRevalidate: true };
const stats = { categories: 0, groups: 0, affiliates: 0, pagesWithContent: 0, plannedPages: 0, skipped: 0 };

async function findOne(collection: "categories" | "groups" | "pages" | "affiliates", where: Doc): Promise<Doc | undefined> {
  const res = await payload.find({ collection, where, limit: 1, depth: 0, overrideAccess: true, draft: true });
  return res.docs[0] as Doc | undefined;
}

/* ---------------- Kategorien ---------------- */
const categoryIds = new Map<string, string | number>();
for (const [i, c] of hierarchy.entries()) {
  let doc = await findOne("categories", { slug: { equals: c.slug } });
  if (!doc) {
    doc = await payload.create({
      collection: "categories",
      data: { title: c.title, slug: c.slug, description: c.description, icon: c.icon, hue: c.hue, order: (i + 1) * 10 },
      context,
    });
    stats.categories++;
  }
  categoryIds.set(c.slug, doc.id);
}

/* ---------------- Unterthemen ---------------- */
const groupIds = new Map<string, string | number>();
for (const c of hierarchy) {
  for (const [j, g] of c.groups.entries()) {
    const groupPath = `/${c.slug}/${g.slug}`;
    let doc = await findOne("groups", { path: { equals: groupPath } });
    if (!doc) {
      doc = await payload.create({
        collection: "groups",
        data: { title: g.title, slug: g.slug, category: categoryIds.get(c.slug), description: g.description, order: (j + 1) * 10 },
        context,
      });
      stats.groups++;
    }
    groupIds.set(`${c.slug}/${g.slug}`, doc.id);
  }
}

/* ---------------- Affiliate-Produkte ---------------- */
const affiliateIds = new Map<string, string | number>();
for (const p of affiliateProducts) {
  let doc = await findOne("affiliates", { key: { equals: p.id } });
  if (!doc) {
    const topics = p.topics
      .map((t) =>
        t.includes("/")
          ? groupIds.has(t)
            ? { relationTo: "groups" as const, value: groupIds.get(t)! }
            : null
          : categoryIds.has(t)
            ? { relationTo: "categories" as const, value: categoryIds.get(t)! }
            : null,
      )
      .filter(Boolean);
    doc = await payload.create({
      collection: "affiliates",
      data: {
        name: p.name,
        key: p.id,
        url: p.url,
        network: p.network,
        label: p.category,
        pitch: p.pitch,
        topics,
        active: true,
        placeholder: Boolean(p.placeholder),
      } as Doc,
      context,
    });
    stats.affiliates++;
  }
  affiliateIds.set(p.id, doc.id);
}

/* ---------------- Seiten ---------------- */
const contentDir = path.join(process.cwd(), "content");
const relatedQueue: { id: string | number; related: string[] }[] = [];
const pageIds = new Map<string, string | number>();

for (const n of allPageNodes()) {
  const pagePath = `/${n.id}`;
  const existing = await findOne("pages", { path: { equals: pagePath } });
  if (existing) {
    pageIds.set(n.id, existing.id);
    stats.skipped++;
    continue;
  }

  const base = {
    title: n.page.title,
    label: n.page.label,
    slug: n.page.slug,
    group: groupIds.get(`${n.category.slug}/${n.group.slug}`),
    pageType: pageTypeFor(n.id),
  };

  const file = path.join(contentDir, n.category.slug, n.group.slug, `${n.page.slug}.md`);
  if (!fs.existsSync(file)) {
    // Geplante Seite: Entwurf mit Titel – im Admin ausfüllen und veröffentlichen
    const doc = await payload.create({ collection: "pages", data: { ...base, _status: "draft" } as Doc, draft: true, context });
    pageIds.set(n.id, doc.id);
    stats.plannedPages++;
    continue;
  }

  const { data: fm, content } = matter(fs.readFileSync(file, "utf8")) as unknown as { data: Doc; content: string };
  const published = fm.status === "published";
  const comparison = fm.comparison
    ? {
        title: fm.comparison.title,
        columns: (fm.comparison.columns as string[]).map((name) => ({ name })),
        rows: (fm.comparison.rows as Doc[]).map((r) => ({ label: r.label, values: (r.values as string[]).map((value) => ({ value })) })),
        note: fm.comparison.note,
      }
    : undefined;

  const doc = await payload.create({
    collection: "pages",
    draft: !published,
    context,
    data: {
      ...base,
      title: fm.title ?? n.page.title,
      _status: published ? "published" : "draft",
      publishedAt: new Date(fm.publishedAt ?? Date.now()).toISOString(),
      author: fm.author,
      markdown: content.trim(),
      widgets: fm.widgets ?? [],
      faq: ((fm.faq ?? []) as Doc[]).map((f) => ({ q: f.q, a: f.a })),
      comparison,
      products: ((fm.products ?? []) as string[]).map((k) => affiliateIds.get(k)).filter(Boolean),
      donation: fm.donation !== false,
      seo: {
        seoTitle: fm.seoTitle,
        metaDescription: fm.description,
        focusKeyword: fm.focusKeyword,
        linkAnchors: ((fm.linkAnchors ?? []) as string[]).map((anchor) => ({ anchor })),
        noindex: Boolean(fm.noindex),
      },
      sources: ((fm.sources ?? []) as Doc[]).map((s) => ({ title: s.title, url: s.url })),
      factCheck: {
        required: fm.factCheck?.required !== false,
        status: fm.factCheck?.status ?? "ausstehend",
        reviewedBy: fm.factCheck?.reviewedBy,
        reviewedAt: fm.factCheck?.reviewedAt ? new Date(fm.factCheck.reviewedAt).toISOString() : undefined,
        notes: fm.factCheck?.notes,
      },
      reviewIntervalMonths: fm.reviewIntervalMonths ?? 12,
    } as Doc,
  });
  pageIds.set(n.id, doc.id);
  if (fm.related?.length) relatedQueue.push({ id: doc.id, related: fm.related });
  stats.pagesWithContent++;
}

/* ---------------- Verwandte Artikel verknüpfen ---------------- */
for (const item of relatedQueue) {
  const ids = item.related.map((r) => pageIds.get(r)).filter(Boolean);
  if (ids.length) await payload.update({ collection: "pages", id: item.id, data: { related: ids } as Doc, context });
}

/* ---------------- Website-Einstellungen ---------------- */
const settings = (await payload.findGlobal({ slug: "site-settings", depth: 0 })) as Doc;
if (!settings.greencore?.notice) {
  await payload.updateGlobal({
    slug: "site-settings",
    context,
    data: {
      greencore: {
        name: donationConfig.name,
        headline: donationConfig.headline,
        text: donationConfig.text,
        purpose: donationConfig.purpose,
        url: donationConfig.url,
        notice: donationConfig.notice,
        aboutHref: donationConfig.aboutHref,
      },
    } as Doc,
  });
}

console.log("\n🐼 Import abgeschlossen");
console.log(`   Kategorien neu:        ${stats.categories}`);
console.log(`   Unterthemen neu:       ${stats.groups}`);
console.log(`   Affiliates neu:        ${stats.affiliates}`);
console.log(`   Seiten mit Inhalt:     ${stats.pagesWithContent}`);
console.log(`   Geplante Seiten:       ${stats.plannedPages}`);
console.log(`   Bereits vorhanden:     ${stats.skipped}\n`);
process.exit(0);
