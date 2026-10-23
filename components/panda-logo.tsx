import Image from "next/image";

import { cn } from "@/lib/utils";

import logo from "@/public/logo.png";

/**
 * Das Panda-Toolbox-Logo (public/logo.png, transparenter Hintergrund).
 * next/image liefert automatisch passend verkleinerte, moderne Bildformate aus.
 *
 * - `sizes`: wie breit das Logo ungefähr angezeigt wird (für die richtige Auflösung)
 * - `alt`: leer lassen, wenn daneben ohnehin „Panda Toolbox“ steht (rein dekorativ)
 */
export function PandaLogo({
  className,
  priority = false,
  sizes = "48px",
  alt = "",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
  alt?: string;
}) {
  return (
    <Image
      src={logo}
      alt={alt}
      priority={priority}
      sizes={sizes}
      placeholder="empty"
      className={cn("size-10 object-contain drop-shadow-[0_0_10px_oklch(0.72_0.19_300/0.45)]", className)}
    />
  );
}
