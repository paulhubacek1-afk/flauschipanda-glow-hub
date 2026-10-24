import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
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
