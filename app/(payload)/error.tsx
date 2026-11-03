"use client";

import { useEffect } from "react";

/**
 * Payload-CMS-Fehlergrenze:
 * Wenn die Datenbankverbindung ausfällt, soll /admin keine rohe HTTP-500-Seite zeigen.
 */
export default function PayloadError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[admin] CMS konnte nicht geladen werden", error.digest ?? error.message);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#11111b",
        color: "#f4f4f5",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "560px",
          padding: "32px",
          border: "1px solid #3f3f52",
          borderRadius: "18px",
          background: "#1b1b28",
          boxShadow: "0 18px 60px #0005",
        }}
      >
        <p style={{ margin: 0, color: "#b9a5ff", fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Panda Toolbox · Verwaltung
        </p>
        <h1 style={{ margin: "12px 0", fontSize: "28px", lineHeight: 1.2 }}>
          Das CMS ist gerade nicht erreichbar
        </h1>
        <p style={{ color: "#c5c5d0", lineHeight: 1.65 }}>
          Die Anmeldung und das Admin-Dashboard benötigen eine aktive Verbindung zur PostgreSQL-Datenbank.
          Derzeit kann diese Verbindung nicht hergestellt werden. Prüfe beim Datenbankanbieter insbesondere
          das Projekt-Kontingent und den Datenbankstatus.
        </p>
        <p style={{ color: "#a1a1b2", fontSize: "13px", lineHeight: 1.5 }}>
          Deine Inhalte wurden durch diesen Fehler nicht gelöscht. Sobald die Datenbank wieder erreichbar ist,
          kannst du dich hier erneut anmelden.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "12px",
            border: 0,
            borderRadius: "10px",
            padding: "11px 18px",
            background: "#8b6df5",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Erneut versuchen
        </button>
      </section>
    </main>
  );
}
