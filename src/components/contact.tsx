"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Send, X, CheckCircle2 } from "lucide-react";
import { companyConfig } from "../../company.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formDta = new FormData(e.currentTarget);
    const data = {
      firstName: formDta.get("firstName") as string,
      lastName: formDta.get("lastName") as string,
      email: formDta.get("email") as string,
      phone: formDta.get("phone") as string,
      message: formDta.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setShowToast(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-24 bg-transparent font-sans z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header - Styled Exactly Like Services */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 font-sans">
          <div className="max-w-2xl text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md lg:mb-6"
            >
              <MessageSquare className="w-4 h-4 text-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                Get In Touch
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Let's create your <span className="text-primary">success story.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground/90 font-medium text-balance font-mono leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, we're here to help you navigate the digital landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Text / Info (Only contacts now) */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start w-full font-sans"
          >

            <div className="space-y-6 w-full md:pr-8">
              <div className="flex items-center gap-4 p-4 sm:p-6 rounded-[2rem] bg-card/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors w-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-[2rem] bg-black border border-white/5 shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">Email Us</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">{companyConfig.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 sm:p-6 rounded-[2rem] bg-card/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors w-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-[2rem] bg-black border border-white/5 shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">Call Us</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">{companyConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 sm:p-6 rounded-[2rem] bg-card/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors w-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-[2rem] bg-black border border-white/5 shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">We're based in</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">{companyConfig.address}</p>
                </div>          
              </div>

 <div className="flex items-center gap-4 p-4 sm:p-6 rounded-[2rem] bg-card/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors w-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-[2rem] bg-black border border-white/5 shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">Quick Response Time</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">We’ll reply within 24 hours via email or phone.</p>
                </div>
              </div>



            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            {/* Soft decorative glow */}

            
            <div className="relative bg-card/60 border border-white/10 rounded-[2rem] p-8 sm:p-10 backdrop-blur-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">First Name</label>
                    <Input name="firstName" placeholder="John" required className="h-11 rounded-[2rem] bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Last Name</label>
                    <Input name="lastName" placeholder="Doe" required className="h-11 rounded-[2rem] bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <Input name="email" type="email" placeholder="john@example.com" required className="h-11 rounded-md bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                    <Input name="phone" type="tel" placeholder="+1 (555) 123-4567" className="h-11 rounded-md bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">How can we help?</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your project..." 
                    required
                    className="min-h-[120px] rounded-[2rem] bg-background/50 border-white/10 focus-visible:ring-foreground resize-none p-4"
                  />
                </div>

                <div className="bg-card/40 backdrop-blur-sm  p-6 mb-6">
                  <h3 className="text-lg font-bold text-white mb-3">What happens next?</h3>
                  <ul className="space-y-3 text-muted-foreground font-mono text-sm">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0 mt-0.5">1</span>
                      <span>We'll contact you within 24 hours to schedule a <strong className="text-white">free consultation</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0 mt-0.5">2</span>
                      <span>We'll understand your needs and provide the <strong className="text-white">best solution</strong> for your business</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0 mt-0.5">3</span>
                      <span>We'll deliver exactly what works best for <strong className="text-white">your goals</strong></span>
                    </li>
                  </ul>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-[2rem] font-bold text-base bg-foreground hover:bg-foreground/90 text-background transition-all group disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-start gap-4 p-6 rounded-[2rem] bg-card border border-white/10 shadow-2xl min-w-[340px] max-w-[450px] backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1 pr-6 pt-1">
              <h4 className="text-lg font-bold text-white mb-1.5">Message Sent!</h4>
              <p className="text-sm text-muted-foreground font-mono">
                We've received your message and will contact you shortly.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}