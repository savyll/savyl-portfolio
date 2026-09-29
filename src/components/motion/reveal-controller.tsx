"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;

    const configureReveals = () => {
      observer?.disconnect();
      root.dataset.motion = reducedMotion.matches ? "reduced" : "full";

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(revealSelector),
      );

      root.classList.remove("reveal-enabled");
      elements.forEach((element) => element.classList.remove("is-revealed"));

      if (reducedMotion.matches) {
        elements.forEach((element) => element.classList.add("is-revealed"));
        return;
      }

      elements.forEach((element) => {
        const bounds = element.getBoundingClientRect();

        if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
          element.classList.add("is-revealed");
        }
      });

      root.classList.add("reveal-enabled");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        },
      );

      elements
        .filter((element) => !element.classList.contains("is-revealed"))
        .forEach((element) => observer?.observe(element));
    };

    configureReveals();
    reducedMotion.addEventListener("change", configureReveals);

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", configureReveals);
      root.classList.remove("reveal-enabled");
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
