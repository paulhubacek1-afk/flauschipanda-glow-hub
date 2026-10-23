import Link from "next/link";
import { Clock } from "lucide-react";

import type { PageSummary } from "@/lib/cms";
import { cn } from "@/lib/utils";

import { Cover } from "./cover";
import { Badge } from "./ui/badge";

export function PageCard({ page, className, showCategory = true }: { page: PageSummary; className?: string; showCategory?: boolean }) {
  return (
    <article className={cn("group glow-hover relative flex flex-col overflow-hidden rounded-xl border bg-card", className)}>
      <Cover icon={page.icon} hue={page.hue} size="sm" className="rounded-none border-0 border-b" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {showCategory && <Badge variant="outline">{page.categoryTitle}</Badge>}
          <Badge variant="purple">{page.groupTitle}</Badge>
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug">
          <Link href={page.href} className="after:absolute after:inset-0 group-hover:text-primary">
            {page.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{page.description}</p>
        <div className="mt-auto flex items-center gap-1 pt-2 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden="true" /> {page.readingMinutes} Min. Lesezeit
        </div>
      </div>
    </article>
  );
}
