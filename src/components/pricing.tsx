"use client";

import { motion } from "framer-motion";
import { Check, Star, Gem, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for personal projects and early-stage startups needing a solid foundation.",
    price: "$999",
    features: [
      "Custom Website (up to 5 pages)",
      "Basic SEO Setup",
      "Mobile Responsive Design",
      "1 Month Free Support",
      "Contact Form Integration",
    ],
    popular: false,
    icon: <Zap className="w-5 h-5 text-foreground" />,
    buttonVariant: "secondary" as const,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses looking for advanced automation and strong presence.",
    price: "$2,499",
    features: [
      "Custom Website (up to 10 pages)",
      "Advanced SEO Optimization",
      "AI Chatbot Integration",
      "Basic Automation Workflows",
      "3 Months Free Support",
      "Analytics Dashboard",
    ],
    popular: true,
    icon: <Star className="w-5 h-5 text-foreground fill-foreground" />,
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "Complete ecosystem with complex systems, full branding, and scalable AI solutions.",
    price: "Custom",
    features: [
      "Unlimited Web Pages & Web App",
      "Full Brand Identity Creation",
      "Complex AI Automations (Zapier/Make)",
      "Dedicated Social Media Ads",
      "Priority 24/7 Support",
      "Custom CRM Development",
    ],
    popular: false,
    icon: <Gem className="w-5 h-5 text-foreground" />,
    buttonVariant: "secondary" as const,
  }
];

export default function Pricing() {
  return (
    <section id="packages" className="relative w-full bg-transparent py-12 sm:py-16 md:py-24 font-sans z-10">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blur-[100px] bg-[conic-gradient(from_90deg,theme(colors.zinc.800),theme(colors.zinc.900),theme(colors.zinc.700),theme(colors.zinc.800))]" />
      </div>

<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 font-sans">
            <div className="max-w-2xl text-left flex flex-col items-start">
              <motion.div
                initial={{ opacity: 1, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-primary/20 bg-primary/5 backdrop-blur-md text-primary shadow-[0_0_15px_-5px_rgba(168,85,247,0.2)] lg:mb-6"
              >
                <Gem className="w-4 h-4 text-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                  Pricing Plans
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
                Transparent <span className="text-primary">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono">
                Choose the perfect plan tailored to accelerate your business growth. No hidden fees, just value.
              </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 1, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col h-full rounded-[2.5rem] p-6 sm:p-8 md:p-10 transition-all duration-300 ${
                plan.popular 
                ? "bg-secondary/40 border border-primary/40 shadow-[0_0_40px_-5px_rgba(168,85,247,0.3)] bg-gradient-to-br from-primary/10 to-transparent transform md:-translate-y-4" 
                : "bg-card/40 border border-primary/10 hover:border-primary/30 shadow-[0_0_20px_-5px_rgba(168,85,247,0.1)] bg-gradient-to-b from-primary/5 to-transparent hover:bg-card/60"
              } backdrop-blur-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-lg border border-primary/20">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{plan.name.split(" ").length > 1 ? <>{plan.name.split(" ")[0]} <span className="text-primary">{plan.name.split(" ").slice(1).join(" ")}</span></> : plan.name}</h3>

                </div>
                <p className="text-sm text-muted-foreground/90 font-mono min-h-[3rem]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-foreground">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground font-medium">/project</span>}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full py-6 rounded-full font-bold text-base transition-all duration-300 ${
                    plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25"
                    : "bg-background hover:bg-white/5 border border-white/10 text-foreground"
                  }`}
                >
                  Get Started With {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
