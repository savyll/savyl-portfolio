import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"article">;
type CardTitleProps = ComponentPropsWithoutRef<"h3">;
type CardDescriptionProps = ComponentPropsWithoutRef<"p">;

export function Card({ className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-card border border-border bg-surface p-6 shadow-card transition-[background-color,border-color,box-shadow] duration-200 ease-out hover:border-border-strong hover:bg-surface-raised motion-reduce:transition-none sm:p-8",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-[-0.025em] text-foreground", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn("text-[0.95rem] leading-7 text-muted", className)} {...props} />;
}
