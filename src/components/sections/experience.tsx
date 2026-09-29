import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

export function Experience() {
  const { experience } = siteConfig;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-border py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <SectionMarker number="03" label="Experience" data-reveal="" />

        <div
          className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.72fr)] lg:items-end lg:gap-20 xl:mt-20"
          data-reveal=""
          data-reveal-delay="1"
        >
          <header>
            <h2
              id="experience-heading"
              className="max-w-4xl text-[clamp(2.65rem,7vw,6.6rem)] leading-[0.94] font-medium tracking-[-0.065em] text-balance"
            >
              {experience.organization}
            </h2>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-5 sm:mt-12 sm:gap-x-12">
              <div>
                <dt className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Role
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {experience.role}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Location
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {experience.location}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Date
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground sm:text-base">
                  {experience.date}
                </dd>
              </div>
            </dl>
          </header>

          <p className="border-t border-border pt-7 text-lg leading-8 text-muted sm:text-xl sm:leading-9 lg:mb-1">
            {experience.description}
          </p>
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-32" data-reveal="">
          <div className="flex items-center justify-between gap-6 pb-6">
            <h3 className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">
              Areas of exposure
            </h3>
            <span className="font-mono text-[0.7rem] tracking-[0.14em] text-subtle">
              04 areas
            </span>
          </div>

          <div className="grid border-t border-border md:grid-cols-2">
            {experience.exposure.map((item, index) => (
              <article
                key={item.title}
                className="group border-b border-border py-8 transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none md:odd:border-r md:odd:pr-8 md:even:pl-8 lg:py-10 lg:odd:pr-12 lg:even:pl-12"
              >
                <div className="flex gap-5 sm:gap-7">
                  <span className="pt-1 font-mono text-[0.7rem] tracking-[0.12em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-xl font-medium tracking-[-0.025em] text-foreground sm:text-2xl">
                      {item.title}
                    </h4>
                    <p className="mt-4 max-w-xl text-[1.05rem] leading-7 text-muted transition-colors duration-200 group-hover:text-foreground/78 motion-reduce:transition-none">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-12 grid gap-6 border-b border-border pb-12 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-10 lg:mt-16 lg:pb-16"
          data-reveal=""
        >
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.17em] text-subtle">
            Additional exposure
          </p>
          <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {experience.additionalExposure.map((item) => (
              <li key={item} className="flex gap-4 text-base leading-7 text-muted">
                <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-border-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside
          className="mt-14 border-l-2 border-accent-highlight pl-6 sm:mt-18 sm:pl-9 lg:ml-[12rem] lg:mt-20"
          data-reveal=""
        >
          <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent-highlight">
            Final presentation
          </p>
          <p className="mt-5 max-w-4xl text-[clamp(1.4rem,2.7vw,2.4rem)] leading-[1.25] font-medium tracking-[-0.035em] text-foreground">
            {experience.finalPresentation}
          </p>
        </aside>
      </Container>
    </section>
  );
}
