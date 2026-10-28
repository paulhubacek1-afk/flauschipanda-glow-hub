"use client";

import Link from "next/link";

import { openConsentSettings } from "@/lib/consent";
import type { NavLite, SiteLinks } from "@/lib/cms";
import { GREENTECH_URL, MERCH_URL, legalNav, siteConfig } from "@/lib/site";

import { showPandaBuddy } from "./panda-buddy";
import { PandaLogo } from "./panda-logo";

export function SiteFooter({ nav, links, greentechUrl }: { nav: NavLite[]; links?: SiteLinks; greentechUrl?: string }) {
  const merchUrl = links?.merchUrl || MERCH_URL;
  const ext = (newTab?: boolean) => (newTab ? { target: "_blank", rel: "noopener noreferrer" } : {});
  const powered = links?.poweredBy?.length ? links.poweredBy : [{ label: "Designix", url: "" }, { label: "WebDock", url: "http://webdock.dev/" }];
  return (
    <footer className="mt-24 border-t border-purple/20 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_2.5fr]">
        <div className="space-y-3">
          <Link href="/startseite" className="flex items-center gap-2.5">
            <PandaLogo className="size-16" sizes="64px" />
            <span className="font-display text-lg font-bold">
              Panda <span className="text-glow">Toolbox</span>
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
              <li>
                <a href={merchUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  👕 FlauschiPandas Merch-Shop
                </a>
              </li>
              <li>
                <a href={greentechUrl || GREENTECH_URL} target="_blank" rel="noopener noreferrer" className="text-success hover:underline">
                  Panda GreenTech unterstützen
                </a>
              </li>
              <li>
                <button type="button" onClick={showPandaBuddy} className="hover:text-primary">
                  Flauschipanda einblenden
                </button>
              </li>
              {links?.footer.map((l) => (
                <li key={`${l.label}${l.url}`}>
                  <a href={l.url} {...ext(l.newTab)} className="hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {links?.social.length ? (
              <div className="mt-5">
                <h2 className="mb-2 text-sm font-semibold text-foreground">Folge uns</h2>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {links.social.map((l) => (
                    <li key={`${l.label}${l.url}`}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border px-3 py-1 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}
        <span className="mx-2 opacity-50" aria-hidden="true">·</span>
        <span>
          powered by{" "}
          {powered.map((p, i) => (
            <span key={p.label}>
              {i > 0 && (i === powered.length - 1 ? " & " : ", ")}
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener" className="font-medium text-foreground/80 underline-offset-2 hover:text-primary hover:underline">
                  {p.label}
                </a>
              ) : (
                <span className="font-medium text-foreground/80">{p.label}</span>
              )}
            </span>
          ))}
        </span>
      </div>
    </footer>
  );
}
