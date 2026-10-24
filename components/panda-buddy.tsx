"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";

import type { NavLite } from "@/lib/cms";
import { useConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";

import { PandaFigure, type PandaPose } from "./panda-figure";

/**
 * Bambus, der Panda-Buddy
 * -----------------------
 * - sitzt unten rechts und knabbert Bambus
 * - krabbelt von selbst zu Karten, die zu deinen Interessen passen (Elemente mit `data-panda-topic`)
 *   und zeigt sie dir – nur zu Karten, die gerade sichtbar sind; er scrollt nie selbst
 * - auf Wunsch hält er sich an der Maus fest und baumelt mit (Desktop) – Esc lässt los
 * - Tipp auf den Panda: Tipps zur aktuellen Seite und Aktionen
 *
 * Interessen = welche Kategorien du dir angesehen hast. Das bleibt im Browser:
 * ohne Einwilligung nur für diesen Besuch (im Arbeitsspeicher), mit Einwilligung in
 * „Statistik“ oder „Werbung“ auch für spätere Besuche (localStorage). Nichts wird übertragen.
 */

const HIDE_KEY = "fp-buddy";
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

interface Bubble {
  text: string;
  link?: { href: string; label: string };
  actions?: boolean;
}

const SPEED = 190; // px pro Sekunde beim Krabbeln
const FIRST_IDEA_MS = 7000;
const IDEA_INTERVAL_MS = 30000;

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Noch wach? Ich auch! 🌙";
  if (h < 11) return "Guten Morgen! ☀️";
  if (h < 17) return "Hallo! Schön, dass du da bist.";
  if (h < 22) return "Guten Abend! 🐼";
  return "Späte Runde? Ich leiste dir Gesellschaft. 🌙";
}

