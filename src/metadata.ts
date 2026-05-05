import type { Metadata } from "next";

export const siteConfig = {
  name: "Nexiler",
  description:
    "Empowering businesses with intelligent automation, stunning websites, and relentless performance. We build premium web applications, automate workflows with AI, and scale your digital presence.",
  url: "https://nexiler.tech",
  ogImage: "https://nexiler.tech/og-image.jpg",
  links: {
    github: "#",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    email: "mailto:hello@nexiler.tech",
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
  "Nexiler",
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
    creator: "@nexiler",
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
    "Nexiler empowers businesses with intelligent automation, stunning websites, and relentless performance. Expert Next.js development, AI automation, SEO, and digital solutions.",
};

export const servicesMetadata: Metadata = {
  ...baseMetadata,
  title: "Services | Nexiler",
  description:
    "Smart services that move your business forward. Web design, workflow automation, organic growth, and AI systems built around your goals. Next.js, React, AI/ML, SEO.",
};

export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About Us | Nexiler",
  description:
    "Meet the team behind Nexiler. We're passionate about building honest partnerships that drive real results through advanced technology and intelligent automation.",
};

export const ourWorkMetadata: Metadata = {
  ...baseMetadata,
  title: "Our Work | Nexiler",
  description:
    "Explore our portfolio of successful projects. See how we've helped businesses transform with custom web applications, AI automation, and digital strategies.",
};

export const termsOfServiceMetadata: Metadata = {
  ...baseMetadata,
  title: "Terms of Service | Nexiler",
  description:
    "Legal agreement and terms of service for Nexiler. Learn about our service scope, payment terms, intellectual property rights, and client responsibilities.",
  keywords: [
    ...keywords,
    "terms of service",
    "legal agreement",
    "service terms",
    "Nexiler terms",
    "service contract",
  ],
};