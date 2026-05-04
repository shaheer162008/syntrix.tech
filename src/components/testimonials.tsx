"use client";

import { motion, Variants } from "framer-motion";
import { Star, CheckCircle2, Zap, Globe, Shield } from "lucide-react";
import { companyConfig } from "../../company.config";

const trustStats = [
  { number: "50+", label: "Trusted Clients" },
  { number: "99%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
  { number: "100%", label: "On-Time Delivery" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate w-full bg-transparent pt-10 sm:pt-16 pb-10 sm:pb-16 overflow-hidden font-sans z-10">
      <div className="mx-auto px-6 md:px-12 max-w-[85rem] relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
              Trusted Worldwide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
            Trusted by <span className="text-primary">50+ Clients</span> Worldwide
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono max-w-3xl mx-auto">
            We deliver excellence with cutting-edge technology. Our SEO-optimized solutions help businesses scale faster and smarter.
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {trustStats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="text-center p-6 rounded-[2rem] bg-card/40 border border-white/5 backdrop-blur-sm hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}