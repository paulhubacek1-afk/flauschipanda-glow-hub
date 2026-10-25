"use client";

import { useEffect, useState } from "react";

import { useBamboo } from "@/lib/bamboo";

/**
 * Bambus wächst: Je mehr Bambus gesammelt ist, desto lebendiger wird der Seitenrand.
 *   ab 10 Bambus → erste Sprosse · ab 50 → ein paar Halme · ab 100 → kleiner Bambuswald mit Glühwürmchen
 * Ganz dezent, hinter dem Inhalt – auf dem Handy etwas kleiner und blasser.
 */
const STALKS = [
  { x: 10, h: 0.55, w: 9, d: 0 },
  { x: 32, h: 0.85, w: 11, d: 1.2 },
  { x: 54, h: 0.4, w: 8, d: 2.1 },
  { x: 74, h: 1, w: 12, d: 0.6 },
  { x: 98, h: 0.65, w: 9, d: 1.7 },
  { x: 118, h: 0.9, w: 10, d: 2.6 },
  { x: 140, h: 0.5, w: 8, d: 0.9 },
  { x: 160, h: 0.75, w: 10, d: 3.1 },
];

function stalksFor(count: number) {
  if (count < 10) return 0;
  if (count < 50) return 2;
  if (count < 100) return 4;
  return 8;
}

/** Wachstum innerhalb der Stufe (0–1), damit die Halme schrittweise größer werden */
function growth(count: number) {
  if (count < 10) return 0;
  if (count < 50) return 0.25 + ((count - 10) / 40) * 0.25;
  if (count < 100) return 0.5 + ((count - 50) / 50) * 0.3;
  return Math.min(1, 0.8 + (count - 100) / 500);
}

export function BambooForest() {
  const { count } = useBamboo();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const n = stalksFor(count);
  if (!mounted || n === 0) return null;
  const g = growth(count);
  const maxH = 260; // px

  return (
    <div aria-hidden="true" className="pointer-events-none fixed bottom-0 left-0 -z-10 h-[300px] w-[190px] origin-bottom-left scale-[0.62] opacity-[0.16] sm:scale-75 xl:scale-100 xl:opacity-[0.22]">
      {STALKS.slice(0, n).map((s, i) => {
        const height = Math.round(maxH * s.h * g);
        return (
          <div
            key={i}
            className="bamboo-stalk absolute bottom-0"
            style={{ left: s.x, width: s.w, height, animationDelay: `-${s.d}s` }}
          >
            <svg viewBox={`0 0 ${s.w} ${height}`} width={s.w} height={height} preserveAspectRatio="none" className="absolute inset-0 overflow-visible">
              <rect x="0" y="0" width={s.w} height={height} rx={s.w / 2.4} fill="#6cc05d" />
              {Array.from({ length: Math.floor(height / 38) }, (_, k) => (
                <rect key={k} x="-0.5" y={height - (k + 1) * 38} width={s.w + 1} height="2.2" rx="1" fill="#3f8a3a" />
              ))}
              {height > 60 && (
                <>
                  <path d={`M${s.w} 14 q16 -14 30 -8 q-12 10 -30 8 z`} fill="#5db24f" />
                  <path d={`M0 ${Math.round(height * 0.4)} q-16 -12 -28 -6 q11 9 28 6 z`} fill="#78c86a" />
                </>
              )}
            </svg>
          </div>
        );
      })}
      {count >= 100 &&
        [
          [40, 120],
          [120, 60],
          [150, 170],
          [70, 210],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="bamboo-firefly absolute size-1.5 rounded-full bg-[oklch(0.95_0.15_120)] shadow-[0_0_10px_oklch(0.95_0.15_120)]"
            style={{ left: x, bottom: y, animationDelay: `-${i * 1.4}s` }}
          />
        ))}
    </div>
  );
}
