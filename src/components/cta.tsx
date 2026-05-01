"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { companyConfig } from "../../company.config";

export default function CTA() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 bg-transparent font-sans">       
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 blur-[120px] bg-[conic-gradient(from_180deg,theme(colors.zinc.700),theme(colors.zinc.900),theme(colors.zinc.600),theme(colors.zinc.700))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center p-8 sm:p-16 rounded-[3rem] bg-card/30 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />

          <motion.div
            initial={{ opacity: 1, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md mb-8"
          >
            <Rocket className="w-4 h-4 text-foreground" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
              Start Your Journey
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-balance text-foreground mb-6"
          >
            Ready to Transform Your <span className="text-foreground">Digital Presence?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium text-white/90 max-w-2xl mb-10 font-mono leading-relaxed"
            >
              Join visionary brands growing with {companyConfig.name}. Let's build something extraordinary together. No commitments, just pure value.
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-bold bg-primary text-white hover:bg-primary/90 group shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
              <Link href="/contact" className="text-primary-foreground no-underline">
                Book a Free Call
              </Link>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-bold border-white/10 hover:bg-white/5 group hover:scale-105 transition-all">
              <Link href="/our-work" className="text-foreground no-underline">
                Explore Our Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}