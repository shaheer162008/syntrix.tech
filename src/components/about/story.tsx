"use client";

import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="relative w-full bg-transparent text-foreground py-20 md:py-28 font-sans px-6 md:px-12 isolate overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto flex w-full max-w-4xl flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md self-start">
            <span className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
              Our Journey
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-balance mb-4 text-left">
            How It Started
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-mono text-left leading-relaxed">
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                Before Nexiler, we were all working individually, freelancing, taking on projects solo, and doing our best to help clients one at a time. But Muhammad Shaheer, our founder, had a bigger vision.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                Since 2023, Shaheer dreamed of building a company that could help people internationally, a team that combines skills in web development, AI automation, SEO, and content creation to deliver complete solutions. Not just websites or apps, but real business growth.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                In 2025, that vision became reality. Muhammad Shaheer and Muhammad Saim formed Team Nexiler. Now, instead of working alone, we work as one team with one goal: to grow your business and solve your problems.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                Behind Nexiler is a founding team that leads with purpose. From strategy to execution, every decision is made together with a focus on quality, growth, and long-term impact for our clients.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                Our mission is simple: provide solutions that actually work and save you time. We handle the tech so you can focus on what you do best.
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6">
              <p>
                We are not here just to make money. We want to solve real problems and help clients reach meaningful outcomes and grow the way they envision. We focus on lasting impact, honest advice, and building tools that make work easier for people.
              </p>
            </div>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-card/80 p-5 shadow-[0_16px_60px_rgba(0,0,0,0.16)] backdrop-blur-md font-sans text-sm text-foreground">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Founder's Note
              </div>
              <div className="italic text-muted-foreground leading-relaxed">
                Muhammad Shaheer (Founder) and Muhammad Saim (Co-Founder) started Nexiler together. Everyone who joins becomes a partner in our mission, not just a team member. We share the same values, vision, and commitment to excellence.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}