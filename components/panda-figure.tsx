import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Bambus, der Panda – eigene Figur als SVG, damit sich Arme, Beine, Kopf und Bambus
 * einzeln bewegen können. Die Bewegungen stehen in globals.css unter „Panda-Figur“.
 *
 * Posen:
 *  sit    – sitzt und knabbert Bambus
 *  crawl  – tapst los, Bambus quer im Maul
 *  perch  – sitzt auf einer Karte und winkt
 *  cling  – hält sich mit beiden Pfoten an der Maus fest und baumelt
 *  read   – sitzt und liest ein Buch (beim Lesen eines Artikels)
 *  search – hält eine Lupe hoch (wenn die Suche offen ist)
 *  water  – gießt die GreenCore-Pflanze (auf GreenCore-Seiten)
 *
 * Aussehen (look): Hüte, Brille, Zubehör, Gegenstände aus der Bambus-Sammlung, Tageszeit.
 */
export type PandaPose = "sit" | "crawl" | "perch" | "cling" | "read" | "search" | "water";

export interface PandaLook {
  hat?: "bamboo" | "sun" | "night" | null;
  /** KI: kleine Hologramm-Brille */
  glasses?: boolean;
  /** Autos: Mini-Schraubenschlüssel im Halstuch */
  wrench?: boolean;
  /** Zoos: Fernglas um den Hals */
  binoculars?: boolean;
  /** PC & Hardware: Headset */
  headset?: boolean;
  /** Gegenstand Werkzeugkiste (steht neben ihm) */
  toolbox?: boolean;
  /** Pflanze neben ihm, 0 = keine, 0.2–1 = Größe */
  plant?: number;
  /** Gegenstand Goldener Panda */
  golden?: boolean;
  /** Stufe Glow Panda: leuchtender Schein */
  glow?: boolean;
  /** Stufe Neugieriger Panda: schaut sich ab und zu neugierig um */
  curious?: boolean;
  /** nachts: müde Augen */
  sleepy?: boolean;
  /** morgens: Kaffeetasse */
  mug?: boolean;
  /** abends: kleine Laterne */
  lantern?: boolean;
}

const INK = "#1d1a2b";
const FUR = "#fbf8ff";
const TEAL = "oklch(0.86 0.14 195)";
const PURPLE = "oklch(0.72 0.19 300)";

