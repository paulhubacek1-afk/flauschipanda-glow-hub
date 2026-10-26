/**
 * Skins für Flauschipanda – Fellfarben und Outfits, freischaltbar mit gesammeltem Bambus.
 * (Ohne "use client", damit auch Server-Komponenten die Liste lesen können.)
 */

export interface SkinPalette {
  /** helles Fell */
  fur: string;
  /** Schattierung am Rand des hellen Fells */
  furEdge: string;
  /** dunkle Flecken (Ohren, Augen, Arme, Beine) */
  ink: string;
  /** Pfotenballen / Sohlen */
  inkSoft: string;
  /** Wangen */
  cheek: string;
  /** Halstuch (Verlauf von → bis) */
  scarf: [string, string];
}

export type SkinExtra =
  | "chef"
  | "pirate"
  | "wizard"
  | "cape"
  | "crown"
  | "party"
  | "witch"
  | "santa"
  | "flower"
  | "ki"
  | "safari"
  | "racer"
  | "beach"
  | "sprout"
  | "cat"
  | "sunrays"
  | "hood"
  | "bamboo"
  | "sun"
  | "night";

/** Accessoires (Baukasten) */
export type SkinAcc = "none" | "sunglasses" | "nerd" | "bowtie" | "headset" | "whiskers";

/** Themen-Skin: wird durch Besuche in einem Bereich der Website freigeschaltet (statt mit Bambus). */
export interface SkinVisitGoal {
  /** Kategorie (erster Teil der URL) */
  category: string;
  /** optional: nur Seiten unter diesem Pfad zählen */
  prefix?: string;
  /** nur Artikel (3-teilige URL) zählen */
  articles?: boolean;
  count: number;
  /** Anzeige, z. B. „KI-Artikel gelesen“ */
  text: string;
}

export interface Skin {
  key: string;
  name: string;
  emoji: string;
  /** ab so viel Bambus freigeschaltet */
  at: number;
  /** nur in einem Zeitraum verfügbar (Monat 1–12, Tag) – dann für alle frei */
  season?: { from: [number, number]; to: [number, number] };
  palette?: Partial<SkinPalette>;
  extra?: SkinExtra;
  /** Fell mit Sternen (Galaxie) */
  stars?: boolean;
  /** leuchtender Umriss (Mitternacht) */
  neon?: boolean;
  /** Themen-Skin: Freischaltung durch Besuche statt Bambus */
  visits?: SkinVisitGoal;
  /** Accessoire (Brille, Fliege …) */
  acc?: SkinAcc;
  /** Farbe des Leucht-Umrisses (Standard: Türkis) */
  neonColor?: string;
}

const TEAL = "oklch(0.86 0.14 195)";
const PURPLE = "oklch(0.72 0.19 300)";

export const BASE_PALETTE: SkinPalette = {
  fur: "#fbf8ff",
  furEdge: "#e4def0",
  ink: "#1d1a2b",
  inkSoft: "#3a3550",
  cheek: "#ff8fc6",
  scarf: [TEAL, PURPLE],
};

