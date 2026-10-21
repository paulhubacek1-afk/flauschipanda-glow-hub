import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const SETTING_KEYS = ["site_title","site_subtitle","intro_title","intro_text","donate_title","donate_text","donate_url","donate_label","affiliate_title","affiliate_text","affiliate_url","affiliate_label","footer_text","impressum","datenschutz"] as const;
export type Settings = Partial<Record<(typeof SETTING_KEYS)[number], string>>;

export const settingsQuery = queryOptions({
  queryKey: ["settings"],
  queryFn: async (): Promise<Settings> => {
    const { data, error } = await supabase.from("site_settings").select("key,value");
    if (error) throw error;
    return Object.fromEntries((data ?? []).map((r) => [r.key, r.value])) as Settings;
  },
});

export const directoryQuery = queryOptions({
  queryKey: ["directory"],
  queryFn: async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("id,slug,title,icon,description,sort_order,published,topics(id,slug,title,excerpt,sort_order,published)")
      .order("sort_order")
      .order("sort_order", { referencedTable: "topics" });
    if (error) throw error;
    return data ?? [];
  },
});

export const categoryQuery = (slug: string) =>
  queryOptions({
    queryKey: ["category", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*,topics(id,slug,title,excerpt,image_url,sort_order)")
        .eq("slug", slug)
        .order("sort_order", { referencedTable: "topics" })
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

export const topicQuery = (category: string, topic: string) =>
  queryOptions({
    queryKey: ["topic", category, topic],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("topics")
        .select("*,categories!inner(slug,title,icon)")
        .eq("slug", topic)
        .eq("categories.slug", category)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/‑/g, "-")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Login uses usernames; internally each username maps to a fixed pseudo e-mail. */
export function usernameToEmail(username: string) {
  return `${username.trim().toLowerCase()}@users.flauschipandas.app`;
}

export function fileUrl(path: string) {
  return `/files/${path.split("/").map(encodeURIComponent).join("/")}`;
}
