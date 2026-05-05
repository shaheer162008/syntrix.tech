import { teamMembers } from './team';

export const aiConfig = {
  companyName: 'Nexiler',
  companyDescription: 'Nexiler is a premium global tech agency based in Pakistan, serving clients worldwide. We specialize in advanced Next.js website development, complete brand creation, AI automation, AI chatbots, search engine optimization (SEO), and highly engaging motion graphics.',
  location: 'Karachi, Pakistan (Serving Globally)',
  email: 'info@nexiler.tech',
  phone: '+92 307 2853163',
  whatsapp: '+92 307 2853163',
  
  services: [
    {
      name: 'Website Development',
      description: 'Custom React & Next.js web applications, focusing on conversion-driven UI/UX, blindingly fast performance, and robust architectures.'
    },
    {
      name: 'AI Automation',
      description: 'Streamlining business workflows with intelligent API integrations, Zapier/Make automations, reducing overhead by up to 80%.'
    },
    {
      name: 'AI Chatbots',
      description: 'Custom-trained large language models deployed as 24/7 intelligent agents for lead capture, customer service, and real-time support.'
    },
    {
      name: 'Content Creation',
      description: 'Engaging, SEO-optimized copywriting, visual content, and technical writing designed to convert visitors into loyal clients.'
    },
    {
      name: 'SEO Services',
      description: 'Technical and on-page Search Engine Optimization ensuring high organic rankings, meta-tag restructuring, and blazing fast site speeds.'
    },
    {
      name: 'Social Media Management',
      description: 'Holistic management of Instagram, LinkedIn, and Twitter to build brand authority and trust on a global scale.'
    },
    {
      name: 'Mobile App Development',
      description: 'High-performance native and cross-platform apps (iOS & Android) with intuitive interfaces and scalable backends.'
    },
    {
      name: 'Motion Graphics',
      description: 'Premium animations and explainer videos that instantly grab attention and effectively communicate complex tech products.'
    },
    {
      name: 'Full Brand Creation',
      description: 'Designing brand identities from scratch (logos, color palettes, typography, brand guidelines) resulting in a unified premium aesthetic.'
    }
  ],

  team: teamMembers.map(m => ({
    name: m.name,
    role: m.role,
    expertise: m.description
  })),

  features: [
    'Global Clientele (Trusted by 50+ Clients Worldwide)',
    'Next.js 15 & React 19 Architectures',
    'TailwindCSS & Framer Motion UI',
    '24/7 Dedicated Support',
    'Agile & Transparent Development Cycles'
  ],

  packages: [
    {
      name: 'Custom',
      price: 'Quoted per project',
      description: 'We do not believe in one-size-fits-all. Every solution is custom engineered to maximize ROAS.'
    }
  ],

  process: [
    {
      step: 1,
      name: 'Discovery & Consultation',
      description: 'Deep-dive into your business goals, target audience, and exact engineering requirements via a free consultation call.'
    },
    {
      step: 2,
      name: 'UI/UX & Branding',
      description: 'Drafting high-fidelity Figma mockups, brand guidelines, and an interactive prototype for approval.'
    },
    {
      step: 3,
      name: 'Core Engineering',
      description: 'Bringing the designs to life with modern code (Next.js, Node.js), integrating AI systems and backends.'
    },
    {
      step: 4,
      name: 'QA & Optimization',
      description: 'Rigorous bug-hunting, SEO payload injections, page-speed optimizations, and mobile responsiveness checks.'
    },
    {
      step: 5,
      name: 'Global Deployment',
      description: 'Launching on premium edges like Vercel or AWS, coupled with 24/7 post-launch maintenance.'
    }
  ],

  whyChooseUs: [
    'Premium Quality Over Volume: We only build high-end, scalable digital real estate.',
    'AI-First Approach: Using automation to make your business autonomous and efficient.',
    'Global Reach: Our systems handle traffic and operations continuously, worldwide.',
    'Founders Involvement: You communicate directly with top-tier engineers constantly, no middle-men.'
  ],

  systemPrompt: `You are Nexiler's core AI assistant. Nexiler is a highly premium technology agency serving globally.
Your task is to warmly and professionally assist website visitors, convert them into leads, and provide deep insights about Nexiler's capabilities.
Always present Nexiler as an elite, high-end agency. 

Information you possess:
- Nexiler provides 9 core services: Website Development, AI Automation, AI Chatbots, Content Creation, SEO Services, Social Media Management, Mobile App Development, Motion Graphics, Full Brand Creation.
- Nexiler was founded by Muhammad Shaheer (Founder & CEO), with co-founders Muhammad Saim and Syed Muhammad Taha.
- Nexiler has satisfied over 50+ global clients.
- If asked about pricing, DO NOT give direct numbers. Explain that every project is uniquely scoped to provide maximum ROI, and suggest they book a free consultation for an exact quote.
- Our primary tech stack: Next.js 15, React 19, TailwindCSS, Framer Motion, Node.js.
- Contact: Email (info@nexiler.tech) or WhatsApp (+92 307 2853163). Encourage users to use the contact page.
- Location: Karachi, Pakistan (Serving Globally).
- Tone: Extremely professional, slightly tech-savvy, polite, and conversion-focused. Be crisp, concise (do not write massive walls of text unless asked).
- Use Markdown **bolding** to emphasize our services or unique traits.`,
};

export const getSystemContext = () => {
  return `${aiConfig.systemPrompt}

**Nexiler Master Database:**
- Name: ${aiConfig.companyName}
- Tagline: ${aiConfig.companyDescription}
- Operations: ${aiConfig.location}
- Direct Lines: ${aiConfig.email} | ${aiConfig.whatsapp}
- Founder: ${aiConfig.team[0].name} (${aiConfig.team[0].role})
- Co-Founders: ${aiConfig.team[1].name}, ${aiConfig.team[2].name}

**Detailed Services List:**
${aiConfig.services.map(s => `- ${s.name}: ${s.description}`).join('\n')}

**Our Blueprint to Success:**
${aiConfig.process.map(p => `${p.step}. ${p.name}: ${p.description}`).join('\n')}

**Differentiators (Why Us):**
${aiConfig.whyChooseUs.map(w => `- ${w}`).join('\n')}
`;
};
