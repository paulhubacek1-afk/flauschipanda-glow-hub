"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";

import type { TocHeading } from "@/lib/markdown";
import { cn } from "@/lib/utils";

/** Automatisch erzeugtes Inhaltsverzeichnis mit Hervorhebung des aktuellen Abschnitts. */
export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis" className="rounded-xl border bg-card/60 p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
        <ListTree className="size-4 text-primary" aria-hidden="true" /> Inhalt
      </p>
      <ol className="space-y-1.5 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={cn(h.level === 3 && "pl-4")}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block border-l-2 border-transparent py-0.5 pl-3 text-muted-foreground transition-colors hover:text-primary",
                active === h.id && "border-purple text-purple",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
