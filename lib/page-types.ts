import type { PageType } from "./auto";

/**
 * Startwerte für die Kennzeichnung beim Import (danach im Admin pro Seite änderbar).
 *
 * 💰 Money Pages – später Affiliate-Potenzial
 * 📈 Traffic Pages – bringen Besucher
 *
 * Einträge sind Seiten-IDs (kategorie/unterthema/seite) oder Muster mit * als Platzhalter.
 */
export const MONEY_PAGES = [
  "tiere/hunde/gesundes-hundefutter",
  "tiere/hunde/hundebetten",
  "tiere/hunde/hundeversicherung",
  "tiere/katzen/gesundes-katzenfutter",
  "tiere/katzen/trockenfutter",
  "tiere/katzen/nassfutter",
  "ki/chatgpt/prompts",
  "ki/bildgeneratoren/bildgeneratoren-im-vergleich",
  "tools-apps/canva-alternativen/kostenlose-canva-alternativen",
  "tools-apps/canva-alternativen/canva-alternativen-im-vergleich",
  "tools-apps/keyword-tools/kostenlose-keyword-tools",
  "tools-apps/keyword-tools/keyword-tools-im-vergleich",
  "freizeitparks/europa-park/tickets",
  "freizeitparks/phantasialand/tickets",
  "zoos/zoo-berlin/tickets",
  "zoos/*/hotels",
  "urlaub-reisen/familienurlaub/familienhotels",
  "autos-mobilitaet/zubehoer/nuetzliche-auto-gadgets-apps",
  "autos-mobilitaet/zubehoer/dashcams",
  "autos-mobilitaet/zubehoer/kindersitze",
  "finanzen-sparen/budget/budget-apps",
  "finanzen-sparen/finanz-basics/girokonto-vergleichen",
];

export const TRAFFIC_PAGES = [
  "tiere/pandas/steckbrief",
  "tiere/pandas/fakten-fuer-kinder",
  "tiere/woelfe/steckbrief",
  "tiere/woelfe/fakten-fuer-kinder",
  "tiere/fuechse/steckbrief",
  "tiere/fuechse/fakten-fuer-kinder",
  "tiere/pinguine/steckbrief",
  "tiere/pinguine/fakten-fuer-kinder",
  "*/*/*malvorlagen*",
  "ki/ki-basics/*",
  "gesundheit-wohlbefinden/achtsamkeit/achtsamkeit-lernen",
  "gesundheit-wohlbefinden/achtsamkeit/meditation-fuer-einsteiger",
  "gesundheit-wohlbefinden/achtsamkeit/motivation-finden",
  "gesundheit-wohlbefinden/achtsamkeit/positive-routinen",
];

function matches(pattern: string, id: string) {
  const re = new RegExp(`^${pattern.split("*").map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&")).join("[^/]*")}$`);
  return re.test(id);
}

export function pageTypeFor(id: string): PageType {
  if (MONEY_PAGES.some((p) => matches(p, id))) return "money";
  if (TRAFFIC_PAGES.some((p) => matches(p, id))) return "traffic";
  return "standard";
}
