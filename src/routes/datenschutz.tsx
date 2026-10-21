import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { settingsQuery } from "@/lib/cms";
import { Markdown } from "@/components/Markdown";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – FlauschiPandas" },
      { name: "description", content: "Wie FlauschiPandas mit deinen Daten und Cookies umgeht." },
      { property: "og:title", content: "Datenschutz – FlauschiPandas" },
      { property: "og:description", content: "Datenschutzerklärung von FlauschiPandas." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(settingsQuery),
  component: () => {
    const { data } = useSuspenseQuery(settingsQuery);
    return <div className="glow-card mx-auto max-w-3xl p-8"><Markdown text={data.datenschutz ?? ""} /></div>;
  },
});
