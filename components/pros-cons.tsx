import { AlertTriangle, CheckCircle2, Scale } from "lucide-react";

import type { ProsConsData } from "@/lib/editorial";

/** Kompakte, gut scannbare Übersicht der wichtigsten Vorteile und Grenzen. */
export function ProsConsPanel({ data }: { data: ProsConsData }) {
  if (!data.pros.length || !data.cons.length) return null;

  return (
    <section aria-labelledby="pros-cons-title" className="space-y-4">
      <h2 id="pros-cons-title" className="flex items-center gap-2 font-display text-2xl font-semibold">
        <Scale className="size-5 text-primary" aria-hidden="true" />
        Vorteile & Nachteile im Überblick
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-5">
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 className="size-5" aria-hidden="true" />
            Vorteile
          </h3>
          <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/85">
            {data.pros.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-1 text-emerald-600 dark:text-emerald-300" aria-hidden="true">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5">
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
            <AlertTriangle className="size-5" aria-hidden="true" />
            Nachteile & Grenzen
          </h3>
          <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/85">
            {data.cons.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-1 text-amber-600 dark:text-amber-300" aria-hidden="true">−</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {data.note && <p className="text-xs leading-relaxed text-muted-foreground">{data.note}</p>}
    </section>
  );
}
