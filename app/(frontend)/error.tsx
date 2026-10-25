"use client";

import { useEffect } from "react";

import { MaintenanceScreen } from "@/components/maintenance-screen";

/** Automatischer Wartungsscreen, wenn beim Laden einer Seite etwas schiefgeht. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Details nur in den Server-/Browser-Logs, nie für Besucher sichtbar
    console.error("[seite]", error.digest ?? error.message);
  }, [error]);

  return (
    <MaintenanceScreen
      variant="error"
      title="Flauschipanda repariert kurz etwas"
      message="Diese Seite konnte gerade nicht geladen werden. Das liegt an uns, nicht an dir – versuch es in einem Moment noch einmal."
      onRetry={reset}
    />
  );
}
