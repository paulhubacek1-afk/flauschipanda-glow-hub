import type { Page } from "./cms";

/**
 * Interne Verlinkung – Regeln
 * ---------------------------
 * 1. Jede Seite definiert `linkAnchors`: Formulierungen, über die andere
 *    Seiten auf sie verlinken dürfen (plus ihr focusKeyword).
 * 2. Pro Zielseite höchstens EIN automatischer Link, pro Absatz höchstens einer,
 *    insgesamt höchstens MAX_AUTO_LINKS je Seite – damit der Text lesbar bleibt.
 * 3. Nie in Überschriften, bestehenden Links, Tabellen oder Code; nie auf sich selbst.
 * 4. Bereits manuell verlinkte Ziele werden nicht doppelt verlinkt.
 * 5. Treffer nur an Wortgrenzen (Unicode-sicher, also auch für Umlaute).
 * 6. Bei Gleichstand gewinnt die thematisch nähere Seite (gleiches Unterthema > gleiche Kategorie).
 *
 * Zusätzlich verbindet die Hierarchie automatisch: Breadcrumbs, Geschwisterseiten
 * im selben Unterthema und "Weiterlesen" nach thematischer Nähe (Traffic → Money Pages).
 */
export const MAX_AUTO_LINKS = 6;

/**
 * Unterthemen als Linkziele (Hub-Seiten): Nennt ein Text z. B. „Europa-Park“, „Zoo Berlin“,
 * „ChatGPT“ oder „Katzen“, verlinkt er auf die Übersichtsseite dieses Unterthemas.
 * Nur eindeutige Namen – allgemeine Wörter wie „Sparen“ oder „Pflege“ würden falsch verlinken.
 */
const HUB_CATEGORIES = new Set(["tiere", "zoos", "freizeitparks", "ki"]);
const HUB_EXTRA = new Set(["urlaub-reisen/mit-hund", "creator/youtube", "panda-branding/greentech"]);
const HUB_SKIP = /&|ratgeber|basics|malvorlagen|prompts|tierwissen|tier-ki/i;

export function buildGroupTargets(source: Page, candidates: Page[]): LinkTarget[] {
  const seen = new Map<string, LinkTarget>();
  for (const c of candidates) {
    const key = `${c.category.slug}/${c.group.slug}`;
    if (seen.has(key) || key === `${source.category.slug}/${source.group.slug}`) continue;
    if (!(HUB_CATEGORIES.has(c.category.slug) || HUB_EXTRA.has(key)) || HUB_SKIP.test(c.group.title) || c.group.title.length < 4) continue;
    seen.set(key, {
      id: `gruppe:${key}`,
      href: `/${key}`,
      title: c.group.title,
      anchors: [c.group.title],
      affinity: c.category.slug === source.category.slug ? 2 : 0,
    });
  }
  return [...seen.values()];
}

