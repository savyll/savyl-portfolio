import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./section-heading";

type SectionProps = {
  children: ReactNode;
  className?: string;
  description: string;
  eyebrow: string;
  id: string;
  title: string;
};

export function Section({
  children,
  className,
  description,
  eyebrow,
  id,
  title,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-b border-border py-20 sm:py-24 lg:py-32", className)}
    >
      <Container>
        <SectionHeading
          description={description}
          eyebrow={eyebrow}
          headingId={headingId}
          title={title}
        />
        {children}
      </Container>
    </section>
  );
}
