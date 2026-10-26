"use client";

import { useSyncExternalStore } from "react";

import { ACCS, BUILDER_KEY, FURS, HATS, SKINS, partUnlocked, skinUnlocked, type CustomLook, type VisitLog } from "./skins";

/**
 * Bambus-Sammlung von Flauschipanda
 * --------------------------
 * Besucher sammeln Bambus, während sie die Website nutzen (Seiten entdecken, Artikel lesen,
 * Zeit auf einer Seite verbringen). Damit wächst der Panda und schaltet kosmetische
 * Gegenstände frei – reine Spielerei, nichts davon verlässt den Browser.
 *
 * Gespeichert wird nur im Browser (localStorage) – und nur, wenn der Besucher das möchte
 * (Einwilligung in Statistik/Werbung ODER Schalter „Sammlung merken“ im Panda-Menü).
 * Sonst zählt der Bambus nur für diesen Besuch.
 */

export const STAGES = [
  { min: 0, key: "klein", name: "Kleiner Panda", scale: 0.84 },
  { min: 10, key: "neugierig", name: "Neugieriger Panda", scale: 0.92 },
  { min: 50, key: "toolbox", name: "Toolbox Panda", scale: 1 },
  { min: 100, key: "glow", name: "Glow Panda", scale: 1.05 },
] as const;
export type StageKey = (typeof STAGES)[number]["key"];

export const ITEMS = [
  { at: 50, key: "hut", name: "Bambushut", emoji: "👒" },
  { at: 100, key: "werkzeug", name: "Werkzeugkiste", emoji: "🧰" },
  { at: 200, key: "pflanze", name: "GreenTech Pflanze", emoji: "🌱" },
  { at: 500, key: "gold", name: "Goldener Panda", emoji: "✨" },
] as const;
export type ItemKey = (typeof ITEMS)[number]["key"];

export function stageFor(count: number) {
  let s: (typeof STAGES)[number] = STAGES[0];
  for (const st of STAGES) if (count >= st.min) s = st;
  return s;
}

export function nextGoal(count: number): { at: number; name: string } | null {
  const goals = [
    ...STAGES.map((s) => ({ at: s.min, name: s.name })),
    ...ITEMS.map((i) => ({ at: i.at, name: i.name })),
    ...SKINS.filter((k) => !k.season && k.at > 0).map((k) => ({ at: k.at, name: `Skin „${k.name}“` })),
  ]
    .filter((g) => g.at > count)
    .sort((a, b) => a.at - b.at);
  return goals[0] ?? null;
}

/** Was zwischen zwei Ständen neu freigeschaltet wurde (für die Feier-Sprechblase). */
export function unlockedBetween(before: number, after: number): string[] {
  const out: string[] = [];
  for (const s of STAGES) if (s.min > 0 && before < s.min && after >= s.min) out.push(`${s.name} 🐼`);
  for (const i of ITEMS) if (before < i.at && after >= i.at) out.push(`${i.name} ${i.emoji}`);
  for (const k of SKINS) if (!k.season && k.at > 0 && before < k.at && after >= k.at) out.push(`Skin „${k.name}“ ${k.emoji}`);
  return out;
}

export interface BambooState {
  count: number;
  /** ausgeschaltete Gegenstände (Besucher kann sie in der Sammlung abwählen) */
  off: ItemKey[];
  /** Datum (JJJJ-MM-TT) des letzten GreenTech-Dankeschöns – höchstens einmal am Tag */
  thanked?: string;
  /** Seitenaufrufe insgesamt – für „Wusstest du schon?“ alle paar Seiten */
  views: number;
  /** gewählter Skin (lib/skins.ts) */
  skin?: string;
  /** besuchte Seiten je Kategorie – für Themen-Skins (z. B. 10 Zoo-Seiten → Zoo-Panda) */
  visits?: VisitLog;
  /** eigene Kombination aus dem Panda-Baukasten */
  custom?: CustomLook;
  /** Datum (JJJJ-MM-TT) des letzten Tagesbonus */
  daily?: string;
}

const KEY = "fp-bambus";
const OPT_IN_KEY = "fp-bambus-merken";
const MAX = 99_999;

let state: BambooState = { count: 0, off: [], views: 0 };
let persist = false;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

function save() {
  if (!persist) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* Speicher blockiert – dann eben nur für diesen Besuch */
  }
}

function sanitize(raw: unknown): BambooState | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Partial<BambooState>;
  const count = Number(r.count);
  if (!Number.isFinite(count)) return null;
  const validItems = new Set<string>(ITEMS.map((i) => i.key));
  return {
    count: Math.max(0, Math.min(MAX, Math.floor(count))),
    off: Array.isArray(r.off) ? (r.off.filter((k) => validItems.has(String(k))) as ItemKey[]) : [],
    thanked: typeof r.thanked === "string" ? r.thanked.slice(0, 10) : undefined,
    views: Math.max(0, Math.floor(Number(r.views) || 0)),
    skin: typeof r.skin === "string" && (r.skin === BUILDER_KEY || SKINS.some((k) => k.key === r.skin)) ? r.skin : undefined,
    custom: sanitizeCustom(r.custom),
    daily: typeof r.daily === "string" ? r.daily.slice(0, 10) : undefined,
    visits: sanitizeVisits(r.visits),
  };
}

function sanitizeCustom(raw: unknown): CustomLook | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const c = raw as Partial<CustomLook>;
  return {
    fur: FURS.some((f) => f.key === c.fur) ? String(c.fur) : "klassisch",
    hat: HATS.some((h) => h.key === c.hat) ? String(c.hat) : "ohne",
    acc: ACCS.some((a) => a.key === c.acc) ? String(c.acc) : "ohne",
  };
}

