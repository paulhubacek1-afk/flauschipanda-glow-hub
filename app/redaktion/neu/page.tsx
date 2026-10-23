import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Check, FilePlus2, Sparkles, TriangleAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { findPageNodes } from "@/lib/auto";
import { createDraft, previewDraft } from "@/lib/generator";
import { allPageNodes } from "@/lib/hierarchy";

/**
 * Seiten-Generator im Redaktions-Cockpit.
 * Titel eingeben → Vorschau aller automatisch erzeugten Bausteine → Entwurf anlegen.
 * Anlegen schreibt eine Datei und funktioniert deshalb nur in der lokalen Entwicklung (npm run dev).
 */
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Neue Seite", robots: { index: false, follow: false } };

const canWrite = process.env.NODE_ENV === "development";

async function createAction(formData: FormData) {
  "use server";
  if (process.env.NODE_ENV !== "development") throw new Error("Seiten können nur lokal angelegt werden.");
  const id = String(formData.get("id") ?? "");
  const result = createDraft(id);
  redirect(`/redaktion/neu?q=${encodeURIComponent(id)}&status=${result.ok ? "angelegt" : result.reason}`);
}

type Props = { searchParams: Promise<{ q?: string; status?: string }> };

export default async function NewPage({ searchParams }: Props) {
  if (process.env.NODE_ENV === "production" && process.env.ENABLE_EDITOR_DASHBOARD !== "true") notFound();

  const { q = "", status } = await searchParams;
  const matches = q ? findPageNodes(q) : [];
  const preview = matches.length === 1 ? previewDraft(matches[0]) : null;

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10">
      <header className="space-y-2">
        <Link href="/redaktion" className="text-sm text-primary hover:underline">
          ← Redaktions-Cockpit
        </Link>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <Sparkles className="size-7 text-primary" aria-hidden="true" /> Neue Seite erzeugen
        </h1>
        <p className="text-muted-foreground">
          Gib einen Titel ein, z. B. „Gesundes Hundefutter“. SEO-Titel, Meta-Beschreibung, verwandte Seiten, Affiliate-Box,
          Spendenbox und Panda-GreenCore-Hinweis entstehen automatisch.
        </p>
      </header>

      <form method="get" className="flex gap-2">
        <Input name="q" defaultValue={q} list="alle-seiten" placeholder="Seitentitel eingeben …" className="h-12 text-base" autoFocus />
        <datalist id="alle-seiten">
          {allPageNodes().map((n) => (
            <option key={n.id} value={n.page.title} />
          ))}
        </datalist>
        <Button type="submit" size="lg">
          Vorschau
        </Button>
      </form>

      {status === "angelegt" && (
        <p className="flex items-center gap-2 rounded-lg border border-success/40 bg-success/10 px-4 py-3 text-sm">
          <Check className="size-4 text-success" aria-hidden="true" /> Entwurf angelegt. Jetzt Text schreiben, Fakten prüfen und{" "}
          <code>status: published</code> setzen.
        </p>
      )}

      {q && matches.length === 0 && (
        <p className="rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm">
          „{q}“ gibt es noch nicht in der Seiten-Hierarchie. Ergänze die Seite in <code>lib/hierarchy.ts</code> beim passenden
          Unterthema (eine Zeile) – danach steht sie hier zur Verfügung.
        </p>
      )}

      {matches.length > 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Mehrere Treffer – welche Seite meinst du?</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <ul className="space-y-1">
              {matches.map((m) => (
                <li key={m.id}>
                  <Link href={`/redaktion/neu?q=${encodeURIComponent(m.id)}`} className="flex justify-between gap-4 rounded-md px-3 py-2 hover:bg-primary/10">
                    <span>{m.page.title}</span>
                    <span className="text-xs text-muted-foreground">{m.id}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {preview && (
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle>{preview.title}</CardTitle>
              <Badge variant={preview.exists ? "warning" : "default"}>{preview.exists ? "existiert bereits" : "neu"}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {preview.categoryTitle} › {preview.groupTitle} · <code>{preview.href}</code>
            </p>
          </CardHeader>
          <CardContent className="space-y-5 pb-6">
            <Row label="SEO-Titel" hint={`${preview.seoTitle.length}/60 Zeichen`}>
              {preview.seoTitle}
            </Row>
            <Row label="Meta-Beschreibung" hint={`${preview.description.length}/160 Zeichen`}>
              {preview.description}
            </Row>
            {/* Google-Vorschau */}
            <div className="rounded-lg border bg-background/60 p-4">
              <p className="text-xs text-muted-foreground">Vorschau in Suchergebnissen</p>
              <p className="mt-1 text-lg text-[#8ab4f8]">{preview.seoTitle}</p>
              <p className="text-sm text-muted-foreground">{preview.description}</p>
            </div>
            <Row label="Verwandte Seiten">{preview.related.map((r) => r.title).join(" · ") || "–"}</Row>
            <Row label="Affiliate-Box">
              {preview.products.length
                ? preview.products.map((p) => p.name + (p.placeholder ? " (Platzhalter)" : "")).join(" · ")
                : "Keine passenden Produkte im Register – in lib/affiliate.ts über „topics“ zuordnen."}
            </Row>
            <Row label="Spendenbox">
              {preview.donation.name}
              {(!preview.donation.hasUrl || !preview.donation.hasPurpose) && (
                <span className="ml-2 inline-flex items-center gap-1 text-warning">
                  <TriangleAlert className="size-3.5" aria-hidden="true" /> Link/Zweck in lib/site.ts fehlen
                </span>
              )}
            </Row>
            <Row label="Panda-GreenCore-Hinweis">aktiv</Row>

            {preview.exists ? (
              <p className="text-sm text-muted-foreground">
                Die Datei <code>{preview.file}</code> existiert bereits – es wird nichts überschrieben.
              </p>
            ) : canWrite ? (
              <form action={createAction}>
                <input type="hidden" name="id" value={preview.id} />
                <Button type="submit">
                  <FilePlus2 /> Entwurf anlegen
                </Button>
                <span className="ml-3 text-xs text-muted-foreground">→ {preview.file} (status: draft)</span>
              </form>
            ) : (
              <p className="text-sm text-muted-foreground">
                Anlegen ist nur lokal möglich: <code>npm run neu -- &quot;{preview.title}&quot;</code>
              </p>
            )}

            <details>
              <summary className="cursor-pointer text-sm text-primary">Erzeugte Datei ansehen</summary>
              <pre className="mt-3 max-h-96 overflow-auto rounded-lg bg-muted p-4 text-xs leading-relaxed">{preview.markdown}</pre>
            </details>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[180px_1fr]">
      <span className="text-sm font-medium text-muted-foreground">
        {label}
        {hint && <span className="block text-xs font-normal opacity-70">{hint}</span>}
      </span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
