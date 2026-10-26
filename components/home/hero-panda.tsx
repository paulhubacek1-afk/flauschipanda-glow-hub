"use client";

import { useEffect, useRef, useState } from "react";

import { effectiveCustom, useBamboo } from "@/lib/bamboo";
import { BUILDER_KEY, getSkin, skinUnlocked } from "@/lib/skins";
import { cn } from "@/lib/utils";

import { PandaFigure, type PandaPose } from "../panda-figure";

/**
 * Großer Flauschipanda im Startseiten-Hero: wechselt zwischen Posen, plaudert ein bisschen,
 * trägt den Skin, den der Besucher gewählt hat. Antippen → er hüpft und sagt etwas Neues.
 */
const SCENES: { pose: PandaPose; text: string }[] = [
  { pose: "perch", text: "Hallo, ich bin Flauschipanda! 🐼" },
  { pose: "sit", text: "Mmmh … Bambus. Willst du auch was? 🎋" },
  { pose: "read", text: "Ich lese gerade über Pandas im Zoo 📖" },
  { pose: "search", text: "Such dir oben ein Thema aus – ich helfe suchen! 🔍" },
  { pose: "sit", text: "Sammle Bambus beim Lesen und schalte Skins für mich frei ✨" },
];

export function HeroPanda({ className }: { className?: string }) {
  const bamboo = useBamboo();
  const [i, setI] = useState(0);
  const [hop, setHop] = useState(0);
  const [mounted, setMounted] = useState(false);
  const timer = useRef<number | null>(null);

  const skin = getSkin(bamboo.skin);
  const builder = mounted && bamboo.skin === BUILDER_KEY;
  const skinKey = builder ? BUILDER_KEY : mounted && skinUnlocked(skin, bamboo.count, bamboo.visits) ? skin.key : "klassisch";
  const custom = builder ? effectiveCustom(bamboo) : null;

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = window.setInterval(() => setI((v) => (v + 1) % SCENES.length), 4200);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const scene = SCENES[i];
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      {/* Sprechblase */}
      <p
        key={i}
        aria-live="polite"
        className="animate-bubble-in relative z-10 mb-2 flex min-h-[3.75rem] max-w-[17rem] items-center justify-center rounded-2xl rounded-bl-sm border border-purple/30 bg-card/90 px-4 py-2.5 text-center text-sm shadow-[var(--glow-sm)] backdrop-blur"
      >
        {scene.text}
      </p>
      <div className="relative">
        {/* Leuchten + Bambusblätter, die herumfliegen */}
        <div className="absolute inset-[12%] -z-10 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" aria-hidden="true" />
        <div className="absolute inset-[18%] -z-10 translate-x-6 rounded-full bg-purple/30 blur-3xl" aria-hidden="true" />
        <span aria-hidden="true" className="hero-leaf left-[6%] top-[20%]">🍃</span>
        <span aria-hidden="true" className="hero-leaf right-[4%] top-[8%] [animation-delay:-2s]">🎋</span>
        <span aria-hidden="true" className="hero-leaf bottom-[22%] right-[0%] [animation-delay:-4s]">✨</span>
        <span aria-hidden="true" className="hero-leaf bottom-[30%] left-[0%] [animation-delay:-5.5s]">💚</span>
        <button
          type="button"
          onClick={() => {
            setHop((h) => h + 1);
            setI((v) => (v + 1) % SCENES.length);
          }}
          aria-label="Flauschipanda antippen"
          className="block touch-manipulation rounded-full outline-none transition-transform active:scale-95 focus-visible:ring-[3px] focus-visible:ring-ring/60"
        >
          <span key={hop} className={cn("block", hop > 0 && "panda-hop")}>
            <PandaFigure pose={scene.pose} facing={1} look={{ skin: skinKey, custom, glow: true }} className="size-48 animate-float sm:size-64 lg:size-80" />
          </span>
        </button>
      </div>
    </div>
  );
}
