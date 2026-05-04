'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowLeft, FiStar, FiArrowRight } from 'react-icons/fi';
import { projects, featuredProjects } from '@/lib/projects';
import Hero from '@/components/hero';
import { GridBackground } from '@/components/ui/grid-background';
import Footer from '@/components/footer';

const categories = ['All', 'Website Development', 'AI Automation'];

export default function OurWorkPage() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Hero 
        title={<>Real Projects. Real Results. <span className="text-primary">No Fluff.</span></>} 
        description="Browse our work across web design, automation, brand growth, and AI — every project built to deliver measurable outcomes."
        announcementBanner={{ text: "View featured case studies", linkText: "", linkHref: "#" }}
      />
      <GridBackground className="pb-0">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center mb-12 sm:mb-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-white/10 backdrop-blur-md text-xs font-medium tracking-widest text-white mb-6 uppercase"
            >
              Our Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projects We&apos;ve{' '}
              <span className="text-primary">Delivered</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the complete collection of work we&apos;ve done for clients
              around the world.
            </p>
          </div>

          {/* ═══════════ FEATURED PROJECTS SECTION ═══════════ */}
          <div className="mb-16 sm:mb-28">
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex items-center gap-2 px-6 py-2 rounded-full font-sans bg-secondary/30 border border-white/10 backdrop-blur-md"
              >
                <FiStar size={16} className="text-white" />
                <span className="text-white font-semibold text-sm tracking-wide uppercase">Featured Projects</span>
              </div>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #333, transparent)' }} />
            </div>

            {/* Featured — large alternating cards */}
            <div className="space-y-8">
              {featuredProjects.map((project, i) => (
                <div
                  key={project.id}
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.01] bg-card/60 backdrop-blur-sm border border-white/5 hover:border-primary/50  hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] ${
                    i % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Image side */}
                  <div className={`relative w-full aspect-video lg:aspect-auto lg:min-h-[340px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)',
                      }}
                    />
                  </div>

                  {/* Content side */}
                  <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-secondary/30 text-white border border-white/10 backdrop-blur-md"
                      >
                        {project.category}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-white border border-white/5 backdrop-blur-md flex items-center gap-1"
                      >
                        <FiStar size={10} className="text-primary" /> Featured
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_4px_rgba(168,85,247,0.2)]">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-medium text-sm transition-colors group/link bg-black border border-white/10 px-6 py-2.5 rounded-full hover:bg-[#111] w-max"
                      >
                        Visit Live Site
                        <FiExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════ ALL PROJECTS SECTION ═══════════ */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex items-center gap-2 px-6 py-2 rounded-full font-sans bg-secondary/30 border border-white/10 backdrop-blur-md"
              >
                <span className="text-white font-semibold text-sm tracking-wide uppercase">All Projects</span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-black/40 border border-white/5 text-white/80"
                >
                  {projects.length}
                </span>
              </div>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #333, transparent)' }} />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-sans border ${
                    active === cat
                      ? 'bg-secondary/30 border-white/10 text-white backdrop-blur-md'
                      : 'bg-transparent border-white/5 text-muted-foreground hover:border-white/10'
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 opacity-60">
                    ({cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-[2rem] overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-primary/50  hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)] transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-[2.5rem]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.95) 100%)',
                      }}
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-black/60 border border-white/10 hover:bg-black/80"
                        >
                          Visit Site
                          <FiExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-secondary/30 text-white border border-white/10 backdrop-blur-md"
                      >
                        {project.category}
                      </span>
                      {project.featured && (
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-white border border-white/5 backdrop-blur-md"
                        >
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_4px_rgba(168,85,247,0.2)]">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-black border border-white/10 text-white font-semibold transition-all duration-300 hover:scale-105 group font-sans shadow-xl shadow-black/20"
            >
              Back to Home
              <FiArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </div>
        </div>
        <Footer />
      </GridBackground>
    </div>
  );
}