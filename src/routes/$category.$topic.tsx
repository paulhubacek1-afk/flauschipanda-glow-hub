import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { topicQuery } from "@/lib/cms";
import { Markdown } from "@/components/Markdown";

export const Route = createFileRoute("/$category/$topic")({
  loader: async ({ context, params }) => {
    const t = await context.queryClient.ensureQueryData(topicQuery(params.category, params.topic));
    if (!t) throw notFound();
    return { title: t.title, excerpt: t.excerpt };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} – FlauschiPandas` : "Thema – FlauschiPandas" },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "FlauschiPandas" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: TopicPage,
});

function TopicPage() {
  const { category, topic } = Route.useParams();
  const { data: t } = useSuspenseQuery(topicQuery(category, topic));
  if (!t) return null;
  return (
    <article className="mx-auto max-w-3xl">
      <Link to="/$category" params={{ category }} className="glow-link text-sm">
        ← {t.categories.icon} {t.categories.title}
      </Link>
      <h1 className="neon-text mt-3 text-4xl font-bold">{t.title}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{t.excerpt}</p>
      {t.image_url ? <img src={t.image_url} alt={t.title} className="mt-6 w-full rounded-xl" /> : null}
      <div className="glow-card mt-6 p-6">
        <Markdown text={t.content} />
      </div>
      {t.link_url ? (
        <div className="mt-6 text-center">
          <a href={t.link_url} target="_blank" rel="noopener sponsored" className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow-strong)]">
            {t.link_label || "Jetzt ansehen"}
          </a>
        </div>
      ) : null}
    </article>
  );
}
