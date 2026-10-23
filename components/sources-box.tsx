import { BookCheck } from "lucide-react";

import type { Page } from "@/lib/content";
import { formatDate, toIsoDate } from "@/lib/utils";

/** Quellenangaben + Stand des Artikels. Macht nachvollziehbar, worauf Aussagen beruhen. */
export function SourcesBox({ page: article }: { page: Page }) {
  const stand = article.factCheck.reviewedAt ?? article.updatedAt ?? article.publishedAt;
  return (
    <section aria-labelledby="quellen" className="rounded-xl border bg-card/50 p-6">
      <h2 id="quellen" className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
        <BookCheck className="size-5 text-primary" aria-hidden="true" /> Quellen & Stand
      </h2>
      <p className="mb-3 text-sm text-muted-foreground">
        Stand: <time dateTime={toIsoDate(stand)}>{formatDate(stand)}</time>. Technische Angaben, Preise und rechtliche
        Regeln können sich ändern – im Zweifel gilt die aktuelle Angabe der genannten Stelle.
      </p>
      {article.sources.length > 0 && (
        <ul className="space-y-1.5 text-sm">
          {article.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-2 hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
