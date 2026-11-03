import type { IconName } from "@/lib/hierarchy";
import { cn } from "@/lib/utils";

import { CategoryIcon } from "./category-icon";

/**
 * Eigene SVG-Titelillustration: keine externen Bilddienste, keine fremden Bildrechte.
 * Jede Artikelseite erhält durch Kategorie-Farbton, Symbol und Titel eine passende Bildwelt.
 */
export function Cover({
  icon,
  hue,
  title,
  className,
  size = "md",
}: {
  icon: IconName;
  hue: number;
  title?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const label = title?.trim() || "Panda Toolbox";

  return (
    <div
      role="img"
      aria-label={`Illustration zu ${label}`}
      className={cn(
        "relative isolate flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-primary/20 px-5",
        size === "sm" && "h-28",
        size === "md" && "h-40",
        size === "lg" && "h-48 md:h-64 md:px-10",
        className,
      )}
      style={{
        background: `radial-gradient(90% 120% at 85% 10%, oklch(0.62 0.17 ${hue} / 0.48), transparent 58%),
                     radial-gradient(80% 100% at 0% 100%, oklch(0.55 0.19 300 / 0.38), transparent 62%),
                     linear-gradient(125deg, oklch(0.19 0.045 285), oklch(0.24 0.06 ${hue}))`,
      }}
    >
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1100 360"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="panda-cover-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="white" stopOpacity=".35" />
            <stop offset="1" stopColor="white" stopOpacity=".02" />
          </linearGradient>
          <radialGradient id="panda-cover-glow">
            <stop offset="0" stopColor="white" stopOpacity=".26" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="880" cy="95" r="220" fill="url(#panda-cover-glow)" />
        <circle cx="1040" cy="300" r="190" fill="url(#panda-cover-glow)" />
        <path d="M0 286 C170 208 270 360 430 286 S730 204 900 284 S1040 302 1100 250 V360 H0Z" fill="white" opacity=".045" />
        <path d="M0 320 C190 260 280 390 470 320 S790 254 940 316 S1050 325 1100 300" fill="none" stroke="url(#panda-cover-line)" strokeWidth="2" />
        <path d="M610 24 L660 24 L710 74 L710 124" fill="none" stroke="white" strokeOpacity=".12" strokeWidth="2" />
        <path d="M760 22 L810 22 L860 72" fill="none" stroke="white" strokeOpacity=".12" strokeWidth="2" />
        <circle cx="730" cy="40" r="5" fill="white" opacity=".55" />
        <circle cx="1000" cy="160" r="4" fill="white" opacity=".55" />
        <circle cx="680" cy="236" r="3" fill="white" opacity=".55" />
        <path d="M790 238 l8 -18 l8 18 l18 8 l-18 8 l-8 18 l-8 -18 l-18 -8z" fill="white" opacity=".14" />
        <path d="M1010 52 l5 -12 l5 12 l12 5 l-12 5 l-5 12 l-5 -12 l-12 -5z" fill="white" opacity=".18" />
        <rect x="748" y="64" width="250" height="226" rx="44" fill="white" opacity=".075" stroke="white" strokeOpacity=".2" />
        <rect x="765" y="82" width="216" height="190" rx="34" fill="white" opacity=".045" />
      </svg>

      <div className="relative z-10 max-w-[68%] space-y-2 md:max-w-[62%]">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 md:text-xs">
          FlauschiPandas · Wissen & Ideen
        </p>
        {title ? (
          <p className={cn(
            "font-display font-bold leading-tight text-white drop-shadow-sm",
            size === "sm" ? "line-clamp-2 text-base" : size === "md" ? "line-clamp-2 text-xl" : "line-clamp-2 text-2xl md:text-4xl",
          )}>
            {title}
          </p>
        ) : (
          <p className="font-display text-xl font-bold text-white md:text-3xl">Panda Toolbox</p>
        )}
        <p className="text-xs text-white/65 md:text-sm">Verständlich erklärt · Praktisch eingeordnet</p>
      </div>

      <div className={cn(
        "relative z-10 mr-2 flex shrink-0 items-center justify-center rounded-[30%] border border-white/25 bg-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm",
        size === "sm" ? "size-16" : size === "md" ? "size-24" : "mr-3 size-32 md:size-44",
      )}>
        <div className="absolute inset-2 rounded-[30%] border border-white/10" />
        <CategoryIcon
          name={icon}
          className={cn(
            "text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]",
            size === "sm" ? "size-9" : size === "md" ? "size-14" : "size-20 md:size-28",
          )}
        />
        <span className="absolute -right-2 -top-2 size-4 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,.8)]" />
      </div>
    </div>
  );
}
