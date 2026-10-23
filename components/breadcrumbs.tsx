import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { breadcrumbSchema } from "@/lib/schema";

import { JsonLd } from "./json-ld";

export interface Crumb {
  name: string;
  href: string;
}

/** Breadcrumb-Navigation inkl. BreadcrumbList-Schema. Der letzte Eintrag ist die aktuelle Seite. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Brotkrümelnavigation" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="line-clamp-1 text-foreground/80">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="transition-colors hover:text-primary">
                      {item.name}
                    </Link>
                    <ChevronRight className="size-3.5 opacity-50" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
