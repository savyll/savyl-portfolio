import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const buttonStyles =
  "group inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border text-sm font-medium tracking-[-0.01em] transition-[background-color,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "border-border-strong bg-surface/80 px-2 text-foreground hover:border-accent-border hover:bg-surface-raised",
  secondary:
    "border-border bg-transparent px-4 text-foreground hover:border-border-strong hover:bg-surface",
  quiet:
    "border-transparent bg-transparent px-1 text-muted hover:text-foreground",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
};

type ExternalLinkButtonProps = ButtonLinkProps;

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles, variants[variant], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return <a className={cn(buttonStyles, variants[variant], className)} {...props} />;
}

export function ExternalLinkButton({
  children,
  rel,
  target,
  variant = "secondary",
  ...props
}: ExternalLinkButtonProps) {
  return (
    <ButtonLink
      rel={rel ?? "noreferrer noopener"}
      target={target ?? "_blank"}
      variant={variant}
      {...props}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transform-none motion-reduce:transition-none"
        strokeWidth={1.75}
      />
      <span className="sr-only">(opens in a new tab)</span>
    </ButtonLink>
  );
}
