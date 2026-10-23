import Link from "next/link";
import { ExternalLink, Info } from "lucide-react";

import { AFFILIATE_REL } from "@/lib/affiliate";
import type { AffiliateItem } from "@/lib/cms";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

/** Hinweis am Artikelanfang, sobald der Artikel Partnerlinks enthält. */
export function AffiliateDisclosure() {
  return (
    <p className="flex items-start gap-2 rounded-lg border border-warning/30 bg-warning/5 px-4 py-3 text-sm text-foreground/85">
      <Info className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
      <span>
        <strong className="font-semibold">Transparenz:</strong> Dieser Artikel enthält Affiliate-Links (mit{" "}
        <span className="text-warning">*</span> markiert). Kaufst du darüber, erhalten wir eventuell eine Provision – für
        dich ändert sich der Preis nicht. Unsere Empfehlungen sind davon unabhängig.{" "}
        <Link href="/transparenz" className="text-primary underline underline-offset-2">
          Mehr erfahren
        </Link>
      </span>
    </p>
  );
}

/** Affiliate-Bereich – nur auf Money Pages; Produkte kommen aus dem CMS. */
export function AffiliateBox({ products, title = "Passende Empfehlungen" }: { products: AffiliateItem[]; title?: string }) {
  if (!products.length) return null;

  return (
    <section aria-labelledby="affiliate-box" className="rounded-xl border border-primary/20 bg-card/70 p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 id="affiliate-box" className="font-display text-xl font-semibold">
          {title}
        </h2>
        <Badge variant="warning">Anzeige · Affiliate-Links</Badge>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {products.map((p) => (
          <li key={p.key} className="flex flex-col gap-2 rounded-lg border bg-background/50 p-4">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.label}</span>
            <span className="font-medium">{p.name}</span>
            <p className="text-sm text-muted-foreground">{p.pitch}</p>
            <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
              <a href={p.url} rel={AFFILIATE_REL} target="_blank" data-affiliate="true">
                Angebot ansehen* <ExternalLink />
              </a>
            </Button>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        * Affiliate-Link. Preise und Verfügbarkeit ändern sich – maßgeblich sind die Angaben beim Händler.
      </p>
    </section>
  );
}
