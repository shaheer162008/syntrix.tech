"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { companyConfig } from "../../company.config";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    company: "Lumina Tech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    quote: `${companyConfig.name} didn't just build us a website; they transformed our entire digital ecosystem. The workflow automations have saved our team hundreds of hours a month.`,
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    company: "Velocity Startups",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
    quote: "The premium feel and incredible performance of our new platform have directly led to a 40% increase in conversions. Their attention to detail is truly unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Aurelius",
    role: "Director of Operations",
    company: "Nexus Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    quote: `Integrating ${companyConfig.name}'s AI automation tools was the best decision we made this year. It's seamless, flawlessly designed, and incredibly intuitive.`,
    rating: 5,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
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
    <section id="testimonials" className="relative isolate w-full bg-transparent pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden font-sans z-10">

      <div className="mx-auto px-6 md:px-12 max-w-[85rem] relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 font-sans">
          <div className="max-w-2xl text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md lg:mb-6"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                Client Stories
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Trusted by the Best in the Business
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono">
              Don't just take our word for it. Hear from the leaders who have revolutionized their operations with {companyConfig.name}.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-8 sm:p-10 rounded-[2.5rem] bg-card/60 backdrop-blur-sm border border-white/5 isolate overflow-hidden transition-all duration-500 hover:border-primary/20 shadow-2xl"
            >
              {/* Glassmorphic overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 -z-10 transform -scale-x-100 group-hover:-rotate-12 transition-transform duration-500" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-sm" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg sm:text-xl font-medium text-foreground mb-8 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
              
              {/* Author Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono font-medium">
                    {testimonial.role}, <span className="text-primary/90">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}