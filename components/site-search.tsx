"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, FileText, FolderOpen, LayoutGrid, Search, X } from "lucide-react";

import { highlightParts, prepareIndex, search, type SearchItem } from "@/lib/search";
import { cn } from "@/lib/utils";

import { Input } from "./ui/input";

const KIND: Record<SearchItem["kind"], { label: string; Icon: typeof FileText }> = {
  seite: { label: "Seite", Icon: FileText },
  unterthema: { label: "Unterthema", Icon: FolderOpen },
  kategorie: { label: "Kategorie", Icon: LayoutGrid },
};

function Highlight({ text, query }: { text: string; query: string }) {
  return (
    <>
      {highlightParts(text, query).map((p, i) =>
        p.hit ? (
          <mark key={i} className="rounded bg-purple/25 px-0.5 text-foreground">
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}

/**
 * Suche über Seiten, Unterthemen und Kategorien.
 * Tastatur: ↑/↓ wählen · Enter öffnen · Esc leeren.
 */
export function SiteSearch({
  items,
  initialQuery = "",
  limit = 8,
  autoFocus = false,
  showAllLink = true,
  placeholder = "Suchen – z. B. „Hundefutter“, „Prompts“, „Reifendruck“",
}: {
  items: SearchItem[];
  initialQuery?: string;
  limit?: number;
  autoFocus?: boolean;
  showAllLink?: boolean;
  placeholder?: string;
}) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState(initialQuery);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => prepareIndex(items), [items]);
  const all = useMemo(() => search(index, query, 60), [index, query]);
  const results = all.slice(0, limit);
  const open = query.trim().length > 0;

  useEffect(() => setActive(0), [query]);
  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const go = (item: SearchItem | undefined) => {
    if (item) router.push(item.href);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results.length) go(results[active]);
      else if (query.trim()) router.push(`/suche?q=${encodeURIComponent(query.trim())}`);
    } else if (e.key === "Escape") {
      setQuery("");
    }
  };

  return (
    <div className="w-full space-y-3" role="search">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          ref={inputRef}
          type="search"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          spellCheck={false}
          maxLength={100}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          // Flauschipanda holt seine Lupe heraus, solange gesucht wird
          onFocus={() => window.dispatchEvent(new Event("fp-search-open"))}
          onBlur={() => window.dispatchEvent(new Event("fp-search-close"))}
          placeholder={placeholder}
          aria-label="Panda Toolbox durchsuchen"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && results[active] ? `${listId}-${active}` : undefined}
          className="h-12 bg-card/80 pl-10 pr-10 text-base"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-primary"
            aria-label="Suche leeren"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {open && (
        <div className="overflow-hidden rounded-xl border border-purple/25 bg-card text-left shadow-[0_16px_40px_-16px_oklch(0_0_0/0.6)]">
          <p className="border-b border-border px-4 py-2 text-xs text-muted-foreground" aria-live="polite">
            {all.length === 0 ? "Keine Treffer" : all.length === 1 ? "1 Treffer" : `${all.length >= 60 ? "60+" : all.length} Treffer`}
          </p>
          {results.length > 0 ? (
            <ul id={listId} role="listbox" aria-label="Suchergebnisse" className="max-h-[60vh] overflow-y-auto py-1">
              {results.map((item, i) => {
                const { label, Icon } = KIND[item.kind];
                return (
                  <li key={item.href + item.kind} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setActive(i)}
                      className={cn(
                        "flex items-start gap-3 px-4 py-2.5 transition-colors",
                        i === active ? "bg-primary/10" : "hover:bg-accent/60",
                      )}
                    >
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-purple/20">
                        <Icon className="size-4 text-primary" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">
                          <Highlight text={item.title} query={query} />
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {label} · {item.context}
                        </span>
                        {item.description && <span className="mt-0.5 line-clamp-1 block text-sm text-muted-foreground/90">{item.description}</span>}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-4 py-5 text-sm text-muted-foreground">
              Zu „{query.trim()}“ gibt es noch nichts. Vielleicht ist das Thema schon geplant – schau in die{" "}
              <Link href="/seitenstruktur" className="text-primary underline underline-offset-2 hover:text-purple">
                Seitenstruktur
              </Link>
              .
            </div>
          )}
          {showAllLink && all.length > results.length && (
            <Link
              href={`/suche?q=${encodeURIComponent(query.trim())}`}
              className="flex items-center justify-center gap-1 border-t border-border px-4 py-2.5 text-sm text-primary hover:bg-accent/60 hover:text-purple"
            >
              Alle {all.length >= 60 ? "60+" : all.length} Treffer anzeigen <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
