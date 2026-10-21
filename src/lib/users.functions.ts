import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { usernameToEmail } from "@/lib/cms";

type Role = "admin" | "editor";

async function assertAdmin(ctx: { supabase: any; userId: string }) {
  const { data, error } = await ctx.supabase.rpc("has_role", { _user_id: ctx.userId, _role: "admin" });
  if (error || !data) throw new Error("Nur der Hauptadmin darf Benutzer verwalten.");
}

const USERNAME = /^[a-z0-9_.-]{3,32}$/;

export const listUsers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const [{ data: profiles }, { data: roles }] = await Promise.all([
      supabaseAdmin.from("profiles").select("id,username,created_at").order("created_at"),
      supabaseAdmin.from("user_roles").select("user_id,role"),
    ]);
    return (profiles ?? []).map((p) => ({
      ...p,
      role: (roles ?? []).find((r) => r.user_id === p.id)?.role ?? null,
      isSelf: p.id === context.userId,
    }));
  });

export const createUser = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { username: string; password: string; role: Role }) => d)
  .handler(async ({ context, data }) => {
    await assertAdmin(context);
    const username = data.username.trim().toLowerCase();
    if (!USERNAME.test(username)) throw new Error("Benutzername: 3–32 Zeichen, nur a–z, 0–9, _ . -");
    if (data.password.length < 8) throw new Error("Passwort muss mindestens 8 Zeichen haben.");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: usernameToEmail(username),
      password: data.password,
      email_confirm: true,
    });
    if (error || !created.user) throw new Error(error?.message ?? "Fehler beim Anlegen");
    await supabaseAdmin.from("profiles").insert({ id: created.user.id, username });
    await supabaseAdmin.from("user_roles").insert({ user_id: created.user.id, role: data.role });
    return { ok: true };
  });

export const updateUser = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string; password?: string; role?: Role }) => d)
  .handler(async ({ context, data }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    if (data.password) {
      if (data.password.length < 8) throw new Error("Passwort muss mindestens 8 Zeichen haben.");
      const { error } = await supabaseAdmin.auth.admin.updateUserById(data.id, { password: data.password });
      if (error) throw new Error(error.message);
    }
    if (data.role) {
      if (data.id === context.userId) throw new Error("Du kannst deine eigene Rolle nicht ändern.");
      await supabaseAdmin.from("user_roles").delete().eq("user_id", data.id);
      await supabaseAdmin.from("user_roles").insert({ user_id: data.id, role: data.role });
    }
    return { ok: true };
  });

export const deleteUser = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ context, data }) => {
    await assertAdmin(context);
    if (data.id === context.userId) throw new Error("Du kannst dich nicht selbst löschen.");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.admin.deleteUser(data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
