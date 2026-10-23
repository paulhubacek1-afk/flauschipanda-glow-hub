import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, CircleAlert, Layers, Link2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPages } from "@/lib/content";
import { hierarchyStats } from "@/lib/hierarchy";
import { runAudit, type Issue, type IssueLevel } from "@/lib/seo-audit";
import { cn, formatDate } from "@/lib/utils";

/**
 * Redaktions-Cockpit (Vorstufe des späteren CMS-Dashboards).
 * Abdeckung der Hierarchie, Redaktionsplan, Prüfergebnisse, Aktualisierungsbedarf, Link-Statistik.
 * In Produktion nur mit ENABLE_EDITOR_DASHBOARD=true – und dann bitte hinter Zugriffsschutz.
 */
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Redaktion", robots: { index: false, follow: false } };

const levelVariant: Record<IssueLevel, "destructive" | "warning" | "outline"> = {
  error: "destructive",
  warning: "warning",
  info: "outline",
};

export default async function RedaktionPage() {
  if (process.env.NODE_ENV === "production" && process.env.ENABLE_EDITOR_DASHBOARD !== "true") notFound();

  const report = await runAudit();
  const pages = getAllPages();
  const stats = hierarchyStats();
  const scheduled = report.pages.filter((p) => p.state === "geplant").sort((a, b) => +a.publishedAt - +b.publishedAt);
  const stale = report.pages.filter((p) => p.needsUpdate);
  const factPending = pages.filter((p) => p.factCheck.required && p.factCheck.status !== "geprüft");
  const live = report.pages.filter((p) => p.state === "live").length;

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10">
      <header className="space-y-2">
        <Badge variant="warning">Intern · nicht indexiert</Badge>
        <h1 className="text-3xl font-bold">Redaktions-Cockpit</h1>
        <p className="text-muted-foreground">
          Stand {formatDate(report.generatedAt)} · {report.totals.error} Fehler · {report.totals.warning} Warnungen ·{" "}
          {report.totals.info} Hinweise
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi icon={<Layers />} label={`von ${stats.pages} Seiten live`} value={live} />
        <Kpi icon={<CalendarClock />} label="Geplant" value={scheduled.length} />
        <Kpi icon={<ShieldCheck />} label="Faktenprüfung offen" value={factPending.length} warn={factPending.length > 0} />
        <Kpi icon={<CircleAlert />} label="Aktualisierung fällig" value={stale.length} warn={stale.length > 0} />
        <Kpi icon={<Link2 />} label="Verwaiste Seiten" value={report.pages.filter((p) => p.state === "live" && p.inboundLinks === 0).length} />
      </div>

      {report.global.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Allgemeine Hinweise</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <IssueList issues={report.global} />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Abdeckung der Seiten-Hierarchie</CardTitle>
        </CardHeader>
        <CardContent className="pb-6">
          <ul className="space-y-2.5">
            {report.coverage.map((row) => (
              <li key={row.slug} className="grid grid-cols-[minmax(0,180px)_1fr_auto] items-center gap-3 text-sm">
                <span className="truncate">{row.title}</span>
                <span className="h-2 overflow-hidden rounded-full bg-muted">
                  <span
                    className="block h-full rounded-full bg-primary shadow-[var(--glow-sm)]"
                    style={{ width: `${Math.round((row.live / row.planned) * 100)}%` }}
                  />
                </span>
                <span className="tabular-nums text-muted-foreground">
                  {row.live}/{row.planned}
                  {row.inWork > 0 && ` (+${row.inWork} in Arbeit)`}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {scheduled.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Redaktionsplan – geplante Veröffentlichungen</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <ul className="divide-y divide-border">
              {scheduled.map((p) => (
                <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
                  <span className="font-medium">{p.title}</span>
                  <span className="text-sm text-muted-foreground">erscheint am {formatDate(p.publishedAt)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">SEO- & Qualitätsprüfung</h2>
        {report.pages.map((p) => (
          <Card key={p.id} className="gap-3">
            <CardHeader className="pb-0">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <CardTitle>
                  {p.state === "live" ? (
                    <Link href={`/${p.id}`} className="hover:text-primary">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{p.state}</Badge>
                  <span
                    className={cn(
                      "rounded-md px-2 py-0.5 font-display text-sm font-semibold",
                      p.score >= 80 ? "bg-success/15 text-success" : p.score >= 50 ? "bg-warning/15 text-warning" : "bg-destructive/15 text-destructive",
                    )}
                  >
                    {p.score}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {p.file} · {p.inboundLinks} eingehende Links · automatisch verlinkt auf:{" "}
                {p.outboundAutoLinks.length ? p.outboundAutoLinks.join(", ") : "–"}
              </p>
            </CardHeader>
            <CardContent className="pb-5">
              {p.issues.length === 0 ? <p className="text-sm text-success">Keine Auffälligkeiten.</p> : <IssueList issues={p.issues} />}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

function IssueList({ issues }: { issues: Issue[] }) {
  return (
    <ul className="space-y-1.5">
      {issues.map((i, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm">
          <Badge variant={levelVariant[i.level]} className="mt-0.5">
            {i.level}
          </Badge>
          <span className="text-foreground/85">{i.message}</span>
        </li>
      ))}
    </ul>
  );
}

function Kpi({ icon, label, value, warn }: { icon: React.ReactNode; label: string; value: number; warn?: boolean }) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <div className={cn("mb-3 [&_svg]:size-5", warn ? "text-warning" : "text-primary")}>{icon}</div>
      <p className="font-display text-3xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
