/**
 * Datenzugriff der Website auf das CMS (Payload Local API – direkt, ohne HTTP).
 * Alle Funktionen sind pro Anfrage zwischengespeichert (React cache).
 */
import config from "@payload-config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getPayload, type Where } from "payload";
import { cache } from "react";

import { lexicalToPlainText } from "@/cms/lexical-text";

import { autoDescription, autoLinkAnchors, autoSeoTitle, type PageType } from "./auto";
import type { IconName } from "./hierarchy";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Doc = Record<string, any>;

/* ------------------------------------------------------------------ */
/* Typen                                                               */
/* ------------------------------------------------------------------ */

export interface NavPage {
  id: string; // "kategorie/unterthema/seite"
  slug: string;
  label: string;
  title: string;
  live: boolean;
  pageType: PageType;
}

export interface NavGroup {
  dbId: string | number;
  slug: string;
  title: string;
  description: string;
  pages: NavPage[];
}

export interface NavCategory {
  dbId: string | number;
  number: number;
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  hue: number;
  groups: NavGroup[];
}

/** Schlanke Navigation für Header & Footer (Client-Komponenten) */
export interface NavLite {
  slug: string;
  title: string;
  icon: IconName;
  groups: { slug: string; title: string }[];
}

export function toNavLite(nav: NavCategory[]): NavLite[] {
  return nav.map((c) => ({ slug: c.slug, title: c.title, icon: c.icon, groups: c.groups.map((g) => ({ slug: g.slug, title: g.title })) }));
}

export interface AffiliateItem {
  key: string;
  name: string;
  label: string;
  pitch: string;
  url: string;
}

export interface Comparison {
  title: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  note?: string;
}

export interface Page {
  id: string;
  dbId: string | number;
  title: string;
  label: string;
  seoTitle: string;
  description: string;
  focusKeyword: string;
  keywords: string[];
  linkAnchors: string[];
  tags: string[];
  related: string[];
  pageType: PageType;
  category: Omit<NavCategory, "groups">;
  group: Omit<NavGroup, "pages">;
  slug: string;
  href: string;
  /** Importierter Markdown-Text (nur wenn kein Rich-Text vorhanden ist) */
  body: string;
  /** Aus dem Rich-Text-Editor erzeugtes HTML */
  contentHtml?: string;
  wordCount: number;
  readingMinutes: number;
  faq: { q: string; a: string }[];
  comparison?: Comparison;
  products: AffiliateItem[];
  donation: boolean;
  widgets: string[];
  sources: { title: string; url: string }[];
  factCheck: { required: boolean; status: string; reviewedAt?: Date };
  publishedAt: Date;
  updatedAt?: Date;
  author?: string;
  noindex: boolean;
}

/** Serialisierbare Kurzform für Client-Komponenten */
export interface PageSummary {
  id: string;
  title: string;
  description: string;
  href: string;
  readingMinutes: number;
  tags: string[];
  focusKeyword: string;
  categoryTitle: string;
  groupTitle: string;
  icon: IconName;
  hue: number;
  pageType: PageType;
  publishedAt: string;
}

export interface SiteSettingsData {
  siteName: string;
  tagline: string;
  greencore: { name: string; headline: string; text: string; purpose: string; url: string; notice: string; aboutHref: string };
}

/* ------------------------------------------------------------------ */
/* Basis                                                               */
/* ------------------------------------------------------------------ */

export const getPayloadClient = cache(async () => getPayload({ config }));

const idOf = (v: unknown) => (v && typeof v === "object" ? (v as Doc).id : v) as string | number;

const liveWhere = (now: Date): Where => ({
  and: [
    { _status: { equals: "published" } },
    { or: [{ publishedAt: { exists: false } }, { publishedAt: { less_than_equal: now.toISOString() } }] },
  ],
});

/* ------------------------------------------------------------------ */
/* Navigation: komplette Hierarchie inkl. geplanter Seiten              */
/* ------------------------------------------------------------------ */