function pageTips(pathname: string, nav: NavLite[]): Bubble[] {
  const [catSlug, groupSlug, pageSlug] = pathname.split("/").filter(Boolean);
  const category = nav.find((c) => c.slug === catSlug);
  const group = category?.groups.find((g) => g.slug === groupSlug);
  if (pathname === "/startseite") {
    return [
      { text: `${greeting()} Ich bin Bambus, dein Panda in der Panda Toolbox. Tipp mich an, wenn du Hilfe brauchst!` },
      { text: "Wonach suchst du? Tipp oben ein Stichwort ins Suchfeld – z. B. „Hundefutter“ oder „Prompts“." },
      { text: "Alle Themen auf einen Blick findest du in der Seitenstruktur.", link: { href: "/seitenstruktur", label: "Seitenstruktur" } },
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

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function PandaBuddy({ nav }: { nav: NavLite[] }) {
  const pathname = usePathname();
  const { consent, ready } = useConsent();
  const remember = Boolean(consent?.statistics || consent?.marketing);

  const [hidden, setHidden] = useState(true);
  const [mode, setModeState] = useState<Mode>("sit");
  const [facing, setFacing] = useState<1 | -1>(-1);
  const [bubble, setBubble] = useState<Bubble | null>(null);
  const [tipIndex, setTipIndex] = useState(0);
  const [bubbleLeft, setBubbleLeft] = useState(false);
  const [bubbleBelow, setBubbleBelow] = useState(false);
  const [size, setSize] = useState(88);
  const [canCling, setCanCling] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<Mode>("sit");
  const pos = useRef({ x: -999, y: -999 });
  const vel = useRef({ x: 0, y: 0 });
  const rot = useRef(0);
  const cursor = useRef({ x: 0, y: 0 });
  const lastMove = useRef(0);
  const targetEl = useRef<HTMLElement | null>(null);
  const raf = useRef<number | null>(null);
  const lastT = useRef(0);
  const lastIdea = useRef(0);
  const quiet = useRef(false);
  const shown = useRef(new Set<string>());
  const interests = useRef<Record<string, number>>({});
  const bubbleTimer = useRef<number | null>(null);

  const tips = useMemo(() => pageTips(pathname, nav), [pathname, nav]);
  const titleOf = useCallback((slug: string) => nav.find((c) => c.slug === slug)?.title, [nav]);

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
    setBubble(b);
    if (b && autoCloseMs) {
      bubbleTimer.current = window.setTimeout(() => {
        setBubble(null);
        if (modeRef.current === "perch" || modeRef.current === "pause") setMode("return");
        else clearHighlight();
      }, autoCloseMs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          if (Math.abs(dx) > 2) setFacing(dx > 0 ? 1 : -1);
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
      }

      apply();
      const still = modeRef.current === "sit" || modeRef.current === "pause";
      if (!still) raf.current = requestAnimationFrame(step);
      else raf.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apply, home, perchPoint, say, size],
  );

  const setMode = useCallback(
    (m: Mode) => {
      modeRef.current = m;
      setModeState(m);
      if (m !== "perch" && m !== "crawl" && m !== "pause") clearHighlight();
      if (m === "sit") {
        rot.current = 0;
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

  // Start: gemerkte Einstellungen, Größe, Fähigkeiten
  useEffect(() => {
    let off = false;
    try {
      off = window.localStorage.getItem(HIDE_KEY) === "off";
    } catch {
      /* ignorieren */
    }
    setHidden(off);
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setSize(window.innerWidth < 640 ? 68 : 88);
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
      window.removeEventListener("resize", update);
      window.removeEventListener(SHOW_BUDDY_EVENT, show);
    };
  }, []);

  // Interessen laden (nur mit Einwilligung gespeichert)
  useEffect(() => {
    if (!remember) return;
    const stored = readInterests();
    for (const [k, v] of Object.entries(stored)) interests.current[k] = Math.max(interests.current[k] ?? 0, v);
  }, [remember]);

  // Seitenwechsel: Interesse zählen, Panda heimschicken, kurz begrüßen
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
    if (modeRef.current === "perch" || modeRef.current === "crawl") {
      say(null);
      setMode("return");
    }
    lastIdea.current = Date.now() - IDEA_INTERVAL_MS + FIRST_IDEA_MS;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // An Startposition setzen, sobald sichtbar
  useEffect(() => {
    if (hidden || !ready || !consent) return;
    if (modeRef.current === "sit") {
      pos.current = home();
      apply();
    }
    const t = window.setTimeout(() => say({ text: pageTips(pathname, nav)[0].text }, 6000), 1800);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden, ready, consent, size]);

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
    if (hidden || !ready || !consent) return;
    let idle: number | null = null;
    const schedule = () => {
      if (idle) window.clearTimeout(idle);
      idle = window.setTimeout(() => {
        if (quiet.current || modeRef.current !== "sit" || document.hidden) return;
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
  }, [hidden, ready, consent, goToIdea]);

  // Maus verfolgen (für das Festhalten)
  useEffect(() => {
    const move = (e: PointerEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      lastMove.current = Date.now();
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") drop();
    };
    const leave = (e: PointerEvent) => {
      if (!e.relatedTarget) drop();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("keydown", key);
    document.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("keydown", key);
      document.removeEventListener("pointerout", leave);
    };
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

  const closeBubble = () => {
    say(null);
    if (modeRef.current === "perch" || modeRef.current === "pause") setMode("return");
  };

  const onPandaClick = () => {
    if (modeRef.current === "cling") return drop();
    if (bubble?.actions) return closeBubble(); // zweites Antippen schließt das Menü
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

  // Solange das Cookie-Banner offen ist, bleibt der Panda weg (keine Überlagerung)
  if (hidden || !ready || !consent) return null;

  const pose: PandaPose = mode === "return" ? "crawl" : mode === "pause" ? "sit" : mode;

  return (
    <div
      ref={wrapRef}
      className={cn("fixed left-0 top-0 z-40 will-change-transform", mode === "cling" && "pointer-events-none")}
      style={{ width: size, height: size, transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)` }}
    >
      <div ref={innerRef} className="relative h-full w-full" style={{ transformOrigin: "50% 4%" }}>
        {bubble && mode !== "cling" && (
          <div
            role="status"
            aria-live="polite"
            className={cn(
              "animate-bubble-in pointer-events-auto absolute w-64 rounded-2xl border border-purple/30 bg-card p-4 pr-8 text-sm shadow-[0_16px_40px_-12px_oklch(0_0_0/0.6),var(--glow-sm)] sm:w-72",
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
              <Sparkles className="size-3" aria-hidden="true" /> Bambus
            </p>
            <p className="leading-relaxed text-foreground/90">{bubble.text}</p>
            {bubble.link && (
              <Link
                href={bubble.link.href}
                onClick={() => say(null)}
                className="mt-2 inline-block text-sm font-medium text-primary hover:text-purple"
              >
                {bubble.link.label} →
              </Link>
            )}
            {bubble.actions && (
              <div className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3 text-left text-[13px]">
                <button type="button" onClick={() => goToIdea(true)} className="rounded-md px-2 py-1 text-left hover:bg-accent">
                  ✨ Zeig mir was Spannendes
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
                  🎋 Iss in Ruhe deinen Bambus
                </button>
                <button type="button" onClick={hideForever} className="rounded-md px-2 py-1 text-left text-muted-foreground hover:bg-accent">
                  Panda ausblenden
                </button>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={onPandaClick}
          aria-label={mode === "cling" ? "Panda loslassen" : "Panda Bambus: Tipps und Aktionen"}
          className={cn(
            "relative block h-full w-full rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60",
            mode === "cling" ? "pointer-events-none" : "pointer-events-auto",
          )}
        >
          <PandaFigure pose={pose} facing={facing} className="h-full w-full" />
        </button>
      </div>
      {/* Hinweis beim Festhalten – außerhalb des schaukelnden Teils, damit er ruhig bleibt */}
      {bubble && mode === "cling" && (
        <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs shadow-[var(--glow-sm)]">
          Esc = loslassen
        </div>
      )}
    </div>
  );
}
