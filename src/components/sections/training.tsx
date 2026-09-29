import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

export function Training() {
  const { training } = siteConfig;

  return (
    <section
      id="training"
      aria-labelledby="training-heading"
      className="border-b border-border py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-20">
          <SectionMarker
            number="06"
            label="Training"
            className="self-start lg:pt-2"
            data-reveal=""
          />

          <div>
            <header
              className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] xl:items-end xl:gap-16"
              data-reveal=""
              data-reveal-delay="1"
            >
              <h2
                id="training-heading"
                className="max-w-3xl text-[clamp(2.6rem,5.5vw,5.3rem)] leading-[0.96] font-medium tracking-[-0.058em] text-balance"
              >
                {training.heading}
              </h2>
              <p className="border-t border-border pt-6 text-base leading-7 text-muted">
                {training.note}
              </p>
            </header>

            <ol className="mt-16 grid border-t border-border sm:grid-cols-2 lg:mt-24 xl:grid-cols-4">
              {training.items.map((item, index) => (
                <li
                  key={item}
                  className="group border-b border-border py-7 transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none sm:min-h-40 sm:px-7 sm:odd:border-r xl:min-h-48 xl:border-r xl:px-7 xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0"
                  data-reveal=""
                  data-reveal-delay={String((index % 2) + 1)}
                >
                  <span className="font-mono text-[0.72rem] tracking-[0.15em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 max-w-52 text-xl leading-7 font-medium tracking-[-0.025em] text-foreground transition-colors duration-200 group-hover:text-foreground/88 motion-reduce:transition-none sm:text-2xl">
                    {item}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
