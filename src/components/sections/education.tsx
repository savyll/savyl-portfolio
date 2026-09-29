import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

export function Education() {
  const { education } = siteConfig;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-border py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <SectionMarker number="05" label="Education" data-reveal="" />

        <div
          className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.75fr)] lg:items-start lg:gap-20 xl:mt-20"
          data-reveal=""
          data-reveal-delay="1"
        >
          <h2
            id="education-heading"
            className="max-w-4xl text-[clamp(2.8rem,7vw,6.8rem)] leading-[0.92] font-medium tracking-[-0.065em] text-balance"
          >
            {education.institution}
          </h2>

          <div className="border-t border-border pt-9 sm:pt-10">
            <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.17em] text-subtle">
              Programme
            </p>
            <p className="mt-6 max-w-2xl text-[clamp(1.5rem,5vw,1.95rem)] leading-[1.18] font-medium tracking-[-0.035em] text-foreground">
              {education.degree}
            </p>

            <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:mt-12 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-subtle">
                  Timeline
                </dt>
                <dd className="mt-3 text-base font-medium text-foreground">
                  {education.timeline}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-subtle">
                  Location
                </dt>
                <dd className="mt-3 text-base leading-7 font-medium text-foreground">
                  {education.location}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
