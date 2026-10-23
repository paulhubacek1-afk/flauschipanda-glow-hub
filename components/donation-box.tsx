import Link from "next/link";
import { HeartHandshake } from "lucide-react";

import type { SiteSettingsData } from "@/lib/cms";

import { PandaLogo } from "./panda-logo";
import { Button } from "./ui/button";

/** Panda-GreenCore-Box – erscheint automatisch auf jeder Landingpage. Texte im Admin unter „Website-Einstellungen“. */
export function DonationBox({ greencore }: { greencore: SiteSettingsData["greencore"] }) {
  const { headline, text, purpose, url, aboutHref, name } = greencore;
  return (
    <section
      aria-labelledby="spende"
      className="relative overflow-hidden rounded-xl border border-success/30 bg-gradient-to-br from-success/10 via-card/80 to-card p-6"
    >
      <PandaLogo className="absolute -right-4 -top-4 size-28 opacity-15" />
      <div className="relative space-y-3">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-success">
          <HeartHandshake className="size-4" aria-hidden="true" /> {name}
        </p>
        <h2 id="spende" className="font-display text-xl font-semibold">
          {headline}
        </h2>
        <p className="max-w-2xl text-sm text-foreground/85">{text}</p>
        {purpose && <p className="max-w-2xl text-sm text-muted-foreground">{purpose}</p>}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {url ? (
            <Button asChild size="sm" className="bg-success text-primary-foreground">
              <a href={url} target="_blank" rel="noopener noreferrer">
                Jetzt freiwillig spenden
              </a>
            </Button>
          ) : (
            <span className="text-sm text-muted-foreground">Spendenmöglichkeit folgt in Kürze.</span>
          )}
          <Link href={aboutHref} className="text-sm text-success underline-offset-2 hover:underline">
            Was ist {name}?
          </Link>
        </div>
      </div>
    </section>
  );
}
