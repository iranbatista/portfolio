import { useTranslation } from "react-i18next";
import { ProjectCard } from "../ProjectCard";
import { Section } from "../Section";
import type { Project } from "../../lib/i18n/types";

export function MainProjects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true }) as Project[];

  return (
    <Section title={t("featuredProjects")}>
      <div className="flex flex-col gap-6 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
