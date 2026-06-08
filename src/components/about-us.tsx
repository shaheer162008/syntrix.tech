"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { companyConfig } from "../../company.config";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative isolate w-full bg-transparent text-white px-8 pb-0 pt-8 md:pt-10 md:pb-0 md:px-16 font-sans z-0 overflow-hidden">

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 relative z-10">
        {/* LEFT: Text */}
        <div 
          className="relative mx-auto flex h-120 sm:h-160 w-full max-w-240 items-center justify-center overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 isolate bg-card/80 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.2)]"
        >
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none">
              {/* Inner card hovering above the gradient */}
              <Card className="w-[90%] sm:w-85 z-10 rounded-[2rem] border border-primary/20 bg-[#0a0512]/90 shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] bg-linear-to-b from-primary/5 to-transparent backdrop-blur-xl pointer-events-auto">
            <CardContent className="p-6 font-sans">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">System Boot</span>
                </div>
                <span className="text-xs font-extrabold text-purple-400">92%</span>        
              </div>

              {/* Progress bar */}
              <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10 relative">
                <div className="h-full w-[92%] rounded-full bg-linear-to-r from-purple-400 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-[pulse_2s_ease-in-out_infinite]" />
              </div>

              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Loading intelligent workflows and compiling next generation components...
              </p>
              <p className="text-xs text-white/80 font-semibold mt-3 animate-pulse">
                Your digital ecosystem is almost ready.
              </p>
            </CardContent>
          </Card>
             </div>
          </BackgroundGradientAnimation>
        </div>

        {/* RIGHT: Text Content */}
        <motion.div 
          className="space-y-6 flex flex-col items-start"
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px" }}
        >
          <motion.div
            initial={{ opacity: 1, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-white/10 backdrop-blur-md mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary font-sans">
              Who We Are
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-balance text-white mb-4 font-sans">
              About <span className="text-primary">{companyConfig.name}</span>
          </h2>
          <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
            <div className="prose max-w-none text-sm text-foreground font-mono">
              <p>
                Syntrix Solutions was founded by three partners <strong className="text-white">Muhammad Shaheer</strong>, <strong className="text-white">Muhammad Saim</strong>, and <strong className="text-white">Emroze Jawed</strong>, who came together with a shared vision to build something exceptional. Shaheer, driven by a passion for intelligent automation and premium digital experiences, joined forces with Saim and Emroze, both seasoned full stack developers who had already been collaborating as freelancers since 2023. Recognizing their combined strengths across automation, development, and client solutions, the trio formalized their partnership to create Syntrix Solutions, a firm dedicated to delivering high quality web and automation services to global clients.
              </p>
            </div>
          </div>
          <Button variant="link" className="px-0 pt-4 text-white text-base sm:text-lg tracking-tight font-semibold hover:text-white/80 transition-colors group">
            <Link href="/about#linkedin-section" className="flex items-center">
              Meet the team <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}