/* Payload-Admin: Root-Layout mit einem sicheren Fallback bei Datenbankausfall. */
import config from "@payload-config";
import "@payloadcms/next/css";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import type { ServerFunctionClient } from "payload";
import { getPayload } from "payload";
import type React from "react";

import { importMap } from "./admin/importMap.js";

type Args = { children: React.ReactNode };

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({ ...args, config, importMap });
};

function AdminDatabaseUnavailable() {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          background: "#11111b",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main
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
            Für diese Umgebung ist keine erreichbare Datenbank verfügbar. Anmeldung, Benutzerprüfung
            und Dashboard können deshalb gerade nicht geladen werden.
          </p>
          <p style={{ color: "#a1a1b2", fontSize: "13px", lineHeight: 1.5 }}>
            Deine gespeicherten Inhalte bleiben erhalten. Sobald die Datenbank wieder erreichbar ist,
            steht die Verwaltung wie gewohnt zur Verfügung.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "18px" }}>
            <a
              href="/admin"
              style={{
                display: "inline-flex",
                alignItems: "center",
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
        </main>
      </body>
    </html>
  );
}

const Layout = async ({ children }: Args) => {
  // Preview-Deployments haben absichtlich keine Produktionsdatenbank.
  // Den Admin-Fallback direkt rendern, statt localhost:5432 anzusprechen.
  if (!String(process.env.DATABASE_URI ?? "").trim()) return <AdminDatabaseUnavailable />;

  // Erst die Verbindung prüfen, bevor Payloads eigenes Layout läuft.
  // So kann ein nicht erreichbares CMS keine ungefangene 500-Antwort erzeugen.
  try {
    const payload = await getPayload({ config });
    await payload.count({ collection: "users", overrideAccess: true });
  } catch (error) {
    console.warn("[admin-layout] Datenbank nicht erreichbar; Admin-Fallback wird angezeigt.", error instanceof Error ? error.message : error);
    return <AdminDatabaseUnavailable />;
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
};

export default Layout;
