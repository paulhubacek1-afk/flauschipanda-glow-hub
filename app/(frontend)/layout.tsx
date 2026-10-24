import type { Metadata, Viewport } from "next";
import { draftMode } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";

import { ConsentBanner } from "@/components/consent-banner";
import { MaintenanceScreen } from "@/components/maintenance-screen";
import { PreviewBar } from "@/components/preview-bar";
import { BambooForest } from "@/components/bamboo-forest";
import { PandaBuddy } from "@/components/panda-buddy";
import { ScienceSky } from "@/components/science-sky";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getNavigation, getSettings, isMaintenanceActive, toNavLite } from "@/lib/cms";
import { getSiteUrl, siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

const baseMetadata: Metadata = {
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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  // Während der Wartung: nichts indexieren (Google soll den Wartungsscreen nicht speichern)
  if (isMaintenanceActive(settings.maintenance)) return { ...baseMetadata, robots: { index: false, follow: false } };
  return baseMetadata;
}

export const viewport: Viewport = {
  themeColor: "#120f24",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [navigation, settings, draft] = await Promise.all([getNavigation(), getSettings(), draftMode()]);
  const nav = toNavLite(navigation);
  const maintenance = isMaintenanceActive(settings.maintenance);

  // Wartungsmodus: alle Besucher sehen nur den Wartungsscreen.
  // Teammitglieder können über /api/vorschau trotzdem die echte Seite ansehen.
  if (maintenance && !draft.isEnabled) {
    return (
      <html lang="de" className={`${inter.variable} ${grotesk.variable}`}>
        <body>
          <MaintenanceScreen title={settings.maintenance.title} message={settings.maintenance.message} until={settings.maintenance.until} />
        </body>
      </html>
    );
  }

  return (
    <html lang="de" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {draft.isEnabled && <PreviewBar maintenance={maintenance} />}
        <SiteHeader nav={nav} />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter nav={nav} />
        <ConsentBanner />
        <ScienceSky />
        <BambooForest />
        <PandaBuddy nav={nav} />
        <ScrollReveal />
      </body>
    </html>
  );
}
