"use client";

import Link from "next/link";

import { openConsentSettings } from "@/lib/consent";
import type { NavLite } from "@/lib/cms";
import { legalNav, siteConfig } from "@/lib/site";

import { PandaLogo } from "./panda-logo";

export function SiteFooter({ nav }: { nav: NavLite[] }) {
  return (
    <footer className="mt-24 border-t border-primary/10 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_2.5fr]">
        <div className="space-y-3">
          <Link href="/startseite" className="flex items-center gap-2.5">
            <PandaLogo className="size-8" />
            <span className="font-display font-semibold">
              Flauschi<span className="text-glow">Pandas</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}. Werbung und Affiliate-Links sind immer gekennzeichnet.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">Kategorien</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
              {nav.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-primary">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">Rechtliches</h2>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-primary">
                    {l.title}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={openConsentSettings} className="hover:text-primary">
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
