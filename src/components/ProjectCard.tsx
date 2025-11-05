import { motion, type Variants } from "motion/react";

export type Project = {
  title: string;
  company: string;
  tagline: string;
  description: string;
  techStack: string[];
  image: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
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
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 md:gap-5 items-start"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ x: 8, transition: { ease: 'easeOut', duration: 0.3 } }}
    >
      <img
        src={project.image}
        alt={`${project.title} Cover`}
        className="rounded-xl w-auto md:shrink-0"
      />
      <div className="flex flex-col">
        <span className="text-brand-500 text-sm mb-1">{project.company}</span>
        <strong className="text-xl font-bold text-slate-100 mb-2">
          {project.title}
        </strong>
        <span className="text-slate-100 text-sm mb-3">{project.tagline}</span>
        <p className="text-slate-400 text-sm leading-normal mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs border border-brand-500 text-brand-500 rounded-full font-medium px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
