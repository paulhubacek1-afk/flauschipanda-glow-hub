"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

import { PandaFigure } from "@/components/panda-figure";
import { hydrateAccountBamboo, unlinkAccountBamboo } from "@/lib/bamboo";

type Account = {
  id: string;
  username: string;
  name: string;
  role: string;
};
type AccountResponse = {
  authenticated?: boolean;
  user?: Account;
  bamboo?: { count: number; [key: string]: unknown };
  message?: string;
};

export function AccountPortal() {
  const [mode, setMode] = useState<"register" | "login">("register");
  const [account, setAccount] = useState<Account | null>(null);
  const [bamboo, setBamboo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  async function refreshAccount() {
    const response = await fetch("/api/konto", { credentials: "same-origin", cache: "no-store" });
    const data = (await response.json().catch(() => ({}))) as AccountResponse;
    if (!response.ok) throw new Error(data.message || "Dein Konto konnte nicht geladen werden.");
    if (data.authenticated && data.user && data.bamboo) {
      setAccount(data.user);
      setBamboo(data.bamboo.count);
      hydrateAccountBamboo(data.bamboo);
    } else {
      setAccount(null);
    }
  }

  useEffect(() => {
    let active = true;
    fetch("/api/konto", { credentials: "same-origin", cache: "no-store" })
      .then(async (response) => {
        const data = (await response.json().catch(() => ({}))) as AccountResponse;
        if (!active) return;
        if (!response.ok) {
          setMessage(
            response.status === 503
              ? "Die Panda-Datenbank ist momentan nicht erreichbar oder hat ihr Nutzungslimit erreicht. Konto-Erstellung und Bamboo-Speicherung sind vorübergehend pausiert."
              : data.message || "Dein Konto konnte nicht geladen werden. Bitte versuche es später erneut.",
          );
          return;
        }
        if (!data.authenticated || !data.user || !data.bamboo) return;
        setAccount(data.user);
        setBamboo(data.bamboo.count);
        hydrateAccountBamboo(data.bamboo);
      })
      .catch(() => {
        if (active) setMessage("Der Kontodienst ist momentan nicht erreichbar. Bitte versuche es später erneut.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  async function signIn(identifier: string, secret: string) {
    const credentials = identifier.includes("@")
      ? { email: identifier.trim(), password: secret }
      : { username: identifier.trim(), password: secret };
    const response = await fetch("/api/users/login", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = (await response.json().catch(() => ({}))) as { errors?: { message?: string }[] };
    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Anmeldung fehlgeschlagen. Prüfe Benutzername und Passwort.");
    }
    await refreshAccount();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      if (mode === "register") {
        const response = await fetch("/api/konto/registrieren", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, name, email, password }),
        });
        const data = (await response.json().catch(() => ({}))) as { message?: string };
        if (!response.ok) {
          throw new Error(
            response.status === 503
              ? "Die Datenbank ist momentan nicht verfügbar. Dein Konto wurde nicht erstellt und es wurden keine Bambus-Punkte gutgeschrieben. Bitte versuche es später erneut."
              : data.message || "Registrierung fehlgeschlagen.",
          );
        }

        try {
          await signIn(email, password);
          setMessage("Willkommen! Dein Konto ist aktiv und 25 Bambus liegen schon in deiner Sammlung. 🎋");
        } catch {
          setMode("login");
          setLogin(email);
          setMessage("Dein Konto wurde erstellt und 25 Bambus wurden gutgeschrieben. Melde dich jetzt bitte an.");
        }
      } else {
        await signIn(login, password);
        setMessage("Schön, dass du wieder da bist! 🐼");
      }
      setPassword("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Das hat leider nicht geklappt.");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    setBusy(true);
    try {
      await fetch("/api/users/logout", { method: "POST", credentials: "same-origin" });
    } finally {
      unlinkAccountBamboo();
      setAccount(null);
      setBamboo(0);
      setMessage("Du wurdest abgemeldet.");
      setBusy(false);
    }
  }

  if (loading) {
    return <div className="rounded-3xl border border-border bg-card/80 p-8 text-center text-muted-foreground">Dein Panda-Konto wird geladen …</div>;
  }

  if (account) {
    return (
      <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-purple/25 bg-card/80 p-6 shadow-[var(--glow-sm)] md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Dein Konto</p>
          <h1 className="mt-2 text-3xl font-bold">Hallo, {account.name || account.username}!</h1>
          <p className="mt-2 text-muted-foreground">Dein Panda-Spielstand wird in deinem Konto gespeichert.</p>
          <div className="mt-7 flex items-center gap-4 rounded-2xl bg-primary/10 p-5">
            <span className="text-4xl" aria-hidden="true">🎋</span>
            <div>
              <p className="text-sm text-muted-foreground">Dein Bambus-Guthaben</p>
              <p className="text-3xl font-bold tabular-nums">{bamboo.toLocaleString("de-AT")} Bambus</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Neue Bambus-Punkte, freigeschaltete Skins und deine Panda-Kombination werden automatisch mit der Datenbank synchronisiert.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/startseite" className="rounded-xl bg-primary px-4 py-2.5 font-semibold text-primary-foreground hover:opacity-90">Weiter stöbern</Link>
            {account.role === "admin" && <Link href="/admin" className="rounded-xl border border-border px-4 py-2.5 font-semibold hover:bg-accent">CMS öffnen</Link>}
            <button type="button" onClick={signOut} disabled={busy} className="rounded-xl border border-border px-4 py-2.5 font-semibold hover:bg-accent disabled:opacity-50">Abmelden</button>
          </div>
          {message && <p className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm" role="status">{message}</p>}
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card/70 p-6 text-center">
          <PandaFigure pose="sit" className="size-44" />
          <h2 className="mt-3 text-xl font-bold">Dein Flauschipanda</h2>
          <p className="mt-1 text-sm text-muted-foreground">Deine Sammlung wartet auf dich.</p>
          <Link href="/startseite" className="mt-4 text-sm font-semibold text-primary hover:underline">Skins im Panda-Menü ansehen</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-purple/25 bg-card/80 p-6 shadow-[var(--glow-sm)] md:p-9">
      <div className="mb-5 text-center">
        <PandaFigure pose="sit" className="mx-auto size-28" />
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">FlauschiPandas</p>
        <h1 className="mt-1 text-3xl font-bold">Dein Panda-Konto</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sammle Bambus, bewahre deine Skins und nutze deinen Spielstand auch auf anderen Geräten.</p>
      </div>

      <div className="mb-6 grid grid-cols-2 rounded-xl bg-muted/60 p-1">
        <button type="button" onClick={() => { setMode("register"); setMessage(""); }} className={mode === "register" ? "rounded-lg bg-background px-3 py-2 text-sm font-semibold shadow" : "rounded-lg px-3 py-2 text-sm text-muted-foreground"}>Konto erstellen</button>
        <button type="button" onClick={() => { setMode("login"); setMessage(""); }} className={mode === "login" ? "rounded-lg bg-background px-3 py-2 text-sm font-semibold shadow" : "rounded-lg px-3 py-2 text-sm text-muted-foreground"}>Anmelden</button>
      </div>

      <form onSubmit={submit} className="space-y-4">
        {mode === "register" ? (
          <>
            <label className="block text-sm font-medium">Benutzername
              <input required minLength={3} maxLength={24} pattern="[a-zA-Z0-9_.-]+" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5" placeholder="dein_panda_name" />
            </label>
            <label className="block text-sm font-medium">Anzeigename
              <input maxLength={60} autoComplete="nickname" value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5" placeholder="Wie sollen wir dich nennen?" />
            </label>
            <label className="block text-sm font-medium">E-Mail-Adresse
              <input required type="email" maxLength={254} autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5" placeholder="du@example.com" />
            </label>
          </>
        ) : (
          <label className="block text-sm font-medium">Benutzername oder E-Mail
            <input required autoComplete="username" value={login} onChange={(event) => setLogin(event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5" placeholder="Benutzername oder E-Mail" />
          </label>
        )}
        <label className="block text-sm font-medium">Passwort
          <input required type="password" minLength={12} autoComplete={mode === "register" ? "new-password" : "current-password"} value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5" placeholder="Mindestens 12 Zeichen" />
        </label>
        {mode === "register" && <p className="text-xs text-muted-foreground">Mindestens 12 Zeichen sowie drei von vier Arten: Kleinbuchstaben, Großbuchstaben, Zahlen und Sonderzeichen. Bei der Registrierung bekommst du 25 Bambus als Startbonus.</p>}
        <button type="submit" disabled={busy} className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-[var(--glow-sm)] disabled:cursor-not-allowed disabled:opacity-60">
          {busy ? "Einen Moment …" : mode === "register" ? "Konto erstellen und 25 Bambus erhalten" : "Anmelden"}
        </button>
      </form>
      {message && <p className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm" role="status">{message}</p>}
      <p className="mt-6 text-center text-xs text-muted-foreground">Dein Konto enthält nur die Angaben, die für Anmeldung und Panda-Spielstand nötig sind. Bitte verwende ein einzigartiges Passwort.</p>
    </div>
  );
}
