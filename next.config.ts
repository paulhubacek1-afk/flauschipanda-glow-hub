import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

/**
 * Sicherheits-Header für alle Antworten.
 * - HSTS: nur noch verschlüsselt (https) erreichbar
 * - CSP: keine fremden Seiten dürfen die Website einbetten (Clickjacking), keine Plugins,
 *   Formulare nur an die eigene Domain, <base> nicht manipulierbar
 * - nosniff / Referrer / Permissions: übliche Härtung
 */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  {
    key: "Content-Security-Policy",
    value: [
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      // lokal (http://localhost) würde das Anfragen kaputt machen
      ...(process.env.NODE_ENV === "production" ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Die Startseite liegt unter /startseite – ohne .html, alle URLs ohne Dateiendung.
  async redirects() {
    return [
      { source: "/", destination: "/startseite", permanent: true },
      { source: "/home", destination: "/startseite", permanent: true },
      { source: "/startseite.html", destination: "/startseite", permanent: true },
      { source: "/index.html", destination: "/startseite", permanent: true },
      // Jede andere .html-Adresse auf die saubere URL ohne Endung umleiten
      { source: "/:path(.*)\\.html", destination: "/:path", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Backend und API nie in Suchmaschinen
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      // Technische Vercel-Adressen (*.vercel.app) nie indexieren – nur die echte Domain soll bei Google erscheinen
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

// withPayload bindet das Admin-Backend (/admin) und die API (/api) ein.
export default withPayload(nextConfig, { devBundleServerPackages: false });
