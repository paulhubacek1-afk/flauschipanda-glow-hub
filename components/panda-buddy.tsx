"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";

import {
  ITEMS,
  STAGES,
  addBamboo,
  getBamboo,
  hasItem,
  hasOptIn,
  isPersisting,
  effectiveCustom,
  nextGoal,
  recordVisit,
  setPersist,
  setSkin,
  stageFor,
  toggleItem,
  unlockedBetween,
  updateBamboo,
  useBamboo,
} from "@/lib/bamboo";
import type { NavLite } from "@/lib/cms";
import { useConsent } from "@/lib/consent";
import { BUILDER_COMBOS, BUILDER_KEY, SKINS, getSkin, skinUnlocked, visibleSkins, visitProgress } from "@/lib/skins";
import { cn } from "@/lib/utils";

import { PandaFigure, type PandaLook, type PandaPose } from "./panda-figure";

/**
 * Flauschipanda, der Panda-Buddy
 * ------------------------------
 * - sitzt unten rechts und knabbert Bambus; beim Lesen eines Artikels liest er ein Buch,
 *   bei offener Suche holt er die Lupe heraus, auf GreenTech-Seiten gießt er die Pflanze
 * - sammelt Bambus, während du die Website nutzt → wächst (Kleiner → Neugieriger → Toolbox → Glow Panda)
 *   und schaltet Gegenstände frei (Bambushut, Werkzeugkiste, GreenTech Pflanze, Goldener Panda)
 * - passt sich der Kategorie an (KI-Brille, Sonnenhut, Fernglas …) und der Tageszeit (Kaffee, Laterne, Schlafmütze)
 * - als Guide: schlägt beim Lesen passende Artikel vor, „Wusstest du schon?“ alle paar Seiten
 * - krabbelt zu Karten, die zu deinen Interessen passen (Elemente mit `data-panda-topic`), mit dezenter Leuchtspur
 * - auf Wunsch hält er sich an der Maus fest und baumelt mit (Desktop) – Esc lässt los
 * - auf dem Handy: mit dem Finger herumziehen (er baumelt mit und tapst danach zurück),
 *   hüpft beim schnellen Scrollen, quetscht sich beim Antippen
 * - Skins (lib/skins.ts): Fellfarben und Outfits, freigeschaltet mit Bambus
 *
 * Interessen und Bambus bleiben im Browser: gespeichert (localStorage) nur mit Einwilligung in
 * „Statistik“/„Werbung“ oder wenn du im Panda-Menü „Sammlung merken“ einschaltest. Nichts wird übertragen.
 */

/** Eigene Einstellung für Flauschipanda – die alte „ausblenden“-Einstellung des Vorgängers gilt nicht mehr. */
const HIDE_KEY = "fp-bambus-mini";
const OLD_HIDE_KEY = "fp-buddy";
const INTEREST_KEY = "fp-interests";
export const SHOW_BUDDY_EVENT = "fp-buddy-show";

/** Panda wieder einblenden (z. B. über den Link im Footer). */
export function showPandaBuddy() {
  try {
    window.localStorage.removeItem(HIDE_KEY);
  } catch {
    /* ignorieren */
  }
  window.dispatchEvent(new Event(SHOW_BUDDY_EVENT));
}

/** sit = in der Ecke · pause = bleibt stehen, wo er gerade ist (Menü offen) */
type Mode = "sit" | "pause" | "crawl" | "perch" | "cling" | "return";
/** Was der Panda im Sitzen gerade tut */
type Activity = "idle" | "read" | "search";

interface Bubble {
  text: string;
  title?: string;
  link?: { href: string; label: string };
  links?: { href: string; label: string }[];
  actions?: boolean;
  collection?: boolean;
  /** wichtig (z. B. Freischaltung) – wird nicht von beiläufigen Hinweisen verdrängt */
  important?: boolean;
}

interface GuideLink {
  href: string;
  title: string;
}

const SPEED = 190; // px pro Sekunde beim Krabbeln
const FIRST_IDEA_MS = 7000;
const IDEA_INTERVAL_MS = 30000;
const THANKS_AFTER_S = 240; // GreenTech-Dankeschön nach 4 Minuten aktiver Zeit
const SAYING_EVERY = 4; // „Wusstest du schon?“ auf jeder 4. Seite

/* Bambus pro Besuch und Seite – Schutz vor endlosem Sammeln auf derselben Seite */
const READ_MILESTONES = [0.25, 0.5, 0.75, 0.95];
const MAX_MINUTE_BAMBOO = 3;

/* Pro Besuch (bleibt beim Seitenwechsel erhalten, nicht gespeichert) */
const sessionVisited = new Set<string>();
const sessionMilestones = new Map<string, Set<number>>();
const sessionMinutes = new Map<string, number>();
const sessionGuided = new Set<string>();
let sessionActiveSec = 0;
let greencoreCounted = false;

type TimeOfDay = "morning" | "day" | "evening" | "night";
function timeOfDay(h = new Date().getHours()): TimeOfDay {
  if (h >= 5 && h < 11) return "morning";
  if (h >= 18 && h < 22) return "evening";
  if (h >= 22 || h < 5) return "night";
  return "day";
}

function greeting() {
  const t = timeOfDay();
  if (t === "night") return "Noch wach? Ich hab schon meine Schlafmütze auf! 🌙";
  if (t === "morning") return "Guten Morgen! ☕";
  if (t === "evening") return "Guten Abend! 🏮";
  return "Hallo! Schön, dass du da bist.";
}

const isArticle = (pathname: string) => pathname.split("/").filter(Boolean).length === 3;
const isGreencore = (pathname: string) => pathname.startsWith("/panda-branding/greentech");
const todayKey = () => new Date().toISOString().slice(0, 10);
const plantFromCount = (n: number) => Math.max(0.25, Math.min(1, 0.25 + Math.log10(n + 1) / 4));
const pick = <T,>(arr: T[]): T | undefined => arr[Math.floor(Math.random() * arr.length)];

