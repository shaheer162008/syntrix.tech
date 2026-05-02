"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Users,
  Code2,
  Layers,
  DollarSign,
  TrendingUp,
} from "lucide-react";

// --- Animation variants for Framer Motion ---
const containerVariants: any = {
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

// --- Real Company Feature Cards ---
const FastDeliveryCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer flex h-full flex-col font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardHeader className="relative z-10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/5">
        <Zap className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white">Fast Delivery</CardTitle>
      <CardDescription className="font-mono text-sm text-white/90">
        Quick turnaround times without compromising quality. Get your projects delivered faster with our streamlined workflow.
      </CardDescription>
    </CardHeader>
  </Card>
);

const SupportCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white">24/7 Support</CardTitle>
            <CardDescription className="font-mono text-sm text-white/90">Always Available</CardDescription>
          </div>
          <Badge variant="outline" className="border-white/10 text-white font-sans whitespace-nowrap shrink-0">
            Round the Clock
          </Badge>
        </div>
        <div>
          <span className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white">24/7</span>
        </div>
      </div>
      <div className="flex justify-between text-xs sm:text-sm font-mono font-medium text-white/90 mt-4">
        <span>Customer Support</span>
        <span>Quick Response</span>
      </div>
    </CardContent>
  </Card>
);

const CustomSolutionsCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-col justify-end p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/5">
        <Code2 className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white mb-2">
        Custom Solutions
      </CardTitle>
      <CardDescription className="font-mono text-sm text-white/90">
        Tailored solutions built around your specific business goals, not generic templates.
      </CardDescription>
    </CardContent>
  </Card>
);

const ROICard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer relative h-full w-full overflow-hidden font-sans">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full items-center justify-center p-6">
      <span className="text-7xl font-extrabold text-white/90 tracking-tighter">ROI</span>
    </CardContent>
  </Card>
);

const ModernTechCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-wrap items-center justify-between gap-4 p-6">
      <div className="space-y-2">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/5">
          <Layers className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white">Modern Tech Stack</CardTitle>
        <CardDescription className="font-mono text-sm text-white/90">
          Latest technologies and frameworks for optimal performance.
        </CardDescription>
      </div>
    </CardContent>
  </Card>
);

const DedicatedManagerCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer flex h-full flex-col font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardHeader className="relative z-10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/5">
        <Users className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white">Dedicated Manager</CardTitle>
      <CardDescription className="font-mono text-sm text-white/90">
        Your personal project manager ensures seamless communication and on-time delivery.
      </CardDescription>
    </CardHeader>
  </Card>
);

const ScalableCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white">
          Scalable Solutions
        </CardTitle>
        <CardDescription className="font-mono text-sm text-white/90 mt-2">Grows with You</CardDescription>
      </div>
      <div className="flex -space-x-2 overflow-hidden mt-4">
        <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-black border border-white/5 flex items-center justify-center">
          <span className="text-xs text-white">S</span>
        </div>
        <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-black border border-white/5 flex items-center justify-center">
          <span className="text-xs text-white">M</span>
        </div>
        <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-black border border-white/5 flex items-center justify-center">
          <span className="text-xs text-white">L</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TransparentPricingCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-wrap items-center justify-between gap-4 p-6">
      <div className="space-y-2">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/5">
          <DollarSign className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white">Transparent Pricing</CardTitle>
        <CardDescription className="font-mono text-sm text-white/90">
          No hidden costs. Clear, upfront pricing for all services.
        </CardDescription>
      </div>
    </CardContent>
  </Card>
);

// --- The Core Bento Grid Layout Component ---
export const BentoGridShowcase = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      className={cn(
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3",
        "md:grid-rows-3",
        "auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {/* Slot1: Fast Delivery (Spans 2 rows) */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-3">
        <FastDeliveryCard />
      </motion.div>

      {/* Slot2: 24/7 Support */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <SupportCard />
      </motion.div>

      {/* Slot3: ROI */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <ROICard />
      </motion.div>

      {/* Slot4: Custom Solutions */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <CustomSolutionsCard />
      </motion.div>

      {/* Slot5: Modern Tech Stack */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <ModernTechCard />
      </motion.div>

      {/* Slot6: Dedicated Manager (Spans 2 cols) */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-2 md:row-span-1">
        <DedicatedManagerCard />
      </motion.div>
    </motion.section>
  );
};

// --- The Default Exported Section Wrapper ---
export default function Features() {
  return (
    <div id="features" className="relative z-10 pb-8 sm:pb-12 pt-4 sm:pt-8 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 font-sans">
          <div className="max-w-2xl text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md lg:mb-6"
            >
              <Zap className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white font-sans">
                Why Choose Us
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4">
              Our Core Features
            </h2>
            <p className="text-lg sm:text-xl text-white/90 font-medium text-balance font-mono">
              Experience the difference with our premium features designed for your success
            </p>
          </div>
        </div>

        <BentoGridShowcase />
      </div>
    </div>
  );
}
