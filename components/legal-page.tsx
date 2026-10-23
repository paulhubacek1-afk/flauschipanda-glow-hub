import { TriangleAlert } from "lucide-react";

import { Breadcrumbs } from "./breadcrumbs";

export function LegalPage({
  title,
  href,
  draftNotice,
  children,
}: {
  title: string;
  href: string;
  draftNotice?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Startseite", href: "/startseite" },
          { name: title, href },
        ]}
      />
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      {draftNotice && (
        <p className="flex items-start gap-2 rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-sm">
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
          Vorlage – vor der Veröffentlichung mit den echten Betreiberangaben, dem Hostinganbieter und allen eingesetzten
          Diensten vervollständigen und rechtlich prüfen lassen.
        </p>
      )}
      <div className="prose-glow">{children}</div>
    </div>
  );
}
