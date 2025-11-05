import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { cn } from "../utils/cn";

export type Language = "en" | "pt";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const selected = i18n.language as Language;

  const toggleLanguage = () => {
    i18n.changeLanguage(selected === "en" ? "pt" : "en");
  };

  return (
    <motion.div
      className="border border-brand-500 flex rounded-full p-1 shadow-btn relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    >
      <div
        className={cn(
          "absolute inset-y-1 rounded-full bg-linear-to-b from-brand-500 to-brand-700 transition-all duration-300 ease-out",
          selected === "en" ? "left-1 right-[50%]" : "left-[50%] right-1"
        )}
      />
      <button
        className="text-white text-xs font-semibold px-2.5 py-1 rounded-full relative z-10 transition-opacity duration-200 cursor-pointer"
        onClick={() => toggleLanguage()}
      >
        EN
      </button>
      <button
        className="text-white text-xs font-semibold px-2.5 py-1 rounded-full relative z-10 transition-opacity duration-200 cursor-pointer"
        onClick={() => toggleLanguage()}
      >
        PT
      </button>
    </motion.div>
  );
}
