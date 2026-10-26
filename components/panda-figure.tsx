import { useId } from "react";

import { resolveLook, type CustomLook, type SkinExtra } from "@/lib/skins";
import { cn } from "@/lib/utils";

/**
 * Flauschipanda – eigene Figur als SVG, damit sich Arme, Beine, Kopf und Bambus
 * einzeln bewegen können. Die Bewegungen stehen in globals.css unter „Panda-Figur“.
 *
 * Posen:
 *  sit    – sitzt und knabbert Bambus
 *  crawl  – tapst los, Bambus quer im Maul
 *  perch  – sitzt auf einer Karte und winkt
 *  cling  – hält sich mit beiden Pfoten an der Maus fest und baumelt
 *  read   – sitzt und liest ein Buch (beim Lesen eines Artikels)
 *  search – hält eine Lupe hoch (wenn die Suche offen ist)
 *  water  – gießt die GreenTech-Pflanze (auf GreenTech-Seiten)
 *
 * Aussehen (look): Hüte, Brille, Zubehör, Gegenstände aus der Bambus-Sammlung, Tageszeit, Skins.
 * Flauschig: Kopf, Körper und Ohren haben einen gewellten Fell-Rand (fluff), Arme und Beine
 * einen leicht zotteligen Rand (SVG-Filter), dazu Haarbüschel auf dem Kopf und an der Brust.
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
  /** Wissenschaft & Astrologie: Astronautenhelm */
  helmet?: boolean;
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
  /** Skin aus lib/skins.ts (Fellfarbe und Outfit) – „baukasten“ = eigene Kombination */
  skin?: string | null;
  /** eigene Kombination aus dem Panda-Baukasten */
  custom?: CustomLook | null;
}

const HAT_EXTRAS: SkinExtra[] = [
  "chef", "pirate", "wizard", "crown", "party", "witch", "santa", "flower",
  "ki", "safari", "racer", "beach", "sprout", "cat", "sunrays", "hood", "bamboo", "sun", "night",
];

/** Ellipse mit flauschig gewelltem Rand (lauter kleine Fell-Bögen). */
function fluff(cx: number, cy: number, rx: number, ry: number, n: number, amp: number, cheeks = 0) {
  const r = (v: number) => Math.round(v * 100) / 100;
  let d = "";
  for (let i = 0; i <= n; i++) {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    const x = cx + rx * Math.cos(a);
    const y = cy + ry * Math.sin(a);
    if (i === 0) {
      d += `M${r(x)} ${r(y)}`;
      continue;
    }
    const am = (Math.PI * 2 * (i - 0.5)) / n - Math.PI / 2;
    // unregelmäßige Büschel, an den Wangen (seitlich unten) etwas länger
    let k = amp * (1 + 0.35 * (((i * 7) % 3) - 1));
    if (cheeks && Math.abs(Math.cos(am)) > 0.72 && Math.sin(am) > 0.05) k *= 1 + cheeks;
    d += `Q${r(cx + (rx + 2 * k) * Math.cos(am))} ${r(cy + (ry + 2 * k) * Math.sin(am))} ${r(x)} ${r(y)}`;
  }
  return d + "Z";
}

const HEAD = fluff(60, 44, 27, 27, 26, 1.25, 0.9);
const BODY = fluff(60, 84, 28.5, 24.5, 26, 1.3);
const EAR_L = fluff(36, 22, 10, 10, 11, 1.1);
const EAR_R = fluff(84, 22, 10, 10, 11, 1.1);
const LEG_L = fluff(44, 103, 11, 9, 13, 0.9);
const LEG_R = fluff(76, 103, 11, 9, 13, 0.9);

const TEAL = "oklch(0.86 0.14 195)";
const PURPLE = "oklch(0.72 0.19 300)";

