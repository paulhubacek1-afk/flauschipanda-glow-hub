"use client";

import "./(frontend)/globals.css";

import { MaintenanceScreen } from "@/components/maintenance-screen";

/**
 * Letzte Rettung: Fällt die ganze Website aus (z. B. Datenbank kurz nicht erreichbar),
 * sehen Besucher automatisch einen freundlichen Wartungsscreen statt einer Fehlerseite.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="de">
      <body className="bg-background text-foreground">
        <MaintenanceScreen
          variant="error"
          title="Wir sind gleich wieder da"
          message="Die Panda Toolbox macht gerade eine kurze Pause. Bitte versuche es in ein paar Minuten noch einmal."
          onRetry={reset}
        />
      </body>
    </html>
  );
}
