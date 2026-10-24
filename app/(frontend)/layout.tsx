import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { ConsentBanner } from "@/components/consent-banner";
import { PandaBuddy } from "@/components/panda-buddy";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getNavigation, toNavLite } from "@/lib/cms";
import { getSiteUrl, siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Panda Toolbox: verständliche Ratgeber, ehrliche Vergleiche und transparente Empfehlungen.",
  applicationName: siteConfig.name,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // Inhaberschaft für Google Search Console / Bing Webmaster Tools bestätigen (Werte in Vercel setzen)
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#120f24",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nav = toNavLite(await getNavigation());
  return (
    <html lang="de" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader nav={nav} />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter nav={nav} />
        <ConsentBanner />
        <PandaBuddy nav={nav} />
        <ScrollReveal />
      </body>
    </html>
  );
}
