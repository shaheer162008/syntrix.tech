export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'laurus-foods',
    title: 'Laurus Foods',
    category: 'Website Development',
    description:
      'A modern, responsive website showcasing the Laurus Foods brand with a focus on user experience and visual appeal.',
    image: '/our-work/laurus-foods.png',
    link: 'https://laurusfoods.uk/',
    featured: true,
  },
  {
    id: 'sayyid-shaykh',
    title: 'Sayyid & Shaykh',
    category: 'AI Automation',
    description:
      'A modern, responsive website for a law firm featuring an AI powered chatbot to assist visitors with legal inquiries and services.',
    image: '/our-work/sayyid-shaykh.png',
    link: 'https://sayyidandshaykh.com/',
    featured: true,
  },
  {
    id: 'sindh-education-dashboard',
    title: 'Sindh Education Dashboard',
    category: 'Website Development',
    description:
      'Advanced monitoring dashboard built for the School Education & Literacy Department, Sindh to track and manage cases, store PDFs and reports, and monitor district-level education metrics in real time.',
    image: '/our-work/sindh-education-dashboard.png',
    link: 'https://seldlegaldashboard.com/',
    featured: true,
  },
  {
    id: 'emergent-enterprise',
    title: 'Emergent Enterprise',
    category: 'Website Development',
    description:
      'Comprehensive web application for managing enterprise resources with seamless integration and user-friendly interface.',
    image: '/our-work/emergent-enterprise.png',
    link: 'https://emergententerprise.net/',
  },
  {
    id: 'yaarhaulage-limited',
    title: 'YAARHAULAGE Limited',
    category: 'Website Development',
    description:
      'A simple yet effective website for a haulage company to showcase services and facilitate contact.',
    image: '/our-work/yaarhaulage-limited.png',
    link: 'https://yaarhaulagelimited.com/',
  },
  {
    id: 'ai-solution-academy',
    title: 'AI Solution Academy',
    category: 'Website Development',
    description:
      'An educational platform for AI courses with registration and learning management.',
    image: '/our-work/ai-solution-academy.png',
    link: 'https://aisolutionpk.com/',
  },
  {
    id: 'ajwa-tutors',
    title: 'Ajwa Tutors',
    category: 'Website Development',
    description:
      'A modern, responsive website for a tutoring platform to showcase services and facilitate contact.',
    image: '/our-work/ajwa-tutors.png',
    link: 'https://ajwatutors.com/',
  },
  {
    id: 'innox',
    title: 'Innox',
    category: 'Website Development',
    description:
      'Innox Private Limited is a MEP contractor specialised in Mechanical, Electrical and Plumbing systems in construction projects.',
    image: '/our-work/innox.png',
    link: 'https://innoxes.com/',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
