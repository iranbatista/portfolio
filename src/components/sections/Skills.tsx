import { useTranslation } from "react-i18next";
import { motion, type Variants } from "motion/react";
import { Section } from "../Section";
import type { SkillsCategory } from "../../lib/i18n/types";
import { FaCloud, FaCode, FaDatabase, FaServer } from "react-icons/fa6";
import type { IconType } from "react-icons";

export function Skills() {
  const { t } = useTranslation();
  const categories = t("skillsCategories", {
    returnObjects: true,
  }) as SkillsCategory[];
  const categoriesIcons: Record<string, IconType> = {
    frontend: FaCode,
    backend: FaServer,
    database: FaDatabase,
    devops: FaCloud,
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
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
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const chipVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section title={t("skills")}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {categories.map((category) => {
          const Icon = categoriesIcons[category.id];

          return (
            <motion.div
              key={category.title}
              className="bg-linear-to-br from-brand-500/10 via-transparent to-transparent border border-brand-500/20 rounded-lg p-4 md:p-6"
              variants={cardVariants}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-500 shrink-0" />
                <h3 className="font-medium text-sm sm:text-base text-zinc-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="text-xs sm:text-sm px-2.5 py-1.5 sm:px-3 rounded-lg bg-slate-700/40"
                    variants={chipVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
