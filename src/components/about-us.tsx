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
          className="relative mx-auto flex h-[30rem] sm:h-[40rem] w-full max-w-[60rem] items-center justify-center overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 isolate bg-card/80 backdrop-blur-md shadow-[0_18px_70px_rgba(0,0,0,0.2)]"
        >
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none">
              {/* Inner card hovering above the gradient */}
              <Card className="w-[90%] sm:w-85 z-10 rounded-[2rem] border border-primary/20 bg-[#0a0512]/90 shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] bg-gradient-to-b from-primary/5 to-transparent shadow-2xl backdrop-blur-xl pointer-events-auto">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B1B1B] border border-white/10 backdrop-blur-md mb-2"
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
                Before Syntrix Solutions, we were all working individually, freelancing, taking on projects solo, and doing our best to help clients one at a time. But <strong className="text-white">Muhammad Shaheer</strong> had a bigger vision.
              </p>

              <p>
                Since 2023, Shaheer dreamed of building a company that could help people internationally, a team that combines skills in web development, AI automation, SEO and content creation to deliver complete solutions. Not just websites or apps, but real business growth.
              </p>

              <p>
                In 2025, that vision became reality. <strong className="text-white">Muhammad Shaheer</strong>, <strong className="text-white">Muhammad Saim</strong>, and <strong className="text-white">Syed Muhammad Taha</strong> formed Syntrix Solutions. Now, instead of working alone, we work as one team with one goal: to grow your business and solve your problems.
              </p>

              <p>
                Behind Syntrix Solutions is a founding team that leads with purpose. From strategy to execution, every decision is made together with a focus on quality, growth and long term impact for our clients.
              </p>

              <p>
                Our mission is simple: provide solutions that actually work and save you time. We handle the tech so you can focus on what you do best.
              </p>

              <p>
                We are not here just to make money. We want to solve real problems and help clients reach meaningful outcomes and grow the way they envision. We focus on lasting impact, honest advice and building tools that make work easier for people.
              </p>

              <p>
                <strong>Founders note</strong>: <strong className="text-white">Muhammad Shaheer</strong>, <strong className="text-white">Muhammad Saim</strong> and <strong className="text-white">Syed Muhammad Taha</strong> started Syntrix Solutions together. Everyone who joins becomes a partner in our mission, not just a team member. We share the same values, vision and commitment to excellence.
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