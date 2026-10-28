import type { Payload } from "payload";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Doc = Record<string, any>;

/**
 * Admin-Dashboard: „Zuletzt bearbeitet – auf der Website ansehen“.
 * Neue Kategorien, Unterthemen und Seiten lassen sich direkt von hier öffnen –
 * auch Entwürfe (über den Team-Vorschaumodus /api/vorschau, nur für angemeldete Teammitglieder).
 */
const preview = (path: string) => `/api/vorschau?zu=${encodeURIComponent(path)}`;

const TEAM = new Set(["admin", "redakteur", "autor"]);

export async function RecentOnSite({ payload, user }: { payload?: Payload; user?: { role?: string } | null }) {
  if (!payload || !user?.role || !TEAM.has(user.role)) return null;
  // Wie viele Seiten stehen noch im alten Textformat (werden beim nächsten Start automatisch in den Editor übernommen)?
  const pending = await payload
    .count({ collection: "pages", where: { and: [{ markdown: { exists: true } }, { markdown: { not_equals: "" } }, { textSource: { exists: false } }] } })
    .then((r) => r.totalDocs)
    .catch(() => 0);
  const [cats, groups, pages] = await Promise.all([
    payload.find({ collection: "categories", sort: "-updatedAt", limit: 5, depth: 0, joins: false, pagination: false }),
    payload.find({ collection: "groups", sort: "-updatedAt", limit: 5, depth: 0, joins: false, pagination: false }),
    payload.find({ collection: "pages", sort: "-updatedAt", limit: 8, depth: 0, draft: true, pagination: false }),
  ]);
  const rows = [
    ...(cats.docs as Doc[]).map((d) => ({ kind: "Kategorie", coll: "categories", d, path: `/${d.slug}`, status: "" })),
    ...(groups.docs as Doc[]).map((d) => ({ kind: "Unterthema", coll: "groups", d, path: String(d.path ?? ""), status: "" })),
    ...(pages.docs as Doc[]).map((d) => ({
      kind: "Seite",
      coll: "pages",
      d,
      path: String(d.path ?? ""),
      status: d._status === "published" ? "veröffentlicht" : "Entwurf",
    })),
  ]
    .filter((r) => r.path && r.path !== "/")
    .sort((a, b) => new Date(b.d.updatedAt).getTime() - new Date(a.d.updatedAt).getTime())
    .slice(0, 12);

  if (!rows.length) return null;
  const cell: React.CSSProperties = { padding: "8px 10px", borderBottom: "1px solid var(--theme-elevation-100)", textAlign: "left" };

  return (
    <section style={{ marginTop: 32, marginBottom: 32 }}>
      {pending > 0 && (
        <p style={{ marginBottom: 16, padding: "10px 14px", borderRadius: 8, background: "var(--theme-elevation-50)" }}>
          ✏️ Noch <strong>{pending}</strong> Seiten im alten Textformat – sie werden nach und nach automatisch in den Editor mit Werkzeugleiste
          übernommen. Bis dahin lässt sich der Text dieser Seiten im Feld „Infotext (alte Textfassung)“ bearbeiten.
        </p>
      )}
      <h2 style={{ marginBottom: 6 }}>Zuletzt bearbeitet – auf der Website ansehen</h2>
      <p style={{ marginTop: 0, marginBottom: 14, color: "var(--theme-elevation-600)" }}>
        „Ansehen“ öffnet die Seite in der Team-Vorschau – auch Entwürfe, die noch nicht veröffentlicht sind.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              <th style={cell}>Name</th>
              <th style={cell}>Art</th>
              <th style={cell}>Adresse</th>
              <th style={cell}>Status</th>
              <th style={cell} />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={`${r.coll}-${r.d.id}`}>
                <td style={cell}>
                  <a href={`/admin/collections/${r.coll}/${r.d.id}`}>{String(r.d.title ?? "")}</a>
                </td>
                <td style={cell}>{r.kind}</td>
                <td style={{ ...cell, fontFamily: "monospace", fontSize: 12 }}>{r.path}</td>
                <td style={cell}>{r.status}</td>
                <td style={{ ...cell, textAlign: "right", whiteSpace: "nowrap" }}>
                  <a href={preview(r.path)} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                    Ansehen ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
