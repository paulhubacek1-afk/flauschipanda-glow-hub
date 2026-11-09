import type { Metadata, Viewport } from "next";
import { draftMode, headers } from "next/headers";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";
import { Inter, Space_Grotesk } from "next/font/google";

import { ConsentBanner } from "@/components/consent-banner";
import { MaintenanceScreen } from "@/components/maintenance-screen";
import { PreviewBar } from "@/components/preview-bar";
import { BambooForest } from "@/components/bamboo-forest";
import { PandaBuddy } from "@/components/panda-buddy";
import { PandaGachaReminder } from "@/components/panda-gacha-reminder";
import { ScienceSky } from "@/components/science-sky";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VisitorPing } from "@/components/visitor-ping";
import { visitorCountingEnabled } from "@/lib/counters";
import { SeasonalTheme } from "@/components/seasonal-theme";
import { getSeasonalTheme } from "@/lib/seasonal-theme";
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
  alternates: { types: { "application/rss+xml": [{ url: "/feed.xml", title: "Panda Toolbox – Neue Seiten" }] } },
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
  const seasonalTheme = getSeasonalTheme();

  // Teammitglieder werden serverseitig über ihr Payload-Login-Cookie erkannt.
  // Der Admin bleibt so auch während der Wartung in der Lage, die Website zu prüfen.
  let teamPreview = false;
  if (maintenance && !draft.isEnabled && String(process.env.DATABASE_URI ?? "").trim()) {
    try {
      const payload = await getPayload({ config: payloadConfig });
      const { user } = await payload.auth({ headers: await headers() });
      const role = (user as { role?: string } | null)?.role;
      teamPreview = ["admin", "redakteur", "autor"].includes(role ?? "");
    } catch (error) {
      console.warn("[wartung] Team-Sitzung konnte nicht geprüft werden.", error instanceof Error ? error.message : error);
      teamPreview = false;
    }
  }

  if (maintenance && !draft.isEnabled && !teamPreview) {
    return (
      <html lang="de" data-season-theme={seasonalTheme} className={`${inter.variable} ${grotesk.variable}`}>
        <body>
          <SeasonalTheme initialTheme={seasonalTheme} />
          <MaintenanceScreen title={settings.maintenance.title} message={settings.maintenance.message} until={settings.maintenance.until} />
        </body>
      </html>
    );
  }

  return (
    <html lang="de" data-season-theme={seasonalTheme} className={`${inter.variable} ${grotesk.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SeasonalTheme initialTheme={seasonalTheme} />
        {draft.isEnabled && <PreviewBar maintenance={maintenance} />}
        {maintenance && teamPreview && (
          <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-3 bg-warning px-4 py-2 text-center text-sm font-medium text-[oklch(0.2_0.03_60)]">
            <span>🛠️ Wartungsmodus aktiv – du siehst die Website als Teammitglied.</span>
            <a href="/admin" className="underline underline-offset-2">Zur Verwaltung</a>
          </div>
        )}
        <SiteHeader nav={nav} links={settings.links.header} />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter nav={nav} links={settings.links} greentechUrl={settings.greencore.url} />
        <ConsentBanner />
        <ScienceSky />
        <BambooForest />
        <PandaBuddy nav={nav} />
        <PandaGachaReminder />
        <ScrollReveal />
        {visitorCountingEnabled() && <VisitorPing />}
      </body>
    </html>
  );
}
