"use client";

import { useEffect, useState } from "react";

import { effectiveCustom, setCustom, useBamboo } from "@/lib/bamboo";
import { ACCS, BUILDER_COMBOS, BUILDER_KEY, FURS, HATS, partUnlocked, type BuilderPart, type CustomLook } from "@/lib/skins";
import { cn } from "@/lib/utils";

import { PandaFigure } from "../panda-figure";

/**
 * Panda-Baukasten: Fellfarbe × Kopfbedeckung × Accessoire – über 2.800 Kombinationen.
 * Teile werden mit Bambus, durch Themen-Skins oder in der Saison freigeschaltet.
 */
export function PandaBuilder() {
  const bamboo = useBamboo();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? bamboo.count : 0;
  const visits = mounted ? bamboo.visits : undefined;
  const current: CustomLook = mounted ? effectiveCustom(bamboo) : { fur: "klassisch", hat: "ohne", acc: "ohne" };
  const wearing = mounted && bamboo.skin === BUILDER_KEY;

  const rows: { label: string; field: keyof CustomLook; parts: BuilderPart[] }[] = [
    { label: "Fellfarbe", field: "fur", parts: FURS },
    { label: "Kopfbedeckung", field: "hat", parts: HATS.filter((h) => !h.season || partUnlocked(h, count, visits)) },
    { label: "Accessoire", field: "acc", parts: ACCS },
  ];
  const unlockedCount = rows.reduce((n, r) => n * r.parts.filter((p) => partUnlocked(p, count, visits)).length, 1);

  return (
    <div className="grid gap-8 rounded-3xl border border-purple/25 bg-card/50 p-5 md:p-8 lg:grid-cols-[18rem_1fr]">
      <div className="flex flex-col items-center gap-3 text-center lg:sticky lg:top-24 lg:self-start">
        <p className="text-sm font-medium uppercase tracking-wider text-purple">🧩 Panda-Baukasten</p>
        <h2 id="baukasten-titel" className="text-2xl font-bold">
          Bau deinen eigenen <span className="text-glow">Flauschipanda</span>
        </h2>
        <PandaFigure pose="perch" facing={1} look={{ skin: BUILDER_KEY, custom: current, glow: true }} className="size-48 animate-float" />
        <p className="text-sm text-muted-foreground">
          {BUILDER_COMBOS.toLocaleString("de-AT")} mögliche Kombinationen – davon hast du{" "}
          <strong className="text-foreground">{unlockedCount.toLocaleString("de-AT")}</strong> freigeschaltet.
        </p>
        <p className={cn("rounded-full px-3 py-1 text-xs font-medium", wearing ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground")}>
          {wearing ? "✓ Flauschipanda trägt diese Kombination" : "Tipp ein Teil an – Flauschipanda zieht es sofort an"}
        </p>
      </div>

      <div className="space-y-6">
        {rows.map((row) => (
          <fieldset key={row.field}>
            <legend className="mb-2 text-sm font-semibold">{row.label}</legend>
            <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-6">
              {row.parts.map((part) => {
                const open = partUnlocked(part, count, visits);
                const active = current[row.field] === part.key;
                const preview: CustomLook = { ...current, [row.field]: part.key };
                const lockText = part.skin ? "Themen-Skin" : `ab ${part.at}`;
                return (
                  <li key={part.key}>
                    <button
                      type="button"
                      disabled={!open}
                      onClick={() => setCustom({ [row.field]: part.key })}
                      aria-pressed={active}
                      title={open ? part.name : `${part.name} – ${part.skin ? "freigeschaltet mit dem passenden Themen-Skin" : `ab ${part.at} Bambus`}`}
                      className={cn(
                        "flex w-full flex-col items-center rounded-xl border bg-background/40 p-1.5 text-[11px] leading-tight transition-all active:scale-95",
                        active ? "border-primary bg-primary/10 shadow-[var(--glow-sm)]" : "hover:border-purple/50",
                        !open && "cursor-not-allowed opacity-55",
                      )}
                    >
                      <span className="relative">
                        <PandaFigure still pose="sit" look={{ skin: BUILDER_KEY, custom: preview }} className={cn("size-14", !open && "grayscale")} />
                        {!open && <span className="absolute inset-0 flex items-center justify-center text-lg">🔒</span>}
                      </span>
                      <span className="mt-0.5 w-full truncate font-medium">{part.name}</span>
                      {!open && <span className="text-[10px] text-muted-foreground">{lockText}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
        <p className="text-xs text-muted-foreground">
          Neue Teile schaltest du mit Bambus frei (Seiten entdecken, lesen, bleiben). Themen-Teile wie KI-Antenne oder Safarihelm gibt es
          mit den Themen-Skins – zum Beispiel nach 10 Zoo-Seiten. Hexenhut und Weihnachtsmütze gibt es nur in ihrer Saison.
        </p>
      </div>
    </div>
  );
}
