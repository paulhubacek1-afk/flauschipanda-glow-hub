import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { usernameToEmail } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login – FlauschiPandas" },
      { name: "description", content: "Login für Redakteure von FlauschiPandas." },
      { property: "og:title", content: "Login – FlauschiPandas" },
      { property: "og:description", content: "Redaktions‑Login." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const { error } = await supabase.auth.signInWithPassword({ email: usernameToEmail(username), password });
    setBusy(false);
    if (error) return setErr("Benutzername oder Passwort falsch.");
    nav({ to: "/admin" });
  }

  return (
    <form onSubmit={submit} className="glow-card mx-auto max-w-sm space-y-4 p-8">
      <h2 className="neon-text text-2xl font-bold">🐼 Login</h2>
      <div className="space-y-1">
        <Label htmlFor="u">Benutzername</Label>
        <Input id="u" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="p">Passwort</Label>
        <Input id="p" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
      </div>
      {err ? <p className="text-sm text-destructive">{err}</p> : null}
      <Button type="submit" className="w-full" disabled={busy}>{busy ? "…" : "Einloggen"}</Button>
    </form>
  );
}
