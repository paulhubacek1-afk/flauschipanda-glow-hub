/**
 * ============================================================================
 *  Automatik: Aus einem Seitentitel wird eine vollständige Landingpage
 * ============================================================================
 *
 *  Eingabe:  "Gesundes Hundefutter"
 *  Ergebnis: SEO-Titel · Meta-Beschreibung · verwandte Seiten · Affiliate-Box ·
 *            Spendenbox · Panda-GreenCore-Hinweis
 *
 * Diese Funktionen werden an zwei Stellen genutzt:
 *  1. beim Anlegen einer Seite (Generator: `npm run neu` und /redaktion/neu)
 *  2. zur Laufzeit als Rückfallebene, wenn in der Frontmatter etwas fehlt
 *
 * Reine Funktionen, keine Datei- oder React-Zugriffe.
 */
import { affiliateProducts } from "./affiliate";
import { allPageNodes, slugify, type CategoryNode, type GroupNode, type PageNode } from "./hierarchy";

export const SEO_TITLE_MAX = 60;
export const DESCRIPTION_MIN = 70;
export const DESCRIPTION_MAX = 160;

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
  "projekte-community": "alles Wichtige auf einen Blick",
  "panda-branding": "alles Wichtige auf einen Blick",
};

/** SEO-Titel: Suchbegriff vorne, ergänzt um einen Nutzenhinweis – max. 60 Zeichen. */
export function autoSeoTitle(title: string, category?: CategoryNode): string {
  const suffixes =
    category?.slug === "zoos" || category?.slug === "freizeitparks"
      ? [": Infos & Tipps für deinen Besuch", ": Infos & Tipps", " – Tipps"]
      : category?.slug === "urlaub-reisen"
        ? [": Tipps & Checkliste", " – Tipps"]
      : category?.slug === "tools-apps" || category?.slug === "ki"
        ? [": Anleitung, Tipps & Vergleich", ": Tipps & Vergleich", " – Ratgeber"]
        : [": Ratgeber, Tipps & Vergleich", ": Tipps & Vergleich", " – Ratgeber"];
  for (const s of suffixes) {
    if (title.includes(":")) break; // Titel hat schon einen Zusatz
    const candidate = `${title}${s}`;
    if (candidate.length <= SEO_TITLE_MAX) return candidate;
  }
  return title.length <= SEO_TITLE_MAX ? title : `${title.slice(0, SEO_TITLE_MAX - 1).trimEnd()}…`;
}

/** Meta-Beschreibung: Suchbegriff + Nutzen + Marke, 70–160 Zeichen. */
export function autoDescription(title: string, category?: CategoryNode, group?: GroupNode): string {
  const pitch = (category && categoryPitch[category.slug]) ?? "Tipps, Vergleich und Antworten auf häufige Fragen";
  const candidates = [
    `${title}: ${pitch}. Verständlich erklärt in der Panda Toolbox.`,
    `${title}: ${pitch}.`,
    `${title} – ${group ? `${group.title}-Ratgeber` : "Ratgeber"} mit Tipps und FAQ.`,
  ];
  for (const c of candidates) {
    if (c.length >= DESCRIPTION_MIN && c.length <= DESCRIPTION_MAX) return c;
  }
  const fallback = candidates[candidates.length - 1];
  return fallback.length > DESCRIPTION_MAX ? `${fallback.slice(0, DESCRIPTION_MAX - 1).trimEnd()}…` : fallback;
}

/** Ankertexte, über die andere Seiten automatisch hierher verlinken. */
export function autoLinkAnchors(page: PageNode): string[] {
  const set = new Set<string>([page.title]);
  if (page.label !== page.title && page.label.length > 6 && !/^(faq|tipps|tickets|preise|hotels)/i.test(page.label)) {
    set.add(page.label);
  }
  return [...set];
}

/**
 * Verwandte Seiten aus der Hierarchie: zuerst Nachbarseiten im selben Unterthema,
 * dann thematisch passende Seiten aus anderen Kategorien (gleiche Schlüsselwörter im Titel).
 */
export function autoRelatedIds(categorySlug: string, groupSlug: string, pageSlug: string, limit = 4): string[] {
  const nodes = allPageNodes();
  const self = nodes.find((n) => n.category.slug === categorySlug && n.group.slug === groupSlug && n.page.slug === pageSlug);
  if (!self) return [];
  const siblings = nodes.filter((n) => n.category.slug === categorySlug && n.group.slug === groupSlug && n.id !== self.id);

  const words = slugify(self.page.title)
    .split("-")
    .filter((w) => w.length > 4 && !GENERIC_WORDS.has(w));
  const crossLinks = nodes
    .filter((n) => n.category.slug !== categorySlug)
    .map((n) => ({ n, hits: words.filter((w) => n.id.includes(w)).length }))
    .filter((x) => x.hits > 0)
    .sort((a, b) => b.hits - a.hits)
    .map((x) => x.n);

  return [...siblings.slice(0, Math.max(2, limit - crossLinks.length)), ...crossLinks]
    .slice(0, limit)
    .map((n) => n.id);
}

/** Zu allgemeine Wörter erzeugen keine Querverweise zwischen Kategorien. */
const GENERIC_WORDS = new Set([
  "kostenlose", "kostenlos", "beste", "besten", "tipps", "ratgeber", "vergleich", "planen", "tickets", "hotels",
  "preise", "anleitung", "einsteiger", "naehe", "fuer", "alltag", "faq", "standorte", "kindern",
  "europa", "oesterreich", "deutschland",
]);

/** Affiliate-Produkte, die laut Register zum Unterthema oder zur Kategorie passen (max. 3). */
export function autoProducts(categorySlug: string, groupSlug: string, limit = 3): string[] {
  const exact = affiliateProducts.filter((p) => p.topics.includes(`${categorySlug}/${groupSlug}`));
  const broad = affiliateProducts.filter((p) => !exact.includes(p) && p.topics.includes(categorySlug));
  return [...exact, ...broad].slice(0, limit).map((p) => p.id);
}

/** Findet Landingpages in der Hierarchie anhand eines eingegebenen Titels. */
export function findPageNodes(query: string) {
  const q = slugify(query);
  if (!q) return [];
  const nodes = allPageNodes();
  const exact = nodes.filter((n) => slugify(n.page.title) === q || slugify(n.page.label) === q || n.id === query.trim());
  if (exact.length) return exact;
  return nodes.filter((n) => slugify(n.page.title).includes(q) || n.id.includes(q)).slice(0, 12);
}
