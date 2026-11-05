/**
 * Datenzugriff der Website auf das CMS (Payload Local API – direkt, ohne HTTP).
 *
 * Zwei Cache-Ebenen:
 *  1. Daten-Cache (unstable_cache, Tag „cms“): Die Rohdaten aus Postgres werden dauerhaft
 *     gespeichert – über alle Anfragen, Server-Instanzen und Deployments hinweg. Die Datenbank
 *     wird nur gefragt, wenn sich im CMS etwas ändert (Hooks in cms/hooks.ts leeren den Tag).
 *     So kann die Neon-Datenbank schlafen, statt bei jedem Seitenaufruf aufzuwachen.
 *     Fehler werden NICHT gecacht: Ist die Datenbank nicht erreichbar, bleibt der letzte
 *     gute Stand im Cache, und erst wenn gar nichts da ist, greift die lokale Grundstruktur.
 *  2. React cache: pro Anfrage, damit dieselben Daten nicht mehrfach umgerechnet werden.
 */
import config from "@payload-config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import { cache } from "react";

import { lexicalToPlainText } from "@/cms/lexical-text";
import { resolveProsCons, type ProsConsData } from "./editorial";

import { autoDescription, autoLinkAnchors, autoSeoTitle, type PageType } from "./auto";
import { htmlConverters } from "./lexical-html";
import { hierarchy, type IconName } from "./hierarchy";

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
  prosCons: ProsConsData;
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

export interface MaintenanceData {
  enabled: boolean;
  title: string;
  message: string;
  /** ISO-Zeitpunkt „voraussichtlich bis“ */
  until?: string;
}

export interface SiteSettingsData {
  maintenance: MaintenanceData;
  homepage: { badge: string; titleLead: string; titleHighlight: string; description: string };
  siteName: string;
  tagline: string;
  greencore: { name: string; headline: string; text: string; purpose: string; url: string; notice: string; aboutHref: string };
  links: SiteLinks;
}

export interface SiteLink {
  label: string;
  url: string;
  newTab?: boolean;
}
export interface SiteLinks {
  merchUrl: string;
  header: SiteLink[];
  footer: SiteLink[];
  social: SiteLink[];
  poweredBy: SiteLink[];
}

/** Nur sichere Adressen anzeigen (interne Pfade, http(s), mailto) */
export function safeHref(url: unknown): string | null {
  const u = String(url ?? "").trim();
  return /^(https?:\/\/|\/(?!\/)|mailto:)/i.test(u) ? u : null;
}

const DEFAULT_LINKS: SiteLinks = {
  merchUrl: "https://www.spreadshirt.de/shop/user/flauschipandas",
  header: [],
  footer: [],
  social: [],
  poweredBy: [{ label: "Designix", url: "https://designix.figma.site" }, { label: "WebDock", url: "https://spitzli.cloud" }],
};

function mapLinks(list: unknown, requireUrl = true): SiteLink[] {
  return ((Array.isArray(list) ? list : []) as Doc[])
    .map((l) => ({ label: String(l?.label ?? "").trim(), url: safeHref(l?.url) ?? "", newTab: l?.newTab === true }))
    .filter((l) => l.label && (!requireUrl || l.url));
}

/* ------------------------------------------------------------------ */
/* Basis                                                               */
/* ------------------------------------------------------------------ */

export const getPayloadClient = cache(async () => getPayload({ config }));

/** Preview-Deployments ohne Datenbank verwenden bewusst die lokale Seitenstruktur. */
const hasCmsDatabase = () => Boolean(String(process.env.DATABASE_URI ?? "").trim());

/**
 * Cache-Tags für die CMS-Daten. cms/hooks.ts leert beim Speichern nur, was sich geändert hat
 * (z. B. eine Seite → Index, Navigation und genau diese Seite). „cms“ leert alles.
 */
export const CMS_TAGS = {
  all: "cms",
  navigation: "cms-navigation",
  settings: "cms-settings",
  affiliates: "cms-affiliates",
  index: "cms-page-index",
  page: (id: string | number) => `cms-page-${id}`,
} as const;

/**
 * Dauerhafter Daten-Cache für CMS-Abfragen (bis zur nächsten Änderung im CMS).
 * Die Version im Schlüssel erhöhen, wenn sich die Form der gespeicherten Daten ändert.
 * Einträge müssen unter 2 MB bleiben – deshalb werden Seitentexte einzeln gespeichert.
 */
