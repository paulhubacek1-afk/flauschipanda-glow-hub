"use client";

import { useEffect, useRef, useState } from "react";
import { addBamboo, updateBamboo, useBamboo } from "@/lib/bamboo";
import { PandaFigure } from "@/components/panda-figure";

type GameId = "gacha" | "fang" | "memory" | "reaction";

const GACHA_COOLDOWN = 8 * 60 * 60 * 1000;
const GACHA_PRIZES = [
  { amount: 5, chance: 35, name: "Bambus-Bündel", emoji: "🎋", detail: "Ein kleines Bündel für deine Sammlung." },
  { amount: 8, chance: 30, name: "Flausch-Bonus", emoji: "🐾", detail: "Flauschipanda hat ein paar Bambusstäbe gefunden." },
  { amount: 12, chance: 22, name: "Glücksbeutel", emoji: "🎒", detail: "Ein richtig guter Fund!" },
  { amount: 20, chance: 10, name: "Goldenes Bündel", emoji: "✨", detail: "Ein seltener Bonus aus der Glückskapsel." },
  { amount: 50, chance: 3, name: "Panda-Jackpot", emoji: "👑", detail: "WOW! Der große Panda-Jackpot gehört dir!" },
] as const;

const GAME_CARDS: { id: GameId; emoji: string; title: string; description: string; reward: string }[] = [
  { id: "gacha", emoji: "🎁", title: "Panda-Glückskapsel", description: "Eine kostenlose Überraschung öffnen.", reward: "5 bis 50 Bambus" },
  { id: "fang", emoji: "🎋", title: "Bambus-Fangen", description: "Fange so viele Bambusstäbe wie möglich.", reward: "Bis zu 18 Bambus" },
  { id: "memory", emoji: "🧠", title: "Panda-Memory", description: "Finde alle sechs Panda-Paare.", reward: "Bis zu 16 Bambus" },
  { id: "reaction", emoji: "⚡", title: "Panda-Reaktion", description: "Reagiere schnell, sobald der Panda erscheint.", reward: "Bis zu 12 Bambus" },
];

function randomTarget() {
  return {
    left: 8 + Math.random() * 78,
    top: 8 + Math.random() * 70,
    key: Math.random().toString(36).slice(2),
  };
}

function shuffledDeck() {
  const faces = ["🐼", "🎋", "🍡", "⭐", "🎍", "💚"];
  const cards = [...faces, ...faces].map((emoji, id) => ({ id, emoji }));
  for (let index = cards.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[swapIndex]] = [cards[swapIndex], cards[index]];
  }
  return cards;
}

function formatRemaining(ms: number) {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = seconds % 60;
  return [hours, minutes, rest].map((n) => String(n).padStart(2, "0")).join(":");
}

