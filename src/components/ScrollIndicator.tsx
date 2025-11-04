import { motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";
import type Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function ScrollIndicator() {
  const handleClick = () => {
    const lenis = window.lenis;

    if (lenis) {
      lenis.scrollTo(window.innerHeight, {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-colors cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1,
          duration: 0.5,
        },
      }}
      aria-label="Scroll to content"
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="p-2.5 sm:p-3 rounded-full bg-linear-to-br from-brand-500/10 to-transparent border border-brand-500/40 text-brand-500/40 hover:border-slate-100 hover:text-slate-100 active:scale-95 transition ease-out duration-300"
      >
        <FaChevronDown size={16} />
      </motion.div>
    </motion.button>
  );
}
