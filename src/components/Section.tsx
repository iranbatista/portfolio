import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const headingVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={headingVariants}>
        <h3 className="text-brand-500 text-sm font-semibold tracking-[0.25em] text-left md:text-right">
          {title}
        </h3>
      </motion.div>
      <div className="md:col-span-3">{children}</div>
    </motion.section>
  );
}