function pageTips(pathname: string, nav: NavLite[]): Bubble[] {
  const [catSlug, groupSlug, pageSlug] = pathname.split("/").filter(Boolean);
  const category = nav.find((c) => c.slug === catSlug);
  const group = category?.groups.find((g) => g.slug === groupSlug);
  if (pathname === "/startseite") {
    return [
      { text: `${greeting()} Ich bin Flauschipanda, dein flauschiger Begleiter in der Panda Toolbox. Tipp mich an, wenn du Hilfe brauchst!` },
      { text: "Wonach suchst du? Tipp oben ein Stichwort ins Suchfeld – z. B. „Hundefutter“ oder „Prompts“." },
      { text: "Alle Themen auf einen Blick findest du in der Seitenstruktur.", link: { href: "/seitenstruktur", label: "Seitenstruktur" } },
      { text: "Je mehr du entdeckst und liest, desto mehr Bambus sammle ich – und wachse! 🎋" },
      { text: "Mit Bambus schaltest du neue Skins für mich frei – vom Schoko-Panda bis zum König! 👑 Tipp mich an → „Meine Bambus-Sammlung“." },
      { text: "Auf dem Handy kannst du mich mit dem Finger herumziehen – ich halt mich gut fest! 🐾" },
    ];
  }
  if (category && group && pageSlug) {
    return [
      { text: "Psst … im Inhaltsverzeichnis kannst du direkt zu jedem Abschnitt springen." },
      { text: "Weiter unten warten häufige Fragen – vielleicht ist deine schon beantwortet!" },
      { text: `Mehr zu ${group.title} gibt es hier:`, link: { href: `/${category.slug}/${group.slug}`, label: `Alles zu ${group.title}` } },
    ];
  }
  if (category && group) return [{ text: `Willkommen bei ${group.title}! In der Liste siehst du alle Themen, die hier geplant sind.` }];
  if (category) return [{ text: `Du bist bei ${category.title}. Such dir ein Unterthema aus – ich helfe dir gern!` }];
  return [{ text: `${greeting()} Brauchst du Hilfe? Auf der Startseite kannst du alles durchsuchen.`, link: { href: "/startseite", label: "Zur Startseite" } }];
}

function readInterests(): Record<string, number> {
  try {
    return JSON.parse(window.localStorage.getItem(INTEREST_KEY) ?? "{}") as Record<string, number>;
  } catch {
    return {};
  }
}