export const SKINS: Skin[] = [
  { key: "klassisch", name: "Klassisch", emoji: "🐼", at: 0 },
  {
    key: "schoko",
    name: "Schoko-Panda",
    emoji: "🍫",
    at: 5,
    palette: { fur: "#fff6ec", furEdge: "#ecd6c0", ink: "#5b3a28", inkSoft: "#7a5240", cheek: "#ff9f9f" },
  },
  { key: "party", name: "Party-Panda", emoji: "🎉", at: 15, extra: "party" },
  {
    key: "rosa",
    name: "Zuckerwatte",
    emoji: "🍬",
    at: 25,
    palette: { fur: "#fff1f8", furEdge: "#f7c6dc", ink: "#6d3a62", inkSoft: "#8a5280", cheek: "#ff7fb8", scarf: ["#ffd1e8", "#c9a6ff"] },
  },
  { key: "blume", name: "Blumenkind", emoji: "🌸", at: 30, extra: "flower" },
  { key: "koch", name: "Koch-Panda", emoji: "👨‍🍳", at: 40, extra: "chef" },
  {
    key: "eis",
    name: "Eis-Panda",
    emoji: "🧊",
    at: 60,
    palette: { fur: "#f3fbff", furEdge: "#c4e5f6", ink: "#27496d", inkSoft: "#3f6690", cheek: "#9fd8ff", scarf: ["#bdf3ff", "#7fb6ff"] },
  },
  { key: "pirat", name: "Piraten-Panda", emoji: "🏴‍☠️", at: 80, extra: "pirate" },
  { key: "regenbogen", name: "Regenbogen", emoji: "🌈", at: 120, palette: { scarf: ["#ff6b6b", "#7c6bff"] } },
  { key: "zauberer", name: "Zauberer", emoji: "🪄", at: 150, extra: "wizard" },
  { key: "held", name: "Super-Panda", emoji: "🦸", at: 200, extra: "cape" },
  {
    key: "mitternacht",
    name: "Mitternacht",
    emoji: "🌙",
    at: 300,
    neon: true,
    palette: { fur: "#3a3358", furEdge: "#231e38", ink: "#0e0b18", inkSoft: "#2b2540", cheek: "#c77dff" },
  },
  {
    key: "galaxie",
    name: "Galaxie",
    emoji: "🌌",
    at: 400,
    stars: true,
    palette: { fur: "#e8ddff", furEdge: "#a98ce6", ink: "#2a1650", inkSoft: "#4a2f82", cheek: "#ff9be0", scarf: ["#7cf3ff", "#ff7cf0"] },
  },
  { key: "koenig", name: "König", emoji: "👑", at: 750, extra: "crown" },
  {
    key: "katze",
    name: "Katzen-Panda",
    emoji: "🐱",
    at: 45,
    extra: "cat",
    acc: "whiskers",
    palette: { fur: "#fff4e6", furEdge: "#f3d3a8", ink: "#c46a2b", inkSoft: "#e08a4a", cheek: "#ff9fb5", scarf: ["#ffd36b", "#ff8fc6"] },
  },
  {
    key: "sonne",
    name: "Sonnen-Panda",
    emoji: "☀️",
    at: 90,
    extra: "sunrays",
    acc: "sunglasses",
    palette: { fur: "#fff6d8", furEdge: "#ffd77a", ink: "#b8641c", inkSoft: "#d9822b", cheek: "#ff9f6b", scarf: ["#ffe36b", "#ff8a3d"] },
  },
  {
    key: "schatten",
    name: "Schatten-Panda",
    emoji: "🌑",
    at: 250,
    extra: "hood",
    neon: true,
    neonColor: "oklch(0.72 0.19 300)",
    palette: { fur: "#4a4558", furEdge: "#2a2638", ink: "#07060c", inkSoft: "#1d1a2b", cheek: "#8a5cff", scarf: ["#3b2a55", "#8a5cff"] },
  },
  // Themen-Skins: passend zur Website, freigeschaltet durch Lesen im jeweiligen Bereich
  {
    key: "ki-panda",
    name: "KI-Panda",
    emoji: "🤖",
    at: 0,
    extra: "ki",
    palette: { fur: "#f2fbff", furEdge: "#c9e6f5", scarf: ["#7cf3ff", "#7c8bff"] },
    visits: { category: "ki", articles: true, count: 20, text: "KI-Artikel gelesen" },
  },
  {
    key: "zoo-panda",
    name: "Zoo-Panda",
    emoji: "🦒",
    at: 0,
    extra: "safari",
    palette: { scarf: ["#ffd36b", "#5db24f"] },
    visits: { category: "zoos", count: 10, text: "Zoo-Seiten besucht" },
  },
  {
    key: "auto-panda",
    name: "Auto-Panda",
    emoji: "🏎️",
    at: 0,
    extra: "racer",
    palette: { scarf: ["#ff5a4f", "#ffd36b"] },
    visits: { category: "autos-mobilitaet", articles: true, count: 10, text: "Auto-Artikel gelesen" },
  },
  {
    key: "urlaub-panda",
    name: "Urlaubs-Panda",
    emoji: "🏖️",
    at: 0,
    extra: "beach",
    palette: { scarf: ["#5ac8ff", "#ffb347"] },
    visits: { category: "urlaub-reisen", count: 10, text: "Reise-Seiten besucht" },
  },
  {
    key: "greentech-panda",
    name: "GreenTech-Panda",
    emoji: "🌱",
    at: 0,
    extra: "sprout",
    palette: { fur: "#f3fff4", furEdge: "#c6ecc9", cheek: "#ffb0c8", scarf: ["#8be38f", "#2fbf71"] },
    visits: { category: "panda-branding", prefix: "/panda-branding/greentech/", articles: true, count: 3, text: "GreenTech-Seiten entdeckt" },
  },
  // Saison-Skins: in dieser Zeit für alle frei
  { key: "halloween", name: "Halloween", emoji: "🎃", at: 0, season: { from: [10, 15], to: [11, 3] }, extra: "witch" },
  { key: "weihnachten", name: "Weihnachten", emoji: "🎅", at: 0, season: { from: [12, 1], to: [1, 6] }, extra: "santa" },
];

