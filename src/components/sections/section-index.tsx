import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function SectionIndex() {
  const upcomingSections = siteConfig.sections.slice(6);

  return (
    <section aria-labelledby="portfolio-index-heading" className="border-b border-border py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <header>
            <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-subtle">
              Next chapter
            </p>
            <h2
              id="portfolio-index-heading"
              className="mt-4 text-2xl font-medium tracking-[-0.035em] text-foreground"
            >
              The portfolio, continued
            </h2>
          </header>

          <ol className="border-t border-border">
            {upcomingSections.map((section) => (
              <li
                key={section.id}
                id={section.id}
                className="grid min-h-18 grid-cols-[2.5rem_2rem_minmax(0,1fr)] items-center border-b border-border py-4 sm:grid-cols-[3rem_3rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.12em] text-subtle">
                  {section.number}
                </span>
                <span aria-hidden="true" className="h-px w-4 bg-border-strong sm:w-6" />
                <span className="text-lg font-medium tracking-[-0.02em] text-foreground sm:text-xl">
                  {section.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
