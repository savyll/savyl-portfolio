import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { RevealController } from "@/components/motion/reveal-controller";
import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Training } from "@/components/sections/training";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform duration-150 focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
      >
        Skip to main content
      </a>

      <Navbar />
      <RevealController />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Training />
        <Career />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
