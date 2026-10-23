import { ChevronDown } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq" className="space-y-3">
      <h2 id="faq" className="font-display text-2xl font-semibold">
        Häufige Fragen
      </h2>
      <div className="space-y-2">
        {items.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-card/60 open:border-primary/30">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown className="size-4 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="px-5 pb-5 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
