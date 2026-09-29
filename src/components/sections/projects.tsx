import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ExternalLinkButton } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getPublicPath } from "@/lib/public-path";

import { SectionMarker } from "./section-marker";

export function Projects() {
  const { atlas, graphicsEditor } = siteConfig.projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-border pt-24 pb-10 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16"
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
            <p className="mt-4 text-sm leading-6 text-subtle">{atlas.metadata}</p>
          </div>

          <figure className="min-w-0 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center" data-reveal="">
            <a
              href={getPublicPath("/projects/atlas-overview.png")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full-size ATLAS Overview screenshot (opens in a new tab)"
              className="group block overflow-hidden rounded-panel border border-border-strong bg-surface shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent-border focus-visible:border-accent-border motion-reduce:transition-none"
            >
              <Image
                src={getPublicPath("/projects/atlas-overview.png")}
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
          className="mt-16 grid gap-7 border-t border-border pt-9 transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none sm:mt-20 sm:pt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-x-16 lg:gap-y-6"
          data-reveal=""
        >
          <div>
            <p className="text-sm leading-6 text-subtle">
              {graphicsEditor.metadata}
            </p>
            <h3 id="graphics-editor-heading" className="mt-4 text-2xl leading-tight font-medium tracking-[-0.035em] sm:text-3xl">
              {graphicsEditor.name}
            </h3>
          </div>

          <figure
            aria-labelledby="graphics-editor-preview-caption"
            className="min-w-0 rounded-panel border border-border-strong bg-surface/60 transition-colors duration-200 hover:border-accent-border motion-reduce:transition-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5 sm:px-6">
              <span className="font-mono text-xs leading-5 text-muted">graphics_editor.c</span>
              <span className="text-xs leading-5 text-subtle">Console</span>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <p className="font-mono text-[0.8125rem] leading-6 tracking-[0.02em] text-foreground">2D GRAPHICS EDITOR</p>
              <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <pre className="whitespace-pre-wrap font-mono text-[0.8125rem] leading-6 text-muted">{graphicsEditor.menu.join("\n")}</pre>
                <div role="img" aria-label="Cropped rectangle example: asterisks draw the outline and underscores mark empty canvas space.">
                  <pre aria-hidden="true" className="font-mono text-[0.8125rem] leading-5 text-foreground/80">{graphicsEditor.canvasExcerpt.join("\n")}</pre>
                </div>
              </div>
              <p className="mt-5 border-t border-border pt-4 font-mono text-xs leading-5 text-subtle">
                Canvas size: 25 rows x 60 columns
              </p>
            </div>
            <figcaption id="graphics-editor-preview-caption" className="border-t border-border px-5 py-3 text-xs leading-5 text-subtle sm:px-6">
              Menu + cropped canvas example
            </figcaption>
          </figure>

          <div className="min-w-0 lg:col-start-1">
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-[1.05rem]">
              {graphicsEditor.description}
            </p>
            <ul aria-label="Graphics editor features" className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {graphicsEditor.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-muted">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-border-strong" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              {graphicsEditor.technologies.map((technology) => (
                <span key={technology} className="rounded-sm border border-border px-2.5 py-1 text-sm leading-6 text-muted">
                  {technology}
                </span>
              ))}
              <ExternalLinkButton
                href={graphicsEditor.github}
                aria-label="View Menu-Driven 2D Graphics Editor in C on GitHub (opens in a new tab)"
              >
                View on GitHub
              </ExternalLinkButton>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
