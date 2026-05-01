"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";
import { companyConfig } from "../../company.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
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
              Let's craft your success story.
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
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/5 shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">Email Us</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">{companyConfig.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 sm:p-6 rounded-[2rem] bg-card/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors w-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/5 shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">Call Us</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">{companyConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 sm:p-6 rounded-[2rem] bg-card/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors w-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/5 shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground font-medium font-mono">Visit us remotely</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-foreground truncate">{companyConfig.address}</p>
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

            
            <div className="relative bg-card/60 border border-white/10 rounded-[3rem] p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">First Name</label>
                    <Input placeholder="John" className="h-12 rounded-full bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="h-12 rounded-full bg-background/50 border-white/10 focus-visible:ring-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 rounded-full bg-background/50 border-white/10 focus-visible:ring-foreground" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">How can we help?</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="min-h-[120px] rounded-[2rem] bg-background/50 border-white/10 focus-visible:ring-foreground resize-none p-6"
                  />
                </div>

                <Button className="w-full h-14 rounded-full font-bold text-base bg-foreground hover:bg-foreground/90 text-background transition-all group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}