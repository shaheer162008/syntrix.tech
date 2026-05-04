"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ArrowUpRight,
  Laptop,
  Cpu,
  MessageSquareText,
  Palette,
  Megaphone,
  TrendingUp,
  Smartphone,
  Film,
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const servicesList = [
  {
    title: "Website Development",
    description: "High-performance, responsive websites built to convert and scale your digital presence.",
    icon: <Laptop className="h-6 w-6 text-white" />,
    colSpan: "md:col-span-2 md:row-span-1",
    slug: "website-development",
  },
  {
    title: "AI Automation Setup",
    description: "Automate repetitive tasks and streamline your operations with custom workflows.",
    icon: <Cpu className="h-6 w-6 text-white" />,
    colSpan: "md:col-span-1 md:row-span-1",
    slug: "ai-automation",
  },
  {
    title: "AI Chatbots",
    description: "Integrate intelligent bots for 24/7 customer support and lead generation.",
    icon: <img src="/icons/chatbot.svg" alt="Chatbot" className="h-8 w-8" />,
    colSpan: "md:col-span-1 md:row-span-1",
    slug: "ai-chatbots",
  },
  {
    title: "Full Brand Creation",
    description: "Stand out with a modern, cohesive brand identity and logo design.",
    icon: <img src="/icons/image.svg" alt="Brand Creation" className="h-8 w-8" />,
    colSpan: "md:col-span-1 md:row-span-1",
    slug: "full-brand-creation",
  },
  {
    title: "Social Media Ads",
    description: "Targeted, high-ROI ad campaigns to drive immediate traffic and consistent leads.",
    icon: <Megaphone className="h-6 w-6 text-white" />,
    colSpan: "md:col-span-2 md:row-span-1",
    slug: "social-media-management",
  },
  {
    title: "SEO Optimization",
    description: "Dominate search rankings and earn valuable long-term organic traffic.",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    colSpan: "md:col-span-1 md:row-span-1",
    slug: "seo-services",
  },
  {
    title: "Mobile App Dev",
    description: "Native and cross-platform mobile apps for seamless iOS and Android experiences.",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    colSpan: "md:col-span-2 md:row-span-1",
    slug: "mobile-app-dev",
  },
  {
    title: "Motion Graphics",
    description: "Engaging video editing and dynamic animations to tell your brand story.",
    icon: <Film className="h-6 w-6 text-white" />,
    colSpan: "md:col-span-2 md:row-span-1",
    slug: "motion-graphics",
  },
];

export function ServicesBentoGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4 auto-rows-[minmax(160px,auto)] relative z-20">
      {servicesList.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={service.colSpan}
          whileHover={{ y: -8, scale: 1.01 }}
        >
          <Link href={`/services/${service.slug}`} className="block h-full">
            <Card className="relative rounded-[2rem] h-full flex flex-col font-sans group overflow-hidden bg-card/60 backdrop-blur-sm border-primary/10 shadow-[0_0_15px_-5px_rgba(168,85,247,0.1)] bg-gradient-to-b from-primary/5 to-transparent hover:border-primary/60 transition-all duration-500 ease-out  hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] cursor-pointer">
              {/* Subtle Gradient Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
              
              <CardHeader className="flex-1 p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black border border-primary/10 shadow-[0_0_15px_-5px_rgba(168,85,247,0.1)] bg-gradient-to-b from-primary/5 to-transparent group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-all duration-500 ease-out">
                    {service.icon}
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black border border-primary/10 shadow-[0_0_15px_-5px_rgba(168,85,247,0.1)] bg-gradient-to-b from-primary/5 to-transparent opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-mono font-extrabold tracking-tighter text-white group-hover:text-primary drop-shadow-[0_0_2px_rgba(168,85,247,0.3)] transition-colors duration-300">
                  {service.title.split(" ").length > 1 ? <>{service.title.split(" ").slice(0, -1).join(" ")} <span className="text-primary">{service.title.split(" ").slice(-1)}</span></> : service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground/90 font-mono font-medium leading-relaxed mt-2 group-hover:text-muted-foreground transition-colors duration-300 text-white/90">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default function Services({ hideViewAll = false }: { hideViewAll?: boolean }) {
  return (
    <div className="relative z-10 py-10 sm:py-16 border-b border-border/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 font-sans">
          <div className="max-w-2xl text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md lg:mb-6"
            >
              <Cpu className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white font-sans">
                Expertise
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono">
              End-to-end digital solutions designed to elevate your brand, automate your workflows, and drive measurable ROI.
            </p>
          </div>
          
          {!hideViewAll && (
            <div className="flex-shrink-0 relative z-20">
              <Link href="/services">
                <Button variant="secondary" className="rounded-full font-sans font-bold tracking-tight bg-secondary border-white/10 group hover:bg-secondary/80">
                  View all services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        <ServicesBentoGrid />
      </div>
    </div>
  );
}