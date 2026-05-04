"use client";

import { motion } from "framer-motion";
import { UserPlaceholder } from "@/components/ui/user-placeholder";
import Link from "next/link";
import { LinkedinIcon } from "@/components/icons/mdi-linkedin";

const teamMembers = [
  {
    name: "Muhammad Shaheer",
    role: "Founder & CEO",
    description: "Visionary behind Nexiler, driving innovation across web development and AI automation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", // placeholder
    linkedin: "#",
  },
  {
    name: "Muhammad Saim",
    role: "Co-Founder",
    description: "Strategist focused on business growth, operations, and client success.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", // placeholder
    linkedin: "#",
  },
  {
    name: "Syed Muhammad Taha",
    role: "Co-Founder",
    description: "Expert in creating robust digital ecosystems and leading technical excellence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop", // placeholder
    linkedin: "#",
  },
];

export function AboutTeam() {
  return (
    <section id="linkedin-section" className="relative w-full bg-transparent text-foreground py-16 md:py-24 font-sans px-6 md:px-12 isolate overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full border border-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans">
              The Leadership
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-balance">
            Meet the Minds Behind <span className="text-primary">Nexiler</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground font-mono text-base">
            Every member of our team is fully invested in the mission. We operate not just as employees, but as co-founders committed to bringing real value to our clients internationally.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 items-stretch w-full">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex h-full w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex-col items-center justify-between overflow-hidden rounded-[3rem] border border-border/10 bg-card/80 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-border/30"
            >
              <div className="w-32 h-32 rounded-full border-4 border-background shadow-xl mb-6 relative flex items-center justify-center bg-linear-to-br from-zinc-800 via-zinc-700 to-zinc-900 overflow-hidden">
                <UserPlaceholder className="w-full h-full" />
              </div>
              
              <div className="flex flex-col items-center w-full text-center">
                <h3 className="text-xl font-extrabold tracking-tight mb-1 font-sans text-center text-primary drop-shadow-lg">{member.name}</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 font-sans text-center">{member.role}</p>
                <p className="text-center text-sm text-muted-foreground font-mono mb-5 line-clamp-3 max-w-[90%] mx-auto leading-relaxed">
                  {member.description}
                </p>
                <div className="flex justify-center">
                  <Link href={member.linkedin} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary" target="_blank" aria-label={`LinkedIn profile of ${member.name}`}>
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}