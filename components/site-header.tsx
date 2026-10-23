"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LayoutGrid, Menu, X } from "lucide-react";

import { categoryPath, groupPath, hierarchy } from "@/lib/hierarchy";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { CategoryIcon } from "./category-icon";
import { PandaLogo } from "./panda-logo";
import { Button } from "./ui/button";

/** Header mit Mega-Menü – wird vollständig aus lib/hierarchy.ts erzeugt. */
export function SiteHeader() {
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
    <header className="glass sticky top-0 z-40 border-b border-primary/10">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Zum Inhalt springen
      </a>
      <div ref={panelRef} className="relative">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
          <Link href="/home" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} – Startseite`}>
            <PandaLogo />
            <span className="font-display text-lg font-semibold tracking-tight">
              Flauschi<span className="text-glow">Pandas</span>
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
            <Link
              href="/home"
              aria-current={pathname === "/home" ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-foreground/75 hover:bg-accent hover:text-accent-foreground",
                pathname === "/home" && "bg-primary/10 text-primary",
              )}
            >
              Home
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

        {/* Mega-Menü Desktop */}
        {megaOpen && (
          <div id="mega-menu" className="glass absolute inset-x-0 top-full hidden max-h-[75vh] overflow-y-auto border-b border-primary/15 shadow-[var(--glow-md)] md:block">
            <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-7 px-4 py-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {hierarchy.map((c) => (
                <div key={c.slug} className="space-y-2">
                  <Link
                    href={categoryPath(c.slug)}
                    className={cn(
                      "flex items-center gap-2 font-display text-sm font-semibold hover:text-primary",
                      activeCategory === c.slug && "text-primary",
                    )}
                  >
                    <CategoryIcon name={c.icon} className="size-4 text-primary" />
                    {c.title}
                  </Link>
                  <ul className="space-y-1 border-l border-primary/15 pl-3 text-sm">
                    {c.groups.slice(0, 5).map((g) => (
                      <li key={g.slug}>
                        <Link href={groupPath(c.slug, g.slug)} className="text-muted-foreground hover:text-primary">
                          {g.title}
                        </Link>
                      </li>
                    ))}
                    {c.groups.length > 5 && (
                      <li>
                        <Link href={categoryPath(c.slug)} className="text-xs text-primary/80 hover:text-primary">
                          + {c.groups.length - 5} weitere
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="max-h-[80vh] overflow-y-auto border-t border-primary/10 px-4 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            <li>
              <Link href="/home" className="block rounded-md px-3 py-2.5 hover:bg-accent">
                Home
              </Link>
            </li>
            {hierarchy.map((c) => (
              <li key={c.slug}>
                <div className="flex items-center">
                  <Link href={categoryPath(c.slug)} className="flex flex-1 items-center gap-2 rounded-md px-3 py-2.5 hover:bg-accent">
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
                        <Link href={groupPath(c.slug, g.slug)} className="block py-1.5 text-muted-foreground hover:text-primary">
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