function cmsCache<A extends unknown[], T>(name: string, tag: string, fn: (...args: A) => Promise<T>) {
  return unstable_cache(fn, ["cms-v1", name], { tags: [CMS_TAGS.all, tag], revalidate: false });
}

/** Felder, die nur die Einzelseite braucht – in Listen weggelassen, damit der Cache klein bleibt. */
const HEAVY_PAGE_FIELDS = ["content", "markdown", "comparison", "sources", "prosCons"] as const;


const idOf = (v: unknown): string | number | undefined => {
  if (v === null || v === undefined) return undefined;
  if (typeof v === "object") {
    const relation = v as Doc;
    return relation.id ?? relation.value ?? relation._id;
  }
  return v as string | number;
};

const sameId = (left: unknown, right: unknown) => {
  const a = idOf(left);
  const b = idOf(right);
  return a !== undefined && b !== undefined && String(a) === String(b);
};

const slugKey = (value: unknown) => String(value ?? "").trim().toLowerCase();

/** Veröffentlicht und Veröffentlichungszeit erreicht (wird bei jedem Rendern neu geprüft, nicht im Cache). */
const isLiveDoc = (d: Doc, now = Date.now()) => d._status === "published" && (!d.publishedAt || new Date(d.publishedAt).getTime() <= now);

/**
 * Offline-Navigation aus der im Repository gespeicherten Grundstruktur.
 * Wird nur verwendet, wenn Payload/Postgres nicht erreichbar ist. Die
 * Seiten werden dabei bewusst nicht als veröffentlicht markiert.
 */
function fallbackNavigation(): NavCategory[] {
  return hierarchy.map((category) => ({
    dbId: `fallback-category-${category.slug}`,
    number: category.number,
    slug: category.slug,
    title: category.title,
    description: category.description,
    icon: category.icon,
    hue: category.hue,
    groups: category.groups.map((group) => ({
      dbId: `fallback-group-${category.slug}-${group.slug}`,
      slug: group.slug,
      title: group.title,
      description: group.description,
      pages: group.pages.map((page) => ({
        id: `${category.slug}/${group.slug}/${page.slug}`,
        slug: page.slug,
        label: page.label,
        title: page.title,
        pageType: "standard" as PageType,
        live: false,
      })),
    })),
  }));
}

/* ------------------------------------------------------------------ */
/* Navigation: komplette Hierarchie inkl. geplanter Seiten              */
/* ------------------------------------------------------------------ */

const loadNavigationDocs = cmsCache("navigation", CMS_TAGS.navigation, async () => {
  const payload = await getPayload({ config });
  const [cats, groups, pages] = await Promise.all([
    payload.find({ collection: "categories", limit: 200, depth: 0, joins: false, sort: ["order", "createdAt"], pagination: false }),
    payload.find({ collection: "groups", limit: 2000, depth: 0, joins: false, sort: ["order", "createdAt"], pagination: false }),
    payload.find({
      collection: "pages",
      limit: 10000,
      depth: 0,
      sort: "title",
      pagination: false,
      select: { title: true, label: true, slug: true, group: true, pageType: true, _status: true, publishedAt: true },
    }),
  ]);
  return { cats: cats.docs as Doc[], groups: groups.docs as Doc[], pages: pages.docs as Doc[] };
});

export const getNavigation = cache(async (): Promise<NavCategory[]> => {
  if (!hasCmsDatabase()) return fallbackNavigation();
  try {
    const { cats, groups, pages } = await loadNavigationDocs();
    const now = Date.now();

    const pagesByGroup = new Map<string, Doc[]>();
    for (const page of pages) {
      const groupId = idOf(page.group);
      if (groupId === undefined) continue;
      const key = String(groupId);
      pagesByGroup.set(key, [...(pagesByGroup.get(key) ?? []), page]);
    }

    return cats.map((category, index) => ({
      dbId: category.id,
      number: index + 1,
      slug: category.slug,
      title: category.title,
      description: category.description?.trim() || `${category.title}: Ratgeber, Vergleiche und Tipps – verständlich und ehrlich erklärt.`,
      icon: (category.icon ?? "paw") as IconName,
      hue: typeof category.hue === "number" ? category.hue : 195,
      groups: groups
        .filter((group) => sameId(group.category, category.id))
        .map((group) => ({
          dbId: group.id,
          slug: group.slug,
          title: group.title,
          description: group.description ?? `${group.title}: Ratgeber, Vergleiche und Tipps – verständlich und ehrlich erklärt.`,
          pages: (pagesByGroup.get(String(group.id)) ?? []).map((page) => ({
            id: `${category.slug}/${group.slug}/${page.slug}`,
            slug: page.slug,
            label: page.label || page.title,
            title: page.title,
            pageType: (page.pageType ?? "standard") as PageType,
            live: isLiveDoc(page, now),
          })),
        })),
    }));
  } catch (error) {
    // Footer, Header und Kategoriestruktur bleiben auch bei einem DB-Ausfall sichtbar.
    console.warn("[navigation] CMS nicht erreichbar; lokale Grundstruktur wird verwendet.", error instanceof Error ? error.message : error);
    return fallbackNavigation();
  }
});

