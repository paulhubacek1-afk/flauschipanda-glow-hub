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
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
