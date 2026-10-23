import type { IconName } from "@/lib/hierarchy";
import { cn } from "@/lib/utils";

import { CategoryIcon } from "./category-icon";

/**
 * Generiertes Titelbild (Farbverlauf + Icon der Kategorie) – leichtgewichtig und ohne Bildrechte-Probleme.
 * Sobald echte Fotos vorliegen, kann hier ein next/image eingesetzt werden.
 */
export function Cover({
  icon,
  hue,
  className,
  size = "md",
}: {
  icon: IconName;
  hue: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden rounded-lg border border-primary/15",
        size === "sm" && "h-28",
        size === "md" && "h-40",
        size === "lg" && "h-48 md:h-64",
        className,
      )}
      style={{
        background: `radial-gradient(120% 90% at 80% 0%, oklch(0.55 0.13 ${hue} / 0.45), transparent 60%),
                     radial-gradient(90% 80% at 0% 100%, oklch(0.45 0.12 ${(hue + 40) % 360} / 0.35), transparent 60%),
                     oklch(0.17 0.03 235)`,
      }}
      aria-hidden="true"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -bottom-10 left-1/2 -z-10 h-24 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <CategoryIcon
        name={icon}
        className={cn(
          "text-primary drop-shadow-[0_0_14px_oklch(0.86_0.14_195/0.7)]",
          size === "sm" ? "size-10" : size === "md" ? "size-14" : "size-20",
        )}
      />
    </div>
  );
}