export type SkinKey = string;

/** Ist ein Saison-Skin gerade verfügbar? (Zeitraum darf über den Jahreswechsel gehen) */
export function inSeason(skin: Skin, date = new Date()) {
  if (!skin.season) return true;
  const v = (m: number, d: number) => m * 100 + d;
  const now = v(date.getMonth() + 1, date.getDate());
  const from = v(...skin.season.from);
  const to = v(...skin.season.to);
  return from <= to ? now >= from && now <= to : now >= from || now <= to;
}

/** Besuchte Seiten je Kategorie (aus der Bambus-Sammlung). */
export type VisitLog = Record<string, string[]>;

/** Fortschritt eines Themen-Skins: wie viele passende Seiten schon besucht wurden. */
export function visitProgress(skin: Skin, visits: VisitLog = {}) {
  const goal = skin.visits;
  if (!goal) return null;
  const have = (visits[goal.category] ?? []).filter(
    (p) => (!goal.prefix || p.startsWith(goal.prefix)) && (!goal.articles || p.split("/").filter(Boolean).length === 3),
  ).length;
  return { have: Math.min(have, goal.count), need: goal.count, text: goal.text };
}

export function skinUnlocked(skin: Skin, count: number, visits?: VisitLog, date = new Date()) {
  if (skin.season) return inSeason(skin, date);
  if (skin.visits) {
    const p = visitProgress(skin, visits);
    return Boolean(p && p.have >= p.need);
  }
  return count >= skin.at;
}

/** Skins, die man gerade sehen kann (Saison-Skins nur in ihrer Saison). */
export function visibleSkins(date = new Date()) {
  // Reihenfolge: Bambus-Skins nach Preis, dann Themen-Skins, dann Saison-Skins
  const rank = (s: Skin) => (s.season ? 2 : s.visits ? 1 : 0);
  return SKINS.filter((s) => !s.season || inSeason(s, date)).sort((a, b) => rank(a) - rank(b) || a.at - b.at);
}

export function getSkin(key?: string | null): Skin {
  return SKINS.find((s) => s.key === key) ?? SKINS[0];
}

export function paletteOf(skin: Skin): SkinPalette {
  return { ...BASE_PALETTE, ...skin.palette } as SkinPalette;
}

/* ------------------------------------------------------------------ */
/* Panda-Baukasten: Fellfarbe × Kopfbedeckung × Accessoire               */
/* ------------------------------------------------------------------ */

