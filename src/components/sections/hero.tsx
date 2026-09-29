import { ArrowDownRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ButtonLink, ExternalLinkButton } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { siteConfig } from "@/config/site";

export function Hero() {
  const { profile } = siteConfig;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-depth overflow-hidden border-b border-border"
    >
      <Container className="flex min-h-[calc(100svh-4.75rem)] flex-col justify-center py-16 sm:py-20 lg:py-24 xl:py-28">
        <div className="hero-enter hero-enter-1 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">
          <span>AI &amp; Data Science</span>
          <span aria-hidden="true" className="h-px w-6 bg-border-strong" />
          <span>REVA University</span>
        </div>

        <h1
          id="hero-heading"
          className="hero-enter hero-enter-2 mt-10 text-[clamp(2.8rem,12vw,5rem)] leading-[0.88] font-semibold tracking-[-0.075em] text-foreground text-balance sm:text-[clamp(4.5rem,10vw,9rem)]"
        >
          <span className="block">{profile.firstName}</span>
          <span className="mt-2 block sm:whitespace-nowrap lg:ml-[min(7vw,8.4rem)]">
            {profile.lastName}<span className="text-accent-highlight">.</span>
          </span>
        </h1>

        <div className="mt-14 grid gap-14 lg:ml-[min(7vw,8.4rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.65fr)] lg:items-end lg:gap-12 xl:mt-18 xl:gap-24">
          <div className="max-w-3xl">
            <div className="hero-enter hero-enter-3">
              <p className="text-lg font-medium tracking-[-0.02em] text-foreground sm:text-xl">
                {profile.role}
              </p>
              <p className="mt-5 max-w-2xl text-2xl leading-tight font-medium tracking-[-0.035em] text-foreground sm:text-3xl">
                {profile.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {profile.introduction}
              </p>
            </div>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-x-0.5 gap-y-2 sm:mt-9 sm:gap-1.5">
              <ButtonLink href="#experience">
                View Experience
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-px group-hover:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
                  strokeWidth={1.75}
                />
              </ButtonLink>
              <ExternalLinkButton href={siteConfig.links.linkedin} variant="quiet">
                LinkedIn
              </ExternalLinkButton>
              <ExternalLinkButton href={siteConfig.links.github} variant="quiet">
                GitHub
              </ExternalLinkButton>
            </div>

            <div className="hero-enter hero-enter-4 mt-6 flex flex-col gap-1 text-sm sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
                Email
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 w-fit items-center border-b border-border text-muted transition-colors duration-200 hover:border-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <aside
            aria-label="Education and areas of interest"
            className="hero-enter hero-enter-4 border-t border-border-strong pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 xl:pl-10"
          >
            <dl className="grid grid-cols-2 gap-x-8 gap-y-7 lg:gap-x-4 xl:gap-x-8">
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
                  Degree
                </dt>
                <dd className="mt-2 text-[0.95rem] font-medium text-foreground">{profile.degree}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
                  Timeline
                </dt>
                <dd className="mt-2 text-[0.95rem] font-medium text-foreground">{profile.timeline}</dd>
              </div>
            </dl>

            <Divider className="my-7" />

            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
                Based in
              </p>
              <p className="mt-2 text-[0.95rem] font-medium text-foreground">{profile.location}</p>
            </div>

            <Divider className="my-7" />

            <ul className="space-y-3 font-mono text-[0.71rem] font-medium uppercase tracking-[0.14em] text-muted">
              {profile.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-4 bg-border-strong" />
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
