type SectionHeadingProps = {
  description: string;
  eyebrow: string;
  headingId: string;
  title: string;
};

export function SectionHeading({
  description,
  eyebrow,
  headingId,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10 lg:mb-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
      <p className="flex items-center gap-3 self-start font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-subtle md:pt-2">
        <span aria-hidden="true" className="h-px w-5 bg-border-strong" />
        {eyebrow}
      </p>
      <div>
        <h2
          id={headingId}
          className="max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-balance"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}
