import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { GroupNode } from "@/lib/hierarchy";
import { pagePath } from "@/lib/hierarchy";
import { cn } from "@/lib/utils";

/**
 * Liste der Landingpages eines Unterthemas.
 * Live-Seiten sind verlinkt, geplante werden als "bald" angezeigt – ohne Link,
 * damit weder Besucher noch Suchmaschinen auf leere Seiten geführt werden.
 */
export function PageList({
  categorySlug,
  group,
  liveIds,
  currentSlug,
  dense = false,
}: {
  categorySlug: string;
  group: GroupNode;
  liveIds: Set<string>;
  currentSlug?: string;
  dense?: boolean;
}) {
  return (
    <ul className={cn("space-y-1", dense ? "text-sm" : "text-[0.95rem]")}>
      {group.pages.map((p) => {
        const id = `${categorySlug}/${group.slug}/${p.slug}`;
        const live = liveIds.has(id);
        const current = p.slug === currentSlug;
        return (
          <li key={p.slug}>
            {live && !current ? (
              <Link
                href={pagePath(categorySlug, group.slug, p.slug)}
                className="group flex items-center justify-between gap-2 rounded-md px-2.5 py-1.5 text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {dense ? p.label : p.title}
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
                {dense ? p.label : p.title}
                {!current && <span className="text-[10px] uppercase tracking-wider">bald</span>}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
