'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, Globe, Cpu, Palette, Wrench, Sparkles, Database, Server } from 'lucide-react';

const skillGroups = [
  {
    name: 'Programming Languages',
    icon: Code2,
    color: '#a1a1aa',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    name: 'Frontend',
    icon: Globe,
    color: '#94a3b8',
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'React.js', level: 70 },
      { name: 'Next.js', level: 65 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    color: '#d1d5db',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 60 },
      { name: 'REST APIs', level: 68 },
    ],
  },
  {
    name: 'Core CS',
    icon: Cpu,
    color: '#e2e8f0',
    skills: [
      { name: 'Data Structures & Algorithms', level: 82 },
      { name: 'DBMS', level: 78 },
      { name: 'OOP Concepts', level: 85 },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    color: '#71717a',
    skills: [
      { name: 'MySQL', level: 72 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    name: 'Design & Creative',
    icon: Palette,
    color: '#94a3b8',
    skills: [
      { name: 'UI/UX Planning', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'Branding & Identity', level: 75 },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    color: '#e2e8f0',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'GitHub', level: 85 },
      { name: 'Canva', level: 80 },
      { name: 'Netlify', level: 75 },
    ],
  },
  {
    name: 'Currently Learning',
    icon: Sparkles,
    color: '#a1a1aa',
    skills: [
      { name: 'Advanced React Patterns', level: 50 },
      { name: 'TypeScript', level: 55 },
      { name: 'System Design', level: 40 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Hero */}
      <section id="skills" className="relative w-full overflow-hidden px-4 sm:px-6 pb-16 pt-32 sm:pt-40 scroll-mt-24">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #0a0a0a 0%, #050505 70%)' }} />
        <div
          className="absolute top-24 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-24 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.05) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-5 block" style={{ color: '#e2e8f0' }}>
              My Arsenal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span style={{ color: '#f1f5f9' }}>Skills & </span>
              <span className="gradient-text glow-text">Technologies</span>
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#64748b' }}>
              A growing toolkit built through real projects, deep study, and constant creative exploration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {skillGroups.map((group, i) => (
              <SkillCard key={group.name} group={group} index={i} />
            ))}
          </div>

          {/* Bottom banner */}
          <motion.div
            className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl text-center"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block" style={{ color: '#475569' }}>
              Growth Mindset
            </span>
            <p className="text-base sm:text-lg font-medium" style={{ color: '#94a3b8' }}>
              Always building, always learning.{' '}
              <span className="font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                The stack evolves with every project.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SkillCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const Icon = group.icon;

  return (
    <motion.div
      className="p-5 sm:p-6 rounded-2xl group"
      style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)' }}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: `${group.color}30`, boxShadow: `0 0 40px ${group.color}10` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${group.color}15` }}>
          <Icon size={18} style={{ color: group.color }} />
        </div>
        <h3 className="font-bold text-sm" style={{ color: '#e2e8f0' }}>{group.name}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill.name}
            className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300"
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#94a3b8'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + si * 0.05 }}
            whileHover={{ 
              background: `${group.color}10`, 
              borderColor: `${group.color}30`, 
              color: '#f1f5f9',
              y: -2
            }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="mt-6 h-[1px] rounded-full"
        style={{ background: `linear-gradient(90deg, ${group.color}40, transparent)` }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 + index * 0.05 }}
      />
    </motion.div>
  );
}
