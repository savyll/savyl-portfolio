import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type PanelProps = ComponentPropsWithoutRef<"div">;

export function Panel({ className, ...props }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-panel border border-border bg-background-elevated p-5 shadow-card sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
