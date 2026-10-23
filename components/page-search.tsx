"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import type { PageSummary } from "@/lib/cms";

import { PageCard } from "./page-card";
import { Input } from "./ui/input";

function normalize(s: string) {
  return s
    .toLocaleLowerCase("de")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

/** Clientseitige Suche über alle live geschalteten Landingpages. */
export function PageSearch({ pages, placeholder }: { pages: PageSummary[]; placeholder?: string }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return pages.filter((p) => {
      const hay = normalize([p.title, p.description, p.focusKeyword, p.categoryTitle, p.groupTitle, ...p.tags].join(" "));
      return terms.every((t) => hay.includes(t));
    });
  }, [pages, query]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder ?? "Suchen – z. B. „Hundefutter“, „Prompts“, „Reifendruck“"}
          aria-label="Seiten durchsuchen"
          className="h-12 pl-10 pr-10 text-base"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            aria-label="Suche leeren"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {query && (
        <div aria-live="polite" className="space-y-4">
          <p className="text-sm text-muted-foreground">{results.length === 1 ? "1 Treffer" : `${results.length} Treffer`}</p>
          {results.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.slice(0, 12).map((p) => (
                <PageCard key={p.id} page={p} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
              Noch nichts dazu online. Schau in die Seitenstruktur – vielleicht ist das Thema schon geplant.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
