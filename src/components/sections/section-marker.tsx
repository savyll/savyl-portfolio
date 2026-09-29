import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type SectionMarkerProps = ComponentPropsWithoutRef<"p"> & {
  label: string;
  number: string;
};

export function SectionMarker({
  className,
  label,
  number,
  ...props
}: SectionMarkerProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted",
        className,
      )}
      {...props}
    >
      <span>{number}</span>
      <span aria-hidden="true" className="h-px w-5 bg-border-strong" />
      <span>{label}</span>
    </p>
  );
}
