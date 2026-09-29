import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const tones = {
  accent: "border-accent-border bg-accent-soft text-accent-highlight",
  neutral: "border-border bg-surface-muted text-muted",
} as const;

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: keyof typeof tones;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center gap-2 rounded-full border px-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