export interface BuilderPart {
  key: string;
  name: string;
  /** ab so viel Bambus */
  at: number;
  /** alternativ: frei, sobald dieser Skin freigeschaltet ist (Themen-Skins) */
  skin?: string;
  /** nur in dieser Saison wählbar */
  season?: Skin["season"];
}
export interface FurPart extends BuilderPart {
  palette: Partial<SkinPalette>;
  neon?: boolean;
  neonColor?: string;
  stars?: boolean;
}
export interface HatPart extends BuilderPart {
  value: SkinExtra | null;
}
export interface AccPart extends BuilderPart {
  value: SkinAcc;
}

export const FURS: FurPart[] = [
  { key: "klassisch", name: "Klassisch", at: 0, palette: {} },
  { key: "schoko", name: "Schoko", at: 5, palette: { fur: "#fff6ec", furEdge: "#ecd6c0", ink: "#5b3a28", inkSoft: "#7a5240", cheek: "#ff9f9f" } },
  { key: "schnee", name: "Schnee", at: 10, palette: { fur: "#ffffff", furEdge: "#e6eaf2", ink: "#8b93a7", inkSoft: "#a9b0c2", cheek: "#ffb3d1" } },
  { key: "zuckerwatte", name: "Zuckerwatte", at: 20, palette: { fur: "#fff1f8", furEdge: "#f7c6dc", ink: "#6d3a62", inkSoft: "#8a5280", cheek: "#ff7fb8", scarf: ["#ffd1e8", "#c9a6ff"] } },
  { key: "minze", name: "Minze", at: 30, palette: { fur: "#f1fff8", furEdge: "#bdeed6", ink: "#1f6b56", inkSoft: "#3a8c74", cheek: "#ffb0c8", scarf: ["#9ef0cf", "#5ac8ff"] } },
  { key: "karamell", name: "Karamell", at: 40, palette: { fur: "#fff3e0", furEdge: "#f0c890", ink: "#8a4b1c", inkSoft: "#a8662e", cheek: "#ff9f9f" } },
  { key: "katze", name: "Rotes Kätzchen", at: 45, palette: { fur: "#fff4e6", furEdge: "#f3d3a8", ink: "#c46a2b", inkSoft: "#e08a4a", cheek: "#ff9fb5" } },
  { key: "eis", name: "Eis", at: 60, palette: { fur: "#f3fbff", furEdge: "#c4e5f6", ink: "#27496d", inkSoft: "#3f6690", cheek: "#9fd8ff", scarf: ["#bdf3ff", "#7fb6ff"] } },
  { key: "lavendel", name: "Lavendel", at: 70, palette: { fur: "#f7f2ff", furEdge: "#d9c8f5", ink: "#4b2f7a", inkSoft: "#6a4b9c", cheek: "#ff9be0", scarf: ["#c9a6ff", "#7c8bff"] } },
  { key: "pfirsich", name: "Pfirsich", at: 80, palette: { fur: "#fff4ee", furEdge: "#ffd2bd", ink: "#b5523a", inkSoft: "#d07058", cheek: "#ff8f8f", scarf: ["#ffb38a", "#ff7fb8"] } },
  { key: "sonne", name: "Sonne", at: 90, palette: { fur: "#fff6d8", furEdge: "#ffd77a", ink: "#b8641c", inkSoft: "#d9822b", cheek: "#ff9f6b", scarf: ["#ffe36b", "#ff8a3d"] } },
  { key: "ozean", name: "Ozean", at: 110, palette: { fur: "#eef8ff", furEdge: "#b4dcf5", ink: "#0f4c75", inkSoft: "#2a6f9e", cheek: "#7fd4ff", scarf: ["#5ac8ff", "#2f7cff"] } },
  { key: "wald", name: "Wald", at: 130, palette: { fur: "#f4fbef", furEdge: "#cfe6bf", ink: "#2f5a1f", inkSoft: "#4a7a36", cheek: "#ffb0a0", scarf: ["#8be38f", "#3f8a3a"] } },
  { key: "himbeere", name: "Himbeere", at: 150, palette: { fur: "#fff0f4", furEdge: "#f6c0d0", ink: "#a3164f", inkSoft: "#c23a6c", cheek: "#ff6fa0", scarf: ["#ff7fa8", "#c9a6ff"] } },
  { key: "kohle", name: "Kohle", at: 170, palette: { fur: "#d8d6de", furEdge: "#a9a6b3", ink: "#121018", inkSoft: "#2a2733", cheek: "#ff8fc6" } },
  { key: "kupfer", name: "Kupfer", at: 190, palette: { fur: "#fff1e6", furEdge: "#e9b48a", ink: "#8c3f12", inkSoft: "#b05a24", cheek: "#ff9f80", scarf: ["#ffb36b", "#c95a2b"] } },
  { key: "silber", name: "Silber", at: 220, palette: { fur: "#f6f7fb", furEdge: "#c9ccd8", ink: "#5a6072", inkSoft: "#7a8094", cheek: "#c9d4ff", scarf: ["#e3e8f5", "#9aa4c0"] } },
  { key: "schatten", name: "Schatten", at: 250, neon: true, neonColor: "oklch(0.72 0.19 300)", palette: { fur: "#4a4558", furEdge: "#2a2638", ink: "#07060c", inkSoft: "#1d1a2b", cheek: "#8a5cff", scarf: ["#3b2a55", "#8a5cff"] } },
  { key: "rubin", name: "Rubin", at: 280, palette: { fur: "#fff0f0", furEdge: "#f5b8b8", ink: "#8f0f1f", inkSoft: "#b02a3a", cheek: "#ff6f6f", scarf: ["#ff5a5a", "#ffb36b"] } },
  { key: "mitternacht", name: "Mitternacht", at: 300, neon: true, palette: { fur: "#3a3358", furEdge: "#231e38", ink: "#0e0b18", inkSoft: "#2b2540", cheek: "#c77dff" } },
  { key: "smaragd", name: "Smaragd", at: 340, palette: { fur: "#effff6", furEdge: "#a9e6c4", ink: "#0b6b3a", inkSoft: "#1f8a52", cheek: "#ffb0c8", scarf: ["#4fe39a", "#0b8a5a"] } },
  { key: "galaxie", name: "Galaxie", at: 400, stars: true, palette: { fur: "#e8ddff", furEdge: "#a98ce6", ink: "#2a1650", inkSoft: "#4a2f82", cheek: "#ff9be0", scarf: ["#7cf3ff", "#ff7cf0"] } },
  { key: "saphir", name: "Saphir", at: 450, palette: { fur: "#f0f3ff", furEdge: "#b3c0f5", ink: "#16267a", inkSoft: "#2f42a0", cheek: "#9fb5ff", scarf: ["#7c8bff", "#3b4fd9"] } },
  { key: "gold", name: "Gold", at: 500, palette: { fur: "#fff6d6", furEdge: "#f3cf6b", ink: "#7a5410", inkSoft: "#a87b12", cheek: "#ffb36b", scarf: ["#ffe69a", "#e9a92c"] } },
];

