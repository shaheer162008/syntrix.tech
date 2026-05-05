"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiStar } from 'react-icons/fi';
import { projects, featuredProjects } from '@/lib/projects';

const categories = ['All', 'Website Development', 'AI Automation'];

export default function OurWorkShowcase() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="w-full font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        
        {/* ═══════════ FEATURED PROJECTS SECTION ═══════════ */}
        <div className="mb-16 sm:mb-28">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex items-center gap-2 px-6 py-2 rounded-full font-sans bg-secondary/30 border border-white/10 backdrop-blur-md shadow-sm"
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
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(0,0,0,0.4))',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {/* Image Side */}
                <div
                  className={`relative w-full aspect-[4/3] lg:aspect-auto overflow-hidden ${
                    i % 2 === 1 ? 'lg:order-last' : ''
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
                  />
                  {/* Subtle blend overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 100%)',
                      opacity: i % 2 === 1 ? 0 : 0.4,
                    }}
                  />
                </div>

                {/* Content Side */}
                <div
                  className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative"
                  style={{ direction: 'ltr' }}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span
                      className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-mono bg-secondary/30 text-white border border-white/10 backdrop-blur-md"
                    >
                      {project.category}
                    </span>
                    <span
                      className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-mono flex items-center gap-1.5 bg-primary/10 text-white border border-primary/20 backdrop-blur-md"
                    >
                      <FiStar size={12} className="text-primary" /> Featured
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 group-hover:text-purple-400 transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-mono leading-relaxed mb-8 text-base sm:text-lg">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm transition-colors w-max group/link bg-[#1B1B1B] border border-[#333] px-6 py-2.5 rounded-full hover:bg-[#111]"
                    >
                      Visit Live Site
                      <FiExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
                className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1B1B1B]/40 border border-white/5 text-white/80"
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
                <span className="ml-1.5 opacity-60 font-mono text-xs">
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
                className="group relative rounded-[2rem] overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2.5rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 via-[#1B1B1B]/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  
                  {/* Category Tag overlay directly on image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono backdrop-blur-md bg-secondary/30 text-white border border-white/10 shadow-sm"
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Actions */}
                  {project.link && (
                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-white font-medium text-sm transition-colors group/link px-6 py-2.5 bg-[#1B1B1B] rounded-full border border-[#333] hover:bg-[#111] w-max"
                      >
                        Visit Website
                        <FiExternalLink className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
