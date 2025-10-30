import { cn } from "../utils/cn";
import { useTranslation } from "react-i18next";

type Language = "en" | "pt";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const selected = i18n.language as Language;

  const handleChangeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="border border-[#7ca0f9] flex rounded-full p-1 btn-shadow relative">
      <div
        className={cn(
          "absolute inset-y-1 rounded-full bg-linear-to-b from-[#7ca0f9] to-[#375198] transition-all duration-300 ease-out",
          selected === "en" ? "left-1 right-[50%]" : "left-[50%] right-1"
        )}
      />
      <button
        className="text-white text-xs font-semibold px-2.5 py-1 rounded-full relative z-10 transition-opacity duration-200 cursor-pointer"
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </button>
      <button
        className="text-white text-xs font-semibold px-2.5 py-1 rounded-full relative z-10 transition-opacity duration-200 cursor-pointer"
        onClick={() => handleChangeLanguage("pt")}
      >
        PT
      </button>
    </div>
  );
}
