export type Project = {
  title: string;
  company: string;
  tagline: string;
  description: string;
  techStack: string[];
  image: string;
};

export type EducationItem = {
  title: string;
  description: string;
};

export type SkillsCategory = {
  id: string;
  title: string;
  skills: string[];
};

export type Translation = {
  greetings: string;
  title: string;
  tagline: string;
  resumeCTA: string;
  featuredProjects: string;
  projects: Project[];
  aboutMe: string;
  aboutDescription: string;
  educationTitle: string;
  education: EducationItem[];
  skills: string;
  skillsCategories: SkillsCategory[];
};
