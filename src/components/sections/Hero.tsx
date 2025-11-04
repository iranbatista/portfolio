import { motion, type Variants } from "motion/react";
import { Trans, useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
  FaEarthAmericas,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "../Link";
import { ScrollIndicator } from "../ScrollIndicator";
import avatarImage from "../../assets/avatar.png";

export function Hero() {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col h-screen justify-center items-start relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={avatarImage}
        alt="Avatar"
        className="w-32 h-32 rounded-xl mb-8 shadow-avatar"
        variants={itemVariants}
      />
      <motion.h1
        className="text-slate-100 text-5xl mb-2"
        variants={itemVariants}
      >
        {t("greetings")}{" "}
        <span className="blue-text font-extrabold">Iran Batista</span>
      </motion.h1>
      <motion.h2
        className="text-slate-100 text-xl font-medium mb-4"
        variants={itemVariants}
      >
        {t("title")}
      </motion.h2>

      <motion.p
        className="text-slate-400 mb-8 text-sm leading-normal"
        variants={itemVariants}
      >
        <Trans i18nKey="tagline" />
      </motion.p>

      <motion.p
        className="text-slate-400 mb-2 text-sm flex items-center gap-2"
        variants={itemVariants}
      >
        <FaEarthAmericas size={16} />
        Based in Brazil (UTC-3) working across all timezones
      </motion.p>
      <motion.a
        href="mailto:iran@iranbatista.dev"
        className="text-slate-400 mb-8 text-sm flex items-center gap-2"
        variants={itemVariants}
      >
        <FaEnvelope size={16} />
        iran@iranbatista.dev
      </motion.a>

      <motion.div className="flex gap-2" variants={itemVariants}>
        <Link
          href={`${import.meta.env.BASE_URL}/Resume - Iran Batista.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("resumeCTA")}
          <FaArrowUpRightFromSquare size={16} />
        </Link>
        <Link
          href="https://github.com/iranbatista"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5"
        >
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/iranbatista"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5"
        >
          <FaLinkedin size={20} />
        </Link>
      </motion.div>

      <ScrollIndicator />
    </motion.div>
  );
}