export function PandaGames() {
  const bamboo = useBamboo();
  const [activeGame, setActiveGame] = useState<GameId>("gacha");
  const [now, setNow] = useState(0);
  const [gachaPrize, setGachaPrize] = useState<(typeof GACHA_PRIZES)[number] | null>(null);
  const [gachaBusy, setGachaBusy] = useState(false);

  const [catchRunning, setCatchRunning] = useState(false);
  const [catchSeconds, setCatchSeconds] = useState(20);
  const [catchScore, setCatchScore] = useState(0);
  const [catchTarget, setCatchTarget] = useState(randomTarget);
  const [catchResult, setCatchResult] = useState<number | null>(null);
  const catchScoreRef = useRef(0);
  const catchStartRef = useRef(0);

  const [deck, setDeck] = useState(shuffledDeck);
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [memoryReward, setMemoryReward] = useState<number | null>(null);
  const [memoryBusy, setMemoryBusy] = useState(false);
  const memoryTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [reactionPhase, setReactionPhase] = useState<"idle" | "waiting" | "go" | "result">("idle");
  const [reactionMessage, setReactionMessage] = useState("Starte und warte auf das Panda-Signal.");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [reactionReward, setReactionReward] = useState<number | null>(null);
  const reactionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reactionStart = useRef(0);

  useEffect(() => {
    setNow(Date.now());
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!catchRunning) return;
    const interval = window.setInterval(() => {
      const left = Math.max(0, 20 - Math.floor((Date.now() - catchStartRef.current) / 1000));
      setCatchSeconds(left);
      if (left === 0) {
        window.clearInterval(interval);
        setCatchRunning(false);
        const reward = Math.min(18, catchScoreRef.current);
        setCatchResult(reward);
        if (reward > 0) addBamboo(reward);
      }
    }, 200);
    return () => window.clearInterval(interval);
  }, [catchRunning]);

  useEffect(
    () => () => {
      if (memoryTimeout.current) clearTimeout(memoryTimeout.current);
      if (reactionTimer.current) clearTimeout(reactionTimer.current);
    },
    [],
  );

  const gachaRemaining = bamboo.gachaNextAt ? Math.max(0, bamboo.gachaNextAt - now) : 0;
  const canDraw = now > 0 && gachaRemaining === 0 && !gachaBusy;

  const drawGacha = () => {
    if (!canDraw) return;
    setGachaBusy(true);
    const roll = Math.random() * 100;
    let total = 0;
    const prize = GACHA_PRIZES.find((item) => {
      total += item.chance;
      return roll < total;
    }) ?? GACHA_PRIZES[0];
    updateBamboo({ gachaNextAt: Date.now() + GACHA_COOLDOWN });
    addBamboo(prize.amount);
    setGachaPrize(prize);
    setNow(Date.now());
    setGachaBusy(false);
  };

  const startCatch = () => {
    catchScoreRef.current = 0;
    catchStartRef.current = Date.now();
    setCatchScore(0);
    setCatchSeconds(20);
    setCatchResult(null);
    setCatchTarget(randomTarget());
    setCatchRunning(true);
  };

  const catchBamboo = () => {
    if (!catchRunning) return;
    catchScoreRef.current += 1;
    setCatchScore(catchScoreRef.current);
    setCatchTarget(randomTarget());
  };

  const startMemory = () => {
    if (memoryTimeout.current) clearTimeout(memoryTimeout.current);
    setDeck(shuffledDeck());
    setSelected([]);
    setMatched([]);
    setMoves(0);
    setMemoryReward(null);
    setMemoryBusy(false);
  };

  const flipMemory = (id: number) => {
    if (memoryBusy || selected.includes(id) || matched.includes(id) || selected.length >= 2) return;
    const nextSelected = [...selected, id];
    setSelected(nextSelected);
    if (nextSelected.length !== 2) return;

    setMoves((value) => value + 1);
    const [first, second] = nextSelected;
    const firstFace = deck.find((card) => card.id === first)?.emoji;
    const secondFace = deck.find((card) => card.id === second)?.emoji;
    if (firstFace === secondFace) {
      const nextMatched = [...matched, first, second];
      setMatched(nextMatched);
      setSelected([]);
      if (nextMatched.length === deck.length) {
        const completedMoves = moves + 1;
        const reward = Math.max(6, Math.min(16, 22 - completedMoves));
        setMemoryReward(reward);
        addBamboo(reward);
      }
      return;
    }

    setMemoryBusy(true);
    memoryTimeout.current = setTimeout(() => {
      setSelected([]);
      setMemoryBusy(false);
    }, 850);
  };

  const startReaction = () => {
    if (reactionTimer.current) clearTimeout(reactionTimer.current);
    setReactionTime(null);
    setReactionReward(null);
    setReactionMessage("Noch nicht klicken … warte auf das grüne Signal!");
    setReactionPhase("waiting");
    reactionTimer.current = setTimeout(() => {
      reactionStart.current = Date.now();
      setReactionPhase("go");
      setReactionMessage("JETZT! Tippe so schnell du kannst!");
    }, 1400 + Math.random() * 2800);
  };

  const hitReaction = () => {
    if (reactionPhase === "waiting") {
      if (reactionTimer.current) clearTimeout(reactionTimer.current);
      setReactionPhase("result");
      setReactionMessage("Zu früh! Warte auf das Signal und versuche es noch einmal.");
      setReactionTime(null);
      setReactionReward(0);
      return;
    }
    if (reactionPhase !== "go") return;
    const elapsed = Date.now() - reactionStart.current;
    const reward = elapsed < 250 ? 12 : elapsed < 400 ? 9 : elapsed < 600 ? 6 : elapsed < 900 ? 3 : 1;
    setReactionTime(elapsed);
    setReactionReward(reward);
    setReactionMessage(elapsed < 250 ? "PANDA-SCHNELL! Das war blitzschnell!" : "Gut reagiert! Noch eine Runde?");
    setReactionPhase("result");
    addBamboo(reward);
  };

  const activeCard = GAME_CARDS.find((game) => game.id === activeGame) ?? GAME_CARDS[0];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10">
      <header className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card/70 p-6 shadow-[var(--glow-sm)] sm:p-9">
        <div className="pointer-events-none absolute -right-5 -top-8 opacity-20">
          <PandaFigure still pose="sit" look={{ skin: "klassisch" }} className="size-48 sm:size-64" />
        </div>
        <div className="relative max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Flauschipandas Spielwelt</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Panda <span className="text-glow">Games</span> 🐼</h1>
          <p className="max-w-xl text-muted-foreground">
            Spiele kleine Panda-Games, knacke Rekorde und sammle Bambus. Alle Spiele sind kostenlos – du setzt keinen Bambus ein und kannst nur gewinnen.
          </p>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-background/70 px-4 py-3">
            <span className="text-2xl">🎋</span>
            <div>
              <p className="text-xs text-muted-foreground">Dein Bambusstand</p>
              <p className="text-2xl font-bold tabular-nums">{bamboo.count.toLocaleString("de-AT")} <span className="text-sm font-medium text-primary">Bambus</span></p>
            </div>
          </div>
        </div>
      </header>

      <section aria-label="Spiele auswählen" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {GAME_CARDS.map((game) => (
          <button
            key={game.id}
            type="button"
            onClick={() => setActiveGame(game.id)}
            aria-pressed={activeGame === game.id}
            className={"rounded-2xl border p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/60 " + (activeGame === game.id ? "border-primary bg-primary/10 shadow-[var(--glow-sm)]" : "border-border bg-card/60")}
          >
            <span className="text-3xl">{game.emoji}</span>
            <span className="mt-2 block font-semibold">{game.title}</span>
            <span className="mt-1 block min-h-10 text-sm text-muted-foreground">{game.description}</span>
            <span className="mt-3 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{game.reward}</span>
          </button>
        ))}
      </section>

      <section className="rounded-3xl border border-primary/25 bg-card/65 p-5 shadow-[var(--glow-sm)] sm:p-8" aria-live="polite">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-purple">Ausgewähltes Spiel</p>
            <h2 className="mt-1 text-2xl font-bold">{activeCard.emoji} {activeCard.title}</h2>
          </div>
          <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">Gratis-Bonus</span>
        </div>

        {activeGame === "gacha" && (
          <div id="glueckskapsel" className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="flex min-h-56 items-center justify-center rounded-2xl bg-[radial-gradient(ellipse_at_center,var(--season-glow-one),transparent_68%)]">
              <div className="text-center">
                <div className={"text-8xl drop-shadow-[0_0_24px_var(--primary)] " + (gachaPrize ? "animate-bounce" : "")}>{gachaPrize?.emoji ?? "🎁"}</div>
                <p className="mt-3 font-semibold">{gachaPrize ? gachaPrize.name : "Was steckt wohl drin?"}</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Eine Glückskapsel ist alle 8 Stunden kostenlos verfügbar. Darin warten zwischen 5 und 50 Bambus. Es gibt keinen Einsatz und keinen Kauf.
              </p>
              {gachaPrize ? (
                <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
                  <p className="text-lg font-bold">{gachaPrize.emoji} +{gachaPrize.amount} Bambus!</p>
                  <p className="mt-1 text-sm text-muted-foreground">{gachaPrize.detail}</p>
                  <p className="mt-2 text-xs text-primary">Dein neuer Stand: {bamboo.count.toLocaleString("de-AT")} Bambus</p>
                </div>
              ) : null}
              <button type="button" disabled={!canDraw} onClick={drawGacha} className="w-full rounded-xl bg-[image:var(--brand-gradient)] px-5 py-3 font-bold text-primary-foreground shadow-[var(--glow-sm)] transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50">
                {gachaRemaining > 0 ? "Nächste Kapsel in " + formatRemaining(gachaRemaining) : "🎁 Kostenlose Glückskapsel öffnen"}
              </button>
              <p className="text-xs text-muted-foreground">Die möglichen Gewinne: 5, 8, 12, 20 oder 50 Bambus. Dein Bonus wird direkt gutgeschrieben.</p>
            </div>
          </div>
        )}

        {activeGame === "fang" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted-foreground">Du hast 20 Sekunden. Tippe auf den Bambus, bevor er woanders hinwandert.</p>
              <div className="flex gap-3 text-sm font-semibold tabular-nums"><span>⏱ {catchSeconds}s</span><span>🎋 {catchScore}</span></div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-primary/20 bg-[radial-gradient(ellipse_at_center,var(--season-glow-one),transparent_70%)] sm:h-80">
              {catchRunning ? (
                <button type="button" onClick={catchBamboo} aria-label="Bambus fangen" className="absolute grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary/15 text-4xl transition-transform hover:scale-125 active:scale-90" style={{ left: catchTarget.left + "%", top: catchTarget.top + "%" }}>🎋</button>
              ) : (
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div><span className="text-5xl">🐼</span><p className="mt-2 font-semibold">{catchResult === null ? "Bereit für die Bambus-Jagd?" : "Runde beendet: +" + catchResult + " Bambus!"}</p></div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">Jeder Fang bringt 1 Bambus. Maximal 18 pro Runde.</p>
              <button type="button" disabled={catchRunning} onClick={startCatch} className="rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground disabled:opacity-50">{catchResult === null ? "🐾 Spiel starten" : "Nochmal spielen"}</button>
            </div>
          </div>
        )}

        {activeGame === "memory" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted-foreground">Finde alle sechs gleichen Panda-Paare. Je weniger Züge, desto größer der Bonus.</p>
              <div className="flex gap-3 text-sm font-semibold tabular-nums"><span>🔄 {moves} Züge</span><span>✅ {matched.length / 2}/6</span></div>
            </div>
            <div className="mx-auto grid max-w-lg grid-cols-4 gap-2 sm:gap-3">
              {deck.map((card) => {
                const visible = selected.includes(card.id) || matched.includes(card.id);
                return (
                  <button key={card.id} type="button" onClick={() => flipMemory(card.id)} disabled={visible || memoryBusy || memoryReward !== null} aria-label={visible ? card.emoji : "Karte umdrehen"} className={"grid aspect-square place-items-center rounded-xl border text-3xl transition-all sm:text-4xl " + (visible ? "border-primary/50 bg-primary/15" : "border-border bg-background/70 hover:border-primary/60 hover:bg-primary/10")}>
                    {visible ? card.emoji : "❔"}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary">{memoryReward === null ? "Belohnung: 6 bis 16 Bambus" : "Geschafft! +" + memoryReward + " Bambus 🎉"}</p>
              <button type="button" onClick={startMemory} className="rounded-xl border border-primary/40 px-5 py-2.5 font-semibold hover:bg-primary/10">Neu mischen</button>
            </div>
          </div>
        )}

        {activeGame === "reaction" && (
          <div className="space-y-4">
            <p className="text-muted-foreground">Starte die Runde. Warte, bis das Feld grün wird und der Panda erscheint. Klicke erst dann!</p>
            <button type="button" onClick={reactionPhase === "waiting" || reactionPhase === "go" ? hitReaction : startReaction} disabled={reactionPhase === "result"} className={"grid min-h-64 w-full place-items-center rounded-2xl border text-center transition-colors " + (reactionPhase === "go" ? "border-emerald-400 bg-emerald-500/20" : "border-border bg-background/70")}>
              <span><span className="block text-7xl">{reactionPhase === "go" ? "🐼" : reactionPhase === "waiting" ? "…" : "⚡"}</span><span className="mt-3 block font-semibold">{reactionPhase === "go" ? "JETZT KLICKEN!" : reactionPhase === "waiting" ? "Warte auf das Signal …" : reactionMessage}</span></span>
            </button>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary">
                {reactionTime !== null ? reactionTime + " ms · +" + reactionReward + " Bambus" : reactionMessage}
              </p>
              <button type="button" onClick={startReaction} disabled={reactionPhase === "waiting" || reactionPhase === "go"} className="rounded-xl bg-primary px-5 py-2.5 font-semibold text-primary-foreground disabled:opacity-50">{reactionPhase === "result" ? "Nochmal spielen" : "Spiel starten"}</button>
            </div>
          </div>
        )}
      </section>

      <section className="grid gap-4 rounded-2xl border border-border bg-background/50 p-5 sm:grid-cols-2 sm:items-center">
        <div><h2 className="font-semibold">🎁 Dein Spiele-Bonus</h2><p className="mt-1 text-sm text-muted-foreground">Jeder Gewinn wird direkt als Bambus gutgeschrieben. Damit wächst Flauschipanda und du kannst weitere Skins freischalten.</p></div>
        <div className="flex items-center gap-3 sm:justify-end"><PandaFigure still pose="sit" look={{ skin: "klassisch" }} className="size-16" /><p className="text-xl font-bold tabular-nums">🎋 {bamboo.count.toLocaleString("de-AT")}</p></div>
      </section>
    </div>
  );
}
