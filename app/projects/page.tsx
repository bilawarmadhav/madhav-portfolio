'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

const projects = [
  {
    id: 'dsa-storyboard',
    number: '01',
    title: 'DSA Storyboard',
    shortDesc: 'A creative learning platform that makes DSA concepts visual, structured, and interactive through immersive storytelling.',
    fullDesc: 'Interactive DSA visualization tool designed to make algorithms come alive through animation and storytelling.',
    tags: ['JavaScript', 'DSA', 'Education', 'Visualization', 'HTML/CSS'],
    category: 'Creative Tech',
    accent: '#94a3b8',
    status: 'Live',
    github: 'https://github.com/bilawarmadhav',
    demo: 'https://tenalitactician.netlify.app/',
  },
  {
    id: 'vihaan-glass',
    number: '02',
    title: 'Vihaan Glass Interiors',
    shortDesc: 'A professional business website for a glass/interior brand — clean branding, service sections, and contact-focused design.',
    fullDesc: 'Full business web presence for a glass interiors company with modern layout and premium branding.',
    tags: ['Web Design', 'HTML/CSS', 'Branding', 'UI/UX', 'Responsive'],
    category: 'Web Development',
    accent: '#a1a1aa',
    status: 'Coming Soon',
    github: 'https://github.com/bilawarmadhav',
    demo: '',
  },
  {
    id: 'coding-event-portal',
    number: '03',
    title: 'Coding Event Portal',
    shortDesc: 'Team-based interactive event platform with login flows, round-based structure, surreal tasks, and technical challenges.',
    fullDesc: 'Full-stack event management system built for coding competitions with auth, rounds, and admin dashboard.',
    tags: ['Full Stack', 'Node.js', 'JavaScript', 'Event Design', 'Auth'],
    category: 'Full Stack',
    accent: '#d1d5db',
    status: 'Coming Soon',
    github: 'https://github.com/bilawarmadhav',
    demo: '',
  },
  {
    id: 'academic-practice',
    number: '04',
    title: 'Academic & Technical Practice',
    shortDesc: 'Deep dives into Java, C, DBMS, DSA, and algorithms — building rock-solid fundamentals through structured practice.',
    fullDesc: 'A curated collection of academic projects and algorithmic solutions demonstrating core CS fundamentals.',
    tags: ['Java', 'C', 'DBMS', 'DSA', 'Algorithms', 'Core CS'],
    category: 'Core CS',
    accent: '#71717a',
    status: 'Ongoing',
    github: 'https://github.com/bilawarmadhav',
    demo: '',
  },
];

const categories = ['All', 'Creative Tech', 'Web Development', 'Full Stack', 'Core CS'];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Hero */}
      <section id="projects" className="relative w-full overflow-hidden px-4 sm:px-6 pb-16 pt-32 sm:pt-36 md:pt-44 scroll-mt-24">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #101010 0%, #050505 70%)' }} />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-5 block" style={{ color: '#e2e8f0' }}>
              What I've Built
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span style={{ color: '#f1f5f9' }}>Featured </span>
              <span className="gradient-text glow-text">Projects</span>
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#64748b' }}>
              Real-world projects built with creativity, logic, and a relentless focus on clean execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="relative px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                style={{
                  background: activeCategory === cat ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${activeCategory === cat ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.07)'}`,
                  color: activeCategory === cat ? '#f1f5f9' : '#64748b',
                  boxShadow: activeCategory === cat ? '0 0 20px rgba(255,255,255,0.05)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            >
              {filtered.map((project) => (
                <motion.div key={project.id} variants={cardVariants} className="h-full">
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-500"
      style={{
        background: 'rgba(255,255,255,0.01)',
        border: `1px solid ${hovered ? `${project.accent}30` : 'rgba(255,255,255,0.05)'}`,
        boxShadow: hovered ? `0 0 40px ${project.accent}15, 0 20px 60px rgba(0,0,0,0.3)` : '0 4px 20px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)`, opacity: hovered ? 1 : 0 }}
      />

      {/* Glow bg */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}10 0%, transparent 60%)`, opacity: hovered ? 1 : 0 }}
      />

      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase mb-2 block" style={{ color: project.accent }}>
              {project.category}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-black opacity-10 leading-none" style={{ color: project.accent }}>
                {project.number}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight" style={{ color: '#f1f5f9' }}>
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-3">
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
              style={{
                background: project.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${project.status === 'Live' ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.07)'}`,
                color: project.status === 'Live' ? '#4ade80' : '#64748b',
              }}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium"
              style={{
                background: `${project.accent}10`,
                border: `1px solid ${project.accent}25`,
                color: project.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300"
            style={{
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}30`,
              color: project.accent,
            }}
          >
            View Details
            <ArrowUpRight size={13} />
          </Link>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ml-auto"
            style={{ color: '#64748b' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
          >
            <GithubIcon size={12} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
