import Link from "next/link";
import { Leaf } from "lucide-react";

import { donationConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Kurzer Panda-GreenCore-Hinweis – erscheint automatisch auf jeder Landingpage. */
export function GreenCoreNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label={donationConfig.name}
      className={cn("flex items-start gap-3 rounded-xl border border-success/30 bg-success/5 p-4 text-sm", className)}
    >
      <Leaf className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
      <p className="text-foreground/85">
        {donationConfig.notice}{" "}
        <Link href={donationConfig.aboutHref} className="text-success underline-offset-2 hover:underline">
          Mehr über {donationConfig.name}
        </Link>
      </p>
    </aside>
  );
}
