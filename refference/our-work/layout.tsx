import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Work – Portfolio & Case Studies",
  description:
    "Explore the portfolio of Syntrix Solutions. See our web development, AI automation, and digital marketing projects delivered to clients across 10+ countries.",
  alternates: {
    canonical: "https://syntrixsolutions.com/our-work",
  },
  openGraph: {
    title: "Our Work – Syntrix Solutions Portfolio",
    description:
      "Browse real projects built by Syntrix Solutions including custom websites, dashboards, AI chatbots, and more.",
    url: "https://syntrixsolutions.com/our-work",
    images: [
      {
        url: "/syntrix_solutions-icon.png",
        width: 512,
        height: 512,
        alt: "Syntrix Solutions Portfolio",
      },
    ],
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
