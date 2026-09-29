"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Container } from "./container";

const navLinkStyles =
  "group relative inline-flex min-h-11 items-center text-[0.92rem] font-medium tracking-[-0.01em] text-muted transition-colors duration-200 after:absolute after:right-0 after:bottom-1.5 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-foreground/60 after:transition-transform after:duration-200 after:content-[''] hover:text-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:after:transition-none";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 16);

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none",
        scrolled || menuOpen
          ? "border-border bg-background/88 shadow-[0_12px_32px_-28px_rgb(0_0_0/0.95)] backdrop-blur-xl"
          : "border-transparent bg-background/55 backdrop-blur-sm",
      )}
    >
      <Container className="flex min-h-19 items-center justify-between gap-6">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center rounded-sm text-sm font-bold tracking-[0.12em] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label="Go to the top of Savyl's portfolio"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={navLinkStyles}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="h-4 w-px bg-border-strong" />

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex min-h-11 items-center gap-1.5 text-[0.92rem] font-medium tracking-[-0.01em] text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            GitHub
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transform-none motion-reduce:transition-none"
              strokeWidth={1.75}
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
          {menuOpen ? (
            <X aria-hidden="true" className="size-4" strokeWidth={1.75} />
          ) : (
            <Menu aria-hidden="true" className="size-4" strokeWidth={1.75} />
          )}
        </button>
      </Container>

      {menuOpen ? (
        <div id="mobile-navigation" className="border-t border-border bg-background/96 lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile navigation">
              <ul className="grid grid-cols-2 gap-x-6">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href} className="border-b border-border">
                    <a
                      href={item.href}
                      className={navLinkStyles}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-foreground motion-reduce:transition-none"
              >
                GitHub
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transform-none motion-reduce:transition-none"
                  strokeWidth={1.75}
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
