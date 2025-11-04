import { Trans, useTranslation } from "react-i18next";
import { motion, type Variants } from "motion/react";
import { Section } from "../Section";
import { FaAward } from "react-icons/fa6";
import type { EducationItem } from "../../lib/i18n/types";

export function About() {
  const { t } = useTranslation();
  const education = t("education", { returnObjects: true }) as EducationItem[];

  const contentVariants: Variants = {
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

  const boxVariants: Variants = {
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
        delay: 0.2,
      },
    },
  };

  return (
    <Section title={t("aboutMe")}>
      <motion.p
        className="text-slate-100 text-sm md:text-base leading-normal mb-5 md:mb-6"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Trans
          i18nKey="aboutDescription"
          components={{
            strong: <strong className="font-semibold" />,
          }}
        />
      </motion.p>

      <motion.div
        className="bg-linear-to-br from-brand-500/10 via-transparent to-transparent border border-brand-500/20 rounded-lg p-4 md:p-6"
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex items-start gap-3 md:gap-4">
          <FaAward className="w-5 h-5 md:w-6 md:h-6 text-brand-500 shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <h3 className="text-slate-300 text-base md:text-lg font-semibold mb-2 md:mb-3">
              {t("educationTitle")}
            </h3>
            <ul className="space-y-2 md:space-y-2.5 text-sm text-slate-400">
              {education.map((item) => (
                <li key={item.title} className="leading-relaxed">
                  <strong className="text-slate-400 font-semibold">
                    {item.title}
                  </strong>{" "}
                  - {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
