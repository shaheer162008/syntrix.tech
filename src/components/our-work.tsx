"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { featuredProjects } from '@/lib/projects';
import { motion } from 'framer-motion';

export default function OurWork({ hideViewMore }: { hideViewMore?: boolean }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="our-work"
      className="relative pt-16 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold tracking-widest text-[11px] mb-6 bg-black border border-transparent text-white uppercase shadow-sm"
          >
            PORTFOLIO
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tighter"
          >
            Projects We&apos;ve{' '}
            <span className="text-primary">Delivered</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground font-medium max-w-2xl mx-auto font-mono"
          >
            Real projects, real results. Here&apos;s a glimpse of the websites, apps, and AI solutions we&apos;ve built for businesses around the world.
          </motion.p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {featuredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={project.id}
              className="group relative rounded-[2rem] overflow-hidden bg-card/60 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 ease-out hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-6"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%)',
                    opacity: hoveredId === project.id ? 1 : 0.4,
                  }}
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-6 right-6 flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      style={{
                        background: 'black',
                        border: '1px solid #333',
                      }}
                    >
                      Visit Site
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono bg-secondary/30 text-white border border-white/10 shadow-sm backdrop-blur-md"
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary drop-shadow-[0_0_4px_rgba(168,85,247,0.2)] transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        {!hideViewMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-black border border-white/10 text-white font-semibold transition-all duration-300 hover:scale-105 group font-sans shadow-xl shadow-black/20"
            >
              See All Our Work
              <FiArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}