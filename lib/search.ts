/**
 * Suche über Seiten, Unterthemen und Kategorien – läuft komplett im Browser.
 * Reine Funktionen (keine React-/DOM-Zugriffe), damit sie leicht testbar sind.
 */

export interface SearchItem {
  kind: "seite" | "unterthema" | "kategorie";
  title: string;
  /** z. B. „Tiere › Hunde“ */
  context: string;
  description?: string;
  href: string;
  /** zusätzliche Suchbegriffe (Hauptsuchbegriff, Tags …) */
  extra?: string;
}

/** Zwei Schreibweisen je Text: „für“ → „fur“ und „fuer“, damit beides gefunden wird. */
function variants(s: string): [string, string] {
  const lower = s.toLocaleLowerCase("de").replace(/ß/g, "ss");
  const expanded = lower.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue");
  const stripped = lower.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return [expanded, stripped];
}

/**
 * Bindestriche ignorieren: „Auto-Gadgets“ = „autogadgets“. Leerzeichen bleiben bewusst erhalten,
 * sonst würden Wortgrenzen verschmelzen („Hund Erstausstattung“ → „hunderst…“ = falscher Treffer).
 */
const squash = (s: string) => s.replace(/[-‐‑–—_/.]+/g, "");

interface Prepared {
  item: SearchItem;
  title: [string, string];
  all: [string, string];
  allSquashed: [string, string];
}

export function prepareIndex(items: SearchItem[]): Prepared[] {
  return items.map((item) => {
    const all = variants([item.title, item.context, item.description ?? "", item.extra ?? ""].join(" "));
    return { item, title: variants(item.title), all, allSquashed: [squash(all[0]), squash(all[1])] };
  });
}

const MAX_QUERY = 100;

/**
 * Jeder Suchbegriff muss vorkommen (UND-Suche). Sortierung: Titel-Treffer vor Text-Treffern,
 * Titel-Anfang vor Titel-Mitte, Seiten vor Unterthemen vor Kategorien.
 */
export function search(index: Prepared[], rawQuery: string, limit = 20): SearchItem[] {
  const query = rawQuery.slice(0, MAX_QUERY).trim();
  if (!query) return [];
  const terms = query
    .split(/\s+/)
    .map((t) => variants(t))
    .filter(([a]) => squash(a).length > 0);
  if (!terms.length) return [];

  const kindRank = { seite: 0, unterthema: 1, kategorie: 2 } as const;
  const scored: { item: SearchItem; score: number }[] = [];

  for (const p of index) {
    let score = 0;
    let ok = true;
    for (const [a, b] of terms) {
      const sa = squash(a);
      const sb = squash(b);
      const inText =
        p.all[0].includes(a) || p.all[1].includes(b) || p.allSquashed[0].includes(sa) || p.allSquashed[1].includes(sb);
      if (!inText) {
        ok = false;
        break;
      }
      const ti = Math.max(p.title[0].indexOf(a), p.title[1].indexOf(b));
      if (p.title[0].startsWith(a) || p.title[1].startsWith(b)) score += 6;
      else if (ti >= 0) score += 4;
      else score += 1;
    }
    if (!ok) continue;
    score -= kindRank[p.item.kind] * 0.5;
    scored.push({ item: p.item, score });
  }

  scored.sort((x, y) => y.score - x.score || x.item.title.localeCompare(y.item.title, "de"));
  return scored.slice(0, limit).map((s) => s.item);
}

/** Text in Teile zerlegen, damit Treffer hervorgehoben werden können (ohne HTML-Einschleusung). */
export function highlightParts(text: string, rawQuery: string): { text: string; hit: boolean }[] {
  const terms = rawQuery
    .slice(0, MAX_QUERY)
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!terms.length) return [{ text, hit: false }];
  const splitter = new RegExp(`(${terms.join("|")})`, "iu");
  const isHit = new RegExp(`^(?:${terms.join("|")})$`, "iu");
  return text
    .split(splitter)
    .filter(Boolean)
    .map((part) => ({ text: part, hit: isHit.test(part) }));
}
