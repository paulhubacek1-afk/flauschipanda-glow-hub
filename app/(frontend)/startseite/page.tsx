import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CategoryIcon } from "@/components/category-icon";
import { PageCard } from "@/components/page-card";
import { PageSearch } from "@/components/page-search";
import { PandaLogo } from "@/components/panda-logo";
import { Button } from "@/components/ui/button";
import { getLivePages, getNavigation, navStats, toSummary } from "@/lib/cms";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} – Wissen, Tools & Tipps` },
  description:
    "Die Panda Toolbox: Themen- und Communityportal mit Ratgebern, Vergleichen und Tools zu Tieren, Zoos, Freizeitparks, KI, Gesundheit, Urlaub, Finanzen und mehr.",
  alternates: { canonical: "/startseite" },
};

export default async function StartPage() {
  const [nav, live] = await Promise.all([getNavigation(), getLivePages()]);
  const stats = navStats(nav);

  return (
    <>
      <section className="relative overflow-hidden border-b border-purple/20">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 pb-20 pt-10 text-center md:pb-24 md:pt-14">
          {/* Logo mit Türkis-Lila-Leuchten */}
          <div className="relative animate-fade-up">
            <div className="absolute inset-6 -z-10 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" aria-hidden="true" />
            <div className="absolute inset-10 -z-10 translate-x-8 rounded-full bg-purple/30 blur-3xl" aria-hidden="true" />
            <PandaLogo className="size-60 animate-float drop-shadow-[0_0_24px_oklch(0.72_0.19_300/0.45)] md:size-80" priority sizes="(min-width: 768px) 320px, 240px" alt="Panda Toolbox" />
          </div>
          <h1 className="animate-fade-up text-3xl font-bold [animation-delay:150ms] md:text-5xl">
            <span className="sr-only">Panda Toolbox – </span>
            Wissen, Tools & Tipps in <span className="text-glow">einer Toolbox</span>
          </h1>
          <p className="max-w-2xl animate-fade-up text-lg text-muted-foreground [animation-delay:280ms]">
            Ein großes Themen- und Communityportal: Tiere, Zoos, Freizeitparks, KI, Tools, Creator-Wissen, Finanzen und eigene
            Projekte wie Panda GreenCore – vereint in einer gemeinsamen Struktur.
          </p>
          <p className="max-w-2xl animate-fade-up text-sm text-muted-foreground/80 [animation-delay:380ms]">
            Aktuell entsteht das Fundament: {stats.categories} Kategorien und {stats.groups} Unterthemen, auf denen nach und nach
            Inhalte, Tools, Communityfunktionen und Empfehlungen wachsen.
          </p>
          <div className="w-full max-w-2xl animate-fade-up text-left [animation-delay:480ms]">
            <PageSearch pages={live.map(toSummary)} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="kategorien">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="kategorien" className="text-2xl font-semibold md:text-3xl">
            Alle Kategorien
          </h2>
          <Link href="/seitenstruktur" className="text-sm text-primary hover:underline">
            Komplette Seitenstruktur ansehen
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nav.map((c, i) => {
            const count = live.filter((p) => p.category.slug === c.slug).length;
            return (
              <li key={c.slug} data-reveal data-reveal-delay={(i % 4) * 70} data-panda-topic={c.slug} data-panda-label={c.title} data-panda-href={`/${c.slug}`}>
                <Link href={`/${c.slug}`} className="group glow-hover shine flex h-full flex-col gap-3 rounded-xl border bg-card/60 p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-purple/20">
                      <CategoryIcon name={c.icon} className="icon-pop size-5 text-primary" />
                    </span>
                    <span className="font-display text-xs text-primary/70">{String(c.number).padStart(2, "0")}</span>
                  </div>
                  <span className="font-display text-lg font-semibold">{c.title}</span>
                  <span className="line-clamp-2 text-sm text-muted-foreground">{c.description}</span>
                  <span className="mt-auto pt-1 text-xs text-muted-foreground">
                    {c.groups.length === 0 ? "Neu · Unterthemen folgen" : `${c.groups.length} ${c.groups.length === 1 ? "Unterthema" : "Unterthemen"}`} ·{" "}
                    {count > 0 ? `${count} ${count === 1 ? "Seite" : "Seiten"} online` : "im Aufbau"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {live.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-8" aria-labelledby="neu">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 id="neu" className="text-2xl font-semibold md:text-3xl">
              Neu in der Toolbox
            </h2>
            <Button asChild variant="outline" size="sm">
              <Link href="/seitenstruktur">
                Alle Seiten <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {live.slice(0, 6).map((p, i) => (
              <PageCard key={p.id} page={toSummary(p)} revealDelay={(i % 3) * 90} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
