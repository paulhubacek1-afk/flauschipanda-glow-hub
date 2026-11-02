"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { updateBamboo, useBamboo } from "@/lib/bamboo";

const OFFER_COOLDOWN = 8 * 60 * 60 * 1000;

export function PandaGachaReminder() {
  const bamboo = useBamboo();
  const [visible, setVisible] = useState(false);
  const activeSeconds = useRef(0);
  const lastActivity = useRef(Date.now());
  const shownThisVisit = useRef(false);

  useEffect(() => {
    const markActivity = () => {
      lastActivity.current = Date.now();
    };
    window.addEventListener("pointerdown", markActivity, { passive: true });
    window.addEventListener("keydown", markActivity);
    window.addEventListener("scroll", markActivity, { passive: true });

    const interval = window.setInterval(() => {
      if (document.hidden || Date.now() - lastActivity.current > 45_000) return;
      activeSeconds.current += 10;
      if (shownThisVisit.current || activeSeconds.current < 120) return;

      const now = Date.now();
      const drawReady = !bamboo.gachaNextAt || now >= bamboo.gachaNextAt;
      const offerReady = !bamboo.gachaLastOfferAt || now - bamboo.gachaLastOfferAt >= OFFER_COOLDOWN;
      if (!drawReady || !offerReady) return;

      shownThisVisit.current = true;
      updateBamboo({ gachaLastOfferAt: now });
      setVisible(true);
    }, 10_000);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("pointerdown", markActivity);
      window.removeEventListener("keydown", markActivity);
      window.removeEventListener("scroll", markActivity);
    };
  }, [bamboo.gachaNextAt, bamboo.gachaLastOfferAt]);

  if (!visible) return null;

  return (
    <aside role="status" aria-live="polite" className="fixed bottom-4 left-4 z-50 w-[min(22rem,calc(100vw-2rem))] animate-bubble-in rounded-2xl border border-primary/40 bg-card/95 p-4 shadow-[0_18px_48px_-12px_oklch(0_0_0/0.7),var(--glow-md)] backdrop-blur-xl">
      <button type="button" onClick={() => setVisible(false)} aria-label="Glückskapsel-Hinweis schließen" className="absolute right-2 top-2 rounded-md px-2 py-1 text-muted-foreground hover:bg-accent">×</button>
      <div className="flex items-start gap-3 pr-4">
        <span className="text-4xl" aria-hidden="true">🎁</span>
        <div>
          <p className="font-semibold">Panda-Glückskapsel ist da!</p>
          <p className="mt-1 text-sm text-muted-foreground">Flauschipanda hat eine kostenlose Überraschung für dich. Vielleicht wartet ein großer Bambus-Bonus!</p>
          <div className="mt-3 flex items-center gap-2">
            <Link href="/spiele#glueckskapsel" onClick={() => setVisible(false)} className="rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">Jetzt öffnen</Link>
            <button type="button" onClick={() => setVisible(false)} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent">Später</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
