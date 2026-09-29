import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ExternalLinkButton } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { SectionMarker } from "./section-marker";

export function Projects() {
  const { atlas, graphicsEditor } = siteConfig.projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-border py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-20">
          <SectionMarker
            number="02"
            label="Projects"
            className="self-start lg:pt-2"
            data-reveal=""
          />
          <h2
            id="projects-heading"
            data-reveal=""
            className="text-[clamp(2.7rem,6vw,5.75rem)] leading-[0.96] font-medium tracking-[-0.06em]"
          >
            Projects
          </h2>
        </div>

        <article
          aria-labelledby="atlas-heading"
          className="mt-14 grid gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start lg:gap-x-12 lg:gap-y-7 xl:gap-x-16"
        >
          <div className="min-w-0 lg:col-start-2" data-reveal="">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-highlight">
              Featured project
            </p>
            <h3 id="atlas-heading" className="mt-5 font-medium tracking-[-0.045em]">
              <span className="block text-5xl leading-none sm:text-6xl">{atlas.name}</span>
              <span className="sr-only"> — </span>
              <span className="mt-4 block max-w-md text-2xl leading-tight tracking-[-0.03em] sm:text-[1.7rem]">
                {atlas.subtitle}
              </span>
            </h3>
          </div>

          <figure className="min-w-0 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center" data-reveal="">
            <a
              href="/projects/atlas-overview.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full-size ATLAS Overview screenshot (opens in a new tab)"
              className="group block overflow-hidden rounded-panel border border-border-strong bg-surface shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent-border focus-visible:border-accent-border motion-reduce:transition-none"
            >
              <Image
                src="/projects/atlas-overview.png"
                alt="ATLAS Overview showing live latency, packet loss, jitter, DNS measurements, a latency graph, and service-availability monitoring."
                width={2160}
                height={1353}
                sizes="(min-width: 1280px) 654px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </a>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs leading-5 text-subtle">
              <span>ATLAS / Overview</span>
              <span>Open image for full detail</span>
            </figcaption>
          </figure>

          <div className="min-w-0 lg:col-start-2" data-reveal="" data-reveal-delay="1">
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-[1.05rem]">
              {atlas.description}
            </p>
            <ul aria-label="ATLAS technologies" className="mt-7 flex flex-wrap gap-2">
              {atlas.technologies.map((technology) => (
                <li key={technology} className="rounded-sm border border-border px-2.5 py-1 text-sm leading-6 text-muted">
                  {technology}
                </li>
              ))}
            </ul>
            <ExternalLinkButton
              href={atlas.github}
              aria-label="View ATLAS on GitHub (opens in a new tab)"
              className="mt-8"
            >
              View on GitHub
            </ExternalLinkButton>
          </div>
        </article>

        <article
          aria-labelledby="graphics-editor-heading"
          className="mt-16 grid gap-7 border-t border-border pt-9 transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none sm:mt-20 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16"
          data-reveal=""
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">
              {graphicsEditor.technologies.join(" / ")} / Programming
            </p>
            <h3 id="graphics-editor-heading" className="mt-4 text-2xl leading-tight font-medium tracking-[-0.035em] sm:text-3xl">
              {graphicsEditor.name}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-[1.05rem]">
              {graphicsEditor.description}
            </p>
          </div>
          <ExternalLinkButton
            href={graphicsEditor.github}
            aria-label="View 2D Graphics Editor in C on GitHub (opens in a new tab)"
            className="justify-self-start lg:justify-self-end"
          >
            View on GitHub
          </ExternalLinkButton>
        </article>
      </Container>
    </section>
  );
}
