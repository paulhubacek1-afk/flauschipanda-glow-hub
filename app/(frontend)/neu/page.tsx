import type { Metadata } from "next";
import Link from "next/link";
import { Rss } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageCard } from "@/components/page-card";
import { getLivePages, toSummary } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Neu auf der Seite: die neuesten Ratgeber",
  description: "Alle neuen und frisch veröffentlichten Ratgeber der Panda Toolbox auf einen Blick – mit RSS-Feed zum Abonnieren.",
  alternates: { canonical: "/neu" },
};

const dayFmt = new Intl.DateTimeFormat("de-AT", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Vienna" });

/** „Neu auf der Seite“ – die neuesten Artikel, nach Tag gruppiert. */
export default async function NewPage() {
  const pages = (await getLivePages()).slice(0, 60);
  const byDay = new Map<string, typeof pages>();
  for (const p of pages) {
    const day = dayFmt.format(p.publishedAt);
    byDay.set(day, [...(byDay.get(day) ?? []), p]);
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10">
      <header className="space-y-4">
        <Breadcrumbs items={[{ name: "Startseite", href: "/startseite" }, { name: "Neu auf der Seite", href: "/neu" }]} />
        <h1 className="text-4xl font-bold">
          Neu auf der <span className="text-glow">Seite</span>
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Hier landet alles, was frisch in der Panda Toolbox erschienen ist. Damit du nichts verpasst, kannst du die neuen Seiten
          auch als RSS-Feed abonnieren – zum Beispiel in deiner Feed- oder News-App.
        </p>
        <Link
          href="/feed.xml"
          className="inline-flex items-center gap-2 rounded-full border border-warning/40 bg-warning/10 px-4 py-2 text-sm font-medium text-warning transition-transform hover:scale-[1.03] active:scale-95"
        >
          <Rss className="size-4" aria-hidden="true" /> RSS-Feed abonnieren
        </Link>
      </header>

      {pages.length === 0 && <p className="text-muted-foreground">Noch keine Seiten online – schau bald wieder vorbei!</p>}

      {[...byDay.entries()].map(([day, list]) => (
        <section key={day} aria-label={day} className="space-y-5">
          <h2 className="flex items-center gap-3 text-lg font-semibold text-muted-foreground">
            <span className="size-2 rounded-full bg-primary shadow-[var(--glow-sm)]" aria-hidden="true" />
            {day}
            <span className="text-sm font-normal">· {list.length} {list.length === 1 ? "Seite" : "Seiten"}</span>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <PageCard key={p.id} page={toSummary(p)} revealDelay={(i % 3) * 80} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
