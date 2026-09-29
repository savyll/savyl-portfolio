import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

type ContactRowProps = {
  children: ReactNode;
  label: string;
};

const contactLinkStyles =
  "group inline-flex min-h-11 max-w-full items-center gap-2 text-lg font-medium tracking-[-0.02em] text-muted transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transform-none motion-reduce:transition-none";

function ContactRow({ children, label }: ContactRowProps) {
  return (
    <div className="group grid gap-3 border-b border-border py-6 transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center sm:gap-6 lg:py-7">
      <dt className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-subtle">
        {label}
      </dt>
      <dd className="min-w-0">{children}</dd>
    </div>
  );
}

export function Contact() {
  const { contact, links } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 sm:py-40 lg:py-52"
    >
      <Container>
        <SectionMarker number="08" label="Contact" data-reveal="" />

        <div className="mt-16 grid gap-20 lg:mt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(24rem,0.7fr)] lg:items-start lg:gap-24">
          <div>
            <h2
              id="contact-heading"
              data-reveal=""
              data-reveal-delay="1"
              className="text-[clamp(3.9rem,10vw,9rem)] leading-[0.86] font-medium tracking-[-0.075em] text-balance"
            >
              <span className="block">Let&apos;s</span>
              <span className="mt-2 block">
                connect<span className="text-accent-highlight">.</span>
              </span>
            </h2>
          </div>

          <address className="not-italic" data-reveal="" data-reveal-delay="2">
            <dl className="border-t border-border">
              <ContactRow label="Name">
                <span className="text-lg font-medium tracking-[-0.02em] text-foreground">
                  {contact.name}
                </span>
              </ContactRow>

              <ContactRow label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className={`${contactLinkStyles} [overflow-wrap:anywhere]`}
                >
                  {contact.email}
                </a>
              </ContactRow>

              <ContactRow label="Phone">
                <a href="tel:+919845951608" className={contactLinkStyles}>
                  {contact.phone}
                </a>
              </ContactRow>

              <ContactRow label="LinkedIn">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkStyles}
                >
                  LinkedIn
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </ContactRow>

              <ContactRow label="GitHub">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkStyles}
                >
                  GitHub
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </ContactRow>

              <ContactRow label="Location">
                <span className="text-[1.05rem] leading-7 text-muted">{contact.location}</span>
              </ContactRow>
            </dl>
          </address>
        </div>
      </Container>
    </section>
  );
}
