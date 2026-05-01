"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Settings2,
  Command,
  Plus,
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

// --- Helper Components for the Demo ---
const IntegrationCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer flex h-full flex-col font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardHeader className="relative z-10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black border border-white/5">
        <span className="text-3xl" role="img" aria-label="sparkles">
          ✳️
        </span>
      </div>
      <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter">Zapier Integration</CardTitle>
      <CardDescription className="font-mono text-sm text-muted-foreground">
        Unlock effortless automation. Your gateway to effortless automation
        connect your favourite apps, streamline workflows, and supercharge
        productivity with ease.
      </CardDescription>
    </CardHeader>
    <CardFooter className="mt-auto flex items-center justify-between">
      <Button variant="outline" size="sm" className="font-sans font-bold tracking-tight text-xs sm:text-sm">
        <Settings2 className="mr-2 h-4 w-4" />
        Configure
      </Button>
      <Switch
        className="data-[state=checked]:bg-red-500"
        aria-label="Toggle integration"
      />
    </CardFooter>
  </Card>
);

const TrackersCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter">
          Trackers Connected
        </CardTitle>
        <CardDescription className="font-mono text-sm text-muted-foreground">03 Active Integrations</CardDescription>
      </div>
      <div className="flex -space-x-2 overflow-hidden mt-4">
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=100&h=100&fit=crop&q=80"
          alt="User 1"
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?w=100&h=100&fit=crop&q=80"
          alt="User 2"
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
          alt="User 3"
        />
      </div>
    </CardContent>
  </Card>
);

const FocusCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-col justify-between p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter">Focusing</CardTitle>
          <CardDescription className="font-mono text-sm text-muted-foreground">Productivity Analytics</CardDescription>
        </div>
        <Badge variant="outline" className="border-white/10 text-foreground font-sans whitespace-nowrap shrink-0">
          Range Ratio
        </Badge>
      </div>
      <div>
        <span className="text-5xl sm:text-6xl font-extrabold tracking-tighter">42%</span>
      </div>
      <div className="flex justify-between text-xs sm:text-smfont-mono font-medium text-muted-foreground/90 mt-4">
        <span>Maximum of focus</span>
        <span>Monthly Focus</span>
      </div>
    </CardContent>
  </Card>
);

const StatisticCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer relative h-full w-full overflow-hidden font-sans">
    {/* Dotted background */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full items-center justify-center p-6">
      <span className="text-7xl font-extrabold text-foreground/90 tracking-tighter">10X</span>
    </CardContent>
  </Card>
);

const ProductivityCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-col justify-end p-6">
      <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter mb-2">
        Team's Productivity
      </CardTitle>
      <CardDescription className="font-mono text-sm text-muted-foreground">
        Boost your team's efficiency with our next-gen productivity solutions.
      </CardDescription>
    </CardContent>
  </Card>
);

const ShortcutsCard = () => (
  <Card className="relative rounded-[2rem] group overflow-hidden bg-card/60 backdrop-blur-sm border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer h-full font-sans">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 pointer-events-none" />
    <CardContent className="relative z-10 flex h-full flex-wrap items-center justify-between gap-4 p-6">
      <div className="space-y-2">
        <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tighter">Shortcut Keys</CardTitle>
        <CardDescription className="font-mono text-sm text-muted-foreground">
          Faster easier way to access the features.
        </CardDescription>
      </div>
      <div className="flex items-center gap-2">
        {/* Styled div replacing Kbd */}
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/5 bg-black font-sans text-xs font-medium text-muted-foreground">
          <Command className="h-3 w-3" />
        </div>
        <Plus className="h-3 w-3 text-muted-foreground" />
        {/* Styled div replacing Kbd */}
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/5 bg-black font-sans text-xs font-medium text-muted-foreground">
          M
        </div>
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
        // Core grid layout: 1 col on mobile, 3 on desktop
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3",
        // Defines 3 explicit rows on medium screens and up
        "md:grid-rows-3",
        // Use minmax to ensure cards can grow but have a minimum height
        "auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      {/* Slot 1: Integration (Spans 2 rows) */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-3">
        <IntegrationCard />
      </motion.div>

      {/* Slot 2: Trackers */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <TrackersCard />
      </motion.div>

      {/* Slot 3: Statistic */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <StatisticCard />
      </motion.div>

      {/* Slot 4: Focus */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <FocusCard />
      </motion.div>

      {/* Slot 5: Productivity */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-1 md:row-span-1">
        <ProductivityCard />
      </motion.div>

      {/* Slot 6: Shortcuts (Spans 2 cols) */}
      <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="md:col-span-2 md:row-span-1">
        <ShortcutsCard />
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
              <Command className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                Core Capabilities
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Product Features
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono">
              Organize, prioritize and control track your tasks more efficiently
              in our trusted platform
            </p>
          </div>
        </div>

        <BentoGridShowcase />
      </div>
    </div>
  );
}