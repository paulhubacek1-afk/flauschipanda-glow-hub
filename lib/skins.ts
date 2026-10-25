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

export type SkinExtra = "chef" | "pirate" | "wizard" | "cape" | "crown" | "party" | "witch" | "santa" | "flower";

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

export function skinUnlocked(skin: Skin, count: number, date = new Date()) {
  if (skin.season) return inSeason(skin, date);
  return count >= skin.at;
}

/** Skins, die man gerade sehen kann (Saison-Skins nur in ihrer Saison). */
export function visibleSkins(date = new Date()) {
  return SKINS.filter((s) => !s.season || inSeason(s, date));
}

export function getSkin(key?: string | null): Skin {
  return SKINS.find((s) => s.key === key) ?? SKINS[0];
}

export function paletteOf(skin: Skin): SkinPalette {
  return { ...BASE_PALETTE, ...skin.palette } as SkinPalette;
}