function readGuide(): GuideLink[] {
  const el = document.querySelector<HTMLElement>("[data-panda-guide]");
  if (!el) return [];
  try {
    const data = JSON.parse(el.dataset.pandaGuide ?? "{}") as { links?: GuideLink[] };
    // nur interne Links übernehmen
    return (data.links ?? []).filter((l) => typeof l.href === "string" && l.href.startsWith("/") && !l.href.startsWith("//")).slice(0, 5);
  } catch {
    return [];
  }
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function PandaBuddy({ nav }: { nav: NavLite[] }) {
  const pathname = usePathname();
  const { consent, ready } = useConsent();
  const remember = Boolean(consent?.statistics || consent?.marketing);
  const bamboo = useBamboo();

  const [mounted, setMounted] = useState(false);
  /** verkleinert = nur ein kleiner Panda-Knopf in der Ecke, mit dem man Flauschipanda zurückholt */
  const [hidden, setHidden] = useState(false);
  const [mode, setModeState] = useState<Mode>("sit");
  const [activity, setActivity] = useState<Activity>("idle");
  const [facing, setFacing] = useState<1 | -1>(-1);
  const [bubble, setBubble] = useState<Bubble | null>(null);
  const [tipIndex, setTipIndex] = useState(0);
  const [bubbleLeft, setBubbleLeft] = useState(false);
  const [bubbleBelow, setBubbleBelow] = useState(false);
  const [baseSize, setBaseSize] = useState(116);
  const [dragging, setDragging] = useState(false);
  const [canCling, setCanCling] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [tod, setTod] = useState<TimeOfDay>("day");
  const [plus, setPlus] = useState<{ id: number; n: number } | null>(null);
  const [burst, setBurst] = useState<{ id: number; chars: string[] } | null>(null);
  const [greencoreCount, setGreencoreCount] = useState(0);
  const [persisting, setPersisting] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<Mode>("sit");
  const pos = useRef({ x: -999, y: -999 });
  const vel = useRef({ x: 0, y: 0 });
  const rot = useRef(0);
  const cursor = useRef({ x: 0, y: 0 });
  const lastMove = useRef(0);
  const lastInput = useRef(Date.now());
  const targetEl = useRef<HTMLElement | null>(null);
  const raf = useRef<number | null>(null);
  const lastT = useRef(0);
  const lastTrail = useRef(0);
  const trailCount = useRef(0);
  const lastIdea = useRef(0);
  const quiet = useRef(false);
  const shown = useRef(new Set<string>());
  const interests = useRef<Record<string, number>>({});
  const bubbleTimer = useRef<number | null>(null);
  const bubbleRef = useRef<Bubble | null>(null);
  const facingRef = useRef<1 | -1>(-1);
  const pageStart = useRef(Date.now());
  const btnRef = useRef<HTMLButtonElement>(null);
  /** Ziehen mit dem Finger (Handy/Tablet) */
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const suppressClick = useRef(false);

  const stage = stageFor(bamboo.count);
  const size = Math.round(baseSize * stage.scale);
  const tips = useMemo(() => pageTips(pathname, nav), [pathname, nav]);
  const titleOf = useCallback((slug: string) => nav.find((c) => c.slug === slug)?.title, [nav]);
  const catSlug = pathname.split("/")[1] ?? "";
  const onGreencore = isGreencore(pathname);

  /* ---------------- Grundgerüst ---------------- */

  const home = useCallback(() => {
    const margin = window.innerWidth < 640 ? 10 : 18;
    return { x: window.innerWidth - size - margin, y: window.innerHeight - size - margin };
  }, [size]);

  const apply = useCallback(() => {
    const w = wrapRef.current;
    if (w) w.style.transform = `translate3d(${Math.round(pos.current.x)}px, ${Math.round(pos.current.y)}px, 0)`;
    const i = innerRef.current;
    if (i) i.style.transform = `rotate(${rot.current.toFixed(2)}deg)`;
  }, []);

  const clearHighlight = () => {
    targetEl.current?.classList.remove("panda-highlight");
  };

  const say = useCallback((b: Bubble | null, autoCloseMs?: number) => {
    if (bubbleTimer.current) window.clearTimeout(bubbleTimer.current);
    setBubbleLeft(pos.current.x > window.innerWidth / 2);
    setBubbleBelow(pos.current.y < 240);
    bubbleRef.current = b;
    setBubble(b);
    if (b && autoCloseMs) {
      bubbleTimer.current = window.setTimeout(() => {
        bubbleRef.current = null;
        setBubble(null);
        if (modeRef.current === "perch" || modeRef.current === "pause") setMode("return");
        else clearHighlight();
      }, autoCloseMs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Nur sprechen, wenn gerade nichts Wichtigeres offen ist (Menü, Sammlung) und der Panda sitzt */
  const sayIfFree = useCallback(
    (b: Bubble, ms: number) => {
      const cur = bubbleRef.current;
      if (cur?.actions || cur?.collection || cur?.important) return false;
      if (modeRef.current !== "sit") return false;
      say(b, ms);
      return true;
    },
    [say],
  );

  const burstTimer = useRef<number | null>(null);
  const celebrate = useCallback((chars: string[]) => {
    if (burstTimer.current) window.clearTimeout(burstTimer.current);
    setBurst({ id: Date.now(), chars });
    burstTimer.current = window.setTimeout(() => setBurst(null), 2400);
  }, []);

  /** Bambus gutschreiben, „+1“ zeigen und Freischaltungen feiern */
  const earn = useCallback(
    (n: number) => {
      const { before, after } = addBamboo(n);
      if (after === before) return;
      setPlus({ id: Date.now() + Math.random(), n: after - before });
      const unlocked = unlockedBetween(before, after);
      if (unlocked.length) {
        celebrate(["✨", "🎋", "⭐", "🎉", "✨"]);
        const cur = bubbleRef.current;
        if (!cur?.actions && !cur?.collection) {
          say({ title: "Freigeschaltet!", text: `🎉 ${unlocked.join(" · ")} – danke fürs Stöbern!`, important: true }, 7000);
        }
      }
    },
    [celebrate, say],
  );

  /* ---------------- Spuren beim Laufen ---------------- */

  const spawnTrail = useCallback(
    (t: number) => {
      if (reducedMotion || t - lastTrail.current < 85 || trailCount.current > 36) return;
      lastTrail.current = t;
      const el = document.createElement("span");
      const paw = catSlug === "tiere";
      el.className = `panda-trail ${paw ? "panda-trail-paw" : "panda-trail-glow"}`;
      if (paw) el.textContent = "🐾";
      const x = pos.current.x + size / 2 + (Math.random() - 0.5) * size * 0.3;
      const y = pos.current.y + size * 0.92;
      el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)${paw ? ` rotate(${facingRef.current === 1 ? 90 : -90}deg)` : ""}`;
      trailCount.current++;
      el.addEventListener("animationend", () => {
        el.remove();
        trailCount.current--;
      });
      document.body.appendChild(el);
    },
    [catSlug, reducedMotion, size],
  );

  /* ---------------- Bewegung ---------------- */

  const perchPoint = useCallback(
    (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return {
        x: clamp(r.left + r.width * 0.72 - size / 2, 6, window.innerWidth - size - 6),
        y: clamp(r.top - size * 0.8, 4, window.innerHeight - size - 4),
        visible: r.bottom > 40 && r.top < window.innerHeight - 40,
      };
    },
    [size],
  );

  const step = useCallback(
    (t: number) => {
      const dt = Math.min(0.05, (t - (lastT.current || t)) / 1000);
      lastT.current = t;
      const m = modeRef.current;

      if (m === "crawl" || m === "return") {
        const el = targetEl.current;
        if (m === "crawl" && el && !perchPoint(el).visible) {
          setMode("return");
        } else {
          const dest = m === "crawl" && el ? perchPoint(el) : home();
          const dx = dest.x - pos.current.x;
          const dy = dest.y - pos.current.y;
          const dist = Math.hypot(dx, dy);
          if (Math.abs(dx) > 2) {
            const f = dx > 0 ? 1 : -1;
            facingRef.current = f;
            setFacing(f);
          }
          if (dist < 4) {
            pos.current = { x: dest.x, y: dest.y };
            rot.current = 0;
            if (m === "crawl" && el) arrive(el);
            else setMode("sit");
          } else {
            const s = Math.min(dist, SPEED * dt);
            pos.current.x += (dx / dist) * s;
            pos.current.y += (dy / dist) * s;
            rot.current = 0;
            spawnTrail(t);
          }
        }
      } else if (m === "perch") {
        const el = targetEl.current;
        if (!el) setMode("return");
        else {
          const p = perchPoint(el);
          if (!p.visible) {
            say(null);
            setMode("return");
          } else pos.current = { x: p.x, y: p.y };
        }
      } else if (m === "cling" && Date.now() - lastMove.current > 25000) {
        // Maus lange nicht bewegt → loslassen und zurück in die Ecke
        rot.current = 0;
        setMode("return");
      } else if (m === "cling") {
        // Feder: Pfoten folgen dem Mauszeiger, der Körper schaukelt mit
        const tx = cursor.current.x - size / 2;
        const ty = cursor.current.y - size * 0.04;
        vel.current.x = (vel.current.x + (tx - pos.current.x) * 0.16) * 0.74;
        vel.current.y = (vel.current.y + (ty - pos.current.y) * 0.16) * 0.74;
        pos.current.x += vel.current.x;
        pos.current.y += vel.current.y;
        const targetRot = clamp(-vel.current.x * 2.2, -38, 38);
        rot.current += (targetRot - rot.current) * 0.18;
        if (Math.hypot(vel.current.x, vel.current.y) > 3) spawnTrail(t);
      }

      apply();
      const still = modeRef.current === "sit" || modeRef.current === "pause";
      if (!still) raf.current = requestAnimationFrame(step);
      else raf.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apply, home, perchPoint, say, size, spawnTrail],
  );

  const setMode = useCallback(
    (m: Mode) => {
      modeRef.current = m;
      setModeState(m);
      if (m !== "perch" && m !== "crawl" && m !== "pause") clearHighlight();
      if (m === "sit") {
        rot.current = 0;
        if (facingRef.current !== -1) {
          facingRef.current = -1;
          setFacing(-1);
        }
        apply();
      }
      if (m !== "sit" && m !== "pause" && raf.current == null) {
        lastT.current = 0;
        raf.current = requestAnimationFrame(step);
      }
    },
    [apply, step],
  );

  /* ---------------- Interessante Themen finden ---------------- */

  const findIdea = useCallback(() => {
    const currentCat = pathname.split("/")[1];
    const candidates = Array.from(document.querySelectorAll<HTMLElement>("[data-panda-topic]")).filter((el) => {
      const r = el.getBoundingClientRect();
      const href = el.dataset.pandaHref ?? "";
      return r.width > 60 && r.top > 70 && r.bottom < window.innerHeight - 20 && href !== pathname && !shown.current.has(href);
    });
    if (!candidates.length) return null;
    const scored = candidates.map((el) => {
      const topic = el.dataset.pandaTopic ?? "";
      const interest = interests.current[topic] ?? 0;
      // Was dich schon interessiert hat, zählt am meisten – das aktuelle Thema etwas weniger
      const score = interest * 3 - (topic === currentCat ? 1 : 0) + Math.random() * 1.5;
      return { el, topic, interest, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored[0];
  }, [pathname]);

  const arrive = (el: HTMLElement) => {
    if (!reducedMotion) setMode("perch");
    el.classList.add("panda-highlight");
    const topic = el.dataset.pandaTopic ?? "";
    const label = el.dataset.pandaLabel ?? "dieses Thema";
    const href = el.dataset.pandaHref;
    const interest = interests.current[topic] ?? 0;
    const catTitle = titleOf(topic);
    const text =
      interest > 0 && catTitle
        ? `Weil du dich für ${catTitle} interessierst: Das hier könnte dir gefallen!`
        : ["Psst … das hier könnte spannend für dich sein!", "Schau mal, was ich gefunden habe! 🎋", "Hier gibt's was Interessantes!"][
            Math.floor(Math.random() * 3)
          ];
    say({ text, link: href ? { href, label } : undefined }, 11000);
  };

  const goToIdea = useCallback(
    (manual = false) => {
      const idea = findIdea();
      lastIdea.current = Date.now();
      if (!idea) {
        if (manual) say({ text: "Scroll ein bisschen weiter – dann such ich dir etwas Spannendes! 🐾" }, 5000);
        return;
      }
      const href = idea.el.dataset.pandaHref ?? "";
      shown.current.add(href);
      clearHighlight();
      targetEl.current = idea.el;
      say(null);
      if (reducedMotion) {
        arrive(idea.el);
        return;
      }
      setMode("crawl");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [findIdea, reducedMotion, say, setMode],
  );

  /* ---------------- Festhalten an der Maus ---------------- */

  const startCling = () => {
    say({ text: "Huiii! Ich halt mich fest! 🐼 (Esc = loslassen)" }, 3500);
    vel.current = { x: 0, y: 0 };
    lastMove.current = Date.now();
    setMode("cling");
  };

  const drop = useCallback(() => {
    if (modeRef.current !== "cling") return;
    rot.current = 0;
    setMode("return");
  }, [setMode]);

  /* ---------------- Effekte ---------------- */

  // Start: gemerkte Einstellungen, Größe, Fähigkeiten, Tageszeit
  useEffect(() => {
    let off = false;
    try {
      off = window.localStorage.getItem(HIDE_KEY) === "off";
      window.localStorage.removeItem(OLD_HIDE_KEY); // Einstellung des alten Pandas aufräumen
    } catch {
      /* ignorieren */
    }
    setHidden(off);
    setMounted(true);
    setTod(timeOfDay());
    const todTimer = window.setInterval(() => setTod(timeOfDay()), 5 * 60_000);
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setBaseSize(window.innerWidth < 640 ? 88 : 116);
      setCanCling(mqFine.matches && !mqMotion.matches);
      setReducedMotion(mqMotion.matches);
    };
    update();
    window.addEventListener("resize", update);
    const show = () => {
      setHidden(false);
      quiet.current = false;
    };
    window.addEventListener(SHOW_BUDDY_EVENT, show);
    return () => {
      window.clearInterval(todTimer);
      window.removeEventListener("resize", update);
      window.removeEventListener(SHOW_BUDDY_EVENT, show);
    };
  }, []);

  // Startseite: „Meine Sammlung öffnen“
  useEffect(() => {
    const open = () => {
      try {
        window.localStorage.removeItem(HIDE_KEY);
      } catch {
        /* ignorieren */
      }
      setHidden(false);
      quiet.current = false;
      window.setTimeout(() => showCollectionRef.current(), 80);
    };
    window.addEventListener("fp-buddy-collection", open);
    return () => window.removeEventListener("fp-buddy-collection", open);
  }, []);

  // Bambus-Sammlung merken? (Einwilligung oder eigener Schalter)
  useEffect(() => {
    if (!ready) return;
    setPersist(remember || hasOptIn());
    setPersisting(isPersisting());
  }, [ready, remember]);

  // Interessen laden (nur mit Einwilligung gespeichert)
  useEffect(() => {
    if (!remember) return;
    const stored = readInterests();
    for (const [k, v] of Object.entries(stored)) interests.current[k] = Math.max(interests.current[k] ?? 0, v);
  }, [remember]);

  // Seitenwechsel: Interesse zählen, Bambus für neue Seiten, Panda heimschicken
  useEffect(() => {
    const cat = pathname.split("/")[1];
    if (nav.some((c) => c.slug === cat)) {
      interests.current[cat] = (interests.current[cat] ?? 0) + 1;
      if (remember) {
        try {
          window.localStorage.setItem(INTEREST_KEY, JSON.stringify(interests.current));
        } catch {
          /* ignorieren */
        }
      }
    }
    setTipIndex(0);
    setActivity("idle");
    pageStart.current = Date.now();
    if (modeRef.current === "perch" || modeRef.current === "crawl") {
      say(null);
      setMode("return");
    }
    lastIdea.current = Date.now() - IDEA_INTERVAL_MS + FIRST_IDEA_MS;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const active = mounted && ready && Boolean(consent) && !hidden;

  // Bambus: neue Seite entdeckt (+1) und „Wusstest du schon?“ alle paar Seiten
  useEffect(() => {
    if (!ready || !consent) return;
    if (sessionVisited.has(pathname)) return;
    sessionVisited.add(pathname);
    const t = window.setTimeout(() => {
      earn(1);
      // Themen-Skins: Besuche je Bereich zählen (z. B. 10 Zoo-Seiten → Zoo-Panda)
      const fresh = recordVisit(pathname);
      if (fresh.length) {
        celebrate(["✨", "🐼", "⭐", "🎉", "✨"]);
        const cur = bubbleRef.current;
        if (!cur?.actions && !cur?.collection)
          say({ title: "Neuer Skin freigeschaltet!", text: `🎉 ${fresh.join(" · ")} – zieh ihn in deiner Sammlung an!`, important: true }, 8000);
      }
    }, 1200);
    const views = getBamboo().views + 1;
    updateBamboo({ views });
    let saying: number | null = null;
    if (!hidden && views % SAYING_EVERY === 0) {
      saying = window.setTimeout(() => {
        if (quiet.current) return;
        const guide = readGuide().filter((l) => !sessionVisited.has(l.href));
        const g = pick(guide);
        if (g) {
          sayIfFree({ title: "Hast du diese Seite schon gesehen?", text: "Die passt gut zu dem, was du gerade liest:", link: { href: g.href, label: g.title } }, 12000);
          return;
        }
        const others = nav.flatMap((c) => c.groups.map((gr) => ({ c, gr }))).filter(({ c }) => c.slug !== pathname.split("/")[1]);
        const o = pick(others);
        if (o)
          sayIfFree(
            { title: "Wusstest du schon?", text: `Bei ${o.c.title} gibt es auch einen Bereich zu ${o.gr.title}.`, link: { href: `/${o.c.slug}/${o.gr.slug}`, label: `${o.gr.title} ansehen` } },
            12000,
          );
      }, 16000);
    }
    return () => {
      window.clearTimeout(t);
      if (saying) window.clearTimeout(saying);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ready, consent]);

  // Lesen: Bambus für Lesefortschritt, Lese-Panda, Guide-Vorschläge ab 60 %
  useEffect(() => {
    if (!ready || !consent || !isArticle(pathname)) return;
    let readTimer: number | null = null;
    const onScroll = () => {
      lastInput.current = Date.now();
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const depth = window.scrollY / max;
      const done = sessionMilestones.get(pathname) ?? new Set<number>();
      sessionMilestones.set(pathname, done);
      for (const m of READ_MILESTONES) {
        if (depth >= m && !done.has(m)) {
          done.add(m);
          earn(1);
        }
      }
      // Lese-Panda: sobald gescrollt wird, setzt er sich hin und liest
      if (depth > 0.04) setActivity((a) => (a === "search" ? a : "read"));
      if (readTimer) window.clearTimeout(readTimer);
      // Guide: „Das könnte dich auch interessieren“
      if (depth >= 0.6 && !sessionGuided.has(pathname) && !quiet.current) {
        const links = readGuide();
        if (links.length) {
          const ok = sayIfFree(
            { title: "Das könnte dich auch interessieren:", text: "", links: links.slice(0, 3).map((l) => ({ href: l.href, label: l.title })) },
            14000,
          );
          if (ok) sessionGuided.add(pathname);
        }
      }
    };
    // auch wer lange auf einer Seite bleibt, bekommt den Lese-Panda
    readTimer = window.setTimeout(() => setActivity((a) => (a === "idle" ? "read" : a)), 20000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (readTimer) window.clearTimeout(readTimer);
    };
  }, [pathname, ready, consent, earn, sayIfFree]);

  // Aktive Zeit: Bambus pro Minute (max. 3 je Seite) und GreenTech-Dankeschön nach 4 Minuten
  useEffect(() => {
    if (!ready || !consent) return;
    const mark = () => (lastInput.current = Date.now());
    window.addEventListener("pointermove", mark, { passive: true });
    window.addEventListener("keydown", mark);
    window.addEventListener("touchstart", mark, { passive: true });
    const tick = window.setInterval(() => {
      if (document.hidden || Date.now() - lastInput.current > 60_000) return;
      sessionActiveSec += 15;
      const secOnPage = (Date.now() - pageStart.current) / 1000;
      const earned = sessionMinutes.get(pathname) ?? 0;
      if (earned < MAX_MINUTE_BAMBOO && secOnPage >= (earned + 1) * 60) {
        sessionMinutes.set(pathname, earned + 1);
        earn(1);
      }
      if (sessionActiveSec >= THANKS_AFTER_S && getBamboo().thanked !== todayKey() && !hidden && !quiet.current) {
        const ok = sayIfFree(
          {
            title: "Danke! 💚",
            text: "Danke, dass du Panda GreenTech unterstützt – einfach, indem du hier bist und liest.",
            link: { href: "/panda-branding/greentech", label: "Was ist Panda GreenTech?" },
          },
          8000,
        );
        if (ok) {
          updateBamboo({ thanked: todayKey() });
          celebrate(["💚", "🌱", "💚", "🌿", "💚"]);
        }
      }
    }, 15_000);
    return () => {
      window.clearInterval(tick);
      window.removeEventListener("pointermove", mark);
      window.removeEventListener("keydown", mark);
      window.removeEventListener("touchstart", mark);
    };
  }, [pathname, ready, consent, hidden, earn, sayIfFree, celebrate]);

  // Suche offen → Lupe
  useEffect(() => {
    const open = () => setActivity("search");
    const close = () => setActivity((a) => (a === "search" ? (isArticle(window.location.pathname) ? "read" : "idle") : a));
    window.addEventListener("fp-search-open", open);
    window.addEventListener("fp-search-close", close);
    return () => {
      window.removeEventListener("fp-search-open", open);
      window.removeEventListener("fp-search-close", close);
    };
  }, []);

  // GreenTech-Seiten: Besuch zählen, Pflanze wächst mit allen Besuchen
  useEffect(() => {
    if (!onGreencore || !ready || !consent) return;
    let cancelled = false;
    const run = async () => {
      try {
        const res = greencoreCounted
          ? await fetch("/api/greencore")
          : await fetch("/api/greencore", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" });
        greencoreCounted = true;
        const data = (await res.json()) as { count?: number };
        if (cancelled) return;
        const n = Math.max(0, Number(data.count) || 0);
        setGreencoreCount(n);
        if (!hidden)
          window.setTimeout(
            () =>
              sayIfFree(
                {
                  title: "Ich gieße die GreenTech-Pflanze 💧",
                  text: n > 1 ? `Schon ${n.toLocaleString("de-AT")}-mal wurde sie von Besuchern gegossen – je mehr Leute lesen, desto größer wird sie!` : "Je mehr Leute hier lesen, desto größer wird sie!",
                },
                9000,
              ),
            2500,
          );
      } catch {
        /* ohne Zähler gießt er trotzdem */
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onGreencore, ready, consent]);

  // An Startposition setzen, sobald sichtbar
  useEffect(() => {
    if (!active) return;
    if (modeRef.current === "sit") {
      pos.current = home();
      apply();
    }
    const t = window.setTimeout(() => {
      if (!bubbleRef.current) say({ text: pageTips(pathname, nav)[0].text }, 6000);
    }, 1800);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, size]);

  // Bei Größenänderung zurück in die Ecke
  useEffect(() => {
    const onResize = () => {
      if (modeRef.current === "sit") {
        pos.current = home();
        apply();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [home, apply]);

  // Von selbst Ideen zeigen – nur wenn der Besucher gerade nicht scrollt
  useEffect(() => {
    if (!active) return;
    let idle: number | null = null;
    const schedule = () => {
      if (idle) window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        if (quiet.current || modeRef.current !== "sit" || document.hidden || bubbleRef.current) return;
        if (Date.now() - lastIdea.current < IDEA_INTERVAL_MS) return schedule();
        goToIdea(false);
      }, 3200);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    const interval = window.setInterval(schedule, 8000);
    return () => {
      if (idle) window.clearTimeout(idle);
      window.clearInterval(interval);
      window.removeEventListener("scroll", schedule);
    };
  }, [active, goToIdea]);

  // Schnell gescrollt → kleiner Hüpfer (auch auf dem Handy)
  useEffect(() => {
    if (!active || reducedMotion) return;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let lastHop = 0;
    const onScroll = () => {
      const now = performance.now();
      const v = Math.abs(window.scrollY - lastY) / Math.max(1, now - lastT);
      lastY = window.scrollY;
      lastT = now;
      const b = btnRef.current;
      if (!b || v < 2.2 || now - lastHop < 1400 || modeRef.current !== "sit") return;
      lastHop = now;
      b.classList.remove("panda-hop");
      void b.offsetWidth; // Animation neu starten
      b.classList.add("panda-hop");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active, reducedMotion]);

  // Maus verfolgen (für das Festhalten)
  useEffect(() => {
    const move = (e: PointerEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      lastMove.current = Date.now();
      // Finger auf dem Panda bewegt → er hängt sich dran und baumelt mit
      const st = dragStart.current;
      if (st && !draggingRef.current && Math.hypot(e.clientX - st.x, e.clientY - st.y) > 10) {
        draggingRef.current = true;
        setDragging(true);
        say(null);
        vel.current = { x: 0, y: 0 };
        setMode("cling");
      }
    };
    const up = () => {
      dragStart.current = null;
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setDragging(false);
      suppressClick.current = true;
      window.setTimeout(() => (suppressClick.current = false), 450);
      drop();
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") drop();
    };
    const leave = (e: PointerEvent) => {
      if (!e.relatedTarget) drop();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    window.addEventListener("keydown", key);
    document.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      window.removeEventListener("keydown", key);
      document.removeEventListener("pointerout", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drop]);

  // Aufräumen
  useEffect(
    () => () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      clearHighlight();
    },
    [],
  );

  /* ---------------- Aktionen ---------------- */

  const showTip = () => {
    const tip = tips[tipIndex % tips.length];
    setTipIndex((i) => i + 1);
    // unterwegs oder auf einer Karte: genau dort stehen bleiben, solange das Menü offen ist
    if (["crawl", "return", "perch"].includes(modeRef.current)) {
      rot.current = 0;
      setMode("pause");
    }
    say({ ...tip, actions: true });
  };

  const showCollection = () => {
    if (["crawl", "return", "perch"].includes(modeRef.current)) {
      rot.current = 0;
      setMode("pause");
    }
    say({ text: "", collection: true });
  };

  const showCollectionRef = useRef(showCollection);
  showCollectionRef.current = showCollection;

  const closeBubble = () => {
    say(null);
    if (modeRef.current === "perch" || modeRef.current === "pause") setMode("return");
  };

  const onPandaClick = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    if (modeRef.current === "cling") return drop();
    if (bubble?.actions || bubble?.collection) return closeBubble(); // zweites Antippen schließt das Menü
    showTip();
  };

  const hideForever = () => {
    try {
      window.localStorage.setItem(HIDE_KEY, "off");
    } catch {
      /* ignorieren */
    }
    say(null);
    clearHighlight();
    modeRef.current = "sit";
    setModeState("sit");
    setHidden(true);
  };

  /* ---------------- Aussehen ---------------- */

  const sitting = mode === "sit" || mode === "pause";
  const pose: PandaPose =
    mode === "return"
      ? "crawl"
      : sitting
        ? activity === "search"
          ? "search"
          : onGreencore
            ? "water"
            : activity === "read"
              ? "read"
              : "sit"
        : mode;

  const chosenSkin = getSkin(bamboo.skin);
  const usingBuilder = bamboo.skin === BUILDER_KEY;
  const custom = effectiveCustom(bamboo);
  const activeSkin = !usingBuilder && skinUnlocked(chosenSkin, bamboo.count, bamboo.visits) ? chosenSkin : getSkin("klassisch");
  const look: PandaLook = {
    helmet: catSlug === "wissenschaft-astrologie",
    hat:
      catSlug === "wissenschaft-astrologie"
        ? null
        : tod === "night"
          ? "night"
          : catSlug === "urlaub-reisen"
            ? "sun"
            : hasItem(bamboo, "hut")
              ? "bamboo"
              : null,
    glasses: catSlug === "ki",
    wrench: catSlug === "autos-mobilitaet" || stage.key === "toolbox" || stage.key === "glow",
    binoculars: catSlug === "zoos",
    headset: catSlug === "pc-und-hardware",
    toolbox: hasItem(bamboo, "werkzeug"),
    plant: onGreencore ? plantFromCount(greencoreCount) : hasItem(bamboo, "pflanze") ? 0.7 : 0,
    golden: hasItem(bamboo, "gold"),
    glow: stage.key === "glow",
    curious: stage.key === "neugierig",
    sleepy: tod === "night" && activity === "idle" && !onGreencore,
    mug: tod === "morning",
    lantern: tod === "evening",
    skin: usingBuilder ? BUILDER_KEY : activeSkin.key,
    custom: usingBuilder ? custom : null,
  };

  // Solange das Cookie-Banner offen ist, bleibt der Panda weg (keine Überlagerung)
  if (!mounted || !ready || !consent) return null;

  // Verkleinert: kleiner Knopf in der Ecke – ein Klick holt Flauschipanda zurück
  if (hidden) {
    return (
      <button
        type="button"
        onClick={showPandaBuddy}
        title="Flauschipanda zurückholen"
        aria-label="Flauschipanda zurückholen"
        className="animate-buddy-in fixed bottom-3 right-3 z-40 flex size-14 items-center justify-center rounded-full border border-purple/40 bg-card shadow-[var(--glow-sm)] transition-transform hover:scale-110 active:scale-95 sm:bottom-5 sm:right-5"
      >
        <PandaFigure pose="sit" look={{ golden: look.golden, skin: look.skin, custom: look.custom }} className="size-12" />
      </button>
    );
  }

  const goal = nextGoal(bamboo.count);
  const prevAt = [...STAGES.map((s) => s.min), ...ITEMS.map((i) => i.at), ...SKINS.filter((k) => !k.season).map((k) => k.at)].filter((a) => a <= bamboo.count).sort((a, b) => b - a)[0] ?? 0;
  const progress = goal ? (bamboo.count - prevAt) / Math.max(1, goal.at - prevAt) : 1;

  return (
    <div
      ref={wrapRef}
      className={cn("fixed left-0 top-0 z-40 will-change-transform", mode === "cling" && !dragging && "pointer-events-none")}
      style={{ width: size, height: size, transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)` }}
    >
      <div ref={innerRef} className="relative h-full w-full" style={{ transformOrigin: "50% 4%" }}>
        {bubble && mode !== "cling" && (
          <div
            role="status"
            aria-live="polite"
            className={cn(
              "animate-bubble-in pointer-events-auto absolute rounded-2xl border border-purple/30 bg-card p-4 pr-8 text-sm shadow-[0_16px_40px_-12px_oklch(0_0_0/0.6),var(--glow-sm)]",
              bubble.collection ? "max-h-[min(72vh,560px)] w-[19rem] overflow-y-auto overscroll-contain sm:w-80" : "w-64 sm:w-72",
              bubbleBelow ? "top-[92%]" : "bottom-[92%]",
              bubbleLeft ? "right-2" : "left-2",
              bubbleBelow ? (bubbleLeft ? "rounded-tr-sm" : "rounded-tl-sm") : bubbleLeft ? "rounded-br-sm" : "rounded-bl-sm",
            )}
          >
            <button
              type="button"
              onClick={closeBubble}
              className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Sprechblase schließen"
            >
              <X className="size-3.5" />
            </button>
            <p className="mb-1 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-purple">
              <Sparkles className="size-3" aria-hidden="true" /> Flauschipanda · {stage.name}
            </p>

            {bubble.collection ? (
              <div className="space-y-3">
                <p className="text-base font-semibold">
                  🎋 {bamboo.count.toLocaleString("de-AT")} Bambus gesammelt
                </p>
                <div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                    <div className="h-full rounded-full bg-[image:var(--brand-gradient)] transition-[width] duration-700" style={{ width: `${Math.round(progress * 100)}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {goal ? `Noch ${goal.at - bamboo.count} bis: ${goal.name}` : "Alles freigeschaltet – du bist eine echte Panda-Legende! 🏆"}
                  </p>
                </div>
                <ol className="grid grid-cols-4 gap-1 text-center text-[11px]">
                  {STAGES.map((s) => (
                    <li key={s.key} className={cn("rounded-md border px-1 py-1.5", bamboo.count >= s.min ? "border-primary/50 text-foreground" : "border-border text-muted-foreground")}>
                      {({ klein: "Klein", neugierig: "Neugierig", toolbox: "Toolbox", glow: "Glow" } as const)[s.key]}
                      <span className="block text-[10px] text-muted-foreground">ab {s.min}</span>
                    </li>
                  ))}
                </ol>
                <ul className="space-y-1">
                  {ITEMS.map((it) => {
                    const unlocked = bamboo.count >= it.at;
                    const on = unlocked && !bamboo.off.includes(it.key);
                    return (
                      <li key={it.key} className="flex items-center justify-between gap-2 rounded-md px-1 py-0.5">
                        <span className={unlocked ? "" : "text-muted-foreground"}>
                          {unlocked ? it.emoji : "🔒"} {it.name}
                        </span>
                        {unlocked ? (
                          <button
                            type="button"
                            role="switch"
                            aria-checked={on}
                            onClick={() => toggleItem(it.key)}
                            className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium", on ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}
                          >
                            {on ? "an" : "aus"}
                          </button>
                        ) : (
                          <span className="text-[11px] text-muted-foreground">ab {it.at}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-purple">Skins</p>
                  <ul className="grid grid-cols-4 gap-1.5">
                    {visibleSkins().map((sk) => {
                      const open = skinUnlocked(sk, bamboo.count, bamboo.visits);
                      const prog = visitProgress(sk, bamboo.visits);
                      const need = prog ? `${prog.have}/${prog.need}` : `ab ${sk.at}`;
                      const current = !usingBuilder && activeSkin.key === sk.key;
                      return (
                        <li key={sk.key}>
                          <button
                            type="button"
                            disabled={!open}
                            onClick={() => {
                              setSkin(sk.key);
                              celebrate([sk.emoji, "✨", sk.emoji]);
                            }}
                            aria-pressed={current}
                            title={open ? sk.name : prog ? `${sk.name} – ${prog.have}/${prog.need} ${prog.text}` : `${sk.name} – ab ${sk.at} Bambus`}
                            className={cn(
                              "flex w-full flex-col items-center rounded-lg border px-0.5 pb-1 pt-0.5 text-[10px] leading-tight transition-colors",
                              current ? "border-primary bg-primary/10 text-foreground" : "border-border hover:border-purple/50",
                              !open && "cursor-not-allowed opacity-60",
                            )}
                          >
                            <span className="relative">
                              <PandaFigure still pose="sit" look={{ skin: sk.key }} className={cn("size-12", !open && "grayscale")} />
                              {!open && <span className="absolute inset-0 flex items-center justify-center text-base">🔒</span>}
                            </span>
                            <span className="w-full truncate">{open ? sk.name : need}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="/startseite#baukasten"
                    onClick={() => say(null)}
                    className={cn(
                      "mt-2 flex items-center gap-2 rounded-lg border px-2 py-1.5 text-xs font-medium hover:border-purple/50",
                      usingBuilder ? "border-primary bg-primary/10" : "border-border",
                    )}
                  >
                    <PandaFigure still pose="sit" look={{ skin: BUILDER_KEY, custom }} className="size-9" />
                    <span>
                      🧩 Panda-Baukasten {usingBuilder && "· angezogen"}
                      <span className="block font-normal text-muted-foreground">{BUILDER_COMBOS.toLocaleString("de-AT")} Kombinationen – eigenen Panda bauen</span>
                    </span>
                  </a>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  So sammelst du: neue Seiten entdecken, Artikel lesen, eine Weile bleiben. Nur zum Spaß – rein kosmetisch.
                </p>
                <label className="flex items-start gap-2 text-xs">
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-[var(--primary)]"
                    checked={persisting}
                    disabled={remember}
                    onChange={(e) => {
                      setPersist(e.target.checked, { explicit: true });
                      setPersisting(isPersisting());
                    }}
                  />
                  <span>
                    Sammlung auf diesem Gerät merken
                    <span className="block text-muted-foreground">
                      {remember ? "Aktiv durch deine Cookie-Einwilligung." : "Bleibt nur in deinem Browser, wird nirgendwohin geschickt."}
                    </span>
                  </span>
                </label>
              </div>
            ) : (
              <>
                {bubble.title && <p className="mb-1 font-semibold text-foreground">{bubble.title}</p>}
                {bubble.text && <p className="leading-relaxed text-foreground/90">{bubble.text}</p>}
                {bubble.link && (
                  <Link
                    href={bubble.link.href}
                    onClick={() => say(null)}
                    className="mt-2 inline-block text-sm font-medium text-primary hover:text-purple"
                  >
                    {bubble.link.label} →
                  </Link>
                )}
                {bubble.links && (
                  <ul className="mt-1 space-y-1">
                    {bubble.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={() => say(null)} className="font-medium text-primary hover:text-purple">
                          🐾 {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {bubble.actions && (
              <div className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3 text-left text-[13px]">
                <button type="button" onClick={() => goToIdea(true)} className="rounded-md px-2 py-1 text-left hover:bg-accent">
                  ✨ Zeig mir was Spannendes
                </button>
                <button type="button" onClick={showCollection} className="rounded-md px-2 py-1 text-left hover:bg-accent">
                  🎋 Meine Bambus-Sammlung ({bamboo.count.toLocaleString("de-AT")})
                </button>
                {canCling && (
                  <button type="button" onClick={startCling} className="rounded-md px-2 py-1 text-left hover:bg-accent">
                    🐾 Halt dich an meiner Maus fest
                  </button>
                )}
                {tips.length > 1 && (
                  <button type="button" onClick={showTip} className="rounded-md px-2 py-1 text-left hover:bg-accent">
                    💬 Noch ein Tipp
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    quiet.current = true;
                    if (modeRef.current === "pause") setMode("return");
                    say({ text: "Mmmh, Bambus … 🎋 Ich bleib hier sitzen. Tipp mich an, wenn du mich brauchst!" }, 4000);
                  }}
                  className="rounded-md px-2 py-1 text-left hover:bg-accent"
                >
                  🤫 Sei mal still
                </button>
                <button type="button" onClick={hideForever} className="rounded-md px-2 py-1 text-left text-muted-foreground hover:bg-accent">
                  Panda verkleinern
                </button>
              </div>
            )}
          </div>
        )}

        <button
          ref={btnRef}
          type="button"
          onClick={onPandaClick}
          onPointerDown={(e) => {
            if (e.pointerType !== "mouse") dragStart.current = { x: e.clientX, y: e.clientY };
          }}
          onAnimationEnd={(e) => {
            if (e.animationName === "panda-hop") e.currentTarget.classList.remove("panda-hop");
          }}
          aria-label={mode === "cling" ? "Panda loslassen" : `Flauschipanda (${stage.name}, ${bamboo.count} Bambus): Tipps und Aktionen`}
          className={cn(
            "relative block h-full w-full touch-none rounded-full outline-none transition-transform duration-150 select-none focus-visible:ring-[3px] focus-visible:ring-ring/60 active:scale-90",
            mode === "cling" && !dragging ? "pointer-events-none" : "pointer-events-auto",
          )}
        >
          <PandaFigure pose={pose} facing={facing} look={look} className="h-full w-full" />
        </button>

        {/* „+1 🎋“ */}
        {plus && (
          <span
            key={plus.id}
            aria-hidden="true"
            onAnimationEnd={() => setPlus(null)}
            className="panda-plus pointer-events-none absolute left-1/2 top-0 whitespace-nowrap rounded-full bg-card/90 px-2 py-0.5 text-xs font-semibold text-primary shadow-[var(--glow-sm)]"
          >
            +{plus.n} 🎋
          </span>
        )}
        {/* Funken / Herzchen */}
        {burst && !reducedMotion && (
          <span key={burst.id} aria-hidden="true" className="panda-burst pointer-events-none absolute inset-0">
            {burst.chars.map((c, i) => (
              <span
                key={i}
                style={{ "--dx": `${(i - (burst.chars.length - 1) / 2) * 22}px`, "--dy": `${-40 - (i % 2) * 22}px`, animationDelay: `${i * 70}ms` } as React.CSSProperties}
              >
                {c}
              </span>
            ))}
          </span>
        )}
      </div>
      {/* Hinweis beim Festhalten – außerhalb des schaukelnden Teils, damit er ruhig bleibt */}
      {bubble && mode === "cling" && !dragging && (
        <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs shadow-[var(--glow-sm)]">
          Esc = loslassen
        </div>
      )}
    </div>
  );
}
