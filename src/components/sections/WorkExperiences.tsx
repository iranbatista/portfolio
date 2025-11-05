import { useTranslation } from "react-i18next";
import type { Experience } from "../../lib/i18n/types";
import { Section } from "../Section";
import { motion, type Variants } from "motion/react";

export function WorkExperiences() {
  const { t } = useTranslation();
  const experiences = t("experiences", { returnObjects: true }) as Experience[];

  const experienceVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section title={t("workExperiences")}>
      <div className="relative">
        <div className="absolute left-0 md:left-2 top-0 bottom-0 w-0.5 bg-slate-800" />
        {experiences.map((experience) => (
          <motion.article
            key={experience.role}
            className="relative pl-6 sm:pl-8 md:pl-10 pb-6 sm:pb-8 last:pb-0 group"
            variants={experienceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="absolute left-0 md:left-2 top-2 w-2 h-2 -translate-x-[3.5px] bg-brand-500 rounded-full group-hover:scale-150 transition-transform duration-300" />

            <motion.div
              whileHover={{
                x: 8,
                transition: { ease: "easeOut", duration: 0.3 },
              }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-2"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-slate-100 text-base sm:text-lg group-hover:text-brand-500 transition-colors mb-1">
                  {experience.role}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  <span className="font-medium">{experience.company}</span>
                  <span className="text-slate-600 mx-1.5">•</span>
                  <span className="text-slate-500">{experience.location}</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                <span className="text-xs sm:text-xs text-slate-400 whitespace-nowrap">
                  {experience.period}
                </span>
                <span className="bg-slate-700/40 text-brand-400 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                  {experience.type}
                </span>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
