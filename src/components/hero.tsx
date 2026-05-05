'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X, Hexagon, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image';
import { companyConfig } from "../../company.config";

// Custom Font implementation -> If you want any specific Google Font,
// add it in layout.tsx first, then apply here. Right now we are using standard Inter/Geist fonts,
// but I've updated heading classes to be more prominent.

export default function Hero(props: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Example Settings (Merged from demo.tsx)
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
    loginText: "Sign In",
    loginHref: "/login",
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
    gradientColors: {
      from: "oklch(0.646 0.222 41.116)",
      to: "oklch(0.488 0.243 264.376)"
    }
  }

  const {
    logo,
    navigation,
    loginText,
    loginHref,
    title,
    description,
    announcementBanner,
    callToActions,
    gradientColors
  } = heroProps;

  return (
    <div className="relative isolate w-full font-sans pb-12 sm:pb-16 pt-8">
      {/* Top gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl sm:-top-80 pointer-events-none"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, oklch(0.646 0.222 41.116), oklch(0.488 0.243 264.376))'
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-[pulse_8s_ease-in-out_infinite]"
        />
      </div>

      {/* Bottom gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu blur-3xl sm:top-[calc(100%-45rem)] pointer-events-none"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, oklch(0.646 0.222 41.116), oklch(0.488 0.243 264.376))'
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-[pulse_10s_ease-in-out_infinite_6s]"
        />
      </div>

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
                  <span className="font-negan text-3xl font-normal lowercase tracking-wide text-[#a855f7] drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">nexiler</span>
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

      {/* Main Hero Section */}
      <div className="relative isolate px-6 pt-16 sm:pt-24 flex flex-col justify-center items-center">
        <div className="mx-auto max-w-4xl text-center z-10">

          {/* CUSTOMIZED BADGE (Announcement Banner) */}
          {announcementBanner && (
            <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
              <div className="relative flex items-center gap-x-2 rounded-full border border-[#a855f7] bg-transparent px-4 py-1.5 text-sm leading-6 shadow-sm hover:bg-[#a855f7]/10 transition-all cursor-pointer backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#a855f7]" />
                <span className="font-semibold text-foreground">{announcementBanner.text}</span>
                <span className="text-muted-foreground hidden sm:inline-block">|</span>
                <a href={announcementBanner.linkHref} className="font-medium text-foreground hover:text-[#a855f7] transition-colors flex items-center gap-1 group">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcementBanner.linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          )}
          
          {/* Hero Content - Customized Typography */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out delay-150 fill-mode-both">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-balance text-foreground mb-6 font-sans">
              {title}
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium text-pretty text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-mono">
              {description}
            </p>
            
            {/* Call to action buttons */}
            {callToActions && callToActions.length > 0 && (
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 group">
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
      </div>
    </div>
  )
}
