import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { SectionMarker } from "./section-marker";

const desktopStagePlacement = [
  "xl:col-start-1 xl:row-start-1",
  "xl:col-start-2 xl:row-start-1 xl:translate-y-12",
  "xl:col-start-3 xl:row-start-1 xl:translate-y-24",
  "xl:col-start-3 xl:row-start-2",
  "xl:col-start-2 xl:row-start-2 xl:translate-y-12",
  "xl:col-start-1 xl:row-start-2 xl:translate-y-24",
] as const;

const desktopConnectorStyles = [
  "left-full top-[4.75rem] h-px w-[3.9rem] origin-left rotate-[50deg]",
  "left-full top-[4.75rem] h-px w-[3.9rem] origin-left rotate-[50deg]",
  "right-0 top-[4.75rem] h-[16.8125rem] w-px",
  "right-full top-[4.75rem] h-px w-[3.9rem] origin-right -rotate-[50deg]",
  "right-full top-[4.75rem] h-px w-[3.9rem] origin-right -rotate-[50deg]",
] as const;

export function Career() {
  const { career } = siteConfig;

  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="border-b border-border py-28 sm:py-36 lg:py-48"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-20">
          <SectionMarker
            number="07"
            label="Career"
            className="self-start lg:pt-2"
            data-reveal=""
          />

          <div>
            <h2
              id="career-heading"
              data-reveal=""
              data-reveal-delay="1"
              className="text-[clamp(3rem,7vw,6.8rem)] leading-[0.92] font-medium tracking-[-0.067em] text-balance"
            >
              Career Path
            </h2>

            <ol
              className="relative mt-20 before:absolute before:top-1 before:bottom-3 before:left-[1.15rem] before:w-px before:bg-border-strong before:content-[''] sm:mt-24 xl:grid xl:grid-cols-3 xl:gap-x-10 xl:gap-y-32 xl:before:hidden"
              data-reveal=""
              data-reveal-delay="2"
            >
              {career.stages.map((stage, index) => (
                <li
                  key={stage.title}
                  className={cn(
                    "relative grid grid-cols-[3.25rem_minmax(0,1fr)] gap-5 pb-14 last:pb-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-7 sm:pb-16 xl:block xl:transform-gpu xl:pb-0",
                    desktopStagePlacement[index],
                  )}
                >
                  {index < career.stages.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "roadmap-connector pointer-events-none absolute hidden xl:block",
                        desktopConnectorStyles[index],
                      )}
                    />
                  ) : null}

                  <span
                    className={cn(
                      "relative z-10 h-fit w-fit bg-background pr-3 font-mono text-xl font-medium tracking-[-0.04em] text-subtle sm:text-2xl xl:bg-transparent xl:pr-0 xl:text-5xl",
                      (index === 0 || index === career.stages.length - 1) &&
                        "text-accent-highlight",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="border-t border-border pt-6 xl:mt-7 xl:pt-7">
                    <h3 className="max-w-sm text-[1.28rem] leading-[1.2] font-medium tracking-[-0.035em] text-foreground sm:text-[1.55rem] lg:text-[1.72rem]">
                      <span className="block">{stage.title}</span>
                      {"alternate" in stage ? (
                        <>
                          <span className="mt-5 block font-mono text-[0.76rem] font-medium uppercase tracking-[0.18em] text-muted">
                            or
                          </span>
                          <span className="mt-5 block">{stage.alternate}</span>
                        </>
                      ) : null}
                    </h3>
                    {"metadata" in stage ? (
                      <p className="mt-5 font-mono text-[0.79rem] font-medium tracking-[0.14em] text-muted">
                        {stage.metadata}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <div
              className="mt-24 grid gap-10 border-t border-border pt-10 sm:mt-32 lg:mt-40 lg:pt-12 xl:grid-cols-[10rem_minmax(0,1fr)] xl:gap-14"
              data-reveal=""
            >
              <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-subtle">
                Career direction
              </p>

              <div className="grid gap-10 xl:grid-cols-2 xl:gap-12">
                <div>
                  <p className="max-w-2xl text-xl leading-8 font-medium tracking-[-0.025em] text-foreground">
                    {career.direction[0]}
                  </p>
                  <p className="mt-7 text-base leading-7 text-muted">
                    {career.direction[1]}
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-8 text-muted">
                    {career.direction[2]}
                  </p>
                  <p className="mt-7 text-base leading-7 text-muted">
                    {career.direction[3]}
                  </p>
                </div>
              </div>
            </div>

            <aside
              className="mt-20 grid gap-8 border-t border-border pt-10 lg:mt-28 xl:grid-cols-[10rem_minmax(0,1fr)] xl:gap-14"
              data-reveal=""
            >
              <h3 className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-subtle">
                Areas of interest
              </h3>

              <ul className="grid gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
                {career.interests.map((interest) => (
                  <li
                    key={interest}
                    className="border-t border-border py-4 text-[1rem] leading-6 text-muted transition-[color,border-color] duration-200 hover:border-border-strong hover:text-foreground/86 motion-reduce:transition-none"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
