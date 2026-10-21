import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { fileUrl, slugify } from "@/lib/cms";
import { createUser, deleteUser, listUsers, updateUser } from "@/lib/users.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin – FlauschiPandas" },
      { name: "description", content: "Verwaltung der FlauschiPandas‑Website." },
      { property: "og:title", content: "Admin – FlauschiPandas" },
      { property: "og:description", content: "Verwaltungsbereich." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type Role = "admin" | "editor";

function AdminPage() {
  const nav = useNavigate();
  const [state, setState] = useState<{ loading: boolean; role: Role | null; name: string }>({ loading: true, role: null, name: "" });

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return nav({ to: "/login" });
      const [{ data: r }, { data: p }] = await Promise.all([
        supabase.from("user_roles").select("role").eq("user_id", data.user.id).maybeSingle(),
        supabase.from("profiles").select("username").eq("id", data.user.id).maybeSingle(),
      ]);
      setState({ loading: false, role: (r?.role as Role) ?? null, name: p?.username ?? "" });
    })();
  }, [nav]);

  if (state.loading) return <p className="text-center text-muted-foreground">Lade…</p>;
  if (!state.role) return <p className="text-center">Kein Zugriff. <Link to="/login" className="glow-link">Login</Link></p>;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="neon-text text-3xl font-bold">Admin‑Bereich</h2>
          <p className="text-sm text-muted-foreground">Hallo {state.name} · {state.role === "admin" ? "Hauptadmin" : "Redakteur"}</p>
        </div>
        <Button variant="outline" onClick={async () => { await supabase.auth.signOut(); nav({ to: "/home" }); }}>Abmelden</Button>
      </div>
      <Tabs defaultValue="content">
        <TabsList className="flex-wrap">
          <TabsTrigger value="content">📚 Kategorien & Themen</TabsTrigger>
          {state.role === "admin" && <TabsTrigger value="texts">✏️ Texte & Seiten</TabsTrigger>}
          <TabsTrigger value="files">📁 Dateien</TabsTrigger>
          {state.role === "admin" && <TabsTrigger value="users">👥 Benutzer</TabsTrigger>}
        </TabsList>
        <TabsContent value="content"><ContentTab /></TabsContent>
        {state.role === "admin" && <TabsContent value="texts"><TextsTab /></TabsContent>}
        <TabsContent value="files"><FilesTab /></TabsContent>
        {state.role === "admin" && <TabsContent value="users"><UsersTab /></TabsContent>}
      </Tabs>
    </div>
  );
}

/* ---------------- Kategorien & Themen ---------------- */

type Cat = { id: string; slug: string; title: string; icon: string; description: string; sort_order: number; published: boolean };
type Topic = { id?: string; category_id: string; slug: string; title: string; excerpt: string; content: string; image_url: string | null; link_url: string | null; link_label: string | null; sort_order: number; published: boolean };

function useRefreshSite() {
  const qc = useQueryClient();
  return () => qc.invalidateQueries();
}

