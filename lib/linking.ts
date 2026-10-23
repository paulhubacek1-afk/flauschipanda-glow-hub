import type { Page } from "./content";

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
 * im selben Unterthema und "Weiterlesen" nach thematischer Nähe.
 */
export const MAX_AUTO_LINKS = 5;

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

export function affinity(a: Page, b: Page) {
  let score = 0;
  if (a.category.slug === b.category.slug) score += 2;
  if (a.category.slug === b.category.slug && a.group.slug === b.group.slug) score += 3;
  score += a.tags.filter((t) => b.tags.includes(t)).length;
  if (a.related.includes(b.id)) score += 4;
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