export const HATS: HatPart[] = [
  { key: "ohne", name: "Ohne", at: 0, value: null },
  { key: "bambushut", name: "Bambushut", at: 50, value: "bamboo" },
  { key: "sonnenhut", name: "Sonnenhut", at: 25, value: "sun" },
  { key: "schlafmuetze", name: "Schlafmütze", at: 35, value: "night" },
  { key: "party", name: "Partyhut", at: 15, value: "party" },
  { key: "blumen", name: "Blumenkranz", at: 30, value: "flower" },
  { key: "katzenohren", name: "Katzenohren", at: 45, value: "cat" },
  { key: "koch", name: "Kochmütze", at: 40, value: "chef" },
  { key: "pirat", name: "Piratentuch", at: 80, value: "pirate" },
  { key: "sonnenkranz", name: "Sonnenkranz", at: 90, value: "sunrays" },
  { key: "zauberer", name: "Zauberhut", at: 150, value: "wizard" },
  { key: "kapuze", name: "Schattenkapuze", at: 250, value: "hood" },
  { key: "krone", name: "Krone", at: 750, value: "crown" },
  { key: "ki", name: "KI-Antenne", at: 0, skin: "ki-panda", value: "ki" },
  { key: "safari", name: "Safarihelm", at: 0, skin: "zoo-panda", value: "safari" },
  { key: "renn", name: "Rennkappe", at: 0, skin: "auto-panda", value: "racer" },
  { key: "strand", name: "Strohhut", at: 0, skin: "urlaub-panda", value: "beach" },
  { key: "spross", name: "GreenTech-Spross", at: 0, skin: "greentech-panda", value: "sprout" },
  { key: "hexe", name: "Hexenhut", at: 0, season: { from: [10, 15], to: [11, 3] }, value: "witch" },
  { key: "weihnacht", name: "Weihnachtsmütze", at: 0, season: { from: [12, 1], to: [1, 6] }, value: "santa" },
];

