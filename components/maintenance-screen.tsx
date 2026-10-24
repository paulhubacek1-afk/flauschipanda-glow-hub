"use client";

import { useEffect, useState } from "react";

import { PandaFigure } from "./panda-figure";

/**
 * Wartungsscreen – erscheint für alle Besucher, solange paul_hub den Wartungsmodus aktiviert hat,
 * und (mit `variant="error"`) automatisch, wenn die Seite technisch gerade nicht kann.
 */
export function MaintenanceScreen({
  title,
  message,
  until,
  variant = "maintenance",
  onRetry,
}: {
  title: string;
  message: string;
  until?: string;
  variant?: "maintenance" | "error";
  onRetry?: () => void;
}) {
  const [left, setLeft] = useState<number | null>(null);
  const [isTeam, setIsTeam] = useState(false);

  // Countdown bis „voraussichtlich bis“; danach Seite neu laden
  useEffect(() => {
    if (!until) return;
    const end = new Date(until).getTime();
    const tick = () => {
      const ms = end - Date.now();
      setLeft(ms);
      if (ms <= 0) window.setTimeout(() => window.location.reload(), 4000);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [until]);

  // Ist jemand vom Team angemeldet? Dann Vorschau anbieten.
  useEffect(() => {
    if (variant !== "maintenance") return;
    fetch("/api/users/me", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setIsTeam(Boolean(d?.user && ["admin", "redakteur", "autor"].includes(d.user.role))))
      .catch(() => undefined);
  }, [variant]);

  const fmt = (ms: number) => {
    const s = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0 ? `${h} Std. ${String(m).padStart(2, "0")} Min.` : `${m}:${String(sec).padStart(2, "0")} Min.`;
  };

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 size-72 -translate-x-1/2 rounded-full bg-purple/25 blur-3xl animate-pulse-glow" aria-hidden="true" />

      <div className="relative mb-6">
        <PandaFigure pose="sit" className="size-40 md:size-52" />
        <span className="absolute -right-2 top-4 animate-wiggle text-4xl [animation-iteration-count:infinite] [animation-duration:2.4s]" aria-hidden="true">
          🛠️
        </span>
      </div>

      <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-purple">
        {variant === "error" ? "Kurze Pause" : "Wartung"}
      </p>
      <h1 className="max-w-2xl text-3xl font-bold md:text-5xl">
        <span className="text-glow">{title}</span>
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">{message}</p>

      {left !== null && (
        <p className="mt-8 rounded-full border border-purple/30 bg-card/70 px-5 py-2 text-sm" aria-live="polite">
          {left > 0 ? (
            <>
              Voraussichtlich wieder da in <strong className="text-primary">{fmt(left)}</strong>
            </>
          ) : (
            "Gleich geht’s weiter …"
          )}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
        {onRetry && (
          <button type="button" onClick={onRetry} className="rounded-md bg-brand px-4 py-2 font-medium text-primary-foreground shadow-[var(--glow-sm)]">
            Nochmal versuchen
          </button>
        )}
        {isTeam && (
          <a href="/api/vorschau" className="rounded-md border border-primary/40 px-4 py-2 text-primary hover:border-purple/70 hover:text-purple">
            Seite trotzdem ansehen (Team-Vorschau)
          </a>
        )}
      </div>

      <p className="mt-12 font-display text-sm text-muted-foreground/70">
        Panda <span className="text-glow">Toolbox</span>
      </p>
    </main>
  );
}
