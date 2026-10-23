import { ImageResponse } from "next/og";

import { getLivePage } from "@/lib/cms";
import { siteConfig } from "@/lib/site";

export const alt = "Seitenvorschau";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 3600;

/** Automatisch erzeugtes Open-Graph-Bild für jede Landingpage (Social Media). */
export default async function Image({ params }: { params: Promise<{ kategorie: string; gruppe: string; seite: string }> }) {
  const { kategorie, gruppe, seite } = await params;
  const page = await getLivePage(kategorie, gruppe, seite);

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
          {siteConfig.name}
          {page ? ` · ${page.category.title}` : ""}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {page && <div style={{ fontSize: 28, color: "#c4a8ff" }}>{page.group.title}</div>}
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>{page?.title ?? siteConfig.name}</div>
        </div>
        <div style={{ height: 6, width: 220, borderRadius: 99, background: "linear-gradient(90deg, #5ee7f2, #b07cff)", boxShadow: "0 0 30px #8fa8ff" }} />
      </div>
    ),
    size,
  );
}
