import { SanitizedConfig } from './src/interfaces/sanitized-config';
import { DEFAULT_THEMES } from './src/constants/default-themes';

const CONFIG: SanitizedConfig = {
  basePath: '/rmishra96/',
  github: {
    username: 'rmishra96',
  },
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'RAG‑Powered Knowledge Assistant',
          description:
            'Context-aware enterprise Q&A powered by vector search and LLMs.',
          imageUrl:
            'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-1073.jpg',
          link: 'https://github.com/rmishra96/rag-knowledge-assistant',
        },
        {
          title: 'Federated GraphQL Platform',
          description:
            'Unified API layer across domain services using GraphQL federation.',
          imageUrl:
            'https://img.freepik.com/free-vector/graphql-api-concept-illustration_114360-1002.jpg',
          link: 'https://github.com/rmishra96/federated-graphql-platform',
        },
        {
          title: 'Terraform Infrastructure Automation',
          description:
            'Reusable IaC patterns for cloud infrastructure deployment.',
          imageUrl:
            'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-1072.jpg',
          link: 'https://github.com/rmishra96/terraform-infra-automation',
        },
      ],
    },
  },
  seo: {
    title: 'Software Engineering Lead | Backend Architect | Cloud & AI Innovator',
    description:
      'Dynamic Software Engineering Lead with 12+ years of experience in microservices, cloud migration, CI/CD automation, and Generative AI. Skilled in RAG pipelines, LLMs, GraphQL federation, Terraform automation, and TOGAF enterprise architecture.',
    imageURL: '',
  },
  social: {
    linkedin: 'ranjanmishra96',
    medium: 'ranjanmishra96',
    website: 'https://rmishra96.github.io/rmishra96/',
    email: 'ranjan.mishra96@hotmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Java',
    'Spring Boot',
    'Kafka',
    'GraphQL',
    'Federated Graph',
    'Terraform',
    'Docker',
    'Kubernetes',
    'AWS Lambda',
    'GitHub Actions',
    'React.js',
    'Microservices',
    'TOGAF',
    'RAG',
    'LLMs',
    'Generative AI',
    'Agentic AI',
  ],
  experiences: [
    {
      company: 'Optum Global Solutions',
      position: 'Software Engineering Lead',
      from: 'February 2018',
      to: 'Present',
      companyLink: 'https://www.optum.com',
    },
    {
      company: 'Rolta India',
      position: 'Software Engineer',
      from: 'September 2016',
      to: 'February 2018',
      companyLink: 'https://www.rolta.com',
    },
  ],
  educations: [
    {
      institution: 'BITS Pilani',
      degree: 'M.Tech, ML, Deep RL, Data Mining',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Magadh University',
      degree: 'B.Sc (Engineering), Electronics & Communication',
      from: '2007',
      to: '2012',
    },
  ],
  certifications: [
    {
      name: 'AI Agents Fundamentals',
      body: 'Hugging Face',
      year: 'September 2025',
      link: 'https://huggingface.co',
    },
    {
      name: 'Academy Accreditation – Databricks Fundamentals',
      body: 'Databricks',
      year: 'November 2024',
      link: 'https://databricks.com',
    },
    {
      name: 'Academy Accreditation – Generative AI Fundamentals',
      body: 'Databricks',
      year: 'January 2024',
      link: 'https://databricks.com',
    },
    {
      name: 'TOGAF® Standard, Version 9.2',
      body: 'The Open Group',
      year: 'April 2024',
      link: 'https://www.opengroup.org',
    },
    {
      name: 'Microsoft Certified: Azure Solutions Architect Expert (AZ-303)',
      body: 'Microsoft',
      year: '2023',
      link: 'https://microsoft.com',
    },
  ],
  publications: [],
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  blog: {
    display: false,
    source: 'dev',
    username: '',
    limit: 5,
  },
  themeConfig: {
    defaultTheme: 'winter',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: DEFAULT_THEMES,
  },
  footer: '© 2026 Ranjan Mishra. Built with a custom GitProfile configuration.',
  enablePWA: true,
};

export default CONFIG;
