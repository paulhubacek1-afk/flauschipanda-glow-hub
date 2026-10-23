"use client";

import { useConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";

/**
 * Werbeplatz. Wird nur angezeigt, wenn
 *  1. Werbung per NEXT_PUBLIC_ADS_ENABLED=true aktiviert ist und
 *  2. die Person der Kategorie "Werbung" zugestimmt hat.
 * Die Fläche ist klar als "Anzeige" gekennzeichnet und reserviert ihre Höhe (kein Layout-Springen).
 * Hier später das Snippet des Werbenetzwerks einsetzen.
 */
export function AdSlot({ id, className }: { id: string; className?: string }) {
  const { consent, ready } = useConsent();
  const enabled = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

  if (!enabled || !ready || !consent?.marketing) return null;

  return (
    <aside
      aria-label="Anzeige"
      data-ad-slot={id}
      className={cn("relative flex min-h-[120px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/40", className)}
    >
      <span className="absolute left-3 top-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        Anzeige
      </span>
      <span className="text-xs text-muted-foreground">Werbeplatz „{id}“</span>
    </aside>
  );
}
