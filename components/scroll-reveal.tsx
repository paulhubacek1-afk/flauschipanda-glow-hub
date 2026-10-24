"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Sanftes Einblenden beim Scrollen für alle Elemente mit `data-reveal`.
 * Ohne JavaScript oder bei „weniger Bewegung“ ist alles sofort sichtbar – Inhalte sind
 * im HTML immer vollständig vorhanden (wichtig für Google und Barrierefreiheit).
 *
 * Optional: `data-reveal-delay="120"` (ms) für gestaffelte Effekte.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    // kurz warten, bis die neue Seite gerendert ist
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)").forEach((el) => {
        // Was schon im Bild ist, sofort zeigen
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) el.classList.add("is-revealed");
        else observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
