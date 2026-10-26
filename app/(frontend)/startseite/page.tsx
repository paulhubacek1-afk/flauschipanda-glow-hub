import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, Fuel, Percent, Rss, Sparkles, Wallet, Zap } from "lucide-react";

import { CategoryIcon } from "@/components/category-icon";
import { HeroPanda } from "@/components/home/hero-panda";
import { PandaBuilder } from "@/components/home/panda-builder";
import { PandaShowcase } from "@/components/home/panda-showcase";
import { PageCard } from "@/components/page-card";
import { ShareButtons } from "@/components/share-buttons";
import { SiteSearch } from "@/components/site-search";
import { Button } from "@/components/ui/button";
import { getLivePages, getNavigation, getSearchItems, getSettings, navStats, toSummary } from "@/lib/cms";
import { getPopularPaths, getVisitorStats } from "@/lib/counters";
import { siteConfig } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} – Wissen, Tools & Tipps` },
  description:
    "Die Panda Toolbox: Themen- und Communityportal mit Ratgebern, Vergleichen und Tools zu Tieren, Zoos, Freizeitparks, KI, Gesundheit, Urlaub, Finanzen, Wissenschaft und mehr – mit Flauschipanda als Begleiter.",
  alternates: { canonical: "/startseite" },
};

const TOOLS = [
  { href: "/tools-apps/rechner/spritkosten-rechner", title: "Spritkosten-Rechner", text: "Was kostet die Fahrt – und pro Person?", icon: Fuel },
  { href: "/tools-apps/rechner/stromkosten-rechner", title: "Stromkosten-Rechner", text: "Was frisst dein Gerät im Jahr?", icon: Zap },
  { href: "/tools-apps/rechner/budget-rechner", title: "Budget-Rechner", text: "Einnahmen, Ausgaben, was bleibt übrig?", icon: Wallet },
  { href: "/tools-apps/rechner/prozentrechner", title: "Prozentrechner", text: "Rabatte und Prozente in Sekunden.", icon: Percent },
  { href: "/autos-mobilitaet/kosten-vergleiche/kosten-pro-kilometer", title: "Autokosten-Rechner", text: "Was kostet dein Auto pro Kilometer?", icon: Car },
];

const fmt = (n: number) => n.toLocaleString("de-AT");

export default async function StartPage() {
  const [nav, live, searchItems, visitors, popularPaths, settings] = await Promise.all([
    getNavigation(),
    getLivePages(),
    getSearchItems(),
    getVisitorStats(),
    getPopularPaths(12),
    getSettings(),
  ]);
  const stats = navStats(nav);
  const liveHrefs = new Set(live.map((p) => p.href));
  const byHref = new Map(live.map((p) => [p.href, p]));
  const popular = popularPaths
    .map((x) => byHref.get(x.path))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 6);
  const tools = TOOLS.filter((t) => liveHrefs.has(t.href));
  // Schnellzugriff: die Kategorien mit den meisten Seiten
  const quick = [...nav]
    .map((c) => ({ c, n: live.filter((p) => p.category.slug === c.slug).length }))
    .sort((a, b) => b.n - a.n)
    .slice(0, 6);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-purple/20">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            <Link
              href="/neu"
              className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-purple/40 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-foreground/85 shadow-[var(--glow-sm)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" /> Neu: Flauschipanda hat jetzt Skins · {fmt(stats.live)} Seiten online
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
            <h1 className="animate-fade-up text-4xl font-bold leading-tight [animation-delay:120ms] md:text-6xl">
              <span className="sr-only">Panda Toolbox – </span>
              Wissen, Tools & Tipps in <span className="text-glow">einer Toolbox</span>
            </h1>
            <p className="mx-auto max-w-2xl animate-fade-up text-lg text-muted-foreground [animation-delay:240ms] lg:mx-0">
              Ratgeber, Vergleiche und Rechner zu Tieren, Zoos, Freizeitparks, KI, Urlaub, Autos, Finanzen, Wissenschaft und mehr –
              verständlich erklärt, ehrlich gekennzeichnet und immer kostenlos.
            </p>
            <div className="mx-auto w-full max-w-2xl animate-fade-up text-left [animation-delay:340ms] lg:mx-0">
              <SiteSearch items={searchItems} />
            </div>
            <ul className="flex animate-fade-up flex-wrap justify-center gap-2 [animation-delay:440ms] lg:justify-start" aria-label="Beliebte Kategorien">
              {quick.map(({ c }) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-primary active:scale-95"
                  >
                    <CategoryIcon name={c.icon} className="size-3.5 text-primary" /> {c.title}
                  </Link>
                </li>
              ))}
            </ul>
            <dl className="grid animate-fade-up grid-cols-3 gap-3 [animation-delay:540ms] sm:max-w-lg lg:max-w-none">
              {[
                { label: "Kategorien", value: stats.categories },
                { label: "Seiten online", value: stats.live },
                { label: visitors.total > 0 ? "Besuche" : "Unterthemen", value: visitors.total > 0 ? visitors.total : stats.groups },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border bg-card/60 px-3 py-3 text-center lg:text-left">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-glow">{fmt(s.value)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroPanda className="order-1 animate-fade-up lg:order-2" />
        </div>
      </section>

      {/* ---------------- Kategorien ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="kategorien">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-purple">Entdecken</p>
            <h2 id="kategorien" className="text-2xl font-semibold md:text-3xl">
              Alle Kategorien
            </h2>
          </div>
          <Link href="/seitenstruktur" className="text-sm text-primary hover:underline">
            Komplette Seitenstruktur ansehen
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nav.map((c, i) => {
            const count = live.filter((p) => p.category.slug === c.slug).length;
            return (
              <li key={c.slug} data-reveal data-reveal-delay={(i % 4) * 70} data-panda-topic={c.slug} data-panda-label={c.title} data-panda-href={`/${c.slug}`}>
                <Link
                  href={`/${c.slug}`}
                  style={{ "--cat-hue": c.hue } as React.CSSProperties}
                  className="cat-card group glow-hover shine relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border bg-card/60 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="cat-icon flex size-12 items-center justify-center rounded-xl">
                      <CategoryIcon name={c.icon} className="icon-pop size-6" />
                    </span>
                    <span className="font-display text-xs text-primary/70">{String(c.number).padStart(2, "0")}</span>
                  </div>
                  <span className="font-display text-lg font-semibold">{c.title}</span>
                  <span className="line-clamp-2 text-sm text-muted-foreground">{c.description}</span>
                  {c.groups.length > 0 && (
                    <span className="flex flex-wrap gap-1">
                      {c.groups.slice(0, 3).map((g) => (
                        <span key={g.slug} className="rounded-full bg-muted/60 px-2 py-0.5 text-[11px] text-muted-foreground">
                          {g.title}
                        </span>
                      ))}
                      {c.groups.length > 3 && <span className="px-1 py-0.5 text-[11px] text-muted-foreground">+{c.groups.length - 3}</span>}
                    </span>
                  )}
                  <span className="mt-auto flex items-center justify-between pt-1 text-xs text-muted-foreground">
                    <span>{count > 0 ? `${count} ${count === 1 ? "Seite" : "Seiten"} online` : "im Aufbau"}</span>
                    <ArrowRight className="size-4 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---------------- Gerade beliebt ---------------- */}
      {popular.length >= 3 && (
        <section className="mx-auto max-w-7xl px-4 pb-16" aria-labelledby="beliebt">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-purple">Was andere lesen</p>
            <h2 id="beliebt" className="text-2xl font-semibold md:text-3xl">
              🔥 Gerade beliebt
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((p, i) => (
              <PageCard key={p.id} page={toSummary(p)} revealDelay={(i % 3) * 90} />
            ))}
          </div>
        </section>
      )}

      {/* ---------------- Rechner ---------------- */}
      {tools.length > 0 && (
        <section className="border-y border-primary/10 bg-card/30" aria-labelledby="rechner">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-purple">Kostenlos & ohne Anmeldung</p>
                <h2 id="rechner" className="text-2xl font-semibold md:text-3xl">
                  Praktische Rechner
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">Rechnen direkt im Browser – es wird nichts gespeichert oder übertragen.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {tools.map((t, i) => (
                <li key={t.href} data-reveal data-reveal-delay={i * 70}>
                  <Link href={t.href} className="group glow-hover flex h-full flex-col gap-3 rounded-xl border bg-card/70 p-5">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[image:var(--brand-gradient)] text-primary-foreground shadow-[var(--glow-sm)] transition-transform group-hover:rotate-6 group-hover:scale-110">
                      <t.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display font-semibold">{t.title}</span>
                    <span className="text-sm text-muted-foreground">{t.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- Flauschipanda ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="flauschipanda">
        <PandaShowcase />
      </section>

      {/* ---------------- Panda-Baukasten ---------------- */}
      <section id="baukasten" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16" aria-labelledby="baukasten-titel">
        <PandaBuilder />
      </section>

      {/* ---------------- Neu ---------------- */}
      {live.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16" aria-labelledby="neu">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-purple">Frisch erschienen</p>
              <h2 id="neu" className="text-2xl font-semibold md:text-3xl">
                Neu in der Toolbox
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/feed.xml">
                  <Rss /> RSS
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/neu">
                  Alles Neue <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {live.slice(0, 6).map((p, i) => (
              <PageCard key={p.id} page={toSummary(p)} revealDelay={(i % 3) * 90} />
            ))}
          </div>
        </section>
      )}

      {/* ---------------- Panda GreenTech ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-20" aria-labelledby="greentech">
        <div data-reveal className="relative overflow-hidden rounded-3xl border border-success/30 bg-gradient-to-br from-success/15 via-card/80 to-purple/10 p-6 md:p-10">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-success/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wider text-success">🌱 {settings.greencore.name}</p>
              <h2 id="greentech" className="text-2xl font-bold md:text-3xl">
                Ideen für saubere Energie – mit deiner Hilfe
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Hinter der Panda Toolbox steckt auch Panda GreenTech: Erfindungen für umweltfreundliche Energie wie Panda HomeCore. Die
                Toolbox bleibt kostenlos – wer mag, kann das Projekt freiwillig unterstützen oder einfach weitersagen.
              </p>
              <div className="flex flex-wrap gap-3">
                {settings.greencore.url && (
                  <Button asChild className="bg-success text-primary-foreground">
                    <a href={settings.greencore.url} target="_blank" rel="noopener noreferrer">
                      💚 Jetzt unterstützen
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <Link href={settings.greencore.aboutHref}>Was ist Panda GreenTech?</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border bg-card/70 p-4">
              <ShareButtons title="Panda GreenTech – Ideen für saubere Energie" text="Schau dir das Projekt an 🌱" path="/panda-branding/greentech" label="Weitersagen" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
