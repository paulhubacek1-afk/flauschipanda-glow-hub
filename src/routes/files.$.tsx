import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

// Serves uploaded files from the private "media" bucket on the site's own domain.
export const Route = createFileRoute("/files/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const path = decodeURIComponent(params._splat ?? "");
        if (!path || path.includes("..")) return new Response("Not found", { status: 404 });
        const { data, error } = await supabase.storage.from("media").download(path);
        if (error || !data) return new Response("Not found", { status: 404 });
        return new Response(data, {
          headers: {
            "content-type": data.type || "application/octet-stream",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
