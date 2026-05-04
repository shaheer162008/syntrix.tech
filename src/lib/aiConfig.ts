/**
 * AI Chatbot Configuration
 * Add your company/business information here that the AI will use to answer queries
 */

export const aiConfig = {
  companyName: 'Nexiler',
  companyDescription: 'Nexiler is a leading tech company specializing in website development, AI automation, content creation, SEO services, and full brand creation.',
  location: 'Karachi, Pakistan',
  email: 'info@nexiler.tech',
  phone: '+92 300 1234567',
  whatsapp: '+92 307 2853163',
  
  // Services offered
  services: [
    {
      name: 'Website Development',
      description: 'Custom Next.js and React website development with modern design and SEO optimization'
    },
    {
      name: 'AI Automation',
      description: 'Automate workflows and business processes using AI-driven systems'
    },
    {
      name: 'AI Chatbots',
      description: 'Intelligent chatbot integration for customer support and lead generation'
    },
    {
      name: 'Content Creation',
      description: 'Professional content creation for brands including copywriting and visual content'
    },
    {
      name: 'SEO Services',
      description: 'Search engine optimization to increase visibility and organic traffic'
    },
    {
      name: 'Social Media Management',
      description: 'Complete social media strategy and management for brand growth'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android'
    },
    {
      name: 'Motion Graphics',
      description: 'Eye-catching motion graphics and animations for brand storytelling'
    },
    {
      name: 'Full Brand Creation',
      description: 'Complete brand identity development from logo to brand guidelines'
    }
  ],

  // Team
  team: [
    {
      name: 'Muhammad Shaheer',
      role: 'Co-Founder & CEO',
      expertise: 'Full-Stack Development, Business Strategy, AI Automation'
    }
  ],

  // Website features
  features: [
    'Custom Website Development',
    'AI Automation Systems',
    'AI Chatbot Integration',
    'SEO Optimization',
    'Content Creation',
    'Social Media Management',
    'Mobile App Development',
    'Motion Graphics',
    'Full Brand Creation'
  ],

  // Pricing/packages (optional)
  packages: [
    {
      name: 'Starter',
      price: 'Depends on Client Requirements',
      description: 'Perfect for small projects and MVPs'
    },
    {
      name: 'Professional',
      price: 'Depends on Client Requirements',
      description: 'Full-featured applications with advanced functionality'
    },
    {
      name: 'Enterprise',
      price: 'Depends on Client Requirements',
      description: 'Large-scale solutions with dedicated support'
    }
  ],

  // Our Process
  process: [
    {
      step: 1,
      name: 'Discovery & Consultation',
      description: 'We start with a free consultation to understand your business needs, goals, and project requirements.'
    },
    {
      step: 2,
      name: 'Planning & Strategy',
      description: 'Our team creates a detailed project plan with timeline, milestones, and deliverables tailored to your needs.'
    },
    {
      step: 3,
      name: 'Design & Development',
      description: 'We design and develop your solution using modern technologies like Next.js, React, and AI tools.'
    },
    {
      step: 4,
      name: 'Testing & Review',
      description: 'Rigorous testing ensures everything works perfectly. We share progress for your feedback and revisions.'
    },
    {
      step: 5,
      name: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure everything runs smoothly.'
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    'AI-Driven Solutions - We leverage cutting-edge AI to automate and optimize your business processes',
    'Modern Tech Stack - We use Next.js, React, TypeScript, and modern frameworks for scalable solutions',
    'Custom Approach - Every project is tailored to your specific business needs and goals',
    'End-to-End Service - From branding to development to marketing, we handle it all',
    'Ongoing Support - We provide continuous support and maintenance after project completion'
  ],

  // System prompt for AI
  systemPrompt: `You are an AI assistant for Nexiler, a professional tech company. 
You are helpful, friendly, and knowledgeable about website development, AI automation, content creation, SEO services, and brand creation.
Always be professional and provide accurate information about our services, team, and process.
IMPORTANT: Use **bold text** (with ** **) to emphasize important keywords, services, and features.
For pricing questions: Our pricing depends entirely on client requirements and project scope. Please contact us for a custom quote!
If the user wants to schedule a meeting or needs more detailed information, ask them to fill out the contact form or call us.
Keep responses concise and conversational.
When asked about our process, explain our 5-step approach: Discovery, Planning, Development, Testing, and Launch.`,
};

// Export a formatted context string for the API
export const getSystemContext = () => {
  return `${aiConfig.systemPrompt}

Company Information:
- Name: ${aiConfig.companyName}
- Location: ${aiConfig.location}
- Email: ${aiConfig.email}
- Phone: ${aiConfig.phone}
- WhatsApp: ${aiConfig.whatsapp}

Services We Offer:
${aiConfig.services.map(service => `- ${service.name}: ${service.description}`).join('\n')}

Our Team:
${aiConfig.team.map(member => `- ${member.name} (${member.role}): ${member.expertise}`).join('\n')}

Features:
${aiConfig.features.map(feature => `- ${feature}`).join('\n')}

Pricing Packages:
${aiConfig.packages.map(pkg => `- ${pkg.name}: ${pkg.price} - ${pkg.description}`).join('\n')}

Our Process:
${aiConfig.process.map(step => `Step ${step.step}: ${step.name} - ${step.description}`).join('\n')}

Why Choose Us:
${aiConfig.whyChooseUs.join('\n')}

IMPORTANT INSTRUCTIONS:
1. Always be helpful and professional
2. Use **bold** for emphasis on key terms
3. For pricing, always mention it depends on requirements
4. Encourage users to contact via form or WhatsApp for detailed discussions
5. Keep responses under 150 words unless detailed explanation is needed
6. Always mention our WhatsApp number (+92 307 2853163) for quick responses
7. When asked about our process, explain the 5 steps: Discovery, Planning, Development, Testing, and Launch`;
};