export const getNavigation = cache(async (): Promise<NavCategory[]> => {
  const payload = await getPayloadClient();
  const now = Date.now();
  const [cats, groups, pages] = await Promise.all([
    payload.find({ collection: "categories", limit: 200, depth: 0, sort: "order", pagination: false }),
    payload.find({ collection: "groups", limit: 2000, depth: 0, sort: "order", pagination: false }),
    payload.find({
      collection: "pages",
      limit: 10000,
      depth: 0,
      sort: "title",
      pagination: false,
      select: { title: true, label: true, slug: true, group: true, pageType: true, _status: true, publishedAt: true },
    }),
  ]);

  const pagesByGroup = new Map<string | number, Doc[]>();
  for (const p of pages.docs as Doc[]) {
    const gid = idOf(p.group);
    pagesByGroup.set(gid, [...(pagesByGroup.get(gid) ?? []), p]);
  }

  return (cats.docs as Doc[]).map((c, i) => ({
    dbId: c.id,
    number: i + 1,
    slug: c.slug,
    title: c.title,
    description: c.description ?? "",
    icon: (c.icon ?? "paw") as IconName,
    hue: typeof c.hue === "number" ? c.hue : 195,
    groups: (groups.docs as Doc[])
      .filter((g) => idOf(g.category) === c.id)
      .map((g) => ({
        dbId: g.id,
        slug: g.slug,
        title: g.title,
        description: g.description ?? `${g.title}: Ratgeber, Vergleiche und Tipps – verständlich und ehrlich erklärt.`,
        pages: (pagesByGroup.get(g.id) ?? []).map((p) => ({
          id: `${c.slug}/${g.slug}/${p.slug}`,
          slug: p.slug,
          label: p.label || p.title,
          title: p.title,
          pageType: (p.pageType ?? "standard") as PageType,
          live: p._status === "published" && (!p.publishedAt || new Date(p.publishedAt).getTime() <= now),
        })),
      })),
  }));
});

export async function getCategory(slug: string) {
  return (await getNavigation()).find((c) => c.slug === slug);
}

export async function getGroup(categorySlug: string, groupSlug: string) {
  const category = await getCategory(categorySlug);
  const group = category?.groups.find((g) => g.slug === groupSlug);
  return category && group ? { category, group } : undefined;
}

export function navStats(nav: NavCategory[]) {
  const groups = nav.reduce((n, c) => n + c.groups.length, 0);
  const pages = nav.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.pages.length, 0), 0);
  const live = nav.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.pages.filter((p) => p.live).length, 0), 0);
  return { categories: nav.length, groups, pages, live };
}

/* ------------------------------------------------------------------ */
/* Einstellungen & Affiliates                                           */
/* ------------------------------------------------------------------ */

export const getSettings = cache(async (): Promise<SiteSettingsData> => {
  const payload = await getPayloadClient();
  const s = (await payload.findGlobal({ slug: "site-settings", depth: 0 })) as Doc;
  const g = (s.greencore ?? {}) as Doc;
  return {
    siteName: s.siteName || "Panda Toolbox",
    tagline: s.tagline || "Die Panda Toolbox – Themen- und Communityportal",
    greencore: {
      name: g.name || "Panda GreenCore",
      headline: g.headline || "Unterstütze Panda GreenCore",
      text: g.text || "Wenn dir diese Seite geholfen hat, kannst du Panda GreenCore freiwillig unterstützen.",
      purpose: g.purpose || "",
      url: g.url || "",
      notice: g.notice || "Diese Seite ist Teil der Panda Toolbox.",
      aboutHref: g.aboutHref || "/panda-branding/greencore",
    },
  };
});

/** Aktive Affiliate-Produkte mit echtem Link (Platzhalter werden nie öffentlich gezeigt). */
const getAffiliateDocs = cache(async () => {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "affiliates",
    where: { and: [{ active: { equals: true } }, { placeholder: { not_equals: true } }] },
    limit: 500,
    depth: 0,
    pagination: false,
  });
  return res.docs as Doc[];
});

const toAffiliate = (a: Doc): AffiliateItem => ({ key: a.key, name: a.name, label: a.label ?? "", pitch: a.pitch ?? "", url: a.url });

export async function getAffiliateLookup() {
  const docs = await getAffiliateDocs();
  const map = new Map(docs.map((a) => [a.key as string, toAffiliate(a)]));
  return (key: string) => map.get(key);
}

/* ------------------------------------------------------------------ */
/* Seiten                                                              */
/* ------------------------------------------------------------------ */

function mapComparison(c: Doc | undefined): Comparison | undefined {
  if (!c?.rows?.length || !c?.columns?.length) return undefined;
  return {
    title: c.title || "Vergleich",
    columns: (c.columns as Doc[]).map((x) => x.name),
    rows: (c.rows as Doc[]).map((r) => ({ label: r.label, values: ((r.values ?? []) as Doc[]).map((v) => v.value ?? "") })),
    note: c.note || undefined,
  };
}