export function PandaFigure({
  pose,
  facing = 1,
  look = {},
  className,
}: {
  pose: PandaPose;
  facing?: 1 | -1;
  look?: PandaLook;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const scarf = `pb-scarf-${uid}`;
  const shade = `pb-shade-${uid}`;
  const gold = Boolean(look.golden);
  const plant = Math.max(0, Math.min(1, look.plant ?? 0));
  const sleepy = Boolean(look.sleepy) && (pose === "sit" || pose === "read");

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn(
        "pb",
        `pb-${pose}`,
        look.glow && "pb-glowing",
        look.curious && "pb-curious",
        gold && "pb-gold",
        sleepy && "pb-sleepy",
        className,
      )}
      style={{ transform: `scaleX(${facing})` }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={scarf} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={gold ? "#ffe69a" : TEAL} />
          <stop offset="1" stopColor={gold ? "#e9a92c" : PURPLE} />
        </linearGradient>
        <radialGradient id={shade} cx="0.5" cy="0.35" r="0.75">
          <stop offset="0.65" stopColor={gold ? "#fff6d6" : FUR} />
          <stop offset="1" stopColor={gold ? "#f3cf6b" : "#e4def0"} />
        </radialGradient>
      </defs>

      <ellipse className="pb-shadow" cx="60" cy="114" rx="27" ry="4.5" fill="#000" opacity="0.28" />

      {/* Dinge, die neben dem Panda stehen (nur im Sitzen sichtbar) */}
      <g className="pb-side">
        {look.toolbox && (
          <g className="pb-toolbox">
            <path d="M6 99 q0 -6 7 -6 h2 q7 0 7 6" fill="none" stroke="#3a3550" strokeWidth="2.2" />
            <rect x="2" y="99" width="24" height="14" rx="2.5" fill="oklch(0.62 0.2 25)" stroke={INK} strokeWidth="1.4" />
            <rect x="2" y="104" width="24" height="2.4" fill="oklch(0.86 0.14 195)" />
          </g>
        )}
        <g transform={look.toolbox ? "translate(2 -15)" : undefined}>
          {look.mug && (
            <g className="pb-mug">
              <rect x="9" y="102" width="11" height="11" rx="2" fill={TEAL} stroke={INK} strokeWidth="1.3" />
              <path d="M20 105 q4 0 4 3 q0 3 -4 3" fill="none" stroke={INK} strokeWidth="1.3" />
              <path className="pb-steam" d="M12 99 q-2 -3 0 -5 q2 -2 0 -5 M17 99 q-2 -3 0 -5 q2 -2 0 -5" fill="none" stroke="#fff" strokeWidth="1.2" opacity="0.7" strokeLinecap="round" />
            </g>
          )}
          {look.lantern && (
            <g className="pb-lantern">
              <path d="M14 92 v-3 h6 v3" fill="none" stroke={INK} strokeWidth="1.3" />
              <rect x="11" y="92" width="12" height="17" rx="3" fill="oklch(0.86 0.15 80 / 0.85)" stroke={INK} strokeWidth="1.3" />
              <circle className="pb-flame" cx="17" cy="101" r="3" fill="#fff4b0" />
              <rect x="10" y="109" width="14" height="3" rx="1" fill={INK} />
            </g>
          )}
        </g>
        {plant > 0 && (
          <g className="pb-plant" style={{ transform: `scale(${0.45 + plant * 0.55})` }}>
            <path d="M96 113 l-2 -11 h18 l-2 11 z" fill="oklch(0.6 0.12 45)" stroke={INK} strokeWidth="1.2" />
            <path d="M103 102 q0 -14 1 -22" stroke="#3f8a3a" strokeWidth="2" fill="none" />
            <path d="M103 92 q-9 -2 -11 -9 q8 0 11 9 z" fill="#6cc05d" />
            <path d="M104 86 q8 -3 10 -10 q-8 1 -10 10 z" fill="#5db24f" />
            {plant > 0.6 && <path d="M104 80 q-6 -6 -4 -12 q5 5 4 12 z" fill="#78c86a" />}
            {plant > 0.85 && <circle cx="104" cy="77" r="2.6" fill="oklch(0.86 0.14 195)" className="pb-bloom" />}
          </g>
        )}
      </g>

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
        <path d="M70 76 l7 11 l-8 -1 z" fill={gold ? "#e9a92c" : PURPLE} />

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
          <circle cx="36" cy="22" r="4.5" fill={PURPLE} opacity="0.55" />
          <circle cx="84" cy="22" r="4.5" fill={PURPLE} opacity="0.55" />
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
          {/* müde, geschlossene Augen (nachts) */}
          <g className="pb-eyes-sleepy">
            <path d="M46 46 q3.5 3 7 0" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M67 46 q3.5 3 7 0" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
          </g>
          <circle cx="40" cy="58" r="4.6" fill="#ff8fc6" opacity="0.5" />
          <circle cx="80" cy="58" r="4.6" fill="#ff8fc6" opacity="0.5" />
          <ellipse cx="60" cy="55.5" rx="4.3" ry="3.1" fill={INK} />
          <path className="pb-mouth" d="M54.5 59.5 q2.8 3.6 5.5 0.4 q2.7 3.2 5.5 -0.4" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />

          {look.glasses && (
            <g className="pb-glasses">
              <rect x="41" y="39.5" width="16" height="12" rx="4" fill={TEAL} opacity="0.32" stroke={TEAL} strokeWidth="1.5" />
              <rect x="63" y="39.5" width="16" height="12" rx="4" fill={PURPLE} opacity="0.32" stroke={TEAL} strokeWidth="1.5" />
              <path d="M57 44 h6 M41 44 l-7 -3 M79 44 l7 -3" stroke={TEAL} strokeWidth="1.4" />
              <path className="pb-holo" d="M43 42 h10 M65 42 h10" stroke="#fff" strokeWidth="0.8" opacity="0.8" />
            </g>
          )}
          {look.headset && (
            <g className="pb-headset">
              <path d="M31 44 Q31 13 60 13 Q89 13 89 44" fill="none" stroke="#3a3550" strokeWidth="3.4" />
              <rect x="26" y="38" width="9" height="15" rx="3.5" fill="#3a3550" stroke={TEAL} strokeWidth="1.2" />
              <rect x="85" y="38" width="9" height="15" rx="3.5" fill="#3a3550" stroke={TEAL} strokeWidth="1.2" />
              <path d="M31 52 q2 9 15 9" fill="none" stroke="#3a3550" strokeWidth="1.6" />
              <circle cx="47" cy="61" r="2" fill={TEAL} />
            </g>
          )}

          {/* Hüte */}
          {look.hat === "bamboo" && (
            <g className="pb-hat">
              <path d="M24 25 L60 3 L96 25 Q60 31 24 25 Z" fill="#dcbf72" stroke="#9c7b33" strokeWidth="1.3" />
              <path d="M38 17 L82 17" stroke="#9c7b33" strokeWidth="0.9" opacity="0.7" />
              <path d="M31 21.5 Q60 27 89 21.5" stroke="#5db24f" strokeWidth="2.2" fill="none" />
              <path d="M60 3 L60 25" stroke="#9c7b33" strokeWidth="0.8" opacity="0.6" />
            </g>
          )}
          {look.hat === "sun" && (
            <g className="pb-hat">
              <ellipse cx="60" cy="21" rx="38" ry="7" fill="#f6d87a" stroke="#b8902e" strokeWidth="1.3" />
              <path d="M44 20 Q44 4 60 4 Q76 4 76 20 Z" fill="#f6d87a" stroke="#b8902e" strokeWidth="1.3" />
              <path d="M44.5 16 Q60 20 75.5 16 L76 20 Q60 23 44 20 Z" fill="#ff8fc6" />
              <circle cx="73" cy="15" r="2.6" fill={TEAL} />
            </g>
          )}
          {look.hat === "night" && (
            <g className="pb-hat pb-nightcap">
              <path d="M33 24 Q40 4 66 6 Q90 8 102 26 Q86 18 78 22 Q60 14 33 24 Z" fill="oklch(0.55 0.16 290)" stroke={INK} strokeWidth="1.3" />
              <path d="M48 12 l3 8 M62 8 l2 9 M78 11 l-1 9" stroke="#fff" strokeWidth="1.4" opacity="0.5" />
              <path d="M31 25 Q60 13 82 22" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" />
              <circle cx="103" cy="27" r="5" fill="#fff" />
            </g>
          )}
        </g>

        {/* Bambus */}
        <g className="pb-bamboo">
          <rect x="56" y="62" width="8" height="50" rx="3" fill="#78c86a" stroke="#3f8a3a" strokeWidth="1.2" />
          <path d="M56 77 h8 M56 93 h8" stroke="#3f8a3a" strokeWidth="1.4" />
          <path d="M63 66 q12 -12 25 -9 q-9 9 -25 9 z" fill="#5db24f" />
          <path d="M57 70 q-10 -13 -22 -12 q7 10 22 12 z" fill="#6cc05d" />
        </g>

        {/* Buch (Lese-Panda) */}
        <g className="pb-book">
          <path d="M37 76 L60 81 L60 99 L37 94 Z" fill={TEAL} stroke={INK} strokeWidth="1.4" />
          <path d="M83 76 L60 81 L60 99 L83 94 Z" fill={PURPLE} stroke={INK} strokeWidth="1.4" />
          <path d="M40 77.5 L59 81.6 L59 96.5 L40 92.4 Z" fill="#fffdf6" />
          <path d="M80 77.5 L61 81.6 L61 96.5 L80 92.4 Z" fill="#fffdf6" />
          <path d="M43 82 l12 2.6 M43 85.5 l12 2.6 M43 89 l9 2 M65 84.6 l12 -2.6 M65 88.1 l12 -2.6 M65 91.6 l9 -2" stroke="#9a94b0" strokeWidth="0.9" />
          <path className="pb-page" d="M61 81.6 L80 77.5 L80 92.4 L61 96.5 Z" fill="#fff" stroke="#ddd6ee" strokeWidth="0.6" />
        </g>

        {/* Lupe (Such-Panda) */}
        <g className="pb-magnifier">
          <path d="M103 56 L96 47" stroke="#6b4f2a" strokeWidth="4.2" strokeLinecap="round" />
          <circle cx="90" cy="39" r="9.5" fill={TEAL} fillOpacity="0.28" stroke="#3a3550" strokeWidth="2.6" />
          <path d="M85 35 q3 -3 7 -2" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </g>

        {/* Gießkanne (GreenCore-Panda) */}
        <g className="pb-can">
          <path d="M62 80 h17 v12 q0 3 -3 3 h-11 q-3 0 -3 -3 z" fill={TEAL} stroke={INK} strokeWidth="1.3" />
          <path d="M79 84 L98 72" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M96 70.5 l4 -2 l1.5 4 z" fill={INK} />
          <path d="M65 80 q5.5 -8 11 0" fill="none" stroke={INK} strokeWidth="1.4" />
          <g className="pb-drops">
            <circle cx="101" cy="77" r="1.3" fill={TEAL} />
            <circle cx="102" cy="83" r="1.3" fill={TEAL} />
            <circle cx="100.5" cy="89" r="1.3" fill={TEAL} />
          </g>
        </g>

        {look.binoculars && (
          <g className="pb-binoculars">
            <path d="M47 72 Q60 96 73 72" fill="none" stroke="#3a3550" strokeWidth="1.3" />
            <rect x="51.5" y="85" width="7" height="9" rx="2.5" fill="#3a3550" stroke={INK} strokeWidth="1" />
            <rect x="61.5" y="85" width="7" height="9" rx="2.5" fill="#3a3550" stroke={INK} strokeWidth="1" />
            <rect x="58" y="87" width="4" height="3" fill={INK} />
            <circle cx="55" cy="93.4" r="2" fill={TEAL} opacity="0.8" />
            <circle cx="65" cy="93.4" r="2" fill={TEAL} opacity="0.8" />
          </g>
        )}

        {/* Arme (vorne, damit die Pfoten den Bambus halten) */}
        <g className="pb-arm pb-arm-l">
          <rect x="27" y="68" width="13" height="27" rx="6.5" fill={INK} />
        </g>
        <g className="pb-arm pb-arm-r">
          <rect x="80" y="68" width="13" height="27" rx="6.5" fill={INK} />
        </g>
        {/* Autos: Mini-Schraubenschlüssel in der linken Pfote */}
        {look.wrench && (
          <g className="pb-wrench">
            <rect x="45.2" y="87" width="3.6" height="17" rx="1.5" fill="#d5dae6" stroke={INK} strokeWidth="0.9" transform="rotate(38 47 95.5)" />
            <path d="M52.4 82.4 a5 5 0 1 1 -1.6 8.4 l2.8 -1.6 l0.8 -2.8 z" fill="#d5dae6" stroke={INK} strokeWidth="0.9" />
          </g>
        )}
      </g>

      {sleepy && (
        <g className="pb-zzz" fill="#fff" fontFamily="system-ui, sans-serif" fontWeight="700">
          <text x="92" y="16" fontSize="9">z</text>
          <text x="100" y="8" fontSize="11">Z</text>
        </g>
      )}
    </svg>
  );
}
