/* Payload-Admin: alle Ansichten unter /admin. */
import config from "@payload-config";
import { RootPage } from "@payloadcms/next/views";
import type { Metadata } from "next";

import { importMap } from "../importMap.js";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] }>;
};

// Absichtlich statische Metadaten: Das Erzeugen der Admin-Metadaten darf nicht
// schon vor dem Rendern eine zusätzliche Datenbankverbindung erzwingen.
export const metadata: Metadata = {
  title: "Verwaltung | Panda Toolbox",
  robots: { index: false, follow: false },
};

function AdminUnavailable() {
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
          Das Admin-CMS ist gerade nicht erreichbar
        </h1>
        <p style={{ color: "#c5c5d0", lineHeight: 1.65 }}>
          Payload kann momentan keine Verbindung zur PostgreSQL-Datenbank herstellen. Ohne diese
          Verbindung sind Anmeldung und Dashboard nicht verfügbar.
        </p>
        <p style={{ color: "#a1a1b2", fontSize: "13px", lineHeight: 1.5 }}>
          Beim Datenbankanbieter ist derzeit das Projekt-Kontingent überschritten. Bitte prüfe den
          Datenbankstatus und das Nutzungslimit. Deine gespeicherten Inhalte werden durch diesen
          Verbindungsfehler nicht gelöscht.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "18px" }}>
          <a
            href="/admin"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: 0,
              borderRadius: "10px",
              padding: "11px 18px",
              background: "#8b6df5",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Erneut versuchen
          </a>
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

const Page = async ({ params, searchParams }: Args) => {
  try {
    return await RootPage({ config, params, searchParams, importMap });
  } catch (error) {
    // Payload initialisiert seine DB-Verbindung im Admin-Renderpfad. Ohne
    // DB-Kontingent kann die Admin-Route daher selbst nicht gerendert werden.
    console.error("[admin] Payload-Admin konnte nicht geladen werden", error);
    return <AdminUnavailable />;
  }
};

export default Page;
