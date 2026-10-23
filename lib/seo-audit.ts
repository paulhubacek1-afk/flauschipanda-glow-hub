import { getAffiliate } from "./affiliate";
import { getAllPages, getUnmappedFiles, isLive, isScheduled, type Page } from "./content";
import { allPageNodes, categoryPath, groupPath, hierarchy } from "./hierarchy";
import { extractAffiliateIds, extractInternalLinks } from "./linking";
import { renderPage } from "./markdown";
import { donationConfig } from "./site";

/**
 * Automatische SEO- und Qualitätsprüfung vor der Veröffentlichung.
 * Läuft vor jedem Build (npm run prebuild) und im Redaktions-Cockpit.
 *
 *  error   → blockiert den Build
 *  warning → sollte vor Veröffentlichung behoben werden (im Release-Modus teils Fehler)
 *  info    → Hinweis / Verbesserungsvorschlag
 */
export type IssueLevel = "error" | "warning" | "info";

export interface Issue {
  level: IssueLevel;
  code: string;
  message: string;
}

export interface PageAudit {
  id: string;
  title: string;
  file: string;
  state: "live" | "geplant" | "entwurf" | "in prüfung";
  publishedAt: Date;
  issues: Issue[];
  inboundLinks: number;
  outboundAutoLinks: string[];
  needsUpdate: boolean;
  score: number;
}

export interface CoverageRow {
  slug: string;
  title: string;
  planned: number;
  live: number;
  inWork: number;
}

export interface AuditReport {
  generatedAt: Date;
  global: Issue[];
  pages: PageAudit[];
  coverage: CoverageRow[];
  totals: Record<IssueLevel, number>;
}

/** Warnungen, die im Release-Modus zu Fehlern werden. */
const STRICT_ESCALATE = new Set([
  "factcheck-pending",
  "affiliate-placeholder",
  "missing-sources",
  "donation-missing-url",
  "donation-missing-purpose",
]);

const STATIC_ROUTES = new Set(["/startseite", "/seitenstruktur", "/transparenz", "/impressum", "/datenschutz"]);

function addMonths(date: Date, months: number) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function includesCI(haystack: string, needle: string) {
  return haystack.toLocaleLowerCase("de").includes(needle.toLocaleLowerCase("de"));
}

function stateOf(p: Page, now: Date): PageAudit["state"] {
  if (isLive(p, now)) return "live";
  if (isScheduled(p, now)) return "geplant";
  if (p.status === "review") return "in prüfung";
  return "entwurf";
}