export interface LinkTarget {
  id: string;
  href: string;
  title: string;
  anchors: string[];
  affinity: number;
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const regexCache = new Map<string, RegExp>();
export function anchorRegex(anchor: string) {
  let re = regexCache.get(anchor);
  if (!re) {
    re = new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(anchor)}(?![\\p{L}\\p{N}])`, "iu");
    regexCache.set(anchor, re);
  }
  return re;
}

/**
 * Themen, die über Kategoriegrenzen hinweg zusammengehören – damit Besucher auch von
 * „Hunde“ zu „Urlaub mit Hund“ oder von „Autos“ zu „Finanzen“ finden.
 */
const RELATED_CATEGORIES: [string, string][] = [
  ["tiere", "zoos"],
  ["babys-kinder", "freizeitparks"],
  ["babys-kinder", "zoos"],
  ["zoos", "freizeitparks"],
  ["autos-mobilitaet", "finanzen-sparen"],
  ["haushalt-wohnen", "finanzen-sparen"],
  ["ki", "creator"],
  ["ki", "tools-apps"],
  ["creator", "tools-apps"],
  ["creator", "musik-entertainment"],
  ["urlaub-reisen", "freizeitparks"],
  ["gesundheit-wohlbefinden", "haushalt-wohnen"],
];
const RELATED_GROUPS: [string, string][] = [
  ["tiere/hunde", "urlaub-reisen/mit-hund"],
  ["tiere/pandas", "zoos/tiergarten-schoenbrunn"],
  ["tiere/pandas", "zoos/zoo-berlin"],
  ["tiere/pandas", "panda-branding/panda-designs"],
  ["babys-kinder/ausfluege", "freizeitparks/ratgeber"],
  ["babys-kinder/ausfluege", "zoos/ratgeber"],
  ["urlaub-reisen/familienurlaub", "babys-kinder/ausfluege"],
  ["haushalt-wohnen/sparen-im-haushalt", "finanzen-sparen/sparen"],
  ["autos-mobilitaet/sparen", "finanzen-sparen/sparen"],
  ["autos-mobilitaet/kosten-vergleiche", "tools-apps/rechner"],
  ["finanzen-sparen/budget", "tools-apps/rechner"],
];
const pairHas = (pairs: [string, string][], x: string, y: string) => pairs.some(([a, b]) => (a === x && b === y) || (a === y && b === x));

export function affinity(a: Page, b: Page) {
  let score = 0;
  if (pairHas(RELATED_CATEGORIES, a.category.slug, b.category.slug)) score += 1;
  if (pairHas(RELATED_GROUPS, `${a.category.slug}/${a.group.slug}`, `${b.category.slug}/${b.group.slug}`)) score += 3;
  if (a.category.slug === b.category.slug) score += 2;
  if (a.category.slug === b.category.slug && a.group.slug === b.group.slug) score += 3;
  score += a.tags.filter((t) => b.tags.includes(t)).length;
  if (a.related.includes(b.id)) score += 4;
  // Traffic Pages führen Besucher bevorzugt zu Money Pages derselben Kategorie
  if (a.pageType === "traffic" && b.pageType === "money" && a.category.slug === b.category.slug) score += 2;
  return score;
}

export function buildLinkTargets(source: Page, candidates: Page[]): LinkTarget[] {
  return candidates
    .filter((c) => c.id !== source.id && !c.noindex)
    .map((c) => {
      const anchors = Array.from(new Set([...c.linkAnchors, c.focusKeyword].map((s) => s.trim()).filter(Boolean)))
        // längere Anker zuerst, damit "Elektroauto laden" vor "Elektroauto" greift
        .sort((x, y) => y.length - x.length);
      return { id: c.id, href: c.href, title: c.title, anchors, affinity: affinity(source, c) };
    })
    .filter((t) => t.anchors.length > 0);
}

export interface AnchorMatch {
  target: LinkTarget;
  index: number;
  length: number;
  text: string;
}

/** Findet den frühesten passenden Anker im Text (bei Gleichstand: längerer Anker, höhere Affinität). */
export function findFirstMatch(text: string, targets: LinkTarget[]): AnchorMatch | null {
  let best: AnchorMatch | null = null;
  for (const target of targets) {
    for (const anchor of target.anchors) {
      const m = anchorRegex(anchor).exec(text);
      if (!m) continue;
      const candidate = { target, index: m.index, length: m[0].length, text: m[0] };
      if (
        !best ||
        candidate.index < best.index ||
        (candidate.index === best.index && candidate.length > best.length) ||
        (candidate.index === best.index && candidate.length === best.length && candidate.target.affinity > best.target.affinity)
      ) {
        best = candidate;
      }
    }
  }
  return best;
}

/** Weiterlesen: zuerst manuelle `related`, dann nach thematischer Nähe. */
export function getRelatedPages(source: Page, live: Page[], limit = 3): Page[] {
  const others = live.filter((p) => p.id !== source.id);
  const manual = source.related.map((id) => others.find((p) => p.id === id)).filter((p): p is Page => Boolean(p));
  const scored = others
    .filter((p) => !manual.includes(p))
    .map((p) => ({ p, score: affinity(source, p) }))
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score || y.p.publishedAt.getTime() - x.p.publishedAt.getTime())
    .map((x) => x.p);
  return [...manual, ...scored].slice(0, limit);
}

/** Interne Links aus dem Markdown-Rohtext (manuell gesetzt). */
export function extractInternalLinks(markdown: string): string[] {
  const links: string[] = [];
  const re = /\]\((\/[^)\s#?]*)(?:[#?][^)\s]*)?(?:\s+"[^"]*")?\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(markdown))) links.push(m[1].replace(/\/$/, "") || "/");
  return links;
}

export function extractAffiliateIds(markdown: string): string[] {
  const ids: string[] = [];
  const re = /\]\(aff:([a-z0-9-]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(markdown))) ids.push(m[1]);
  return ids;
}

/**
 * „Passend dazu“-Kasten mitten im Artikel: bevorzugt ein passender Rechner und Ratgeber aus
 * anderen Bereichen (die „Weiterlesen“-Karten am Ende zeigen schon das eigene Thema).
 */
export function getInlineLinks(source: Page, live: Page[], toolHrefs: string[], exclude: string[], limit = 3) {
  const out: { href: string; title: string; kind: "tool" | "page" }[] = [];
  const skip = new Set([source.href, ...exclude]);
  for (const href of toolHrefs) {
    const tool = live.find((p) => p.href === href);
    if (tool && !skip.has(href)) {
      out.push({ href, title: tool.title, kind: "tool" });
      skip.add(href);
      break;
    }
  }
  const scored = live
    .filter((p) => !skip.has(p.href) && !p.noindex)
    .map((p) => ({ p, score: affinity(source, p) + (p.category.slug !== source.category.slug ? 0.5 : 0) }))
    .filter((x) => x.score > 0)
    .sort((x, y) => y.score - x.score);
  // erst Seiten aus anderen Kategorien bzw. Unterthemen, dann Geschwister
  const cross = scored.filter((x) => x.p.group.slug !== source.group.slug || x.p.category.slug !== source.category.slug);
  const same = scored.filter((x) => !cross.includes(x));
  for (const { p } of [...cross, ...same]) {
    if (out.length >= limit) break;
    out.push({ href: p.href, title: p.title, kind: "page" });
  }
  return out;
}

/** Verwandte Unterthemen in anderen Kategorien (für die Übersichtsseiten der Unterthemen). */
export function relatedGroupKeys(categorySlug: string, groupSlug: string, allGroupKeys: string[], limit = 6): string[] {
  const key = `${categorySlug}/${groupSlug}`;
  const direct = RELATED_GROUPS.flatMap(([a, b]) => (a === key ? [b] : b === key ? [a] : []));
  const cats = RELATED_CATEGORIES.flatMap(([a, b]) => (a === categorySlug ? [b] : b === categorySlug ? [a] : []));
  const byCat = allGroupKeys.filter((k) => cats.includes(k.split("/")[0]));
  return [...new Set([...direct, ...byCat])].filter((k) => allGroupKeys.includes(k)).slice(0, limit);
}
