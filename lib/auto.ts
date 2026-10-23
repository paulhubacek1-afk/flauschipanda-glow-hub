/**
 * ============================================================================
 *  Automatik: Aus einem Seitentitel wird eine vollständige Landingpage
 * ============================================================================
 *
 *  Eingabe im Admin:  "Gesundes Hundefutter" (Unterthema: Hunde)
 *  Automatisch:       URL · Breadcrumb · interne Links · SEO-Titel · Meta-Beschreibung ·
 *                     verwandte Artikel · GreenCore-Box · Affiliate-Bereich (nur Money Pages)
 *
 * SEO-Titel und Meta-Beschreibung werden bei jedem Seitenaufruf neu berechnet, solange die
 * Felder im Admin leer sind – so bleibt z. B. die Jahreszahl immer aktuell.
 * Reine Funktionen ohne Datenbank-, Datei- oder React-Zugriffe.
 */
import { slugify } from "./hierarchy";

export type PageType = "money" | "traffic" | "standard";

export const SEO_TITLE_MAX = 60;
export const DESCRIPTION_MIN = 70;
export const DESCRIPTION_MAX = 160;

export const PAGE_TYPE_LABELS: Record<PageType, string> = {
  money: "Money Page",
  traffic: "Traffic Page",
  standard: "Standard",
};

interface AutoContext {
  categorySlug?: string;
  groupTitle?: string;
  pageType?: PageType;
  year?: number;
}

const visitCategories = new Set(["zoos", "freizeitparks"]);

/** Begleittext je Kategorie – sorgt für natürlich klingende Meta-Beschreibungen. */
const categoryPitch: Record<string, string> = {
  tiere: "worauf es wirklich ankommt, häufige Fragen und ein ehrlicher Vergleich",
  "babys-kinder": "praktische Tipps für Familien, Antworten auf häufige Fragen und ein Vergleich",
  "haushalt-wohnen": "einfache Tipps für den Alltag, häufige Fragen und ein Vergleich",
  "gesundheit-wohlbefinden": "alltagstaugliche Tipps und Antworten auf häufige Fragen – ohne Heilversprechen",
  ki: "Anleitung, Vorlagen zum Kopieren und Antworten auf häufige Fragen",
  creator: "praktische Strategien, Beispiele und Antworten auf häufige Fragen",
  "tools-apps": "die besten Optionen im Vergleich, kostenlose Alternativen und Tipps",
  "musik-entertainment": "Tipps, Empfehlungen und Antworten auf häufige Fragen",
  "finanzen-sparen": "verständliche Tipps, Beispiele und Antworten auf häufige Fragen",
  zoos: "Infos für die Planung, Tipps für den Besuch und Antworten auf häufige Fragen",
  freizeitparks: "Infos für die Planung, Tipps für den Besuch und Antworten auf häufige Fragen",
  "urlaub-reisen": "Planungshilfe, Checklisten und Antworten auf häufige Fragen",
  "autos-mobilitaet": "verständlich erklärt, mit Vergleich und Antworten auf häufige Fragen",
};

function fit(candidates: string[], max: number, min = 0) {
  for (const c of candidates) if (c.length <= max && c.length >= min) return c;
  const last = candidates[candidates.length - 1];
  return last.length > max ? `${last.slice(0, max - 1).trimEnd()}…` : last;
}

/**
 * SEO-Titel, z. B. „Gesundes Hundefutter 2026 – Tipps & Vergleich“ (Money Page).
 * Traffic Pages bekommen einen Wissens-Zusatz, Ausflugsziele einen Besuchs-Zusatz.
 */
export function autoSeoTitle(title: string, ctx: AutoContext = {}): string {
  const year = ctx.year ?? new Date().getFullYear();
  if (title.includes(":")) return fit([title], SEO_TITLE_MAX);
  if (ctx.pageType === "money") {
    return fit([`${title} ${year} – Tipps & Vergleich`, `${title} ${year} – Vergleich`, `${title} ${year}`, title], SEO_TITLE_MAX);
  }
  if (ctx.pageType === "traffic") {
    return fit([`${title}: Fakten & Wissen einfach erklärt`, `${title}: Fakten & Wissen`, `${title} – einfach erklärt`, title], SEO_TITLE_MAX);
  }
  if (ctx.categorySlug && visitCategories.has(ctx.categorySlug)) {
    return fit([`${title}: Infos & Tipps für deinen Besuch`, `${title}: Infos & Tipps`, title], SEO_TITLE_MAX);
  }
  if (ctx.categorySlug === "urlaub-reisen") return fit([`${title}: Tipps & Checkliste`, `${title} – Tipps`, title], SEO_TITLE_MAX);
  return fit([`${title}: Ratgeber, Tipps & Vergleich`, `${title}: Tipps & Vergleich`, `${title} – Ratgeber`, title], SEO_TITLE_MAX);
}

/** Meta-Beschreibung (70–160 Zeichen): Suchbegriff + Nutzen + Marke. */
export function autoDescription(title: string, ctx: AutoContext = {}): string {
  const year = ctx.year ?? new Date().getFullYear();
  const pitch = (ctx.categorySlug && categoryPitch[ctx.categorySlug]) ?? "Tipps, Vergleich und Antworten auf häufige Fragen";
  const candidates =
    ctx.pageType === "money"
      ? [
          `${title}: Worauf du achten solltest, ehrlicher Vergleich und Antworten auf häufige Fragen – Stand ${year}. Panda Toolbox.`,
          `${title}: Worauf du achten solltest, ehrlicher Vergleich und häufige Fragen – Stand ${year}.`,
        ]
      : ctx.pageType === "traffic"
        ? [
            `${title}: spannende Fakten, einfach erklärt – mit Antworten auf häufige Fragen. Entdecke mehr in der Panda Toolbox.`,
            `${title}: spannende Fakten, einfach erklärt – mit Antworten auf häufige Fragen.`,
          ]
        : [`${title}: ${pitch}. Verständlich erklärt in der Panda Toolbox.`, `${title}: ${pitch}.`];
  candidates.push(`${title} – ${ctx.groupTitle ? `${ctx.groupTitle}-Ratgeber` : "Ratgeber"} mit Tipps und FAQ in der Panda Toolbox.`);
  return fit(candidates, DESCRIPTION_MAX, DESCRIPTION_MIN);
}

/** Ankertexte, über die andere Seiten automatisch hierher verlinken. */
export function autoLinkAnchors(page: { title: string; label?: string | null }): string[] {
  const set = new Set<string>([page.title]);
  const label = page.label?.trim();
  if (label && label !== page.title && label.length > 6 && !/^(faq|tipps|tickets|preise|hotels|prompts)\b/i.test(label)) {
    set.add(label);
  }
  return [...set];
}

/** URL aus Kategorie, Unterthema und Seite: /tiere/hunde/gesundes-hundefutter */
export function buildPath(categorySlug: string, groupSlug: string, pageSlugOrTitle: string) {
  return `/${categorySlug}/${groupSlug}/${slugify(pageSlugOrTitle)}`;
}

/** Breadcrumb-Text, wie er im Admin als Vorschau erscheint. */
export function breadcrumbText(categoryTitle: string, groupTitle: string, label: string) {
  return ["Start", categoryTitle, groupTitle, label].join(" › ");
}
