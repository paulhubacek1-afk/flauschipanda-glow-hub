import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { settingsQuery } from "@/lib/cms";
import { Markdown } from "@/components/Markdown";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – FlauschiPandas" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von FlauschiPandas." },
      { property: "og:title", content: "Impressum – FlauschiPandas" },
      { property: "og:description", content: "Impressum von FlauschiPandas." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(settingsQuery),
  component: () => {
    const { data } = useSuspenseQuery(settingsQuery);
    return <div className="glow-card mx-auto max-w-3xl p-8"><Markdown text={data.impressum ?? ""} /></div>;
  },
});
