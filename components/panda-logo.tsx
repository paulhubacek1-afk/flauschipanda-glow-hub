import { cn } from "@/lib/utils";

/** Eigenes Panda-Glow-Logo als SVG (keine externen Grafiken nötig). */
export function PandaLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-9 drop-shadow-[0_0_8px_oklch(0.86_0.14_195/0.55)]", className)}
      aria-hidden="true"
    >
      <circle cx="11" cy="12" r="7" fill="oklch(0.2 0.03 235)" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="37" cy="12" r="7" fill="oklch(0.2 0.03 235)" stroke="var(--primary)" strokeWidth="2" />
      <circle cx="24" cy="26" r="17" fill="oklch(0.97 0.01 210)" stroke="var(--primary)" strokeWidth="2" />
      <ellipse cx="17" cy="24" rx="5" ry="6.5" transform="rotate(-20 17 24)" fill="oklch(0.2 0.03 235)" />
      <ellipse cx="31" cy="24" rx="5" ry="6.5" transform="rotate(20 31 24)" fill="oklch(0.2 0.03 235)" />
      <circle cx="17.8" cy="24.5" r="1.8" fill="var(--primary)" />
      <circle cx="30.2" cy="24.5" r="1.8" fill="var(--primary)" />
      <ellipse cx="24" cy="31" rx="3" ry="2.1" fill="oklch(0.2 0.03 235)" />
      <path d="M21 34.5c1.6 1.4 4.4 1.4 6 0" fill="none" stroke="oklch(0.2 0.03 235)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
