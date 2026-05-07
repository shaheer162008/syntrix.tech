"use client";

import { motion } from "framer-motion";
import { companyConfig } from "../../company.config";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#1B1B1B] font-sans z-10 border-t border-white/5 overflow-hidden">
      
      {/* Subtle top glow matching Next.js dark themes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Info & Connect */}
          <div className="space-y-8 sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block group">
                <Image 
                  src="/nexiler-nav.png" 
                  alt="Nexiler Logo" 
                  width={180} 
                  height={45} 
                  className="object-contain transition-transform duration-300 hover:scale-[1.1]" 
                  style={{ width: 'auto', height: '45px' }}
                />
              </Link>
              <p className="mt-6 text-sm text-muted-foreground font-medium leading-relaxed max-w-sm">
                Empowering businesses with intelligent automation, stunning websites, and relentless performance.
              </p>
              
              <div className="mt-8">
                <h4 className="text-base font-bold text-white mb-3 tracking-wide">Info</h4>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground hover:text-white transition-colors">{companyConfig.address}</p>
                  <p className="text-sm text-muted-foreground hover:text-white transition-colors">{companyConfig.phone}</p>
                  <p className="text-sm text-muted-foreground hover:text-white transition-colors">{companyConfig.email}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-base font-bold text-white mb-4 tracking-wide">Connect</h4>
                <div className="flex items-center gap-3 flex-wrap">
                  <a href={companyConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} className="opacity-80" />
                  </a>
                  <a href={companyConfig.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/github.svg" alt="GitHub" width={18} height={18} className="opacity-80" />
                  </a>
                  <a href={companyConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} className="opacity-80" />
                  </a>
                  <a href={companyConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} className="opacity-80" />
                  </a>
                  <a href={companyConfig.socials.email} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110 shadow-sm shrink-0">
                    <Image src="/icons/email.svg" alt="Email" width={18} height={18} className="opacity-80" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/ai-automation" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">AI Automation</Link></li>
              <li><Link href="/services/ai-chatbots" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">AI Chatbots</Link></li>
              <li><Link href="/services/content-creation" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Content Creation</Link></li>
              <li><Link href="/services/full-brand-creation" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Full Brand Creation</Link></li>
              <li><Link href="/services/mobile-app-dev" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Mobile App Dev</Link></li>
              <li><Link href="/services/motion-graphics" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Motion Graphics</Link></li>
              <li><Link href="/services/seo-services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">SEO Services</Link></li>
              <li><Link href="/services/social-media-management" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Social Media Management</Link></li>
              <li><Link href="/services/website-development" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Website Development</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Developed By Team <span className="text-white font-medium">{companyConfig.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}