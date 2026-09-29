import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

export function About() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-20">
          <SectionMarker
            number="01"
            label="About"
            className="self-start lg:pt-2"
            data-reveal=""
          />

          <div>
            <h2
              id="about-heading"
              data-reveal=""
              data-reveal-delay="1"
              className="max-w-5xl text-[clamp(2rem,4.6vw,4.5rem)] leading-[1.04] font-medium tracking-[-0.052em] text-balance"
            >
              {about.introduction}
            </h2>

            <div
              className="mt-16 grid gap-10 border-t border-border pt-9 lg:mt-20 lg:pt-11 xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] xl:gap-16"
              data-reveal=""
              data-reveal-delay="2"
            >
              <div className="max-w-2xl">
                <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.17em] text-subtle">
                  Current focus
                </p>
                <p className="mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                  {about.currentFocus}
                </p>
              </div>

              <aside className="border-t border-border-strong pt-8 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-10">
                <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.17em] text-subtle">
                  Cybersecurity interest
                </p>
                <p className="mt-4 text-sm font-medium tracking-[0.02em] text-foreground">
                  SOC <span className="mx-2 text-subtle">/</span> GRC
                </p>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-7 text-muted">
                  {about.cybersecurity}
                </p>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
