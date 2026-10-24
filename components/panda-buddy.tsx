"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";

import type { NavLite } from "@/lib/cms";
import { useConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";

import buddy from "@/public/panda-buddy.png";

/**
 * Panda-Buddy: ein kleiner Panda unten rechts, der Besucher begrüßt und passende Tipps zur
 * aktuellen Seite gibt. Kein Tracking, keine KI – die Texte stehen unten in `buildMessages`.
 *
 * - erscheint erst, nachdem die Cookie-Entscheidung getroffen wurde (keine Überlagerung mit dem Banner)
 * - per Klick auf den Panda: nächster Tipp · „X“ blendet die Sprechblase aus
 * - „Panda ausblenden“ wird im Browser gemerkt (nur eine Einstellung, keine personenbezogenen Daten)
 */

const STORAGE_KEY = "fp-buddy";
export const SHOW_BUDDY_EVENT = "fp-buddy-show";

/** Panda wieder einblenden (z. B. über den Link im Footer). */
export function showPandaBuddy() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignorieren */
  }
  window.dispatchEvent(new Event(SHOW_BUDDY_EVENT));
}

interface Message {
  text: string;
  link?: { href: string; label: string };
}

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Noch wach? Ich auch! 🌙";
  if (h < 11) return "Guten Morgen! ☀️";
  if (h < 17) return "Hallo! Schön, dass du da bist.";
  if (h < 22) return "Guten Abend! 🐼";
  return "Späte Runde? Ich leiste dir Gesellschaft. 🌙";
}

function buildMessages(pathname: string, nav: NavLite[]): Message[] {
  const [catSlug, groupSlug, pageSlug] = pathname.split("/").filter(Boolean);
  const category = nav.find((c) => c.slug === catSlug);
  const group = category?.groups.find((g) => g.slug === groupSlug);
  const random = nav.length ? nav[Math.floor(Math.random() * nav.length)] : undefined;

  if (pathname === "/startseite" || pathname === "/") {
    return [
      { text: `${greeting()} Ich bin Flauschi, dein Panda in der Panda Toolbox.` },
      { text: "Wonach suchst du? Tipp oben einfach ein Stichwort ins Suchfeld – z. B. „Hundefutter“ oder „Prompts“." },
      ...(random ? [{ text: `Heute empfehle ich dir: ${random.title}.`, link: { href: `/${random.slug}`, label: `Zu ${random.title}` } }] : []),
      { text: "Alle Themen auf einen Blick findest du in der Seitenstruktur.", link: { href: "/seitenstruktur", label: "Seitenstruktur öffnen" } },
    ];
  }
  if (pathname === "/seitenstruktur") {
    return [
      { text: "Hier siehst du alles, was es gibt – und was gerade entsteht. Graue Themen kommen bald! 🎋" },
      { text: "Oben kannst du direkt zu einer Kategorie springen." },
    ];
  }
  if (pathname.startsWith("/transparenz")) {
    return [{ text: "Ehrlich währt am längsten: Hier steht, wie wir Werbung und Affiliate-Links kennzeichnen. 💚" }];
  }
  if (category && group && pageSlug) {
    return [
      { text: "Psst … rechts im Inhaltsverzeichnis kannst du direkt zu jedem Abschnitt springen." },
      { text: "Ganz unten findest du häufige Fragen – vielleicht ist deine schon beantwortet!" },
      { text: `Mehr zu ${group.title} gibt es in der Liste neben dem Text.`, link: { href: `/${category.slug}/${group.slug}`, label: `Alles zu ${group.title}` } },
      { text: "Hat dir die Seite geholfen? Mit Panda GreenCore kannst du etwas zurückgeben. 💚" },
    ];
  }
  if (category && group) {
    return [
      { text: `Willkommen bei ${group.title}! Rechts siehst du alle Themen, die hier geplant sind.` },
      { text: `Noch mehr findest du in ${category.title}.`, link: { href: `/${category.slug}`, label: `Zu ${category.title}` } },
    ];
  }
  if (category) {
    const first = category.groups[0];
    return [
      { text: `Du bist bei ${category.title}. Such dir unten ein Unterthema aus!` },
      ...(first ? [{ text: `Wie wär's mit ${first.title}?`, link: { href: `/${category.slug}/${first.slug}`, label: first.title } }] : []),
    ];
  }
  return [{ text: `${greeting()} Brauchst du Hilfe? Auf der Startseite kannst du alles durchsuchen.`, link: { href: "/startseite", label: "Zur Startseite" } }];
}

