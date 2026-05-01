"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2, UserCircle, Rocket } from "lucide-react";

const audiences = [
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: "Ambitious Startups",
    description: "Launch with a powerful, scalable foundation. We build MVPs, automate early workflows, and create brand identities that attract investors and early adopters instantly."
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Established Businesses",
    description: "Stop losing time to manual tasks. We integrate AI chatbots and advanced automation to cut operational costs, while refreshing your digital presence to dominate competitors."
  },
  {
    icon: <UserCircle className="h-6 w-6 text-primary" />,
    title: "Creators & Individuals",
    description: "Turn your personal brand into a scalable business. From high-converting portfolio websites to automated lead generation, we give you the tools to monetize your audience."
  }
];

export function ServicesImportance() {
  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 relative z-20 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
            Who Needs Our Services?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium leading-relaxed font-mono">
            Whether you are a solo visionary or an enterprise operating at scale, staying competitive requires modern technology. Our solutions are designed to eliminate friction and accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/30 border border-white/5 hover:border-white/10 p-8 rounded-[2rem] backdrop-blur-sm hover:bg-card/60 transition-colors group"
            >
              <div className="size-14 rounded-full bg-black border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-mono">
                {item.description}
              </p>
              
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Custom-built solutions
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  AI-driven efficiency
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Scalable performance
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
