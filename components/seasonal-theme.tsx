"use client";

import { useEffect, useState } from "react";

import { getSeasonalTheme, type SeasonalTheme } from "@/lib/seasonal-theme";

const DECORATIONS: Record<SeasonalTheme, [string, string, string, string]> = {
  spring: ["🌸", "🦋", "🌼", "🍃"],
  summer: ["☀️", "🌴", "🍉", "🌊"],
  autumn: ["🍂", "🍁", "🌰", "🍄"],
  halloween: ["🦇", "🕸️", "👻", "🎃"],
  winter: ["❄️", "🌨️", "🧣", "⛄"],
  christmas: ["🎄", "⭐", "🎁", "❄️"],
};

const THEME_COLORS: Record<SeasonalTheme, string> = {
  spring: "#328d62",
  summer: "#258eb8",
  autumn: "#bd6b2d",
  halloween: "#a65be5",
  winter: "#568dc9",
  christmas: "#27854c",
};

export function SeasonalTheme({ initialTheme }: { initialTheme: SeasonalTheme }) {
  const [theme, setTheme] = useState<SeasonalTheme>(initialTheme);

  useEffect(() => {
    const syncTheme = () => {
      const nextTheme = getSeasonalTheme();
      document.documentElement.dataset.seasonTheme = nextTheme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[nextTheme]);
      setTheme((current) => (current === nextTheme ? current : nextTheme));
    };

    syncTheme();
    const interval = window.setInterval(syncTheme, 60_000);
    window.addEventListener("focus", syncTheme);
    document.addEventListener("visibilitychange", syncTheme);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("focus", syncTheme);
      document.removeEventListener("visibilitychange", syncTheme);
    };
  }, []);

  return (
    <div className={`seasonal-effects seasonal-effects--${theme}`} aria-hidden="true">
      {DECORATIONS[theme].map((symbol, index) => (
        <span className="seasonal-particle" key={`${theme}-${index}`}>
          {symbol}
        </span>
      ))}
    </div>
  );
}
