import type { Metadata } from "next";

import { AccountPortal } from "@/components/account-portal";

export const metadata: Metadata = {
  title: "Mein Panda-Konto",
  description: "Melde dich an, verwalte deine Panda-Sammlung und bewahre deinen Bambus-Spielstand auf.",
};

export default function KontoPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16">
      <AccountPortal />
    </section>
  );
}
