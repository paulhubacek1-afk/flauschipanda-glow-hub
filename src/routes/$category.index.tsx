import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { categoryQuery, fileUrl } from "@/lib/cms";

export const Route = createFileRoute("/$category/")({
  loader: async ({ context, params }) => {
    const c = await context.queryClient.ensureQueryData(categoryQuery(params.category));
    if (!c) throw notFound();
    return { title: c.title, description: c.description };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} – FlauschiPandas` : "Kategorie – FlauschiPandas" },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: loaderData?.title ?? "FlauschiPandas" },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const { data: c } = useSuspenseQuery(categoryQuery(category));
  if (!c) return null;
  return (
    <div>
      <Link to="/home" className="glow-link text-sm">← Alle Themen</Link>
      <h2 className="neon-text mt-3 text-3xl font-bold">{c.icon} {c.title}</h2>
      <p className="mt-1 text-muted-foreground">{c.description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.topics.map((t) => (
          <Link key={t.id} to="/$category/$topic" params={{ category: c.slug, topic: t.slug }} className="glow-card glow-hover overflow-hidden">
            {t.image_url ? <img src={t.image_url.startsWith("http") || t.image_url.startsWith("/") ? t.image_url : fileUrl(t.image_url)} alt={t.title} className="h-40 w-full object-cover" loading="lazy" /> : null}
            <div className="p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
