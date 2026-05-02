'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowLeft, FiStar, FiArrowRight } from 'react-icons/fi';
import { projects, featuredProjects } from '@/lib/projects';
import Footer from '@/components/footer';

const categories = ['All', 'Website Development', 'AI Automation'];

export default function OurWorkPage() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen" style={{ background: '#0a0812' }}>
      {/* Sticky Top Bar */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl border-b"
        style={{
          background: 'rgba(10,8,18,0.85)',
          borderColor: 'rgba(107,22,159,0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/syntrix_solutions-icon.png"
              alt="Syntrix Solutions"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-base sm:text-lg">
              Syntrix Solutions
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest text-purple-300 mb-6"
            style={{
              borderColor: 'rgba(107,22,159,0.3)',
              background: 'rgba(107,22,159,0.08)',
            }}
          >
            OUR PORTFOLIO
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projects We&apos;ve{' '}
            <span className="text-gradient">Delivered</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore the complete collection of work we&apos;ve done for clients
            around the world.
          </p>
        </div>

        {/* ═══════════ FEATURED PROJECTS SECTION ═══════════ */}
        <div className="mb-16 sm:mb-28">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(107,22,159,0.15), rgba(147,51,234,0.08))',
                border: '1px solid rgba(107,22,159,0.2)',
              }}
            >
              <FiStar size={16} className="text-purple-400" />
              <span className="text-white font-semibold text-sm">Featured Projects</span>
            </div>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(107,22,159,0.3), transparent)' }} />
          </div>

          {/* Featured — large alternating cards */}
          <div className="space-y-8">
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
                style={{
                  background: 'linear-gradient(145deg, rgba(107,22,159,0.06), rgba(10,8,18,0.95))',
                  border: '1px solid rgba(107,22,159,0.12)',
                }}
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
                      background: 'linear-gradient(180deg, transparent 30%, rgba(10,8,18,0.6) 100%)',
                    }}
                  />
                </div>

                {/* Content side */}
                <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
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
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                      style={{
                        color: '#fbbf24',
                        background: 'rgba(251,191,36,0.08)',
                        border: '1px solid rgba(251,191,36,0.15)',
                      }}
                    >
                      <span className="flex items-center gap-1"><FiStar size={10} /> Featured</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors group/link"
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
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(107,22,159,0.08)',
                border: '1px solid rgba(107,22,159,0.15)',
              }}
            >
              <span className="text-white font-semibold text-sm">All Projects</span>
              <span
                className="px-2 py-0.5 rounded-md text-[11px] font-bold"
                style={{ background: 'rgba(107,22,159,0.2)', color: '#c084fc' }}
              >
                {projects.length}
              </span>
            </div>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(107,22,159,0.3), transparent)' }} />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={
                  active === cat
                    ? {
                        background: 'linear-gradient(135deg, #6b169f, #9333ea)',
                        color: '#fff',
                        boxShadow: '0 4px 20px rgba(107,22,159,0.35)',
                      }
                    : {
                        background: 'rgba(107,22,159,0.06)',
                        color: '#9ca3af',
                        border: '1px solid rgba(107,22,159,0.12)',
                      }
                }
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
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(145deg, rgba(107,22,159,0.06), rgba(10,8,18,0.95))',
                  border: '1px solid rgba(107,22,159,0.1)',
                }}
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 0%, rgba(10,8,18,0.7) 60%, rgba(10,8,18,0.95) 100%)',
                    }}
                  >
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 translate-y-4 group-hover:translate-y-0"
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
                    {project.featured && (
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                        style={{
                          color: '#fbbf24',
                          background: 'rgba(251,191,36,0.08)',
                          border: '1px solid rgba(251,191,36,0.15)',
                        }}
                      >
                        Featured
                      </span>
                    )}
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
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 sm:mt-24 text-center rounded-2xl p-8 sm:p-12"
          style={{
            background: 'linear-gradient(145deg, rgba(107,22,159,0.08), rgba(10,8,18,0.9))',
            border: '1px solid rgba(107,22,159,0.12)',
          }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our expertise.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group"
            style={{ background: 'linear-gradient(135deg, #6b169f, #9333ea)' }}
          >
            Let&apos;s Work Together
            <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