async function mapPages(docs: Doc[]): Promise<Page[]> {
  const nav = await getNavigation();
  const affiliates = await getAffiliateDocs();
  const groupIndex = new Map<string | number, { category: NavCategory; group: NavGroup }>();
  for (const c of nav) for (const g of c.groups) groupIndex.set(g.dbId, { category: c, group: g });
  const year = new Date().getFullYear();

  const pages: Page[] = [];
  for (const d of docs) {
    const loc = groupIndex.get(idOf(d.group));
    if (!loc) continue;
    const { category, group } = loc;
    const { groups: _g, ...cat } = category;
    const { pages: _p, ...grp } = group;
    const pageType = (d.pageType ?? "standard") as PageType;
    const seo = (d.seo ?? {}) as Doc;
    const ctx = { categorySlug: category.slug, groupTitle: group.title, pageType, year };

    const hasRich = lexicalToPlainText(d.content).length > 0;
    const contentHtml = hasRich ? convertLexicalToHTML({ data: d.content }) : undefined;
    const text = hasRich ? lexicalToPlainText(d.content) : String(d.markdown ?? "");
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    // Affiliate-Bereich nur auf Money Pages – eigene Auswahl oder automatisch passend
    let products: AffiliateItem[] = [];
    if (pageType === "money") {
      const chosen = ((d.products ?? []) as unknown[]).map((p) => affiliates.find((a) => a.id === idOf(p))).filter(Boolean) as Doc[];
      if (chosen.length) products = chosen.map(toAffiliate);
      else if (d.autoAffiliate !== false) {
        const match = (a: Doc, rel: string, id: string | number) =>
          ((a.topics ?? []) as Doc[]).some((t) => t.relationTo === rel && idOf(t.value) === id);
        const exact = affiliates.filter((a) => match(a, "groups", group.dbId));
        const broad = affiliates.filter((a) => !exact.includes(a) && match(a, "categories", category.dbId));
        products = [...exact, ...broad].slice(0, 3).map(toAffiliate);
      }
    }

    const anchors = ((seo.linkAnchors ?? []) as Doc[]).map((a) => a.anchor).filter(Boolean);
    pages.push({
      id: `${category.slug}/${group.slug}/${d.slug}`,
      dbId: d.id,
      title: d.title,
      label: d.label || d.title,
      seoTitle: seo.seoTitle || autoSeoTitle(d.title, ctx),
      description: seo.metaDescription || autoDescription(d.title, ctx),
      focusKeyword: seo.focusKeyword || d.title,
      keywords: [],
      linkAnchors: anchors.length ? anchors : autoLinkAnchors(d as { title: string; label?: string }),
      tags: [category.slug, group.slug],
      related: ((d.related ?? []) as unknown[]).map((r) => String(idOf(r))), // DB-IDs, werden unten aufgelöst
      pageType,
      category: cat,
      group: grp,
      slug: d.slug,
      href: `/${category.slug}/${group.slug}/${d.slug}`,
      body: hasRich ? "" : String(d.markdown ?? ""),
      contentHtml,
      wordCount,
      readingMinutes: Math.max(1, Math.round(wordCount / 200)),
      faq: ((d.faq ?? []) as Doc[]).map((f) => ({ q: f.q, a: f.a })),
      comparison: mapComparison(d.comparison),
      products,
      donation: d.donation !== false,
      widgets: (d.widgets ?? []) as string[],
      sources: ((d.sources ?? []) as Doc[]).map((s) => ({ title: s.title, url: s.url })),
      factCheck: {
        required: d.factCheck?.required !== false,
        status: d.factCheck?.status ?? "ausstehend",
        reviewedAt: d.factCheck?.reviewedAt ? new Date(d.factCheck.reviewedAt) : undefined,
      },
      publishedAt: new Date(d.publishedAt ?? d.createdAt),
      updatedAt: d.updatedAt ? new Date(d.updatedAt) : undefined,
      author: d.author || undefined,
      noindex: Boolean(seo.noindex),
    });
  }
  return pages;
}

/** Alle öffentlich sichtbaren Seiten (veröffentlicht und Veröffentlichungszeit erreicht). */
export const getLivePages = cache(async (): Promise<Page[]> => {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "pages",
    where: liveWhere(new Date()),
    limit: 5000,
    depth: 0,
    sort: "-publishedAt",
    pagination: false,
  });
  const pages = await mapPages(res.docs as Doc[]);
  // verwandte Artikel: DB-IDs → Seiten-IDs (nur live)
  const byDbId = new Map(pages.map((p) => [String(p.dbId), p.id]));
  for (const p of pages) p.related = p.related.map((r) => byDbId.get(r)).filter((x): x is string => Boolean(x));
  return pages;
});

export async function getLivePage(category: string, group: string, slug: string) {
  return (await getLivePages()).find((p) => p.id === `${category}/${group}/${slug}`);
}

export async function getLivePagesInCategory(category: string) {
  return (await getLivePages()).filter((p) => p.category.slug === category);
}

export async function getLivePagesInGroup(category: string, group: string) {
  return (await getLivePages()).filter((p) => p.category.slug === category && p.group.slug === group);
}

export function toSummary(p: Page): PageSummary {
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    href: p.href,
    readingMinutes: p.readingMinutes,
    tags: p.tags,
    focusKeyword: p.focusKeyword,
    categoryTitle: p.category.title,
    groupTitle: p.group.title,
    icon: p.category.icon,
    hue: p.category.hue,
    pageType: p.pageType,
    publishedAt: p.publishedAt.toISOString(),
  };
}

export function lastModified(p: Page) {
  return p.updatedAt ?? p.publishedAt;
}
