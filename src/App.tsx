import { Background } from "./components/Background";
import { CursorGlow } from "./components/CursorGlow";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./components/sections/Hero";

export function App() {
  return (
    <>
      <Background />
      <CursorGlow />
      <div className="w-full max-w-7xl mx-auto px-5 flex justify-end pt-2">
        <LanguageToggle />
      </div>
      <div className="w-full max-w-7xl mx-auto px-5 py-16">
        <Hero />
      </div>
    </>
  );
}
