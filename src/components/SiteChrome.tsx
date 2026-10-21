import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Settings } from "@/lib/cms";
import { Button } from "@/components/ui/button";

type Nav = { id: string; slug: string; title: string; icon: string }[];

export function SiteHeader({ settings: s, nav: cats }: { settings: Settings; nav: Nav }) {
  return (
    <header className="border-b border-border bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center">
        <Link to="/home" className="inline-block">
          <h1 className="neon-text text-3xl font-bold md:text-4xl">{s?.site_title ?? "🐼 FlauschiPandas"}</h1>
        </Link>
        <p className="mt-1 text-sm tracking-wide text-muted-foreground">{s?.site_subtitle}</p>
        <nav className="mt-5 flex flex-wrap justify-center gap-2">
          <Link to="/home" className="glow-card glow-hover px-3 py-1.5 text-sm font-semibold" activeProps={{ className: "bg-accent" }}>
            Start
          </Link>
          {(cats ?? []).map((c) => (
            <Link
              key={c.id}
              to="/$category"
              params={{ category: c.slug }}
              className="glow-card glow-hover px-3 py-1.5 text-sm font-semibold"
              activeProps={{ className: "bg-accent" }}
            >
              {c.icon} {c.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ settings: s, onCookies }: { settings: Settings; onCookies: () => void }) {
  return (
    <footer className="mt-16 border-t border-border bg-background/80 py-8 text-center text-sm text-muted-foreground">
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/impressum" className="glow-link">Impressum</Link>
        <Link to="/datenschutz" className="glow-link">Datenschutz</Link>
        <button onClick={onCookies} className="glow-link">Cookie‑Einstellungen</button>
        <Link to="/login" className="glow-link">Login</Link>
      </div>
      <p className="mt-3">{s?.footer_text}</p>
    </footer>
  );
}

const KEY = "fp_cookie_consent";

export function useCookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);
  return { open, setOpen };
}

export function CookieBanner({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  if (!open) return null;
  const choose = (v: "all" | "necessary") => {
    localStorage.setItem(KEY, v);
    setOpen(false);
  };
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl glow-card bg-card p-5 glow-pulse">
      <h3 className="text-lg font-semibold">🍪 Cookies</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Wir nutzen technisch notwendige Speicherungen. Optionale Cookies (Statistik, Affiliate) nur mit deiner
        Zustimmung. Mehr in der <Link to="/datenschutz" className="glow-link">Datenschutzerklärung</Link>.
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <Button variant="outline" onClick={() => choose("necessary")}>Nur notwendige</Button>
        <Button onClick={() => choose("all")}>Alle akzeptieren</Button>
      </div>
    </div>
  );
}
