import { Scale } from "lucide-react";

import type { Comparison } from "@/lib/cms";

/** Baustein "Vergleich" einer Landingpage. */
export function ComparisonTable({ comparison }: { comparison: Comparison }) {
  return (
    <section aria-labelledby="vergleich" className="space-y-4">
      <h2 id="vergleich" className="flex items-center gap-2 font-display text-2xl font-semibold">
        <Scale className="size-5 text-primary" aria-hidden="true" /> {comparison.title}
      </h2>
      <div className="overflow-x-auto rounded-xl border bg-card/60">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-primary/10">
              <th scope="col" className="p-3 text-left font-medium text-muted-foreground">
                <span className="sr-only">Kriterium</span>
              </th>
              {comparison.columns.map((col) => (
                <th key={col} scope="col" className="p-3 text-left font-display font-semibold text-foreground">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className="border-t border-border align-top">
                <th scope="row" className="p-3 text-left font-medium text-foreground/90">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className="p-3 text-muted-foreground">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {comparison.note && <p className="text-xs text-muted-foreground">{comparison.note}</p>}
    </section>
  );
}
