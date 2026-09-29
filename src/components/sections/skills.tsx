import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-border py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-20">
          <SectionMarker
            number="04"
            label="Skills"
            className="self-start lg:pt-2"
            data-reveal=""
          />

          <div>
            <h2
              id="skills-heading"
              data-reveal=""
              data-reveal-delay="1"
              className="text-[clamp(2.7rem,6vw,5.75rem)] leading-[0.96] font-medium tracking-[-0.06em] text-balance"
            >
              Skills &amp; Knowledge
            </h2>

            <div className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:mt-24 lg:gap-x-16 lg:gap-y-20">
              {siteConfig.skills.map((category, index) => (
                <article
                  key={category.title}
                  className="group border-t border-border pt-8 transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none"
                  data-reveal=""
                  data-reveal-delay={String((index % 2) + 1)}
                >
                  <p className="font-mono text-[0.72rem] font-medium tracking-[0.15em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-2xl leading-tight font-medium tracking-[-0.035em] text-foreground sm:text-[1.65rem]">
                    {category.title}
                  </h3>

                  <ul className="mt-9">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="border-t border-border py-4 text-[1.1rem] leading-7 text-foreground/78 transition-[color,border-color] duration-200 hover:border-border-strong hover:text-foreground motion-reduce:transition-none sm:text-[1.15rem]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