/** Baukasten: Teil wählen und die eigene Kombination gleich anziehen. */
export function setCustom(patch: Partial<CustomLook>) {
  const cur = state.custom ?? { fur: "klassisch", hat: "ohne", acc: "ohne" };
  updateBamboo({ custom: { ...cur, ...patch }, skin: BUILDER_KEY });
}

/** Eigene Kombination – gesperrte Teile (z. B. nach Ende einer Saison) fallen auf „Ohne“ bzw. „Klassisch“ zurück. */
export function effectiveCustom(s: BambooState): CustomLook {
  const c = s.custom ?? { fur: "klassisch", hat: "ohne", acc: "ohne" };
  const ok = <T extends { key: string }>(list: T[], key: string, fallback: string) => {
    const part = list.find((x) => x.key === key);
    return part && partUnlocked(part as never, s.count, s.visits) ? key : fallback;
  };
  return { fur: ok(FURS, c.fur, "klassisch"), hat: ok(HATS, c.hat, "ohne"), acc: ok(ACCS, c.acc, "ohne") };
}

const MAX_VISITS_PER_CATEGORY = 60;
const CATEGORY_RE = /^[a-z0-9-]{1,60}$/;
const PATH_RE = /^\/[a-z0-9\/-]{1,200}$/;

function sanitizeVisits(raw: unknown): VisitLog | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const out: VisitLog = {};
  for (const [cat, list] of Object.entries(raw as Record<string, unknown>)) {
    if (!CATEGORY_RE.test(cat) || !Array.isArray(list)) continue;
    out[cat] = list.filter((p): p is string => typeof p === "string" && PATH_RE.test(p)).slice(-MAX_VISITS_PER_CATEGORY);
  }
  return out;
}

/**
 * Besuchte Seite merken (nur Pfad, nur im Browser). Gibt die Themen-Skins zurück,
 * die dadurch gerade freigeschaltet wurden.
 */
export function recordVisit(path: string): string[] {
  const clean = path.split(/[?#]/)[0].replace(/\/$/, "");
  const cat = clean.split("/")[1] ?? "";
  if (!CATEGORY_RE.test(cat) || !PATH_RE.test(clean)) return [];
  const visits = { ...(state.visits ?? {}) };
  const list = visits[cat] ?? [];
  if (list.includes(clean)) return [];
  const theme = SKINS.filter((k) => k.visits);
  const before = new Set(theme.filter((k) => skinUnlocked(k, state.count, state.visits)).map((k) => k.key));
  visits[cat] = [...list, clean].slice(-MAX_VISITS_PER_CATEGORY);
  updateBamboo({ visits });
  return theme.filter((k) => !before.has(k.key) && skinUnlocked(k, state.count, visits)).map((k) => `Skin „${k.name}“ ${k.emoji}`);
}

/** Event, mit dem andere Teile der Website Bambus vergeben (Flauschipanda zählt jede Kennung nur einmal pro Besuch). */
export const EARN_EVENT = "fp-earn";
export function earnBamboo(key: string, n = 1) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(EARN_EVENT, { detail: { key, n } }));
}

export function hasOptIn() {
  try {
    return window.localStorage.getItem(OPT_IN_KEY) === "1";
  } catch {
    return false;
  }
}

/** Speichern ein-/ausschalten. Beim Einschalten wird der bisherige Stand übernommen. */
export function setPersist(on: boolean, { explicit = false } = {}) {
  if (!loaded) {
    loaded = true;
    if (on) {
      try {
        const stored = sanitize(JSON.parse(window.localStorage.getItem(KEY) ?? "null"));
        if (stored) state = { ...stored, count: Math.max(stored.count, state.count), views: Math.max(stored.views, state.views) };
      } catch {
        /* ignorieren */
      }
    }
  } else if (on && !persist) {
    try {
      const stored = sanitize(JSON.parse(window.localStorage.getItem(KEY) ?? "null"));
      if (stored) state = { ...state, count: Math.max(stored.count, state.count), views: Math.max(stored.views, state.views) };
    } catch {
      /* ignorieren */
    }
  }
  persist = on;
  if (explicit) {
    try {
      if (on) window.localStorage.setItem(OPT_IN_KEY, "1");
      else {
        window.localStorage.removeItem(OPT_IN_KEY);
        window.localStorage.removeItem(KEY);
      }
    } catch {
      /* ignorieren */
    }
  }
  save();
  emit();
}

export const isPersisting = () => persist;

export function getBamboo(): BambooState {
  return state;
}

/** Bambus gutschreiben – gibt den neuen Stand zurück. */
export function addBamboo(n: number): { before: number; after: number } {
  const before = state.count;
  state = { ...state, count: Math.min(MAX, before + Math.max(0, Math.floor(n))) };
  save();
  emit();
  return { before, after: state.count };
}

export function updateBamboo(patch: Partial<BambooState>) {
  state = { ...state, ...patch };
  save();
  emit();
}

export function toggleItem(key: ItemKey) {
  const off = state.off.includes(key) ? state.off.filter((k) => k !== key) : [...state.off, key];
  updateBamboo({ off });
}

export function setSkin(key: string) {
  if (key !== BUILDER_KEY && !SKINS.some((k) => k.key === key)) return;
  updateBamboo({ skin: key });
}

export function hasItem(s: BambooState, key: ItemKey) {
  const item = ITEMS.find((i) => i.key === key);
  return Boolean(item && s.count >= item.at && !s.off.includes(key));
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

const serverState: BambooState = { count: 0, off: [], views: 0 };

export function useBamboo(): BambooState {
  return useSyncExternalStore(subscribe, getBamboo, () => serverState);
}
