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
                Syntrix Solutions was founded by three partners <strong className="text-white">Muhammad Shaheer</strong>, <strong className="text-white">Muhammad Saim</strong>, and <strong className="text-white">Emroze Jawed</strong>, who came together with a shared vision to build something exceptional. Shaheer, driven by a passion for intelligent automation and premium digital experiences, joined forces with Saim and Emroze, both seasoned full stack developers who had already been collaborating as freelancers since 2023. Recognizing their combined strengths across automation, development, and client solutions, the trio formalized their partnership to create Syntrix Solutions, a firm dedicated to delivering high quality web and automation services to global clients.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}