function ContentTab() {
  const refresh = useRefreshSite();
  const { data: cats, refetch } = useQuery({
    queryKey: ["admin-cats"],
    queryFn: async () => {
      const { data, error } = await supabase.from("categories").select("*,topics(*)").order("sort_order").order("sort_order", { referencedTable: "topics" });
      if (error) throw error;
      return data;
    },
  });
  const [editCat, setEditCat] = useState<Partial<Cat> | null>(null);
  const [editTopic, setEditTopic] = useState<Topic | null>(null);
  const done = () => { refetch(); refresh(); };

  async function saveCat() {
    if (!editCat?.title) return void toast.error("Titel fehlt");
    const row = { title: editCat.title, icon: editCat.icon || "✨", description: editCat.description ?? "", slug: editCat.slug || slugify(editCat.title), published: editCat.published ?? true, sort_order: editCat.sort_order ?? (cats?.length ?? 0) };
    const { error } = editCat.id ? await supabase.from("categories").update(row).eq("id", editCat.id) : await supabase.from("categories").insert(row);
    if (error) return void toast.error(error.message);
    toast.success("Gespeichert");
    setEditCat(null); done();
  }
  async function delCat(c: Cat) {
    if (!confirm(`Kategorie „${c.title}“ inkl. aller Themen löschen?`)) return;
    const { error } = await supabase.from("categories").delete().eq("id", c.id);
    if (error) return void toast.error(error.message);
    done();
  }
  async function move(table: "categories" | "topics", a: { id: string; sort_order: number }, b?: { id: string; sort_order: number }) {
    if (!b) return;
    await supabase.from(table).update({ sort_order: b.sort_order }).eq("id", a.id);
    await supabase.from(table).update({ sort_order: a.sort_order }).eq("id", b.id);
    done();
  }
  async function saveTopic() {
    if (!editTopic?.title) return void toast.error("Titel fehlt");
    const { id, ...rest } = editTopic;
    const row = { ...rest, slug: rest.slug || slugify(rest.title), updated_at: new Date().toISOString() };
    const { error } = id ? await supabase.from("topics").update(row).eq("id", id) : await supabase.from("topics").insert(row);
    if (error) return void toast.error(error.message);
    toast.success("Gespeichert");
    setEditTopic(null); done();
  }
  async function delTopic(t: { id: string; title: string }) {
    if (!confirm(`Thema „${t.title}“ löschen?`)) return;
    await supabase.from("topics").delete().eq("id", t.id);
    done();
  }

  return (
    <div className="mt-4 space-y-4">
      <Button onClick={() => setEditCat({ published: true, icon: "✨" })}>+ Neue Kategorie</Button>
      {(cats ?? []).map((c, ci) => (
        <div key={c.id} className="glow-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold">{c.icon} {c.title} {!c.published && <span className="text-xs text-muted-foreground">(versteckt)</span>}</h3>
            <div className="flex flex-wrap gap-1">
              <Button size="sm" variant="ghost" onClick={() => move("categories", c, cats?.[ci - 1])}>↑</Button>
              <Button size="sm" variant="ghost" onClick={() => move("categories", c, cats?.[ci + 1])}>↓</Button>
              <Button size="sm" variant="outline" onClick={() => setEditCat(c)}>Bearbeiten</Button>
              <Button size="sm" onClick={() => setEditTopic({ category_id: c.id, slug: "", title: "", excerpt: "", content: "", image_url: null, link_url: null, link_label: null, sort_order: c.topics.length, published: true })}>+ Thema</Button>
              <Button size="sm" variant="destructive" onClick={() => delCat(c)}>Löschen</Button>
            </div>
          </div>
          <ul className="mt-3 divide-y divide-border">
            {c.topics.map((t, ti) => (
              <li key={t.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
                <span>{t.title} {!t.published && <span className="text-xs text-muted-foreground">(versteckt)</span>}</span>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" onClick={() => move("topics", t, c.topics[ti - 1])}>↑</Button>
                  <Button size="sm" variant="ghost" onClick={() => move("topics", t, c.topics[ti + 1])}>↓</Button>
                  <Button size="sm" variant="outline" onClick={() => setEditTopic(t)}>Bearbeiten</Button>
                  <Button size="sm" variant="ghost" onClick={() => delTopic(t)}>🗑</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Dialog open={!!editCat} onOpenChange={(o) => !o && setEditCat(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editCat?.id ? "Kategorie bearbeiten" : "Neue Kategorie"}</DialogTitle></DialogHeader>
          {editCat && (
            <div className="space-y-3">
              <Field label="Titel"><Input value={editCat.title ?? ""} onChange={(e) => setEditCat({ ...editCat, title: e.target.value })} /></Field>
              <Field label="Emoji / Icon"><Input value={editCat.icon ?? ""} onChange={(e) => setEditCat({ ...editCat, icon: e.target.value })} /></Field>
              <Field label="Adresse (z. B. tiere → /tiere)"><Input value={editCat.slug ?? ""} placeholder="wird automatisch erstellt" onChange={(e) => setEditCat({ ...editCat, slug: slugify(e.target.value) })} /></Field>
              <Field label="Kurzbeschreibung"><Input value={editCat.description ?? ""} onChange={(e) => setEditCat({ ...editCat, description: e.target.value })} /></Field>
              <label className="flex items-center gap-2"><Switch checked={editCat.published ?? true} onCheckedChange={(v) => setEditCat({ ...editCat, published: v })} /> Sichtbar</label>
              <Button className="w-full" onClick={saveCat}>Speichern</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!editTopic} onOpenChange={(o) => !o && setEditTopic(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          <DialogHeader><DialogTitle>{editTopic?.id ? "Thema bearbeiten" : "Neues Thema"}</DialogTitle></DialogHeader>
          {editTopic && (
            <div className="space-y-3">
              <Field label="Titel"><Input value={editTopic.title} onChange={(e) => setEditTopic({ ...editTopic, title: e.target.value })} /></Field>
              <Field label="Kategorie">
                <select className="h-9 w-full rounded-md border border-input bg-background px-2" value={editTopic.category_id} onChange={(e) => setEditTopic({ ...editTopic, category_id: e.target.value })}>
                  {(cats ?? []).map((c) => <option key={c.id} value={c.id}>{c.icon} {c.title}</option>)}
                </select>
              </Field>
              <Field label="Adresse"><Input value={editTopic.slug} placeholder="wird automatisch erstellt" onChange={(e) => setEditTopic({ ...editTopic, slug: slugify(e.target.value) })} /></Field>
              <Field label="Kurztext"><Input value={editTopic.excerpt} onChange={(e) => setEditTopic({ ...editTopic, excerpt: e.target.value })} /></Field>
              <Field label="Inhalt (## Überschrift, **fett**, - Liste, [Link](https://…))">
                <Textarea rows={12} value={editTopic.content} onChange={(e) => setEditTopic({ ...editTopic, content: e.target.value })} />
              </Field>
              <Field label="Bild">
                <div className="flex gap-2">
                  <Input value={editTopic.image_url ?? ""} placeholder="Bild‑Adresse oder hochladen →" onChange={(e) => setEditTopic({ ...editTopic, image_url: e.target.value || null })} />
                  <UploadButton onUploaded={(url) => setEditTopic({ ...editTopic, image_url: url })} />
                </div>
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Button‑Link (z. B. Affiliate)"><Input value={editTopic.link_url ?? ""} onChange={(e) => setEditTopic({ ...editTopic, link_url: e.target.value || null })} /></Field>
                <Field label="Button‑Text"><Input value={editTopic.link_label ?? ""} onChange={(e) => setEditTopic({ ...editTopic, link_label: e.target.value || null })} /></Field>
              </div>
              <label className="flex items-center gap-2"><Switch checked={editTopic.published} onCheckedChange={(v) => setEditTopic({ ...editTopic, published: v })} /> Sichtbar</label>
              <Button className="w-full" onClick={saveTopic}>Speichern</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="space-y-1"><Label>{label}</Label>{children}</div>;
}

/* ---------------- Texte ---------------- */

const TEXT_FIELDS: { key: string; label: string; long?: boolean }[] = [
  { key: "site_title", label: "Seitentitel (Kopfzeile)" },
  { key: "site_subtitle", label: "Untertitel" },
  { key: "intro_title", label: "Startseite: Überschrift" },
  { key: "intro_text", label: "Startseite: Einleitung", long: true },
  { key: "donate_title", label: "Spenden‑Box: Titel" },
  { key: "donate_text", label: "Spenden‑Box: Text", long: true },
  { key: "donate_url", label: "Spenden‑Box: Link (z. B. PayPal)" },
  { key: "donate_label", label: "Spenden‑Box: Button‑Text" },
  { key: "affiliate_title", label: "Affiliate‑Box: Titel" },
  { key: "affiliate_text", label: "Affiliate‑Box: Text", long: true },
  { key: "affiliate_url", label: "Affiliate‑Box: Link" },
  { key: "affiliate_label", label: "Affiliate‑Box: Button‑Text" },
  { key: "footer_text", label: "Fußzeile" },
  { key: "impressum", label: "Impressum", long: true },
  { key: "datenschutz", label: "Datenschutzerklärung", long: true },
];

function TextsTab() {
  const refresh = useRefreshSite();
  const [vals, setVals] = useState<Record<string, string> | null>(null);
  useEffect(() => {
    supabase.from("site_settings").select("key,value").then(({ data }) => setVals(Object.fromEntries((data ?? []).map((r) => [r.key, r.value]))));
  }, []);
  if (!vals) return <p className="mt-4 text-muted-foreground">Lade…</p>;
  async function save() {
    const rows = TEXT_FIELDS.map((f) => ({ key: f.key, value: vals![f.key] ?? "" }));
    const { error } = await supabase.from("site_settings").upsert(rows);
    if (error) return void toast.error(error.message);
    toast.success("Texte gespeichert");
    refresh();
  }
  return (
    <div className="glow-card mt-4 space-y-4 p-5">
      {TEXT_FIELDS.map((f) => (
        <Field key={f.key} label={f.label}>
          {f.long ? (
            <Textarea rows={f.key === "impressum" || f.key === "datenschutz" ? 14 : 3} value={vals[f.key] ?? ""} onChange={(e) => setVals({ ...vals, [f.key]: e.target.value })} />
          ) : (
            <Input value={vals[f.key] ?? ""} onChange={(e) => setVals({ ...vals, [f.key]: e.target.value })} />
          )}
        </Field>
      ))}
      <Button onClick={save} className="w-full">Alle Texte speichern</Button>
    </div>
  );
}

/* ---------------- Dateien ---------------- */

async function uploadFile(file: File) {
  const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const { error } = await supabase.storage.from("media").upload(path, file, { contentType: file.type });
  if (error) throw error;
  return fileUrl(path);
}

function UploadButton({ onUploaded }: { onUploaded: (url: string) => void }) {
  const [busy, setBusy] = useState(false);
  return (
    <label className="inline-flex cursor-pointer items-center rounded-md border border-input px-3 text-sm whitespace-nowrap hover:bg-accent">
      {busy ? "…" : "Hochladen"}
      <input type="file" accept="image/*" className="hidden" onChange={async (e) => {
        const f = e.target.files?.[0]; if (!f) return;
        setBusy(true);
        try { onUploaded(await uploadFile(f)); toast.success("Hochgeladen"); } catch (err: any) { toast.error(err.message); }
        setBusy(false);
      }} />
    </label>
  );
}

function FilesTab() {
  const { data: files, refetch } = useQuery({
    queryKey: ["admin-files"],
    queryFn: async () => {
      const { data, error } = await supabase.storage.from("media").list("", { limit: 1000, sortBy: { column: "created_at", order: "desc" } });
      if (error) throw error;
      return (data ?? []).filter((f) => f.id);
    },
  });
  const [busy, setBusy] = useState(false);
  return (
    <div className="mt-4 space-y-4">
      <label className="glow-card glow-hover flex cursor-pointer flex-col items-center gap-1 border-dashed p-8 text-center">
        <span className="text-3xl">⬆️</span>
        <span className="font-semibold">{busy ? "Lade hoch…" : "Dateien hier auswählen"}</span>
        <span className="text-xs text-muted-foreground">Bilder, PDFs, Malvorlagen, Musik… (max. 50 MB)</span>
        <input type="file" multiple className="hidden" onChange={async (e) => {
          const list = Array.from(e.target.files ?? []); if (!list.length) return;
          setBusy(true);
          for (const f of list) { try { await uploadFile(f); } catch (err: any) { toast.error(err.message); } }
          setBusy(false); toast.success("Fertig"); refetch();
        }} />
      </label>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(files ?? []).map((f) => {
          const url = fileUrl(f.name);
          const isImg = /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(f.name);
          return (
            <div key={f.name} className="glow-card overflow-hidden">
              {isImg ? <img src={url} alt={f.name} className="h-32 w-full object-cover" loading="lazy" /> : <div className="flex h-32 items-center justify-center text-4xl">📄</div>}
              <div className="space-y-2 p-3">
                <p className="truncate text-xs" title={f.name}>{f.name}</p>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={() => { navigator.clipboard.writeText(window.location.origin + url); toast.success("Link kopiert"); }}>Link kopieren</Button>
                  <Button size="sm" variant="ghost" onClick={async () => {
                    if (!confirm("Datei löschen?")) return;
                    const { error } = await supabase.storage.from("media").remove([f.name]);
                    if (error) toast.error(error.message); else refetch();
                  }}>🗑</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {files?.length === 0 && <p className="text-center text-muted-foreground">Noch keine Dateien.</p>}
    </div>
  );
}

/* ---------------- Benutzer ---------------- */

function UsersTab() {
  const list = useServerFn(listUsers);
  const create = useServerFn(createUser);
  const update = useServerFn(updateUser);
  const remove = useServerFn(deleteUser);
  const { data: users, refetch } = useQuery({ queryKey: ["admin-users"], queryFn: () => list() });
  const [form, setForm] = useState({ username: "", password: "", role: "editor" as Role });

  const run = async (p: Promise<unknown>, msg: string) => {
    try { await p; toast.success(msg); refetch(); } catch (e: any) { toast.error(e.message); }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="glow-card grid gap-3 p-5 sm:grid-cols-4 sm:items-end">
        <Field label="Benutzername"><Input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} /></Field>
        <Field label="Passwort (min. 8)"><Input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></Field>
        <Field label="Rolle">
          <select className="h-9 w-full rounded-md border border-input bg-background px-2" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value as Role })}>
            <option value="editor">Redakteur (Inhalte & Dateien)</option>
            <option value="admin">Admin (alles)</option>
          </select>
        </Field>
        <Button onClick={() => run(create({ data: form }).then(() => setForm({ username: "", password: "", role: "editor" })), "Benutzer angelegt")}>+ Anlegen</Button>
      </div>
      <div className="glow-card divide-y divide-border">
        {(users ?? []).map((u) => (
          <div key={u.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
            <div>
              <p className="font-semibold">{u.username} {u.isSelf && <span className="text-xs text-muted-foreground">(du)</span>}</p>
              <p className="text-xs text-muted-foreground">{u.role === "admin" ? "Admin" : u.role === "editor" ? "Redakteur" : "keine Rolle"}</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {!u.isSelf && (
                <Button size="sm" variant="outline" onClick={() => run(update({ data: { id: u.id, role: u.role === "admin" ? "editor" : "admin" } }), "Rolle geändert")}>
                  Zu {u.role === "admin" ? "Redakteur" : "Admin"}
                </Button>
              )}
              <Button size="sm" variant="outline" onClick={() => {
                const pw = prompt("Neues Passwort (min. 8 Zeichen):");
                if (pw) run(update({ data: { id: u.id, password: pw } }), "Passwort geändert");
              }}>Passwort</Button>
              {!u.isSelf && (
                <Button size="sm" variant="destructive" onClick={() => confirm(`${u.username} löschen?`) && run(remove({ data: { id: u.id } }), "Gelöscht")}>Löschen</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
