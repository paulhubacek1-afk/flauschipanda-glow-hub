"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

/**
 * Animierter Hintergrund für „Wissenschaft & Astrologie“:
 * funkelnde Sterne, Sternschnuppen, schwebende Atome und langsam treibende Planeten.
 * Liegt hinter dem Inhalt, fängt keine Klicks ab und bleibt bei „Bewegung reduzieren“ ruhig.
 */
export const SCIENCE_SLUG = "wissenschaft-astrologie";

function seeded(n: number) {
  // kleine deterministische Zufallsfolge, damit Server und Browser gleich rendern
  let x = n * 9301 + 49297;
  return () => {
    x = (x * 9301 + 49297) % 233280;
    return x / 233280;
  };
}

function Atom({ size, color }: { size: number; color: string }) {
  return (
    <svg viewBox="-50 -50 100 100" width={size} height={size} className="overflow-visible">
      <circle r="7" fill={color} />
      <circle r="11" fill={color} opacity="0.25" />
      {[0, 60, 120].map((a, i) => (
        <g key={a} transform={`rotate(${a})`}>
          <ellipse rx="42" ry="14" fill="none" stroke={color} strokeWidth="1.6" opacity="0.7" />
          <circle r="3.6" fill="#fff" className="science-electron" style={{ animationDelay: `${-i * 0.9}s` }}>
            <animateMotion dur={`${2.6 + i * 0.5}s`} repeatCount="indefinite" path="M42,0 A42,14 0 1,1 -42,0 A42,14 0 1,1 42,0" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function Saturn({ size }: { size: number }) {
  return (
    <svg viewBox="-60 -40 120 80" width={size} height={size * 0.66} className="overflow-visible">
      <defs>
        <radialGradient id="sat-g" cx="0.35" cy="0.35">
          <stop offset="0" stopColor="#ffe6a8" />
          <stop offset="1" stopColor="#c98f45" />
        </radialGradient>
      </defs>
      <ellipse rx="56" ry="13" fill="none" stroke="#e8c98a" strokeWidth="5" opacity="0.55" transform="rotate(-18)" />
      <circle r="24" fill="url(#sat-g)" />
      <path d="M-56 0 A56 13 0 0 0 56 0" fill="none" stroke="#e8c98a" strokeWidth="5" opacity="0.8" transform="rotate(-18)" />
    </svg>
  );
}

function Planet({ size, from, to }: { size: number; from: string; to: string }) {
  const id = `pl-${from.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg viewBox="-30 -30 60 60" width={size} height={size}>
      <defs>
        <radialGradient id={id} cx="0.35" cy="0.35">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </radialGradient>
      </defs>
      <circle r="28" fill={`url(#${id})`} />
    </svg>
  );
}

export function ScienceSky() {
  const pathname = usePathname() ?? "";
  const active = pathname.split("/")[1] === SCIENCE_SLUG;
  const [reduced, setReduced] = useState(false);
  const [shooting, setShooting] = useState<{ id: number; top: number; left: number; angle: number }[]>([]);

  const stars = useMemo(() => {
    const r = seeded(7);
    return Array.from({ length: 70 }, (_, i) => ({ i, top: r() * 100, left: r() * 100, size: 1 + r() * 2.2, delay: r() * 5, dur: 2.5 + r() * 4 }));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  // Sternschnuppen in zufälligen Abständen
  useEffect(() => {
    if (!active || reduced) return;
    let t: number;
    const spawn = () => {
      const id = Date.now();
      setShooting((s) => [...s.slice(-2), { id, top: Math.random() * 45, left: 20 + Math.random() * 70, angle: 20 + Math.random() * 20 }]);
      window.setTimeout(() => setShooting((s) => s.filter((x) => x.id !== id)), 1600);
      t = window.setTimeout(spawn, 2500 + Math.random() * 5000);
    };
    t = window.setTimeout(spawn, 1200);
    return () => window.clearTimeout(t);
  }, [active, reduced]);

  if (!active) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Sterne */}
      {stars.map((s) => (
        <span
          key={s.i}
          className="science-star absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `-${s.delay}s`, animationDuration: `${s.dur}s` }}
        />
      ))}

      {/* Sternschnuppen */}
      {shooting.map((s) => (
        <span key={s.id} className="science-meteor absolute" style={{ top: `${s.top}%`, left: `${s.left}%`, rotate: `${180 - s.angle}deg` }} />
      ))}

      {/* Planeten */}
      <div className={`absolute right-[4%] top-[18%] opacity-40 ${reduced ? "" : "science-float"}`} style={{ animationDuration: "22s" }}>
        <Saturn size={150} />
      </div>
      <div className={`absolute bottom-[12%] left-[3%] opacity-30 ${reduced ? "" : "science-float"}`} style={{ animationDuration: "28s", animationDelay: "-6s" }}>
        <Planet size={90} from="#9be7ff" to="#2563eb" />
      </div>
      <div className={`absolute left-[42%] top-[6%] opacity-25 ${reduced ? "" : "science-float"}`} style={{ animationDuration: "35s", animationDelay: "-12s" }}>
        <Planet size={38} from="#ffb199" to="#c2410c" />
      </div>

      {/* Fliegende Atome */}
      {!reduced &&
        [
          { top: "62%", dur: "38s", delay: "0s", size: 70, color: "oklch(0.86 0.14 195)" },
          { top: "30%", dur: "46s", delay: "-18s", size: 54, color: "oklch(0.72 0.19 300)" },
          { top: "80%", dur: "52s", delay: "-30s", size: 44, color: "oklch(0.85 0.15 140)" },
        ].map((a, i) => (
          <div key={i} className="science-atom absolute opacity-50" style={{ top: a.top, animationDuration: a.dur, animationDelay: a.delay }}>
            <Atom size={a.size} color={a.color} />
          </div>
        ))}
    </div>
  );
}