export const ACCS: AccPart[] = [
  { key: "ohne", name: "Ohne", at: 0, value: "none" },
  { key: "fliege", name: "Fliege", at: 20, value: "bowtie" },
  { key: "schnurrhaare", name: "Schnurrhaare", at: 45, value: "whiskers" },
  { key: "nerdbrille", name: "Nerdbrille", at: 55, value: "nerd" },
  { key: "sonnenbrille", name: "Sonnenbrille", at: 90, value: "sunglasses" },
  { key: "headset", name: "Headset", at: 120, value: "headset" },
];

/** Anzahl möglicher Baukasten-Kombinationen */
export const BUILDER_COMBOS = FURS.length * HATS.length * ACCS.length;

export interface CustomLook {
  fur: string;
  hat: string;
  acc: string;
}
export const BUILDER_KEY = "baukasten";

export function partUnlocked(part: BuilderPart, count: number, visits?: VisitLog, date = new Date()) {
  if (part.season) return inSeason({ key: "", name: "", emoji: "", at: 0, season: part.season }, date);
  if (part.skin) return skinUnlocked(getSkin(part.skin), count, visits, date);
  return count >= part.at;
}

/** Alles, was die Figur zum Zeichnen braucht – aus einem Skin oder aus dem Baukasten. */
export interface ResolvedLook {
  palette: SkinPalette;
  extra?: SkinExtra;
  acc: SkinAcc;
  neon: boolean;
  neonColor?: string;
  stars: boolean;
  /** für den Regenbogen-Schal */
  rainbow: boolean;
}

export function resolveLook(skinKey?: string | null, custom?: CustomLook | null): ResolvedLook {
  if (skinKey === BUILDER_KEY && custom) {
    const fur = FURS.find((f) => f.key === custom.fur) ?? FURS[0];
    const hat = HATS.find((h) => h.key === custom.hat) ?? HATS[0];
    const acc = ACCS.find((a) => a.key === custom.acc) ?? ACCS[0];
    return {
      palette: { ...BASE_PALETTE, ...fur.palette } as SkinPalette,
      extra: hat.value ?? undefined,
      acc: acc.value,
      neon: Boolean(fur.neon),
      neonColor: fur.neonColor,
      stars: Boolean(fur.stars),
      rainbow: false,
    };
  }
  const skin = getSkin(skinKey);
  return {
    palette: paletteOf(skin),
    extra: skin.extra,
    acc: skin.acc ?? "none",
    neon: Boolean(skin.neon),
    neonColor: skin.neonColor,
    stars: Boolean(skin.stars),
    rainbow: skin.key === "regenbogen",
  };
}
