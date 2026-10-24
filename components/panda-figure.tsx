import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Bambus, der Panda – eigene Figur als SVG, damit sich Arme, Beine, Kopf und Bambus
 * einzeln bewegen können. Die Bewegungen stehen in globals.css unter „Panda-Figur“.
 *
 * Posen:
 *  sit   – sitzt und knabbert Bambus
 *  crawl – tapst los, Bambus quer im Maul
 *  perch – sitzt auf einer Karte und winkt
 *  cling – hält sich mit beiden Pfoten an der Maus fest und baumelt
 */
export type PandaPose = "sit" | "crawl" | "perch" | "cling";

const INK = "#1d1a2b";
const FUR = "#fbf8ff";

export function PandaFigure({ pose, facing = 1, className }: { pose: PandaPose; facing?: 1 | -1; className?: string }) {
  const uid = useId().replace(/:/g, "");
  const scarf = `pb-scarf-${uid}`;
  const shade = `pb-shade-${uid}`;

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("pb", `pb-${pose}`, className)}
      style={{ transform: `scaleX(${facing})` }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={scarf} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="oklch(0.86 0.14 195)" />
          <stop offset="1" stopColor="oklch(0.72 0.19 300)" />
        </linearGradient>
        <radialGradient id={shade} cx="0.5" cy="0.35" r="0.75">
          <stop offset="0.65" stopColor={FUR} />
          <stop offset="1" stopColor="#e4def0" />
        </radialGradient>
      </defs>

      <ellipse className="pb-shadow" cx="60" cy="114" rx="27" ry="4.5" fill="#000" opacity="0.28" />

      <g className="pb-bob">
        {/* Beine */}
        <g className="pb-leg pb-leg-l">
          <ellipse cx="44" cy="103" rx="11.5" ry="9.5" fill={INK} />
          <ellipse cx="44" cy="106" rx="5" ry="3.4" fill="#3a3550" />
        </g>
        <g className="pb-leg pb-leg-r">
          <ellipse cx="76" cy="103" rx="11.5" ry="9.5" fill={INK} />
          <ellipse cx="76" cy="106" rx="5" ry="3.4" fill="#3a3550" />
        </g>

        {/* Körper mit schwarzem Schulterband und Türkis-Lila-Halstuch */}
        <ellipse cx="60" cy="84" rx="29" ry="25" fill={`url(#${shade})`} stroke={INK} strokeWidth="2" />
        <path d="M32 76 Q60 62 88 76 L88 84 Q60 72 32 84 Z" fill={INK} />
        <path d="M41 69 Q60 79 79 69 L80 75 Q60 86 40 75 Z" fill={`url(#${scarf})`} />
        <path d="M70 76 l7 11 l-8 -1 z" fill="oklch(0.72 0.19 300)" />

        {/* Arme hinter dem Kopf – nur beim Festklammern sichtbar (Pfoten schauen oben heraus) */}
        <g className="pb-arm pb-arm-back pb-arm-back-l">
          <rect x="27" y="68" width="13" height="27" rx="6.5" fill={INK} />
          <ellipse cx="33.5" cy="92.2" rx="3.4" ry="0.85" fill="#ff9fd0" />
        </g>
        <g className="pb-arm pb-arm-back pb-arm-back-r">
          <rect x="80" y="68" width="13" height="27" rx="6.5" fill={INK} />
          <ellipse cx="86.5" cy="92.2" rx="3.4" ry="0.85" fill="#ff9fd0" />
        </g>

        {/* Kopf */}
        <g className="pb-head">
          <circle cx="36" cy="22" r="10.5" fill={INK} />
          <circle cx="84" cy="22" r="10.5" fill={INK} />
          <circle cx="36" cy="22" r="4.5" fill="oklch(0.72 0.19 300)" opacity="0.55" />
          <circle cx="84" cy="22" r="4.5" fill="oklch(0.72 0.19 300)" opacity="0.55" />
          <circle cx="60" cy="44" r="27.5" fill={`url(#${shade})`} stroke={INK} strokeWidth="2" />
          <ellipse cx="48" cy="46" rx="7.8" ry="10" transform="rotate(-28 48 46)" fill={INK} />
          <ellipse cx="72" cy="46" rx="7.8" ry="10" transform="rotate(28 72 46)" fill={INK} />
          <g className="pb-eyes">
            <circle cx="49.5" cy="45.5" r="3.9" fill="#fff" />
            <circle cx="70.5" cy="45.5" r="3.9" fill="#fff" />
            <circle className="pb-pupil" cx="50.2" cy="46.2" r="2.4" fill={INK} />
            <circle className="pb-pupil" cx="71.2" cy="46.2" r="2.4" fill={INK} />
            <circle cx="51" cy="44.8" r="0.9" fill="#fff" />
            <circle cx="72" cy="44.8" r="0.9" fill="#fff" />
          </g>
          <circle cx="40" cy="58" r="4.6" fill="#ff8fc6" opacity="0.5" />
          <circle cx="80" cy="58" r="4.6" fill="#ff8fc6" opacity="0.5" />
          <ellipse cx="60" cy="55.5" rx="4.3" ry="3.1" fill={INK} />
          <path className="pb-mouth" d="M54.5 59.5 q2.8 3.6 5.5 0.4 q2.7 3.2 5.5 -0.4" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* Bambus */}
        <g className="pb-bamboo">
          <rect x="56" y="62" width="8" height="50" rx="3" fill="#78c86a" stroke="#3f8a3a" strokeWidth="1.2" />
          <path d="M56 77 h8 M56 93 h8" stroke="#3f8a3a" strokeWidth="1.4" />
          <path d="M63 66 q12 -12 25 -9 q-9 9 -25 9 z" fill="#5db24f" />
          <path d="M57 70 q-10 -13 -22 -12 q7 10 22 12 z" fill="#6cc05d" />
        </g>

        {/* Arme (vorne, damit die Pfoten den Bambus halten) */}
        <g className="pb-arm pb-arm-l">
          <rect x="27" y="68" width="13" height="27" rx="6.5" fill={INK} />
        </g>
        <g className="pb-arm pb-arm-r">
          <rect x="80" y="68" width="13" height="27" rx="6.5" fill={INK} />
        </g>
      </g>
    </svg>
  );
}
