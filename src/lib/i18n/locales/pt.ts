import type { Translation } from "../types";

export const pt: Translation = {
  greetings: "Oi, sou",
  title: "Engenheiro de Software Full Stack",
  tagline:
    "Especialista em TypeScript entregando software<br />de impacto para mercados globais.",
  resumeCTA: "Ver Currículo",
  featuredProjects: "PROJETOS DESTACADOS",
  projects: [
    {
      image: "https://placehold.co/250x150",
      title: "Sistema Empresarial de Gestão de Contratos",
      company: "Routz (Corporação Multinacional)",
      tagline: "Plataforma SaaS arquitetada sozinho em 10 semanas",
      description:
        "Arquitetei aplicação web React com suporte i18n processando mais de 1.000 tickets mensais via integração com API Movidesk. Desenvolvi microsserviços NestJS com monitoramento automatizado e integração JSReport para relatórios PDF. Containerizei com Docker e estabeleci pipeline CI/CD reduzindo tempo de deploy para 3 minutos. Zero bugs críticos pós-lançamento.",
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
      image: "https://placehold.co/250x150",
      title: "Plataforma Agrícola Offline-First",
      company: "Coyote Tecnologia",
      tagline: "App móvel para áreas rurais sem conectividade",
      description:
        "Desenvolvi aplicação React Native offline-first atendendo centenas de agricultores em áreas sem acesso à internet. Construí mecanismo sofisticado de sincronização para dados agrícolas diários quando a conectividade retorna. Desenvolvi plataforma web React complementar com integração Google Maps para visualização de dados em tempo real. Responsável pelo ciclo completo: design UI, desenvolvimento, testes com Jest e deploy em produção.",
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
      image: "https://placehold.co/250x150",
      title: "App de Mentoria para Atletas Femininas",
      company: "Shaw & Partners (Empresa Americana)",
      tagline: "App multiplataforma com avaliação 4.9★",
      description:
        "Entreguei aplicação de mentoria em React Native com Expo conectando mais de 1.000 jovens atletas femininas com mentores. Alcancei avaliação 4.9 na App Store através de UX multiplataforma impecável e design intuitivo. Implementei TypeScript para maior confiabilidade do código. Liderei desenvolvimento front-end garantindo qualidade consistente nas plataformas iOS e Android.",
      techStack: ["React Native", "Expo", "TypeScript", "Node.js", "CI/CD"],
    },
    {
      image: "https://placehold.co/250x150",
      title: "Plataforma Interna de Automação de RH",
      company: "Shaw & Partners (Empresa Americana)",
      tagline: "Automação de fluxo de trabalho multi-departamental",
      description:
        "Melhorei plataforma React interna reduzindo significativamente o tempo de processamento de RH nos departamentos de recrutamento, financeiro e jurídico. Trabalhei na migração para TypeScript melhorando a confiabilidade do código e reduzindo bugs em produção. Otimizei queries críticas em PostgreSQL melhorando tempos de resposta da API. Estabeleci pipeline CI/CD automatizado com GitHub Actions permitindo deploys frequentes e seguros com zero downtime.",
      techStack: ["React", "Node.js", "PostgreSQL", "TypeScript", "Redux"],
    },
  ],
  aboutMe: "SOBRE MIM",
  aboutDescription:
    "Engenheiro Full Stack com <strong>mais de 3 anos</strong> especializado no <strong>ecossistema TypeScript</strong> (Node.js, React e React Native). Construo <strong>soluções escaláveis</strong> que lidam com milhares de operações mantendo zero bugs críticos. Experiência trabalhando com <strong>equipes distribuídas</strong> em empresas americanas e corporações multinacionais, entregando projetos <strong>em todos os fusos horários</strong>. Foco em arquitetura limpa, otimização de performance e <strong>software de impacto</strong> que resolve problemas reais.",
  educationTitle: "Educação & Conquistas",
  education: [
    {
      title: "Bacharelado em Engenharia de Software",
      description: "Graduado com Honras",
    },
    {
      title: "Intercâmbio em San Francisco",
      description: "Selecionado como um dos 2 melhores alunos por excelência acadêmica",
    },
    {
      title: "3 idiomas",
      description: "Inglês, Português, Espanhol",
    },
  ],
};
