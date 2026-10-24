"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LayoutGrid, Menu, X } from "lucide-react";

import type { NavLite } from "@/lib/cms";
import { cn } from "@/lib/utils";

import { CategoryIcon } from "./category-icon";
import { PandaLogo } from "./panda-logo";
import { Button } from "./ui/button";

/** Header mit Mega-Menü – wird vollständig aus dem CMS erzeugt. */
export function SiteHeader({ nav }: { nav: NavLite[] }) {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCat, setMobileCat] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  const activeCategory = pathname.split("/")[1];

  return (
    <header className="sticky top-0 z-40 border-b border-purple/20">
      {/* Glas-Hintergrund als eigene Ebene: So funktionieren Menü-Panel und Abdunkelung darunter zuverlässig */}
      <div aria-hidden="true" className="glass absolute inset-0 -z-10" />
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Zum Inhalt springen
      </a>
      <div ref={panelRef} className="relative">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
          <Link href="/startseite" className="flex items-center gap-2" aria-label="Panda Toolbox – Startseite">
            <PandaLogo className="size-12" priority sizes="48px" />
            <span className="font-display text-lg font-bold tracking-tight">
              Panda <span className="text-glow">Toolbox</span>
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
            <Link
              href="/startseite"
              aria-current={pathname === "/startseite" ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-accent hover:text-accent-foreground",
                pathname === "/startseite" && "bg-primary/10 text-primary",
              )}
            >
              Startseite
            </Link>
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-controls="mega-menu"
              onClick={() => setMegaOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-accent hover:text-accent-foreground",
                megaOpen && "bg-primary/10 text-primary",
              )}
            >
              <LayoutGrid className="size-4" aria-hidden="true" /> Kategorien
              <ChevronDown className={cn("size-3.5 transition-transform", megaOpen && "rotate-180")} aria-hidden="true" />
            </button>
            <Link
              href="/seitenstruktur"
              className={cn(
                "rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-accent hover:text-accent-foreground",
                pathname === "/seitenstruktur" && "bg-primary/10 text-primary",
              )}
            >
              Alle Seiten
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mega-Menü Desktop – deckender Hintergrund, damit nichts von der Seite durchscheint */}
        {megaOpen && (
          <div
            id="mega-menu"
            className="absolute inset-x-0 top-full z-50 hidden max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-purple/25 bg-card shadow-[0_24px_48px_-12px_oklch(0_0_0/0.6),var(--glow-md)] md:block"
          >
            <div className="mx-auto max-w-7xl px-4 py-8">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
                <p className="font-display text-sm font-semibold text-muted-foreground">Alle Kategorien</p>
                <Link href="/seitenstruktur" onClick={() => setMegaOpen(false)} className="text-sm text-primary hover:text-purple">
                  Komplette Seitenstruktur →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-x-8 gap-y-8 lg:grid-cols-4 xl:grid-cols-5">
                {nav.map((c) => (
                  <div key={c.slug} className="min-w-0 space-y-2">
                    <Link
                      href={`/${c.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className={cn(
                        "flex min-w-0 items-start gap-2 font-display text-sm font-semibold leading-snug hover:text-primary",
                        activeCategory === c.slug && "text-primary",
                      )}
                    >
                      <CategoryIcon name={c.icon} className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="min-w-0 break-words">{c.title}</span>
                    </Link>
                    {c.groups.length > 0 ? (
                      <ul className="space-y-1.5 border-l border-purple/25 pl-3 text-sm">
                        {c.groups.slice(0, 5).map((g) => (
                          <li key={g.slug} className="min-w-0">
                            <Link
                              href={`/${c.slug}/${g.slug}`}
                              onClick={() => setMegaOpen(false)}
                              className="block truncate text-muted-foreground hover:text-primary"
                              title={g.title}
                            >
                              {g.title}
                            </Link>
                          </li>
                        ))}
                        {c.groups.length > 5 && (
                          <li>
                            <Link href={`/${c.slug}`} onClick={() => setMegaOpen(false)} className="text-xs text-purple hover:text-primary">
                              + {c.groups.length - 5} weitere
                            </Link>
                          </li>
                        )}
                      </ul>
                    ) : (
                      <p className="border-l border-purple/25 pl-3 text-xs text-muted-foreground/70">Unterthemen folgen</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {megaOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-x-0 bottom-0 top-16 z-30 hidden bg-background/70 md:block"
          onClick={() => setMegaOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="max-h-[80vh] overflow-y-auto border-t border-primary/10 px-4 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            <li>
              <Link href="/startseite" className="block rounded-md px-3 py-2.5 hover:bg-accent">
                Startseite
              </Link>
            </li>
            {nav.map((c) => (
              <li key={c.slug}>
                <div className="flex items-center">
                  <Link href={`/${c.slug}`} className="flex flex-1 items-center gap-2 rounded-md px-3 py-2.5 hover:bg-accent">
                    <CategoryIcon name={c.icon} className="size-4 text-primary" />
                    {c.title}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={mobileCat === c.slug}
                    aria-label={`Unterthemen von ${c.title}`}
                    onClick={() => setMobileCat(mobileCat === c.slug ? null : c.slug)}
                    className="rounded-md p-2.5 text-muted-foreground hover:bg-accent"
                  >
                    <ChevronDown className={cn("size-4 transition-transform", mobileCat === c.slug && "rotate-180")} />
                  </button>
                </div>
                {mobileCat === c.slug && (
                  <ul className="mb-2 ml-6 space-y-0.5 border-l border-primary/15 pl-3 text-sm">
                    {c.groups.map((g) => (
                      <li key={g.slug}>
                        <Link href={`/${c.slug}/${g.slug}`} className="block py-1.5 text-muted-foreground hover:text-primary">
                          {g.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/seitenstruktur" className="block rounded-md px-3 py-2.5 hover:bg-accent">
                Alle Seiten
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
