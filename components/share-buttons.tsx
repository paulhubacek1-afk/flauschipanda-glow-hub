"use client";

import { useEffect, useState } from "react";
import { Check, Link2, Mail, Share2 } from "lucide-react";

import { earnBamboo } from "@/lib/bamboo";
import { cn } from "@/lib/utils";

/**
 * Teilen-Knöpfe ohne Fremd-Skripte: nur normale Links (WhatsApp, Telegram, Facebook, X, E-Mail),
 * „Link kopieren“ und – auf dem Handy – das eingebaute Teilen-Menü des Geräts.
 * Es wird nichts geladen und nichts übertragen, bevor jemand auf einen Knopf tippt.
 */
export function ShareButtons({
  title,
  text,
  path,
  className,
  label = "Teilen",
}: {
  title: string;
  text?: string;
  /** Pfad der Seite (z. B. /tiere/hunde) – leer = aktuelle Adresse */
  path?: string;
  className?: string;
  label?: string;
}) {
  const [url, setUrl] = useState("");
  const [canNative, setCanNative] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(path ? new URL(path, window.location.origin).toString() : window.location.href.split("#")[0]);
    setCanNative(typeof navigator.share === "function");
  }, [path]);

  const msg = text ? `${title} – ${text}` : title;
  const enc = encodeURIComponent;
  const links = [
    { name: "WhatsApp", href: `https://wa.me/?text=${enc(`${msg} ${url}`)}`, short: "WA" },
    { name: "Telegram", href: `https://t.me/share/url?url=${enc(url)}&text=${enc(msg)}`, short: "TG" },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, short: "f" },
    { name: "X", href: `https://x.com/intent/post?text=${enc(msg)}&url=${enc(url)}`, short: "X" },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Zwischenablage nicht erlaubt */
    }
  };

  const btn =
    "inline-flex h-9 min-w-9 items-center justify-center gap-1.5 rounded-full border bg-card/70 px-3 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-primary active:scale-95";

  return (
    <div
      className={cn("flex flex-wrap items-center gap-2", className)}
      // Teilen hilft der Panda Toolbox – dafür gibt es einmal pro Seite und Besuch 2 Bambus
      onClickCapture={(e) => {
        if ((e.target as HTMLElement).closest("a,button")) earnBamboo(`teilen:${path ?? url}`, 2);
      }}
    >
      <span className="mr-1 flex items-center gap-1.5 text-sm font-medium">
        <Share2 className="size-4 text-primary" aria-hidden="true" /> {label}
      </span>
      {canNative && (
        <button
          type="button"
          className={cn(btn, "border-primary/40 text-primary")}
          onClick={() => void navigator.share({ title, text: text ?? title, url }).catch(() => undefined)}
        >
          <Share2 className="size-3.5" aria-hidden="true" /> Teilen …
        </button>
      )}
      {url &&
        links.map((l) => (
          <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer nofollow" className={btn} aria-label={`Auf ${l.name} teilen`} title={`Auf ${l.name} teilen`}>
            <span aria-hidden="true" className="font-display font-bold">
              {l.short}
            </span>
            <span className="hidden sm:inline">{l.name}</span>
          </a>
        ))}
      {url && (
        <a href={`mailto:?subject=${enc(title)}&body=${enc(`${msg}\n\n${url}`)}`} className={btn} aria-label="Per E-Mail teilen" title="Per E-Mail teilen">
          <Mail className="size-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">E-Mail</span>
        </a>
      )}
      <button type="button" onClick={() => void copy()} className={btn} aria-live="polite">
        {copied ? <Check className="size-3.5 text-success" aria-hidden="true" /> : <Link2 className="size-3.5" aria-hidden="true" />}
        {copied ? "Kopiert!" : "Link kopieren"}
      </button>
    </div>
  );
}