export async function runAudit(options: { strict?: boolean; now?: Date } = {}): Promise<AuditReport> {
  const now = options.now ?? new Date();
  const strict = Boolean(options.strict);
  const all = getAllPages();
  // Für Verlinkung zählen live + geplante Seiten – geplante sollen beim Freischalten schon eingebunden sein.
  const linkable = all.filter((p) => p.status === "published");

  const escalate = (level: IssueLevel, code: string) =>
    strict && level === "warning" && STRICT_ESCALATE.has(code) ? "error" : level;

  /* ---------------- Globale Prüfungen (Hierarchie & Konfiguration) ---------------- */
  const global: Issue[] = [];
  const g = (level: IssueLevel, code: string, message: string) => global.push({ level: escalate(level, code), code, message });

  for (const file of getUnmappedFiles()) {
    g("error", "unmapped-file", `content/${file} passt zu keiner Landingpage in lib/hierarchy.ts (Pfad: kategorie/unterthema/seite.md).`);
  }
  const titleIndex = new Map<string, string[]>();
  for (const n of allPageNodes()) {
    const key = n.page.title.toLocaleLowerCase("de");
    titleIndex.set(key, [...(titleIndex.get(key) ?? []), n.id]);
  }
  for (const [, ids] of titleIndex) {
    if (ids.length > 1) g("warning", "hierarchy-duplicate-title", `Gleicher Seitentitel in der Hierarchie: ${ids.join(", ")} – Gefahr von Keyword-Kannibalisierung.`);
  }
  if (all.some((p) => p.status === "published" && p.donation)) {
    if (!donationConfig.url) g("warning", "donation-missing-url", "Spendenbox: Spendenlink fehlt (NEXT_PUBLIC_DONATION_URL).");
    if (!donationConfig.purpose) g("warning", "donation-missing-purpose", "Spendenbox: Spendenzweck fehlt (donationConfig.purpose in lib/site.ts).");
  }

  const hierarchyIds = new Set(allPageNodes().map((n) => n.id));

  /* ---------------- Verlinkung berechnen ---------------- */
  const validRoutes = new Set<string>([
    ...STATIC_ROUTES,
    ...hierarchy.map((c) => categoryPath(c.slug)),
    ...hierarchy.flatMap((c) => c.groups.map((gr) => groupPath(c.slug, gr.slug))),
    ...linkable.map((p) => p.href),
  ]);

  const inbound = new Map<string, number>(all.map((p) => [p.id, 0]));
  const rendered = new Map<string, Awaited<ReturnType<typeof renderPage>>>();

  for (const p of all) {
    const r = await renderPage(p, linkable);
    rendered.set(p.id, r);
    if (p.status !== "published") continue;
    const manual = extractInternalLinks(p.body)
      .map((href) => linkable.find((x) => x.href === href)?.id)
      .filter((s): s is string => Boolean(s));
    const liveRelated = p.related.filter((id) => linkable.some((x) => x.id === id));
    for (const id of new Set([...manual, ...r.autoLinked, ...liveRelated])) {
      if (id !== p.id) inbound.set(id, (inbound.get(id) ?? 0) + 1);
    }
  }
  // Geschwisterseiten im selben Unterthema verlinken sich über die Seitenleiste gegenseitig.
  for (const p of linkable) {
    const siblings = linkable.filter((x) => x.id !== p.id && x.category.slug === p.category.slug && x.group.slug === p.group.slug);
    if (siblings.length) inbound.set(p.id, (inbound.get(p.id) ?? 0) + siblings.length);
  }

  const seoTitles = new Map<string, number>();
  const keywords = new Map<string, string[]>();
  for (const p of all) {
    const t = p.seoTitle.toLocaleLowerCase("de");
    seoTitles.set(t, (seoTitles.get(t) ?? 0) + 1);
    const k = p.focusKeyword.toLocaleLowerCase("de");
    keywords.set(k, [...(keywords.get(k) ?? []), p.id]);
  }

  /* ---------------- Prüfungen je Seite ---------------- */
  const pages: PageAudit[] = all.map((p) => {
    const issues: Issue[] = [];
    const push = (level: IssueLevel, code: string, message: string) =>
      issues.push({ level: p.status === "published" ? escalate(level, code) : level, code, message });
    const r = rendered.get(p.id)!;
    const seoTitle = p.seoTitle;

    if ((seoTitles.get(seoTitle.toLocaleLowerCase("de")) ?? 0) > 1)
      push("error", "duplicate-title", "SEO-Titel ist doppelt vergeben – Suchmaschinen können die Seiten nicht unterscheiden.");

    // Meta-Daten
    if (seoTitle.length < 30) push("warning", "title-short", `SEO-Titel ist kurz (${seoTitle.length} Zeichen, ideal 30–60).`);
    if (seoTitle.length > 60) push("warning", "title-long", `SEO-Titel wird evtl. abgeschnitten (${seoTitle.length} Zeichen, ideal ≤ 60).`);
    if (p.description.length < 70) push("warning", "description-short", `Meta-Beschreibung ist kurz (${p.description.length} Zeichen, ideal 70–160).`);
    if (p.description.length > 160) push("warning", "description-long", `Meta-Beschreibung wird evtl. abgeschnitten (${p.description.length} Zeichen, ideal ≤ 160).`);

    // Suchbegriff
    if (!includesCI(seoTitle, p.focusKeyword)) push("warning", "keyword-title", `Hauptsuchbegriff „${p.focusKeyword}“ fehlt im SEO-Titel.`);
    if (!includesCI(p.description, p.focusKeyword)) push("info", "keyword-description", `Hauptsuchbegriff „${p.focusKeyword}“ fehlt in der Meta-Beschreibung.`);
    if (!includesCI(p.body.split(/\s+/).slice(0, 120).join(" "), p.focusKeyword))
      push("info", "keyword-intro", `Hauptsuchbegriff „${p.focusKeyword}“ kommt in der Einleitung nicht vor.`);
    const sameKeyword = (keywords.get(p.focusKeyword.toLocaleLowerCase("de")) ?? []).filter((id) => id !== p.id);
    if (sameKeyword.length) push("warning", "cannibalization", `Keyword-Kannibalisierung: gleicher Hauptsuchbegriff wie ${sameKeyword.join(", ")}.`);

    // Inhalt & Landingpage-Bausteine
    if (/^#\s/m.test(p.body)) push("error", "h1-in-body", "Der Text enthält eine H1 – der Titel ist bereits die H1. Bitte ## verwenden.");
    const h2 = r.headings.filter((h) => h.level === 2).length;
    if (h2 < 2) push("warning", "few-headings", `Nur ${h2} Zwischenüberschrift(en) (##). Mindestens 2 erleichtern das Lesen.`);
    if (p.wordCount < 300) push("warning", "thin-content", `Nur ${p.wordCount} Wörter – Inhalt wirkt dünn (Richtwert ≥ 300).`);
    if (p.faq.length === 0) push("info", "no-faq", "Landingpage ohne FAQ – Baustein „FAQ“ ergänzen.");
    if (!p.comparison) push("info", "no-comparison", "Landingpage ohne Vergleichstabelle – Baustein „Vergleich“ ergänzen, wenn sinnvoll.");
    if (p.comparison) {
      p.comparison.rows.forEach((row) => {
        if (row.values.length !== p.comparison!.columns.length)
          push("error", "comparison-columns", `Vergleich: Zeile „${row.label}“ hat ${row.values.length} statt ${p.comparison!.columns.length} Werte.`);
      });
    }

    // Links
    for (const href of extractInternalLinks(p.body)) {
      if (!validRoutes.has(href)) push("error", "broken-internal-link", `Defekter interner Link: ${href}`);
    }
    for (const id of p.related) {
      if (!hierarchyIds.has(id)) push("error", "related-missing", `„related“ verweist auf eine Seite, die es in der Hierarchie nicht gibt: ${id}`);
    }
    if (p.auto.seoTitle) push("info", "auto-seo-title", `SEO-Titel automatisch erzeugt: „${p.seoTitle}“.`);
    if (p.auto.description) push("info", "auto-description", "Meta-Beschreibung automatisch erzeugt – eine eigene Formulierung wirkt in Suchergebnissen meist besser.");
    if (p.status === "published" && (inbound.get(p.id) ?? 0) === 0)
      push("warning", "orphan", "Verwaiste Seite: Keine andere Seite verlinkt hierher. linkAnchors ergänzen oder manuell verlinken.");
    if (p.linkAnchors.length === 0) push("info", "no-anchors", "Keine linkAnchors – andere Seiten verlinken nur über das focusKeyword automatisch.");

    // Affiliate & Transparenz
    for (const id of new Set([...extractAffiliateIds(p.body), ...p.products])) {
      const product = getAffiliate(id);
      if (!product) push("error", "affiliate-unknown", `Unbekannte Affiliate-ID: ${id}`);
      else if (product.placeholder) push("warning", "affiliate-placeholder", `Affiliate-Link „${id}“ ist noch ein Platzhalter.`);
    }

    // Faktenprüfung
    if (p.factCheck.required) {
      if (p.sources.length === 0) push("warning", "missing-sources", "Keine Quellen angegeben – Fakten, Preise und rechtliche Aussagen müssen belegt sein.");
      if (p.factCheck.status !== "geprüft")
        push("warning", "factcheck-pending", "Faktenprüfung ausstehend: factCheck.status auf „geprüft“ setzen (mit reviewedBy/reviewedAt).");
      if (p.factCheck.status === "geprüft" && (!p.factCheck.reviewedBy || !p.factCheck.reviewedAt))
        push("warning", "factcheck-incomplete", "Faktenprüfung als geprüft markiert, aber ohne reviewedBy/reviewedAt.");
    }

    // Aktualität
    const lastCheck = p.factCheck.reviewedAt ?? p.updatedAt ?? p.publishedAt;
    const needsUpdate = p.status === "published" && addMonths(lastCheck, p.reviewIntervalMonths) < now;
    if (needsUpdate) push("warning", "stale", `Seit über ${p.reviewIntervalMonths} Monaten nicht geprüft – Inhalt auf Aktualität kontrollieren.`);

    const penalty = issues.reduce((sum, i) => sum + (i.level === "error" ? 25 : i.level === "warning" ? 8 : 2), 0);
    return {
      id: p.id,
      title: p.title,
      file: p.file,
      state: stateOf(p, now),
      publishedAt: p.publishedAt,
      issues,
      inboundLinks: inbound.get(p.id) ?? 0,
      outboundAutoLinks: r.autoLinked,
      needsUpdate,
      score: Math.max(0, 100 - penalty),
    };
  });

  /* ---------------- Abdeckung je Kategorie ---------------- */
  const coverage: CoverageRow[] = hierarchy.map((c) => {
    const inCat = all.filter((p) => p.category.slug === c.slug);
    return {
      slug: c.slug,
      title: c.title,
      planned: c.groups.reduce((n, gr) => n + gr.pages.length, 0),
      live: inCat.filter((p) => isLive(p, now)).length,
      inWork: inCat.filter((p) => !isLive(p, now)).length,
    };
  });

  const totals = { error: 0, warning: 0, info: 0 } as Record<IssueLevel, number>;
  for (const i of global) totals[i.level] += 1;
  for (const p of pages) for (const i of p.issues) totals[i.level] += 1;

  return { generatedAt: now, global, pages, coverage, totals };
}
