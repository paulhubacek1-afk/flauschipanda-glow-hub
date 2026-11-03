/** Redaktionelle Vorteile und Nachteile. Automatische Allgemeinplätze werden nicht angezeigt. */
export interface ProsConsData {
  pros: string[];
  cons: string[];
  note?: string;
  /** false, wenn der Artikel bereits eigene Vor-/Nachteile im Fließtext enthält. */
  display?: boolean;
}

function pointsFromSection(markdown: string, headings: string[]): string[] {
  const lines = markdown.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(/^##\s+(.+)$/);
    if (!heading || !headings.some((item) => item.toLocaleLowerCase("de") === heading[1].trim().toLocaleLowerCase("de"))) continue;
    const points: string[] = [];
    for (let j = i + 1; j < lines.length && !/^##\s+/.test(lines[j]); j++) {
      const item = lines[j].match(/^\s*(?:[-*+]\s+|\d+[.)]\s+)(.+)$/);
      if (item?.[1]?.trim()) points.push(item[1].replace(/\*\*/g, "").trim());
      if (points.length === 5) break;
    }
    if (points.length) return points;
  }
  return [];
}

function storedPoints(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((x) => String(x).trim()).filter(Boolean).slice(0, 5);
  if (typeof value === "string") return value.split(/\r?\n/).map((x) => x.trim()).filter(Boolean).slice(0, 5);
  return [];
}

/**
 * Ermittelt nur Punkte, die tatsächlich im Artikel stehen.
 * Fehlen konkrete Listen, wird keine künstliche Vor-/Nachteile-Box erzeugt.
 */
export function createProsCons(_path: string, _title: string, markdown = ""): ProsConsData {
  const pros = pointsFromSection(markdown, ["Vorteile", "Was dafür spricht", "Pluspunkte"]);
  const cons = pointsFromSection(markdown, ["Nachteile", "Nachteile und Grenzen", "Grenzen"]);
  if (pros.length >= 2 && cons.length >= 2) {
    return { pros, cons, display: false };
  }
  return { pros: [], cons: [], display: false };
}

const generatedNotes = new Set([
  "Die Punkte sind eine allgemeine Orientierung. Prüfe bei wichtigen Entscheidungen immer die aktuelle Situation und passende Originalquellen.",
  "Zusammenfassung der wichtigsten Vor- und Nachteile.",
  "Die Punkte fassen die wichtigsten Aspekte des Artikels zusammen.",
]);

/** Einheitlicher Resolver für CMS-Werte und tatsächlich im Artikel vorhandene Listen. */
export function resolveProsCons(
  value: unknown,
  _path: string,
  _title: string,
  markdown = "",
): ProsConsData {
  const inlinePros = pointsFromSection(markdown, ["Vorteile", "Was dafür spricht", "Pluspunkte"]);
  const inlineCons = pointsFromSection(markdown, ["Nachteile", "Nachteile und Grenzen", "Grenzen"]);
  if (inlinePros.length >= 2 && inlineCons.length >= 2) {
    return { pros: inlinePros, cons: inlineCons, display: false };
  }

  const stored = (value ?? {}) as { pros?: unknown; cons?: unknown; note?: unknown };
  const pros = storedPoints(stored.pros);
  const cons = storedPoints(stored.cons);
  const note = typeof stored.note === "string" ? stored.note.trim() : "";
  if (!pros.length || !cons.length || generatedNotes.has(note)) {
    return { pros: [], cons: [], display: false };
  }

  return { pros, cons, note: note || undefined, display: true };
}
