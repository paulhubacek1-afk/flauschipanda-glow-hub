import Link from "next/link";

import { PandaLogo } from "@/components/panda-logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-5 px-4 py-28 text-center">
      <PandaLogo className="size-16 opacity-80" />
      <p className="font-display text-6xl font-bold text-glow">404</p>
      <h1 className="text-2xl font-semibold">Diese Seite hat sich im Bambuswald verlaufen.</h1>
      <p className="text-muted-foreground">Vielleicht ist sie noch in Vorbereitung oder wurde verschoben.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/home">Zur Startseite</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/seitenstruktur">Alle Seiten</Link>
        </Button>
      </div>
    </div>
  );
}
