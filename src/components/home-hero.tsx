"use client";

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { companyConfig } from "../../company.config";
import RotatingEarth from '@/components/ui/wireframe-dotted-globe';

export default function HomeHero(props: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroProps = {
    logo: {
      src: "https://images.unsplash.com/photo-1616788812061-0af3684ac157?w=100&h=100&fit=crop&q=80",
      alt: `${companyConfig.name} Logo`,
      companyName: companyConfig.name
    },
    navigation: [
      { name: 'Features', href: '/#features' },
      { name: 'Services', href: '/services' },
      { name: 'Packages', href: '/#packages' },
      { name: 'Our Work', href: '/our-work' },
      { name: 'About', href: '/about' },
    ],
    title: props.title || <>Make Your Business Work <span className="text-primary">Smarter</span> with <span className="text-primary">{companyConfig.name}</span></>,
    description: props.description || "We build websites, automate workflows, and help brands grow organically through AI driven systems designed for real results.",
    announcementBanner: props.announcementBanner || {
      text: "Trusted by 50+ clients",
      linkText: "",
      linkHref: "/features/ai-assistant"
    },
    callToActions: props.callToActions || [
      { text: "Get Free Consultation", href: "/contact", variant: "primary" as const },
      { text: "View Our Work", href: "/our-work", variant: "secondary" as const }
    ],
  };

  const {
    logo,
    navigation,
    title,
    description,
    announcementBanner,
    callToActions,
  } = heroProps;

  return (
    <div className="relative isolate w-full font-sans pb-12 sm:pb-16 pt-8">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10">
        <nav aria-label="Global" className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
              <span className="font-negan text-3xl font-normal lowercase tracking-wide text-[#a855f7] drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">nexiler</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-10" />
            </button>
          </div>
          {navigation && navigation.length > 0 && (
            <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          )}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <a href="/contact" className="rounded-full bg-primary px-7 py-3 text-lg font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors">
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/95 backdrop-blur-xl px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">     
                  <span className="font-negan text-3xl font-normal lowercase tracking-wide text-[#a855f7]">nexiler</span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-full p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-8" />
                </button>
              </div>
              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-border/50">
                  {navigation && navigation.length > 0 && (
                    <div className="space-y-4 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-full px-3 py-3 text-xl font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="py-6 mt-4">
                    <a
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 flex items-center justify-center rounded-full bg-primary px-3 py-4 text-xl font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Section with Globe */}
      <div className="relative px-6 pt-8 sm:pt-12 lg:pt-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Side - Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          {/* Announcement Banner */}
          {announcementBanner && (
            <div className="mb-8 flex justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
              <div className="relative flex items-center gap-x-2 rounded-full border border-primary/20 bg-primary-[0.02] shadow-[0_0_15px_rgba(168,85,247,0.15)] px-4 py-1.5 text-sm leading-6 text-foreground shadow-sm hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all cursor-pointer backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-semibold text-primary/90 tracking-wide">{announcementBanner.text}</span>
              </div>
            </div>
          )}
          
          {/* Hero Content */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out delay-150 fill-mode-both">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-balance text-foreground mb-6 font-sans">
              {title}
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium text-pretty text-muted-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-mono">
              {description}
            </p>
            
            {/* Call to action buttons */}
            {callToActions && callToActions.length > 0 && (
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6 group">
                {callToActions.map((cta: any, index: number) => (
                  <a
                    key={index}
                    href={cta.href}
                    className={`
                      px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base font-semibold shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2
                      w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer
                      ${cta.variant === 'primary' 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 border border-transparent' 
                        : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95 border border-border/50 backdrop-blur-md'
                      }
                    `}
                  >
                    {cta.text}
                    {cta.variant === 'secondary' && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Globe */}
        <div className="flex-1 w-full lg:w-auto max-w-[500px] lg:max-w-[600px]">
          <RotatingEarth width={600} height={500} className="w-full" />
        </div>
      </div>
    </div>
  );
}
