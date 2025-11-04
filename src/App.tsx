import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Background } from "./components/Background";
import { CursorGlow } from "./components/CursorGlow";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./components/sections/Hero";
import { MainProjects } from "./components/sections/MainProjects";
import { About } from "./components/sections/About";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function App() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <>
      <Background />
      <CursorGlow />
      <div className="w-full absolute top-0 z-50">
        <div className="w-full max-w-7xl flex justify-end pt-4 sm:pt-6 px-4 sm:px-5 mx-auto">
          <LanguageToggle />
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 pb-16 sm:pb-20">
        <Hero />
        <About />
        <MainProjects />
      </div>
    </>
  );
}
