"use client";

import { useEffect, useState, type CSSProperties } from "react";

import { getSeasonalTheme, type SeasonalTheme } from "@/lib/seasonal-theme";

const PARTICLE_SYMBOLS: Record<SeasonalTheme, string[]> = {
  spring: ["🌸", "🌼", "🍃", "🦋", "✿"],
  summer: ["☀️", "✦", "🌺", "·", "🌊"],
  autumn: ["🍂", "🍁", "🍃", "🌰"],
  halloween: ["🦇", "✦", "🕸️", "🎃", "·"],
  winter: ["❄", "❅", "❆", "·", "✧"],
  christmas: ["❄", "❅", "❆", "✧", "·", "✨"],
};

const PARTICLE_COUNTS: Record<SeasonalTheme, number> = {
  spring: 28,
  summer: 24,
  autumn: 34,
  halloween: 28,
  winter: 46,
  christmas: 58,
};

const THEME_COLORS: Record<SeasonalTheme, string> = {
  spring: "#328d62",
  summer: "#258eb8",
  autumn: "#bd6b2d",
  halloween: "#a65be5",
  winter: "#568dc9",
  christmas: "#27854c",
};

function particleStyle(index: number): CSSProperties {
  return {
    "--particle-left": ((index * 47 + 11) % 100) + "%",
    "--fall-duration": 11 + ((index * 5) % 13) + "s",
    "--fall-delay": "-" + ((index * 7) % 24) + "s",
    "--fall-drift": ((index * 29) % 181 - 90) + "px",
    "--particle-size": 0.7 + ((index * 11) % 16) / 10 + "rem",
  } as CSSProperties;
}

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

  const symbols = PARTICLE_SYMBOLS[theme];
  const particles = Array.from({ length: PARTICLE_COUNTS[theme] }, (_, index) => ({
    symbol: symbols[index % symbols.length],
    index,
  }));

  return (
    <div className={"seasonal-effects seasonal-effects--" + theme} aria-hidden="true">
      <div className="seasonal-atmosphere" />
      {theme === "christmas" && (
        <div className="seasonal-garland">
          {Array.from({ length: 22 }, (_, index) => (
            <span
              className="seasonal-bulb"
              key={index}
              style={{ "--light-delay": "-" + ((index % 7) * 0.23) + "s" } as CSSProperties}
            />
          ))}
        </div>
      )}
      <div className={"seasonal-particles seasonal-particles--" + theme}>
        {particles.map(({ symbol, index }) => (
          <span
            className="seasonal-particle"
            key={theme + "-" + index}
            style={particleStyle(index)}
          >
            {symbol}
          </span>
        ))}
      </div>
      {theme === "halloween" && <div className="seasonal-fog" />}
    </div>
  );
}