export function PandaBuddy({ nav }: { nav: NavLite[] }) {
  const pathname = usePathname();
  const { consent, ready } = useConsent();
  const [hidden, setHidden] = useState(true); // erst nach dem Laden zeigen (kein Aufblitzen)
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [wiggle, setWiggle] = useState(false);
  const firstVisit = useRef(true);

  const messages = useMemo(() => buildMessages(pathname, nav), [pathname, nav]);
  const message = messages[index % messages.length];

  // gemerkte Einstellung laden
  useEffect(() => {
    let off = false;
    try {
      off = window.localStorage.getItem(STORAGE_KEY) === "off";
    } catch {
      /* Speicher blockiert – Panda trotzdem zeigen */
    }
    setHidden(off);
    const show = () => {
      setHidden(false);
      setBubbleOpen(true);
    };
    window.addEventListener(SHOW_BUDDY_EVENT, show);
    return () => window.removeEventListener(SHOW_BUDDY_EVENT, show);
  }, []);

  // Bei Seitenwechsel: von vorn beginnen und kurz „hallo“ sagen
  useEffect(() => {
    setIndex(0);
    const t = window.setTimeout(
      () => {
        setBubbleOpen(true);
        setWiggle(true);
        window.setTimeout(() => setWiggle(false), 900);
      },
      firstVisit.current ? 2500 : 900,
    );
    firstVisit.current = false;
    return () => window.clearTimeout(t);
  }, [pathname]);

  // Schreibmaschinen-Effekt (bei „weniger Bewegung“ sofort ganzer Text)
  useEffect(() => {
    if (!bubbleOpen || !message) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(message.text);
      return;
    }
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 2;
      setTyped(message.text.slice(0, i));
      if (i >= message.text.length) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [bubbleOpen, message]);

  const next = useCallback(() => {
    setWiggle(true);
    window.setTimeout(() => setWiggle(false), 900);
    if (!bubbleOpen) setBubbleOpen(true);
    else setIndex((i) => (i + 1) % messages.length);
  }, [bubbleOpen, messages.length]);

  const hideForever = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "off");
    } catch {
      /* ignorieren */
    }
    setHidden(true);
  };

  // Solange das Cookie-Banner offen ist, bleibt der Panda weg (keine Überlagerung)
  if (hidden || !ready || !consent || !message) return null;

  const done = typed.length >= message.text.length;

  return (
    <div className="pointer-events-none fixed bottom-3 right-3 z-40 flex max-w-[calc(100vw-1.5rem)] items-end gap-2 sm:bottom-5 sm:right-5">
      {bubbleOpen && (
        <div
          role="status"
          aria-live="polite"
          className="animate-bubble-in pointer-events-auto relative mb-10 w-64 rounded-2xl rounded-br-sm border border-purple/30 bg-card p-4 pr-8 text-sm shadow-[0_16px_40px_-12px_oklch(0_0_0/0.6),var(--glow-sm)] sm:w-72"
        >
          <button
            type="button"
            onClick={() => setBubbleOpen(false)}
            className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label="Sprechblase schließen"
          >
            <X className="size-3.5" />
          </button>
          <p className="mb-1 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-purple">
            <Sparkles className="size-3" aria-hidden="true" /> Flauschi
          </p>
          <p className="min-h-10 leading-relaxed text-foreground/90">
            {typed}
            {!done && <span className="animate-caret ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-primary" aria-hidden="true" />}
          </p>
          <div className={cn("mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 transition-opacity", done ? "opacity-100" : "opacity-0")}>
            {message.link && (
              <Link href={message.link.href} className="text-sm font-medium text-primary hover:text-purple">
                {message.link.label} →
              </Link>
            )}
            {messages.length > 1 && (
              <button type="button" onClick={next} className="text-xs text-muted-foreground hover:text-foreground">
                Noch ein Tipp
              </button>
            )}
            <button type="button" onClick={hideForever} className="ml-auto text-[11px] text-muted-foreground/70 hover:text-foreground">
              Panda ausblenden
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={next}
        aria-label={bubbleOpen ? "Nächster Tipp vom Panda" : "Panda Flauschi ansprechen"}
        className="animate-buddy-in pointer-events-auto group relative shrink-0 rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60"
      >
        <span className="absolute inset-1 -z-10 rounded-full bg-gradient-to-br from-primary/40 to-purple/50 blur-xl animate-pulse-glow" aria-hidden="true" />
        <Image
          src={buddy}
          alt=""
          sizes="96px"
          className={cn(
            "size-20 animate-float object-contain drop-shadow-[0_6px_14px_oklch(0_0_0/0.5)] transition-transform group-hover:scale-110 sm:size-24",
            wiggle && "animate-wiggle",
          )}
        />
        {!bubbleOpen && (
          <span className="absolute -left-1 top-1 flex size-7 items-center justify-center rounded-full bg-purple text-purple-foreground shadow-[var(--glow-sm)]">
            <MessageCircle className="size-4" aria-hidden="true" />
          </span>
        )}
      </button>
    </div>
  );
}
