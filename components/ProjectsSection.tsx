'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './ui/tilt-card';

const projects = [
  {
    id: 1,
    title: 'Vihaan Glass Interiors',
    description: 'A professional business website created for a glass/interior brand with modern layout, clean branding, service sections, and contact-focused design.',
    tags: ['Web Design', 'HTML/CSS', 'Branding', 'UI/UX'],
    category: 'Web Development',
    accent: '#a1a1aa',
    number: '01',
    status: 'Coming Soon',
  },
  {
    id: 2,
    title: 'DSA Storyboard',
    description: 'A creative learning-based project designed to make DSA concepts more visual, structured, and easier to understand through interactive storytelling.',
    tags: ['DSA', 'JavaScript', 'Education', 'Visualization'],
    category: 'Creative Tech',
    accent: '#94a3b8',
    number: '02',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Coding Event Portal',
    description: 'A team-based interactive event concept with login flow, round-based structure, surreal coding tasks, and engaging technical challenges.',
    tags: ['Full Stack', 'Event Design', 'JavaScript', 'Node.js'],
    category: 'Full Stack',
    accent: '#d1d5db',
    number: '03',
    status: 'Coming Soon',
  },
  {
    id: 4,
    title: 'Academic & Technical Practice',
    description: 'Projects and practice work based on Java, C, DBMS, DSA, algorithms, and problem-solving concepts building strong fundamentals.',
    tags: ['Java', 'C', 'DBMS', 'DSA', 'Algorithms'],
    category: 'Core CS',
    accent: '#71717a',
    number: '04',
    status: 'Coming Soon',
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard
        tiltLimit={10}
        scale={1.02}
        effect="gravitate"
        className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
        style={{
          background: 'rgba(255,255,255,0.01)',
          border: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div
          className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}15 0%, transparent 60%)` }}
        />

        <div className="p-5 sm:p-6 md:p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1 min-w-0 pr-3">
              <span className="text-xs font-semibold tracking-widest uppercase mb-2 block" style={{ color: project.accent }}>
                {project.category}
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black opacity-10 leading-none shrink-0" style={{ color: project.accent }}>
                  {project.number}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight" style={{ color: '#f1f5f9' }}>
                  {project.title}
                </h3>
              </div>
            </div>
            {project.status === 'Live' && (
              <motion.div
                className="w-9 h-9 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0 z-20"
                style={{ background: `${project.accent}20` }}
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight size={15} style={{ color: project.accent }} />
              </motion.div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>
            {project.description}
          </p>

          {/* Tags & Action */}
          <div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-20">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: project.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="mt-5 flex items-center gap-2 text-xs font-semibold relative z-20 transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: project.status === 'Live' ? project.accent : '#64748b', opacity: project.status === 'Live' ? 0.7 : 0.5 }}
            >
              {project.status === 'Live' ? (
                <>
                  <ExternalLink size={12} />
                  View Project
                </>
              ) : (
                <>
                  Coming Soon
                </>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="relative w-full overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 bg-[#050505]">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-20"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e2e8f0' }}>
            What I've Built
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span style={{ color: '#f1f5f9' }}>Featured </span>
            <span className="gradient-text glow-text">Projects</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#64748b' }}>
            Real-world projects built with creativity, logic, and a focus on clean execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
