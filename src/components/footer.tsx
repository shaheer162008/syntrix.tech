"use client";

import { motion } from "framer-motion";
import { companyConfig } from "../../company.config";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black font-sans z-10 border-t border-white/5 overflow-hidden">
      
      {/* Subtle top glow matching Next.js dark themes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-8 lg:col-span-1">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block group">
                <span className="font-negan text-3xl font-normal lowercase tracking-wide group-hover:opacity-80 transition-opacity text-white">nexiler</span>
              </Link>
              <p className="mt-6 text-sm text-foreground font-medium leading-relaxed max-w-xs">
                Empowering businesses with intelligent automation, stunning websites, and relentless performance.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{companyConfig.address}</p>
                <p className="text-sm font-medium text-muted-foreground">{companyConfig.phone}</p>
                <p className="text-sm font-medium text-muted-foreground">{companyConfig.email}</p>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/terms-of-service" className="text-sm font-medium text-foreground hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-white">Connect</h3>
            <div className="flex items-center gap-4 pt-2">
              <a href={companyConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center hover:bg-[#111] transition-all hover:scale-110 shadow-sm shrink-0">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href={companyConfig.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center hover:bg-[#111] transition-all hover:scale-110 shadow-sm shrink-0">
                <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
              </a>
              <a href={companyConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center hover:bg-[#111] transition-all hover:scale-110 shadow-sm shrink-0">
                <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              </a>
              <a href={companyConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center hover:bg-[#111] transition-all hover:scale-110 shadow-sm shrink-0">
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </a>
              <a href={companyConfig.socials.email} className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center hover:bg-[#111] transition-all hover:scale-110 shadow-sm shrink-0">
                <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            Developed By Team {companyConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}