export async function getCategory(slug: string) {
  const key = slugKey(slug);
  if (!key) return undefined;
  return (await getNavigation()).find((c) => slugKey(c.slug) === key);
}

export async function getGroup(categorySlug: string, groupSlug: string) {
  const category = await getCategory(categorySlug);
  const groupKey = slugKey(groupSlug);
  const group = category?.groups.find((g) => slugKey(g.slug) === groupKey);
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

const loadSettingsDoc = cmsCache("settings", CMS_TAGS.settings, async () => {
  const payload = await getPayload({ config });
  return (await payload.findGlobal({ slug: "site-settings", depth: 0 })) as Doc;
});

export const getSettings = cache(async (): Promise<SiteSettingsData> => {
  let s: Doc = {};
  if (hasCmsDatabase()) try {
    s = await loadSettingsDoc();
  } catch (error) {
    // Fallback auch dann, wenn bereits der Aufbau der Payload-Verbindung fehlschlägt.
    console.warn("[einstellungen] CMS nicht erreichbar; Standard-Einstellungen werden verwendet.", error instanceof Error ? error.message : error);
  }

  const powered = mapLinks(s.poweredBy, false);
  const greencore = (s.greencore ?? {}) as Doc;
  const maintenance = (s.maintenance ?? {}) as Doc;
  const homepage = (s.homepage ?? {}) as Doc;

  return {
    maintenance: {
      enabled: maintenance.enabled === true,
      title: maintenance.title || "Wir schrauben gerade an der Panda Toolbox",
      message: maintenance.message || "Gleich sind wir wieder für dich da – danke für deine Geduld! 🐼",
      until: maintenance.until || undefined,
    },
    homepage: {
      badge: homepage.badge || "Neu: Flauschipanda hat jetzt Skins – Saison-Design automatisch",
      titleLead: homepage.titleLead || "Wissen, Tools & Tipps in ",
      titleHighlight: homepage.titleHighlight || "einer Toolbox",
      description: homepage.description || "Ratgeber, Vergleiche und Rechner zu Tieren, Zoos, Freizeitparks, KI, Urlaub, Autos, Finanzen, Wissenschaft und mehr – verständlich erklärt, ehrlich gekennzeichnet und immer kostenlos.",
    },
    siteName: s.siteName || "Panda Toolbox",
    tagline: s.tagline || "Die Panda Toolbox – Themen- und Communityportal",
    greencore: {
      name: greencore.name || "Panda GreenTech",
      headline: greencore.headline || "Unterstütze Panda GreenTech",
      text: greencore.text || "Wenn dir diese Seite geholfen hat, kannst du Panda GreenTech freiwillig unterstützen.",
      purpose: greencore.purpose || "",
      url: greencore.url || "",
      notice: greencore.notice || "Diese Seite ist Teil der Panda Toolbox.",
      aboutHref: greencore.aboutHref || "/panda-branding/greentech",
    },
    links: {
      merchUrl: safeHref(s.merchUrl) ?? DEFAULT_LINKS.merchUrl,
      header: mapLinks(s.headerLinks),
      footer: mapLinks(s.footerLinks),
      social: mapLinks(s.socialLinks),
      poweredBy: powered.length ? powered : DEFAULT_LINKS.poweredBy,
    },
  };
});

/** Aktive Affiliate-Produkte mit echtem Link (Platzhalter werden nie öffentlich gezeigt). */
const loadAffiliateDocs = cmsCache("affiliates", CMS_TAGS.affiliates, async () => {
  const payload = await getPayload({ config });
  const res = await payload.find({
    collection: "affiliates",
    where: { and: [{ active: { equals: true } }, { placeholder: { not_equals: true } }] },
    limit: 500,
    depth: 0,
    pagination: false,
  });
  return res.docs as Doc[];
});

const getAffiliateDocs = cache(async () => {
  if (!hasCmsDatabase()) return [] as Doc[];
  try {
    return await loadAffiliateDocs();
  } catch (error) {
    // Empfehlungen sind optional: Ein CMS-/Datenbankausfall darf öffentliche Seiten nicht blockieren.
    console.warn("[cms] Affiliate-Daten nicht verfügbar; leere Liste wird verwendet.", error instanceof Error ? error.message : error);
    return [];
  }
});

const toAffiliate = (a: Doc): AffiliateItem => ({ key: a.key, name: a.name, label: a.label ?? "", pitch: a.pitch ?? "", url: a.url });

/** Partnerlinks, die einem Unterthema bzw. einer Kategorie zugeordnet sind („Passt zu“). */
export async function getTopicAffiliates(rel: "groups" | "categories", id: string | number): Promise<AffiliateItem[]> {
  const docs = await getAffiliateDocs();
  return docs
    .filter((a) => ((a.topics ?? []) as Doc[]).some((t) => t.relationTo === rel && idOf(t.value) === id))
    .slice(0, 6)
    .map(toAffiliate);
}

export async function getAffiliateLookup() {
  const docs = await getAffiliateDocs();
  // Suche per Kennung (aff:kennung im Text) oder per Datenbank-ID (#id, Links aus dem Editor)
  const map = new Map<string, AffiliateItem>();
  for (const a of docs) {
    map.set(a.key as string, toAffiliate(a));
    map.set(`#${a.id}`, toAffiliate(a));
  }
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
    const groupId = idOf(d.group);
    if (groupId === undefined) continue;
    const loc = groupIndex.get(groupId);
    if (!loc) continue;
    const { category, group } = loc;
    const { groups: _g, ...cat } = category;
    const { pages: _p, ...grp } = group;
    const pageType = (d.pageType ?? "standard") as PageType;
    const seo = (d.seo ?? {}) as Doc;
    const ctx = { categorySlug: category.slug, groupTitle: group.title, pageType, year };

    // Listen-Einträge (_lite) haben keinen Text – die Wortzahl wurde beim Cachen vorberechnet.
    const lite = d._lite === true;
    const hasRich = !lite && lexicalToPlainText(d.content).length > 0;
    const contentHtml = hasRich ? convertLexicalToHTML({ data: d.content, converters: htmlConverters }) : undefined;
    const text = lite ? "" : hasRich ? lexicalToPlainText(d.content) : String(d.markdown ?? "");
    const wordCount = lite ? Number(d._wordCount) || 0 : text.split(/\s+/).filter(Boolean).length;

    // Affiliate-Bereich: selbst gewählte Produkte – sonst automatisch passende aus Unterthema/Kategorie
    let products: AffiliateItem[] = [];
    const chosen = ((d.products ?? []) as unknown[]).map((p) => affiliates.find((a) => a.id === idOf(p))).filter(Boolean) as Doc[];
    if (chosen.length) products = chosen.map(toAffiliate);
    else {
      // Partnerlinks aus dem Unterthema bzw. der Kategorie („Passt zu“) erscheinen automatisch auf jeder Seite darin
      if (d.autoAffiliate !== false) {
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
      prosCons: resolveProsCons(d.prosCons, `${category.slug}/${group.slug}/${d.slug}`, d.title, text),
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

/**
 * Seitenindex für Listen, Suche, Sitemap und Verlinkung: alle veröffentlichten Seiten ohne den
 * eigentlichen Text (der liegt pro Seite in loadPageDoc). Die Wortzahl wird hier vorberechnet.
 * Geplante Seiten sind enthalten und werden erst beim Rendern nach Datum gefiltert.
 */
const loadPageIndex = cmsCache("page-index", CMS_TAGS.index, async () => {
  const payload = await getPayload({ config });
  const res = await payload.find({
    collection: "pages",
    where: { _status: { equals: "published" } },
    limit: 5000,
    depth: 0,
    sort: "-publishedAt",
    pagination: false,
  });
  return (res.docs as Doc[]).map((d) => {
    const rich = lexicalToPlainText(d.content);
    const text = rich.length > 0 ? rich : String(d.markdown ?? "");
    const lite: Doc = { ...d, _lite: true, _wordCount: text.split(/\s+/).filter(Boolean).length };
    for (const field of HEAVY_PAGE_FIELDS) delete lite[field];
    return lite;
  });
});

/** Vollständige, veröffentlichte Fassung einer einzelnen Seite (eigener Cache-Eintrag und Tag pro Seite). */
const loadPageDoc = (id: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config });
      try {
        return (await payload.findByID({ collection: "pages", id, depth: 0 })) as Doc;
      } catch (error) {
        if ((error as { status?: number })?.status === 404) return null;
        throw error;
      }
    },
    ["cms-v1", "page", id],
    { tags: [CMS_TAGS.all, CMS_TAGS.page(id)], revalidate: false },
  )();

/** Alle öffentlich sichtbaren Seiten (veröffentlicht und Veröffentlichungszeit erreicht) – ohne Text. */
export const getLivePages = cache(async (): Promise<Page[]> => {
  if (!hasCmsDatabase()) return [];
  try {
    const now = Date.now();
    const docs = (await loadPageIndex()).filter((d) => isLiveDoc(d, now));
    const pages = await mapPages(docs);
    // verwandte Artikel: DB-IDs → Seiten-IDs (nur live)
    const byDbId = new Map(pages.map((p) => [String(p.dbId), p.id]));
    for (const p of pages) p.related = p.related.map((r) => byDbId.get(r)).filter((x): x is string => Boolean(x));
    return pages;
  } catch (error) {
    // Öffentliche Seiten bleiben mit einem leeren CMS-Inhalt erreichbar, wenn die DB ausfällt.
    console.warn("[cms] Live-Seiten nicht verfügbar; leere Liste wird verwendet.", error instanceof Error ? error.message : error);
    return [];
  }
});

/** Eine Seite vollständig (mit Text, FAQ, Vergleich, Quellen) – nur wenn sie live ist. */
export const getLivePage = cache(async (category: string, group: string, slug: string): Promise<Page | undefined> => {
  const listed = (await getLivePages()).find((p) => p.id === `${category}/${group}/${slug}`);
  if (!listed) return undefined;
  try {
    const doc = await loadPageDoc(String(listed.dbId));
    if (!doc || !isLiveDoc(doc)) return listed;
    const [page] = await mapPages([doc]);
    return page ? { ...page, related: listed.related } : listed;
  } catch (error) {
    console.warn("[cms] Seitentext nicht verfügbar; Kurzfassung wird verwendet.", error instanceof Error ? error.message : error);
    return listed;
  }
});

/**
 * Team-Vorschau: neueste Fassung einer Seite, auch wenn sie noch ein Entwurf ist.
 * Wird nur im Vorschaumodus (draftMode, nur für angemeldete Teammitglieder) aufgerufen.
 */
export async function getDraftPage(category: string, group: string, slug: string): Promise<(Page & { isDraft: boolean }) | undefined> {
  if (!hasCmsDatabase()) return undefined;
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "pages",
    where: { path: { equals: `/${category}/${group}/${slug}` } },
    draft: true,
    limit: 1,
    depth: 0,
    pagination: false,
    overrideAccess: true,
  });
  const doc = res.docs[0] as Doc | undefined;
  if (!doc) return undefined;
  const [page] = await mapPages([doc]);
  if (!page) return undefined;
  return { ...page, related: [], isDraft: !isLiveDoc(doc) };
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

