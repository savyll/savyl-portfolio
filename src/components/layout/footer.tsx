import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <Container className="flex flex-col gap-5 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Savyl Scott Rodrigues</p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <p>Designed &amp; built by Savyl Scott Rodrigues</p>
          <a
            href="#top"
            className="group inline-flex min-h-11 w-fit items-center gap-1.5 text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            Back to top
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            >
              ↑
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
