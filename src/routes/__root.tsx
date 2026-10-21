import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter, CookieBanner, useCookieBanner } from "@/components/SiteChrome";
import { Toaster } from "@/components/ui/sonner";
import { directoryQuery, settingsQuery } from "@/lib/cms";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="neon-text text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">Dieser Panda hat sich verlaufen.</p>
        <Link to="/home" className="mt-6 inline-block glow-card glow-hover px-4 py-2 font-semibold">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Diese Seite konnte nicht geladen werden</h1>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="glow-card glow-hover px-4 py-2"
          >
            Erneut versuchen
          </button>
          <a href="/home" className="glow-card glow-hover px-4 py-2">Startseite</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FlauschiPandas – Glow‑Directory" },
      { name: "description", content: "FlauschiPandas: Tiere, Kinder, KI‑Tools, Creator‑Tipps und mehr." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap",
      },
    ],
  }),
  loader: async ({ context }) => {
    const [settings, cats] = await Promise.all([
      context.queryClient.fetchQuery(settingsQuery),
      context.queryClient.fetchQuery(directoryQuery),
    ]);
    return { settings, nav: cats.map((c) => ({ id: c.id, slug: c.slug, title: c.title, icon: c.icon })) };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const cookie = useCookieBanner();
  const { settings, nav } = Route.useLoaderData();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader settings={settings} nav={nav} />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
      <SiteFooter settings={settings} onCookies={() => cookie.setOpen(true)} />
      <CookieBanner open={cookie.open} setOpen={cookie.setOpen} />
      <Toaster />
    </QueryClientProvider>
  );
}
