import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = "Panda Toolbox – Wissen, Tools & Tipps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Standard-Vorschaubild (Open Graph) für Startseite, Kategorien, Unterthemen und alle Seiten
 * ohne eigenes Bild. Landingpages haben ein eigenes, automatisch erzeugtes Bild.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 85% 0%, #0e4a57 0%, transparent 50%), radial-gradient(circle at 0% 100%, #4b2a7a 0%, #120f24 60%)",
          color: "#f1f0fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#5ee7f2" }}>
          <div style={{ width: 18, height: 18, borderRadius: 99, background: "#b07cff", boxShadow: "0 0 24px #b07cff" }} />
          FlauschiPandas
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 34, color: "#c4a8ff", maxWidth: 980 }}>
            Ratgeber, Vergleiche und Rechner zu Tieren, Zoos, Freizeitparks, KI, Urlaub, Autos und Finanzen
          </div>
        </div>
        <div style={{ height: 6, width: 220, borderRadius: 99, background: "linear-gradient(90deg, #5ee7f2, #b07cff)", boxShadow: "0 0 30px #8fa8ff" }} />
      </div>
    ),
    size,
  );
}
