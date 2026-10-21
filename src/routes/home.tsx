import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { directoryQuery, settingsQuery } from "@/lib/cms";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "FlauschiPandas Themenübersicht – Glow‑Directory" },
      { name: "description", content: "Über 80 Themen: Tiere, Babys & Kinder, KI‑Prompts, Creator‑Tipps, Tools, Sparen und Panda‑Branding." },
      { property: "og:title", content: "FlauschiPandas Themenübersicht" },
      { property: "og:description", content: "Das Glow‑Directory für Tiere, Kinder, KI und Creator." },
    ],
  }),
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(directoryQuery),
      context.queryClient.ensureQueryData(settingsQuery),
    ]);
  },
  component: Home,
});

function Home() {
  const { data: cats } = useSuspenseQuery(directoryQuery);
  const { data: s } = useSuspenseQuery(settingsQuery);
  return (
    <div className="space-y-10">
      <section className="glow-card p-6 text-center">
        <h2 className="text-2xl font-bold">{s.intro_title}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">{s.intro_text}</p>
      </section>

      <section className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
        {cats.map((c) => (
          <div key={c.id} className="mb-5 break-inside-avoid glow-card p-5">
            <Link to="/$category" params={{ category: c.slug }} className="group">
              <h3 className="text-lg font-bold group-hover:neon-text">
                {c.icon} {c.title}
              </h3>
            </Link>
            <p className="mb-3 text-xs text-muted-foreground">{c.description}</p>
            <ul className="space-y-1 text-sm">
              {c.topics.map((t) => (
                <li key={t.id}>
                  <Link to="/$category/$topic" params={{ category: c.slug, topic: t.slug }} className="glow-link">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <PromoBox title={s.donate_title} text={s.donate_text} url={s.donate_url} label={s.donate_label} />
        <PromoBox title={s.affiliate_title} text={s.affiliate_text} url={s.affiliate_url} label={s.affiliate_label} />
      </div>
    </div>
  );
}

function PromoBox({ title, text, url, label }: { title?: string | undefined; text?: string | undefined; url?: string | undefined; label?: string | undefined }) {
  if (!title) return null;
  return (
    <div className="glow-card glow-pulse p-6 text-center">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      {url ? (
        <a href={url} target="_blank" rel="noopener sponsored" className="mt-4 inline-block rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow-strong)]">
          {label || "Mehr"}
        </a>
      ) : null}
    </div>
  );
}