export function PandaFigure({
  pose,
  facing = 1,
  look = {},
  className,
  still = false,
}: {
  pose: PandaPose;
  facing?: 1 | -1;
  look?: PandaLook;
  className?: string;
  /** Vorschaubild: ohne Animation und ohne Fell-Filter (schont Handys bei vielen Pandas auf einer Seite) */
  still?: boolean;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const scarf = `pb-scarf-${uid}`;
  const shade = `pb-shade-${uid}`;
  const furFx = `pb-fur-${uid}`;
  const gold = Boolean(look.golden);
  const R = resolveLook(look.skin, look.custom);
  const pal = R.palette;
  const INK = pal.ink;
  const FUR = gold ? "#fff6d6" : pal.fur;
  const SOFT = pal.inkSoft;
  const extra = R.extra;
  const acc = R.acc;
  const hatExtra = extra && HAT_EXTRAS.includes(extra) && !look.helmet ? extra : null;
  // einfache Hüte (Bambushut, Sonnenhut, Schlafmütze) gibt es auch im Baukasten; Strand = Sonnenhut + Blüte
  const hat = hatExtra
    ? hatExtra === "beach"
      ? "sun"
      : hatExtra === "bamboo" || hatExtra === "sun" || hatExtra === "night"
        ? hatExtra
        : null
    : look.hat;
  const showGlasses = look.glasses || extra === "ki";
  const showBinoculars = look.binoculars || extra === "safari";
  const showWrench = look.wrench || extra === "racer";
  const showHeadset = look.headset || acc === "headset";
  const showSunglasses = acc === "sunglasses" || extra === "beach";
  const hideEars = hatExtra === "cat" || hatExtra === "hood";
  const plant = Math.max(0, Math.min(1, look.plant ?? 0));
  const sleepy = Boolean(look.sleepy) && (pose === "sit" || pose === "read");

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn(
        "pb",
        `pb-${pose}`,
        look.glow && "pb-glowing",
        R.neon && !gold && "pb-neon",
        look.curious && "pb-curious",
        gold && "pb-gold",
        sleepy && "pb-sleepy",
        still && "pb-still",
        className,
      )}
      style={{ transform: `scaleX(${facing})`, ...(R.neonColor ? ({ "--pb-neon": R.neonColor } as React.CSSProperties) : {}) }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={scarf} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={gold ? "#ffe69a" : pal.scarf[0]} />
          {R.rainbow && !gold && (
            <>
              <stop offset="0.25" stopColor="#ffb347" />
              <stop offset="0.45" stopColor="#ffe36b" />
              <stop offset="0.65" stopColor="#6be38a" />
              <stop offset="0.82" stopColor="#5ac8ff" />
            </>
          )}
          <stop offset="1" stopColor={gold ? "#e9a92c" : pal.scarf[1]} />
        </linearGradient>
        <radialGradient id={shade} cx="0.5" cy="0.35" r="0.75">
          <stop offset="0.65" stopColor={FUR} />
          <stop offset="1" stopColor={gold ? "#f3cf6b" : pal.furEdge} />
        </radialGradient>
        {/* zotteliger Rand für Arme, Beine und Ohren */}
        <filter id={furFx} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
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
        {/* Superhelden-Umhang – hinter allem */}
        {extra === "cape" && (
          <g className="pb-cape">
            <path d="M38 70 Q28 96 18 113 Q60 106 102 113 Q92 96 82 70 Z" fill="oklch(0.6 0.22 25)" stroke={INK} strokeWidth="1.4" />
            <path d="M40 74 Q33 96 26 110" fill="none" stroke="oklch(0.5 0.2 25)" strokeWidth="1.2" opacity="0.7" />
            <path d="M80 74 Q87 96 94 110" fill="none" stroke="oklch(0.5 0.2 25)" strokeWidth="1.2" opacity="0.7" />
          </g>
        )}
        <g className="pb-leg pb-leg-l">
          <path d={LEG_L} fill={INK} filter={still ? undefined : `url(#${furFx})`} />
          <ellipse cx="44" cy="106" rx="5" ry="3.4" fill={SOFT} />
          <circle cx="40" cy="101.5" r="1.4" fill={SOFT} />
          <circle cx="44" cy="100.3" r="1.4" fill={SOFT} />
          <circle cx="48" cy="101.5" r="1.4" fill={SOFT} />
        </g>
        <g className="pb-leg pb-leg-r">
          <path d={LEG_R} fill={INK} filter={still ? undefined : `url(#${furFx})`} />
          <ellipse cx="76" cy="106" rx="5" ry="3.4" fill={SOFT} />
          <circle cx="72" cy="101.5" r="1.4" fill={SOFT} />
          <circle cx="76" cy="100.3" r="1.4" fill={SOFT} />
          <circle cx="80" cy="101.5" r="1.4" fill={SOFT} />
        </g>

        {/* Körper mit schwarzem Schulterband und Türkis-Lila-Halstuch */}
        <path d={BODY} fill={`url(#${shade})`} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
        {/* flauschiger Brustpelz */}
        <path d="M49 96 q3 3.5 5.5 0 q2.7 3.8 5.5 0 q2.8 3.8 5.5 0 q2.5 3.5 5.5 0" fill="none" stroke={pal.furEdge} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M53 102 q3.5 3 7 0 q3.5 3 7 0" fill="none" stroke={pal.furEdge} strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />
        {R.stars && (
          <g className="pb-stars" fill="#fff">
            <circle cx="45" cy="92" r="0.9" />
            <circle cx="73" cy="97" r="1.1" />
            <circle cx="66" cy="104" r="0.7" />
            <circle cx="50" cy="104" r="0.8" />
          </g>
        )}
        <path d="M32 76 Q60 62 88 76 L88 84 Q60 72 32 84 Z" fill={INK} filter={still ? undefined : `url(#${furFx})`} />
        <path d="M41 69 Q60 79 79 69 L80 75 Q60 86 40 75 Z" fill={`url(#${scarf})`} />
        <path d="M70 76 l7 11 l-8 -1 z" fill={gold ? "#e9a92c" : pal.scarf[1]} />
        {acc === "bowtie" && (
          <g className="pb-bowtie">
            <path d="M48 73 L59 78 L48 83 Z M72 73 L61 78 L72 83 Z" fill="oklch(0.6 0.22 25)" stroke={INK} strokeWidth="1" strokeLinejoin="round" />
            <rect x="57.5" y="75.5" width="5" height="5" rx="1.5" fill="oklch(0.5 0.2 25)" stroke={INK} strokeWidth="0.8" />
          </g>
        )}

        {/* Arme hinter dem Kopf – nur beim Festklammern sichtbar (Pfoten schauen oben heraus) */}
        <g className="pb-arm pb-arm-back pb-arm-back-l">
          <rect x="27" y="68" width="13" height="27" rx="6.5" fill={INK} filter={still ? undefined : `url(#${furFx})`} />
          <ellipse cx="33.5" cy="92.2" rx="3.4" ry="0.85" fill="#ff9fd0" />
        </g>
        <g className="pb-arm pb-arm-back pb-arm-back-r">
          <rect x="80" y="68" width="13" height="27" rx="6.5" fill={INK} filter={still ? undefined : `url(#${furFx})`} />
          <ellipse cx="86.5" cy="92.2" rx="3.4" ry="0.85" fill="#ff9fd0" />
        </g>

        {/* Kopf */}
        <g className="pb-head">
          {/* Sonnenkranz hinter dem Kopf */}
          {hatExtra === "sunrays" && (
            <g className="pb-sunrays" fill="#ffd34d" stroke="#e9a92c" strokeWidth="0.8">
              {[-80, -55, -30, -5, 20, 45, 70].map((d) => (
                <path key={d} d="M57 6 L60 -6 L63 6 Z" transform={`rotate(${d} 60 44)`} />
              ))}
            </g>
          )}
          {!hideEars && (
            <>
              <path d={EAR_L} fill={INK} filter={still ? undefined : `url(#${furFx})`} />
              <path d={EAR_R} fill={INK} filter={still ? undefined : `url(#${furFx})`} />
              <circle cx="36" cy="22" r="4.5" fill={pal.cheek} opacity="0.45" />
              <circle cx="84" cy="22" r="4.5" fill={pal.cheek} opacity="0.45" />
            </>
          )}
          {/* Katzenohren */}
          {hatExtra === "cat" && (
            <g className="pb-catears">
              <path d="M30 30 L33 6 L50 20 Z" fill={INK} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M90 30 L87 6 L70 20 Z" fill={INK} stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M34 24 L35.5 12 L44 19.5 Z" fill="#ff9fc6" />
              <path d="M86 24 L84.5 12 L76 19.5 Z" fill="#ff9fc6" />
            </g>
          )}
          <path d={HEAD} fill={`url(#${shade})`} stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
          {/* Haarbüschel oben auf dem Kopf */}
          <path className="pb-tuft" d="M53 19 q1 -7 5.5 -3.5 q1.5 -6.5 5 -1 q3.5 -4 4 2.5" fill={FUR} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
          {R.stars && (
            <g className="pb-stars" fill="#fff">
              <circle cx="42" cy="31" r="0.9" />
              <circle cx="78" cy="30" r="1.1" />
              <circle cx="60" cy="27" r="0.7" />
              <circle cx="83" cy="56" r="0.8" />
            </g>
          )}
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
          <circle cx="40" cy="58" r="4.6" fill={pal.cheek} opacity="0.5" />
          <circle cx="80" cy="58" r="4.6" fill={pal.cheek} opacity="0.5" />
          <ellipse cx="60" cy="55.5" rx="4.3" ry="3.1" fill={INK} />
          <path className="pb-mouth" d="M54.5 59.5 q2.8 3.6 5.5 0.4 q2.7 3.2 5.5 -0.4" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />

          {showGlasses && (
            <g className="pb-glasses">
              <rect x="41" y="39.5" width="16" height="12" rx="4" fill={TEAL} opacity="0.32" stroke={TEAL} strokeWidth="1.5" />
              <rect x="63" y="39.5" width="16" height="12" rx="4" fill={PURPLE} opacity="0.32" stroke={TEAL} strokeWidth="1.5" />
              <path d="M57 44 h6 M41 44 l-7 -3 M79 44 l7 -3" stroke={TEAL} strokeWidth="1.4" />
              <path className="pb-holo" d="M43 42 h10 M65 42 h10" stroke="#fff" strokeWidth="0.8" opacity="0.8" />
            </g>
          )}
          {showHeadset && (
            <g className="pb-headset">
              <path d="M31 44 Q31 13 60 13 Q89 13 89 44" fill="none" stroke="#3a3550" strokeWidth="3.4" />
              <rect x="26" y="38" width="9" height="15" rx="3.5" fill={SOFT} stroke={TEAL} strokeWidth="1.2" />
              <rect x="85" y="38" width="9" height="15" rx="3.5" fill={SOFT} stroke={TEAL} strokeWidth="1.2" />
              <path d="M31 52 q2 9 15 9" fill="none" stroke="#3a3550" strokeWidth="1.6" />
              <circle cx="47" cy="61" r="2" fill={TEAL} />
            </g>
          )}

          {/* Hüte */}
          {/* Augenklappe (Pirat) */}
          {extra === "pirate" && (
            <g className="pb-patch">
              <path d="M32 38 L44 41.5 M55 41 L88 34" stroke="#111" strokeWidth="1.4" />
              <ellipse cx="49.5" cy="46" rx="6.6" ry="6" fill="#141018" stroke="#3a3550" strokeWidth="0.8" />
            </g>
          )}

          {/* Accessoires */}
          {showSunglasses && (
            <g className="pb-sunglasses">
              <rect x="40.5" y="40" width="17" height="11" rx="5" fill="#141018" stroke="#3a3550" strokeWidth="1" />
              <rect x="62.5" y="40" width="17" height="11" rx="5" fill="#141018" stroke="#3a3550" strokeWidth="1" />
              <path d="M57.5 44 h5 M40.5 43 l-6 -2.5 M79.5 43 l6 -2.5" stroke="#141018" strokeWidth="1.6" />
              <path d="M43 42.5 q3 -1.5 6 0 M65 42.5 q3 -1.5 6 0" stroke="#fff" strokeWidth="1" opacity="0.6" fill="none" />
            </g>
          )}
          {acc === "nerd" && (
            <g className="pb-nerd" fill="none" stroke="#2b2540" strokeWidth="1.8">
              <circle cx="49.5" cy="45.5" r="7.2" />
              <circle cx="70.5" cy="45.5" r="7.2" />
              <path d="M56.7 45 h6.6 M42.3 44 l-7 -2 M77.7 44 l7 -2" />
            </g>
          )}
          {acc === "whiskers" && (
            <g className="pb-whiskers" stroke={INK} strokeWidth="1" strokeLinecap="round" opacity="0.75">
              <path d="M36 56 L22 53 M36 58.5 L22 59.5 M36 61 L23 65" />
              <path d="M84 56 L98 53 M84 58.5 L98 59.5 M84 61 L97 65" />
            </g>
          )}

          {/* Themen- und Baukasten-Hüte */}
          {hatExtra === "ki" && (
            <g className="pb-hat pb-antenna">
              <path d="M60 17 L60 6" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
              <circle className="pb-bulb" cx="60" cy="4.5" r="3.4" fill={TEAL} stroke={INK} strokeWidth="1" />
              <path d="M53 16 q7 -4 14 0" fill="none" stroke={TEAL} strokeWidth="1.2" opacity="0.8" />
            </g>
          )}
          {hatExtra === "safari" && (
            <g className="pb-hat pb-safari">
              <ellipse cx="60" cy="22" rx="31" ry="5" fill="#c9b072" stroke="#8a7438" strokeWidth="1.2" />
              <path d="M39 22 Q40 4 60 4 Q80 4 81 22 Z" fill="#dcc68a" stroke="#8a7438" strokeWidth="1.2" />
              <path d="M40.5 17.5 Q60 21 79.5 17.5 L80 21 Q60 24.5 40 21 Z" fill="#5d4a2a" />
            </g>
          )}
          {hatExtra === "racer" && (
            <g className="pb-hat pb-racer">
              <path d="M37 25 Q38 7 60 7 Q82 7 83 25 Q60 19 37 25 Z" fill="oklch(0.6 0.22 25)" stroke={INK} strokeWidth="1.2" />
              <path d="M78 22 Q92 20 100 27 Q88 28.5 79 25.5 Z" fill="oklch(0.5 0.2 25)" stroke={INK} strokeWidth="1.1" />
              <path d="M50 9.5 L50 22 M60 7 L60 20.5 M70 9.5 L70 22" stroke="#fff" strokeWidth="1.6" opacity="0.85" />
              <circle cx="60" cy="7.5" r="1.8" fill="#fff" />
            </g>
          )}
          {hatExtra === "beach" && (
            <g className="pb-hibiscus">
              {[0, 72, 144, 216, 288].map((a) => (
                <circle key={a} cx={47 + 3 * Math.cos((a * Math.PI) / 180)} cy={17 + 3 * Math.sin((a * Math.PI) / 180)} r="2.6" fill="#ff5a8a" />
              ))}
              <circle cx="47" cy="17" r="1.6" fill="#ffe36b" />
            </g>
          )}
          {hatExtra === "sprout" && (
            <g className="pb-hat pb-sprout">
              <path d="M60 18 Q59 11 60 5" stroke="#3f8a3a" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M60 10 Q50 9 47 2 Q56 2 60 10 Z" fill="#6cc05d" stroke="#3f8a3a" strokeWidth="0.8" />
              <path d="M60 8 Q69 6 73 -1 Q64 -1 60 8 Z" fill="#8be38f" stroke="#3f8a3a" strokeWidth="0.8" />
            </g>
          )}
          {hatExtra === "hood" && (
            <g className="pb-hat pb-hood">
              <path d="M27 58 Q22 12 60 9 Q98 12 93 58 Q88 32 60 26 Q32 32 27 58 Z" fill="#231e38" stroke="oklch(0.72 0.19 300)" strokeWidth="1.4" />
              <path d="M60 9 Q66 2 74 1" fill="none" stroke="#231e38" strokeWidth="4" strokeLinecap="round" />
            </g>
          )}

          {/* Skin-Hüte */}
          {hatExtra === "party" && (
            <g className="pb-hat pb-party">
              <path d="M49 21 L61 2 L73 21 Q61 25 49 21 Z" fill="oklch(0.8 0.17 340)" stroke={INK} strokeWidth="1.2" />
              <path d="M53 15 L69 15 M56 9.5 L66 9.5" stroke="#fff3a0" strokeWidth="2" />
              <circle cx="61" cy="2.5" r="3" fill={TEAL} stroke={INK} strokeWidth="0.9" />
              <circle cx="44" cy="12" r="1.2" fill="#ffe36b" className="pb-confetti" />
              <circle cx="80" cy="10" r="1.2" fill={TEAL} className="pb-confetti" />
              <rect x="76" y="18" width="2" height="2" fill={PURPLE} className="pb-confetti" />
            </g>
          )}
          {hatExtra === "chef" && (
            <g className="pb-hat pb-chef">
              <circle cx="49" cy="11" r="7" fill="#fff" stroke={INK} strokeWidth="1.2" />
              <circle cx="71" cy="11" r="7" fill="#fff" stroke={INK} strokeWidth="1.2" />
              <circle cx="60" cy="8" r="8" fill="#fff" stroke={INK} strokeWidth="1.2" />
              <rect x="45" y="12" width="30" height="10" rx="2" fill="#fff" stroke={INK} strokeWidth="1.2" />
              <path d="M51 14 v6 M60 14 v6 M69 14 v6" stroke="#ddd6ee" strokeWidth="1" />
            </g>
          )}
          {hatExtra === "pirate" && (
            <g className="pb-hat pb-bandana">
              <path d="M33 27 Q36 11 60 11 Q84 11 87 27 Q60 18 33 27 Z" fill="oklch(0.6 0.22 25)" stroke={INK} strokeWidth="1.2" />
              <circle cx="47" cy="18" r="1.3" fill="#fff" />
              <circle cx="60" cy="15" r="1.3" fill="#fff" />
              <circle cx="73" cy="18" r="1.3" fill="#fff" />
              <path d="M86 25 l9 -3 l-3 7 z M86 26 l7 6 l-8 1 z" fill="oklch(0.6 0.22 25)" stroke={INK} strokeWidth="1" />
            </g>
          )}
          {hatExtra === "wizard" && (
            <g className="pb-hat pb-wizard">
              <path d="M38 23 Q50 12 58 2 Q64 -1 66 4 Q70 14 82 23 Z" fill="oklch(0.42 0.16 285)" stroke={INK} strokeWidth="1.2" />
              <ellipse cx="60" cy="23" rx="29" ry="5" fill="oklch(0.42 0.16 285)" stroke={INK} strokeWidth="1.2" />
              <path d="M52 13 l1 2 l2 .3 l-1.5 1.4 l.4 2 l-1.9 -1 l-1.9 1 l.4 -2 l-1.5 -1.4 l2 -.3 z" fill="#ffe36b" />
              <circle cx="66" cy="10" r="1.1" fill="#ffe36b" />
              <circle cx="70" cy="17" r="1.3" fill={TEAL} />
            </g>
          )}
          {hatExtra === "crown" && (
            <g className="pb-hat pb-crown">
              <path d="M44 21 L45 7 L53 14 L60 4 L67 14 L75 7 L76 21 Z" fill="#ffd34d" stroke="#a87b12" strokeWidth="1.2" strokeLinejoin="round" />
              <circle cx="60" cy="16" r="2.2" fill="oklch(0.6 0.22 25)" />
              <circle cx="50" cy="17" r="1.6" fill={TEAL} />
              <circle cx="70" cy="17" r="1.6" fill={PURPLE} />
            </g>
          )}
          {hatExtra === "witch" && (
            <g className="pb-hat pb-witch">
              <ellipse cx="60" cy="22" rx="33" ry="5.5" fill="#2b1d3d" stroke={INK} strokeWidth="1.2" />
              <path d="M45 21 Q53 12 57 3 Q63 -1 69 3 Q64 8 75 21 Z" fill="#3b2a55" stroke={INK} strokeWidth="1.2" />
              <path d="M46 18 Q60 22 74 18 L75 21 Q60 25 45 21 Z" fill="#ff8a1f" />
              <circle cx="69" cy="3" r="1.6" fill="#ff8a1f" />
            </g>
          )}
          {hatExtra === "santa" && (
            <g className="pb-hat pb-santa">
              <path d="M34 25 Q42 6 64 6 Q86 6 98 24 Q84 17 78 21 Q60 14 34 25 Z" fill="oklch(0.58 0.22 25)" stroke={INK} strokeWidth="1.2" />
              <path d="M32 25 Q60 13 84 22" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
              <circle cx="99" cy="26" r="5" fill="#fff" />
            </g>
          )}
          {hatExtra === "flower" && (
            <g className="pb-hat pb-flowers">
              {[
                [37, 27, "#ff8fc6"],
                [47, 20, "#ffe36b"],
                [60, 17, "#c9a6ff"],
                [73, 20, "#7fd4ff"],
                [83, 27, "#ff9f6b"],
              ].map(([x, y, c]) => (
                <g key={`${x}`}>
                  {[0, 72, 144, 216, 288].map((a) => (
                    <circle
                      key={a}
                      cx={Number(x) + 2.8 * Math.cos((a * Math.PI) / 180)}
                      cy={Number(y) + 2.8 * Math.sin((a * Math.PI) / 180)}
                      r="2.3"
                      fill={String(c)}
                    />
                  ))}
                  <circle cx={Number(x)} cy={Number(y)} r="1.7" fill="#fff6b0" />
                </g>
              ))}
            </g>
          )}

          {hat === "bamboo" && (
            <g className="pb-hat">
              <path d="M24 25 L60 3 L96 25 Q60 31 24 25 Z" fill="#dcbf72" stroke="#9c7b33" strokeWidth="1.3" />
              <path d="M38 17 L82 17" stroke="#9c7b33" strokeWidth="0.9" opacity="0.7" />
              <path d="M31 21.5 Q60 27 89 21.5" stroke="#5db24f" strokeWidth="2.2" fill="none" />
              <path d="M60 3 L60 25" stroke="#9c7b33" strokeWidth="0.8" opacity="0.6" />
            </g>
          )}
          {hat === "sun" && (
            <g className="pb-hat">
              <ellipse cx="60" cy="21" rx="38" ry="7" fill="#f6d87a" stroke="#b8902e" strokeWidth="1.3" />
              <path d="M44 20 Q44 4 60 4 Q76 4 76 20 Z" fill="#f6d87a" stroke="#b8902e" strokeWidth="1.3" />
              <path d="M44.5 16 Q60 20 75.5 16 L76 20 Q60 23 44 20 Z" fill="#ff8fc6" />
              <circle cx="73" cy="15" r="2.6" fill={TEAL} />
            </g>
          )}
          {look.helmet && (
            <g className="pb-helmet">
              <circle cx="60" cy="38" r="40" fill={TEAL} fillOpacity="0.1" stroke="#dfe7f5" strokeWidth="3" />
              <path d="M32 18 Q42 6 58 4" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
              <circle cx="88" cy="16" r="2" fill="#fff" opacity="0.8" />
              <path d="M28 66 Q60 82 92 66" fill="none" stroke="#c9d3e6" strokeWidth="6" strokeLinecap="round" />
              <circle cx="60" cy="75" r="2.6" fill={PURPLE} />
            </g>
          )}
          {hat === "night" && (
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

        {/* Gießkanne (GreenTech-Panda) */}
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

        {showBinoculars && (
          <g className="pb-binoculars">
            <path d="M47 72 Q60 96 73 72" fill="none" stroke={SOFT} strokeWidth="1.3" />
            <rect x="51.5" y="85" width="7" height="9" rx="2.5" fill={SOFT} stroke={INK} strokeWidth="1" />
            <rect x="61.5" y="85" width="7" height="9" rx="2.5" fill={SOFT} stroke={INK} strokeWidth="1" />
            <rect x="58" y="87" width="4" height="3" fill={INK} />
            <circle cx="55" cy="93.4" r="2" fill={TEAL} opacity="0.8" />
            <circle cx="65" cy="93.4" r="2" fill={TEAL} opacity="0.8" />
          </g>
        )}

        {/* Arme (vorne, damit die Pfoten den Bambus halten) */}
        <g className="pb-arm pb-arm-l">
          <rect x="27" y="68" width="13" height="27" rx="6.5" fill={INK} filter={still ? undefined : `url(#${furFx})`} />
        </g>
        <g className="pb-arm pb-arm-r">
          <rect x="80" y="68" width="13" height="27" rx="6.5" fill={INK} filter={still ? undefined : `url(#${furFx})`} />
        </g>
        {/* Autos: Mini-Schraubenschlüssel in der linken Pfote */}
        {showWrench && (
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
