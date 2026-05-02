'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { featuredProjects } from '@/lib/projects';

const OurWork = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="our-work"
      className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #0c0a14 0%, #0e0c18 50%, #0c0a14 100%)',
      }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(107,22,159,0.4), transparent)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-0 w-125 h-125 rounded-full blur-[200px] opacity-[0.05] pointer-events-none"
        style={{ background: '#6b169f' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest text-purple-300 mb-6"
            style={{
              borderColor: 'rgba(107,22,159,0.3)',
              background: 'rgba(107,22,159,0.08)',
            }}
          >
            PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Projects We&apos;ve{' '}
            <span className="text-gradient">Delivered</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Real projects, real results. Here&apos;s a glimpse of the websites, apps, and AI solutions we&apos;ve built for businesses around the world.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background:
                  'linear-gradient(145deg, rgba(107,22,159,0.06), rgba(10,8,18,0.95))',
                border: '1px solid rgba(107,22,159,0.1)',
              }}
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
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, rgba(10,8,18,0.6) 60%, rgba(10,8,18,0.95) 100%)',
                    opacity: hoveredId === project.id ? 1 : 0.4,
                  }}
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      style={{
                        background: 'rgba(107,22,159,0.7)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(147,51,234,0.3)',
                      }}
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
                    className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                    style={{
                      color: '#c084fc',
                      background: 'rgba(107,22,159,0.12)',
                      border: '1px solid rgba(107,22,159,0.15)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group"
            style={{ background: 'linear-gradient(135deg, #6b169f, #9333ea)' }}
          >
            See All Our Work
            <FiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
