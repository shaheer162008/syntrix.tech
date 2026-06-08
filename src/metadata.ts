import type { Metadata } from "next";

export const siteConfig = {
  name: "Syntrix Solutions",
  description:
    "Empowering businesses with intelligent automation, stunning websites, and relentless performance. We build premium web applications, automate workflows with AI, and scale your digital presence.",
  url: "https://syntrixsolutions.tech",
  ogImage: "https://syntrixsolutions.tech/syntrix-solutions.png",
  links: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/company/syntrix-solutions",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com/syntrix.solutions/",
    email: "mailto:info@syntrixsolutions.tech",
  },
};

export const keywords = [
  "web development",
  "Next.js development",
  "React development",
  "AI automation",
  "workflow automation",
  "mobile app development",
  "iOS app development",
  "Android app development",
  "SEO services",
  "digital marketing",
  "social media management",
  "content creation",
  "UI/UX design",
  "custom software development",
  "business automation",
  "AI integration",
  "chatbot development",
  "performance marketing",
  "brand identity",
  "Syntrix Solutions",
  "software development company",
  "tech solutions",
  "digital transformation",
];

export const baseMetadata: Metadata = {
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
    },
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@syntrixsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: {
    default: `${siteConfig.name} - Intelligent Automation & Web Development`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Syntrix Solutions empowers businesses with intelligent automation, stunning websites, and relentless performance. Expert Next.js development, AI automation, SEO, and digital solutions.",
};

export const servicesMetadata: Metadata = {
  ...baseMetadata,
  title: "Services | Syntrix Solutions",
  description:
    "Smart services that move your business forward. Web design, workflow automation, organic growth, and AI systems built around your goals. Next.js, React, AI/ML, SEO.",
};

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About Us | Syntrix Solutions",
  description:
    "Meet the team behind Syntrix Solutions. We're passionate about building honest partnerships that drive real results through advanced technology and intelligent automation.",
};

export const ourWorkMetadata: Metadata = {
  ...baseMetadata,
  title: "Our Work | Syntrix Solutions",
  description:
    "Explore our portfolio of successful projects. See how we've helped businesses transform with custom web applications, AI automation, and digital strategies.",
};

export const termsOfServiceMetadata: Metadata = {
  ...baseMetadata,
  title: "Terms of Service | Syntrix Solutions",
  description:
    "Legal agreement and terms of service for Syntrix Solutions. Learn about our service scope, payment terms, intellectual property rights, and client responsibilities.",
  keywords: [
    ...keywords,
    "terms of service",
    "legal agreement",
    "service terms",
    "Syntrix Solutions terms",
    "service contract",
  ],
};