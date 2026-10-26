"use client";

import { useEffect, useState } from "react";

import { STAGES, nextGoal, setSkin, stageFor, useBamboo } from "@/lib/bamboo";
import { skinUnlocked, visibleSkins, visitProgress } from "@/lib/skins";
import { cn } from "@/lib/utils";

import { PandaFigure } from "../panda-figure";

/** Event, mit dem die Startseite Flauschipandas Sammlung öffnet (components/panda-buddy.tsx hört darauf). */
export const OPEN_COLLECTION_EVENT = "fp-buddy-collection";

/** „Triff Flauschipanda“: Stufen, Skins und wie man Bambus sammelt. */
export function PandaShowcase() {
  const bamboo = useBamboo();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? bamboo.count : 0;
  const stage = stageFor(count);
  const goal = nextGoal(count);
  const skins = visibleSkins();
  const visits = mounted ? bamboo.visits : undefined;
  const unlocked = skins.filter((s) => skinUnlocked(s, count, visits)).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
      <div className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-wider text-purple">Dein flauschiger Begleiter</p>
        <h2 id="flauschipanda" className="text-3xl font-bold md:text-4xl">
          Triff <span className="text-glow">Flauschipanda</span>
        </h2>
        <p className="text-muted-foreground">
          Flauschipanda sitzt unten rechts, gibt dir Tipps und schlägt passende Artikel vor. Beim Stöbern sammelt er{" "}
          <strong className="text-foreground">Bambus</strong> 🎋 – damit wächst er und du schaltest neue Skins frei: vom Schoko-Panda
          über den Zauberer bis zum König. Auf dem Handy kannst du ihn sogar mit dem Finger herumziehen!
        </p>
        <ul className="grid gap-2 text-sm sm:grid-cols-3">
          {[
            ["🧭", "Neue Seite entdecken", "+1 Bambus"],
            ["📖", "Artikel lesen", "bis +4 Bambus"],
            ["⏳", "Eine Weile bleiben", "+1 pro Minute"],
            ["🧮", "Rechner benutzen", "+2 Bambus"],
            ["📣", "Seite teilen", "+2 Bambus"],
            ["🎁", "Täglich vorbeischauen", "+3 Tagesbonus"],
          ].map(([e, t, n]) => (
            <li key={t} className="rounded-xl border bg-card/60 p-3">
              <span className="text-xl" aria-hidden="true">
                {e}
              </span>
              <span className="mt-1 block font-medium">{t}</span>
              <span className="text-xs text-primary">{n}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-primary/25 bg-card/70 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold">
              🎋 {count.toLocaleString("de-AT")} Bambus · {stage.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {unlocked}/{skins.length} Skins frei
            </p>
          </div>
          <ol className="mt-3 grid grid-cols-4 gap-1 text-center text-[11px]">
            {STAGES.map((s) => (
              <li key={s.key} className={cn("rounded-md border px-1 py-1.5", count >= s.min ? "border-primary/50 bg-primary/10" : "text-muted-foreground")}>
                {s.name.replace(" Panda", "")}
                <span className="block text-[10px] text-muted-foreground">ab {s.min}</span>
              </li>
            ))}
          </ol>
          {goal && <p className="mt-2 text-xs text-muted-foreground">Nächstes Ziel: {goal.name} – noch {goal.at - count} Bambus</p>}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COLLECTION_EVENT))}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[image:var(--brand-gradient)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--glow-sm)] transition-transform hover:scale-[1.03] active:scale-95"
          >
            🐼 Meine Sammlung öffnen
          </button>
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-4">
        {skins.map((s, i) => {
          const open = skinUnlocked(s, count, visits);
          const prog = visitProgress(s, visits);
          const current = (bamboo.skin ?? "klassisch") === s.key && open;
          return (
            <li key={s.key} data-reveal data-reveal-delay={(i % 4) * 60}>
              <button
                type="button"
                disabled={!open}
                onClick={() => setSkin(s.key)}
                aria-pressed={current}
                className={cn(
                  "group glow-hover flex w-full flex-col items-center rounded-2xl border bg-card/60 p-2 pb-3 text-center",
                  current && "border-primary bg-primary/10",
                  !open && "cursor-not-allowed",
                )}
              >
                <span className="relative">
                  <PandaFigure still pose="sit" look={{ skin: s.key }} className={cn("size-20 transition-transform group-hover:scale-110 sm:size-24", !open && "opacity-50 grayscale")} />
                  {!open && <span className="absolute inset-0 flex items-center justify-center text-2xl">🔒</span>}
                </span>
                <span className="mt-1 text-sm font-medium">
                  {s.emoji} {s.name}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {s.season ? "Nur jetzt!" : open ? (current ? "Ausgewählt" : "Anziehen") : prog ? `${prog.have}/${prog.need} ${prog.text}` : `ab ${s.at} Bambus`}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
