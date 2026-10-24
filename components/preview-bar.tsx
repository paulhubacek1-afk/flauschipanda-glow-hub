/** Hinweisleiste für Teammitglieder, die die Seite in der Vorschau ansehen (z. B. während der Wartung). */
export function PreviewBar({ maintenance }: { maintenance: boolean }) {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-warning px-4 py-1.5 text-center text-sm font-medium text-[oklch(0.2_0.03_60)]">
      <span>{maintenance ? "🛠️ Wartungsmodus aktiv – nur du siehst die Seite (Team-Vorschau)." : "Team-Vorschau aktiv."}</span>
      <a href="/api/vorschau?ende=1" className="underline underline-offset-2">
        Vorschau beenden
      </a>
    </div>
  );
}
