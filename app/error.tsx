"use client";

import { useEffect } from "react";

/**
 * Übergeordnete Fehlergrenze für Route-Group-Layouts wie (payload).
 * Die Fehlergrenze innerhalb von (payload) kann ihr eigenes Layout nicht abfangen.
 */
export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app-boundary] Route-Layout konnte nicht geladen werden", error.digest ?? error.message);
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
          Das Admin-CMS ist vorübergehend nicht erreichbar
        </h1>
        <p style={{ color: "#c5c5d0", lineHeight: 1.65 }}>
          Das Verwaltungs-Backend kann seine PostgreSQL-Datenbank momentan nicht erreichen.
          Ohne Datenbankverbindung sind Anmeldung und Dashboard nicht verfügbar.
        </p>
        <p style={{ color: "#a1a1b2", fontSize: "13px", lineHeight: 1.5 }}>
          Bitte prüfe beim Datenbankanbieter das Projekt-Kontingent und den Datenbankstatus.
          Die gespeicherten Inhalte werden durch diesen Verbindungsfehler nicht gelöscht.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "18px" }}>
          <button
            type="button"
            onClick={reset}
            style={{
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
          <a
            href="/startseite"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid #55556a",
              borderRadius: "10px",
              padding: "11px 18px",
              color: "#e6e6ee",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Zur Website
          </a>
        </div>
      </section>
    </main>
  );
}
