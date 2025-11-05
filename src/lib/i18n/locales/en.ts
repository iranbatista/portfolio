import type { Translation } from "../types";

export const en: Translation = {
  greetings: "Hi, I'm",
  title: "Full Stack Software Engineer",
  tagline:
    "TypeScript specialist delivering impactful<br />software for global markets.",
  resumeCTA: "View Resume",
  featuredProjects: "FEATURED PROJECTS",
  projects: [
    {
      image: `${import.meta.env.BASE_URL}/projects/coreops.png`,
      title: "Enterprise Contract Management System",
      company: "Routz (Multinational Corporation)",
      tagline: "Solo-architected SaaS platform in 10 weeks",
      description:
        "Architected React web app with i18n support processing 1,000+ tickets monthly via Movidesk API integration. Developed NestJS microservices with automated monitoring and JSReport integration for PDF reports. Containerized with Docker and established CI/CD pipeline reducing deployment time to 3 minutes. Zero critical bugs post-launch.",
      techStack: [
        "React",
        "NestJS",
        "Docker",
        "PostgreSQL",
        "i18n",
        "GitHub Actions",
      ],
    },
    {
      image: `${import.meta.env.BASE_URL}/projects/gsafra.png`,
      title: "Offline-First Agricultural Platform",
      company: "Coyote Tecnologia",
      tagline: "Mobile app for zero-connectivity rural areas",
      description:
        "Engineered offline-first React Native application serving hundreds of farmers in areas with no internet access. Built sophisticated sync mechanism handling daily agricultural data when connectivity returns. Developed companion React web platform with Google Maps integration for real-time data visualization. Owned full cycle: UI design, development, testing with Jest, and production deployment.",
      techStack: [
        "React Native",
        "React",
        "Node.js",
        "PostgreSQL",
        "Google Maps",
        "Jest",
      ],
    },
    {
      image: `${import.meta.env.BASE_URL}/projects/vis.png`,
      title: "Female Athletes Mentorship App",
      company: "Voice In Sports (US Company)",
      tagline: "Cross-platform app with 4.9★ rating",
      description:
        "Delivered React Native with Expo mentorship application connecting 1,000+ young female athletes with mentors. Achieved 4.9 App Store rating through seamless cross-platform UX and intuitive design. Implemented TypeScript for enhanced code reliability. Led front-end development ensuring consistent quality across iOS and Android platforms.",
      techStack: ["React Native", "Expo", "Styled Components"],
    },
    {
      image: `${import.meta.env.BASE_URL}/projects/shaw.png`,
      title: "Internal HR Automation Platform",
      company: "Shaw & Partners (US Company)",
      tagline: "Multi-department workflow automation",
      description:
        "Improved internal React platform significantly reducing HR processing time across recruitment, finance, and legal departments. Worked in TypeScript migration improving code reliability and reducing production bugs. Optimized critical PostgreSQL queries improving API response times. Established automated CI/CD pipeline with GitHub Actions enabling frequent, safe deployments with zero downtime.",
      techStack: ["React", "Node.js", "PostgreSQL", "Redux", "Tailwind"],
    },
  ],
  aboutMe: "ABOUT ME",
  aboutDescription:
    "Full Stack Engineer with <strong>3+ years</strong> specializing in the <strong>TypeScript ecosystem</strong> (Node.js, React and React Native). I build <strong>scalable solutions</strong> that handle thousands of operations while maintaining zero critical bugs. Experienced working with <strong>distributed teams</strong> across US companies and multinational corporations, delivering projects <strong>across all timezones</strong>. Focus on clean architecture, performance optimization, and <strong>impactful software</strong> that solves real problems.",
  educationTitle: "Education & Achievements",
  education: [
    {
      title: "B.S. Software Engineering",
      description: "Graduated with Honors",
    },
    {
      title: "Exchange Program in San Francisco",
      description: "Selected as top 2 student based on academic excellence",
    },
    {
      title: "3 languages",
      description: "English, Portuguese, Spanish",
    },
  ],
  skills: "SKILLS",
  skillsCategories: [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Redux",
        "Zustand",
        "Styled Components",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "Express",
        "TypeScript",
        "RESTful APIs",
        "GraphQL",
        "WebSockets",
        "Microservices",
      ],
    },
    {
      id: "database",
      title: "Database",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Query Optimization",
        "Migrations",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Git",
        "CI/CD",
        "GitHub Actions",
        "AWS",
        "Nginx",
        "Linux",
      ],
    },
  ],
  workExperiences: "WORK EXPERIENCES",
  experiences: [
    {
      role: "Lead Engineer & Sole Developer",
      company: "Routz",
      location: "Multinational Corporation",
      period: "Aug 2025 - Oct 2025",
      type: "Contract",
    },
    {
      role: "Software Engineer",
      company: "Shaw & Partners",
      location: "US Company",
      period: "Sep 2024 - Sep 2025",
      type: "Full-time",
    },
    {
      role: "Full Stack Software Engineer",
      company: "Coyote Tecnologia",
      location: "Brazil",
      period: "Apr 2022 - Aug 2024",
      type: "Full-time",
    },
  ],
};
