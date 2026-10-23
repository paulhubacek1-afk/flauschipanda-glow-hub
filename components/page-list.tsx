import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { NavPage } from "@/lib/cms";
import { cn } from "@/lib/utils";

/**
 * Liste der Landingpages eines Unterthemas.
 * Live-Seiten sind verlinkt, geplante werden als "bald" angezeigt – ohne Link,
 * damit weder Besucher noch Suchmaschinen auf leere Seiten geführt werden.
 */
export function PageList({
  categorySlug,
  groupSlug,
  pages,
  currentSlug,
  dense = false,
}: {
  categorySlug: string;
  groupSlug: string;
  pages: NavPage[];
  currentSlug?: string;
  dense?: boolean;
}) {
  if (!pages.length) return <p className="px-2.5 py-1.5 text-sm text-muted-foreground/70">Noch keine Seiten geplant.</p>;
  return (
    <ul className={cn("space-y-1", dense ? "text-sm" : "text-[0.95rem]")}>
      {pages.map((p) => {
        const current = p.slug === currentSlug;
        const text = dense ? p.label : p.title;
        return (
          <li key={p.slug}>
            {p.live && !current ? (
              <Link
                href={`/${categorySlug}/${groupSlug}/${p.slug}`}
                className="group flex items-center justify-between gap-2 rounded-md px-2.5 py-1.5 text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {text}
                <ChevronRight className="size-3.5 opacity-40 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </Link>
            ) : (
              <span
                aria-current={current ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-md px-2.5 py-1.5",
                  current ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground/70",
                )}
              >
                {text}
                {!current && <span className="text-[10px] uppercase tracking-wider">bald</span>}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