/* ------------------------------------------------------------------ */
/* Suche                                                               */
/* ------------------------------------------------------------------ */

/** Suchindex: live geschaltete Seiten + alle Unterthemen und Kategorien. */
export async function getSearchItems(): Promise<import("./search").SearchItem[]> {
  const [nav, live] = await Promise.all([getNavigation(), getLivePages()]);
  return [
    ...live.map((p) => ({
      kind: "seite" as const,
      title: p.title,
      context: `${p.category.title} › ${p.group.title}`,
      description: p.description,
      href: p.href,
      extra: [p.focusKeyword, p.label, ...p.linkAnchors].join(" "),
    })),
    ...nav.flatMap((c) =>
      c.groups.map((g) => ({
        kind: "unterthema" as const,
        title: g.title,
        context: c.title,
        description: g.description,
        href: `/${c.slug}/${g.slug}`,
        // geplante Seiten als Suchbegriffe, damit z. B. „Welpenfutter“ zum Unterthema Hunde führt
        extra: g.pages.map((pg) => pg.title).join(" "),
      })),
    ),
    ...nav.map((c) => ({
      kind: "kategorie" as const,
      title: c.title,
      context: "Kategorie",
      description: c.description,
      href: `/${c.slug}`,
      extra: c.groups.map((g) => g.title).join(" "),
    })),
  ];
}

/** Wartung aktiv? Endet automatisch, wenn „voraussichtlich bis“ in der Vergangenheit liegt. */
export function isMaintenanceActive(m: MaintenanceData, now = new Date()) {
  if (!m.enabled) return false;
  if (m.until && new Date(m.until).getTime() < now.getTime()) return false;
  return true;
}
