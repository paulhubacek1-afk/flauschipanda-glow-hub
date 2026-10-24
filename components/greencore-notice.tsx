import Link from "next/link";
import { Leaf } from "lucide-react";

import type { SiteSettingsData } from "@/lib/cms";
import { cn } from "@/lib/utils";

/** Kurzer Panda-GreenTech-Hinweis – erscheint automatisch auf jeder Landingpage. */
export function GreenTechNotice({ greencore, className }: { greencore: SiteSettingsData["greencore"]; className?: string }) {
  return (
    <aside aria-label={greencore.name} className={cn("flex items-start gap-3 rounded-xl border border-success/30 bg-success/5 p-4 text-sm", className)}>
      <Leaf className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
      <p className="text-foreground/85">
        {greencore.notice}{" "}
        <Link href={greencore.aboutHref} className="text-success underline-offset-2 hover:underline">
          Mehr über {greencore.name}
        </Link>
        {greencore.url && (
          <>
            {" · "}
            <a href={greencore.url} target="_blank" rel="noopener noreferrer" className="font-medium text-success underline-offset-2 hover:underline">
              Jetzt unterstützen
            </a>
          </>
        )}
      </p>
    </aside>
  );
}
