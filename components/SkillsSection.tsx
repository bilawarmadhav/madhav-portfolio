'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Globe, Cpu, Palette, Wrench } from 'lucide-react';

const categories = [
  { name: 'Languages', icon: Code2, color: '#a1a1aa', skills: ['Java', 'C'] },
  { name: 'Web', icon: Globe, color: '#94a3b8', skills: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Core CS', icon: Cpu, color: '#d1d5db', skills: ['DSA', 'DBMS'] },
  { name: 'Creative', icon: Palette, color: '#71717a', skills: ['UI/UX Planning', 'Branding Ideas', 'Event Concepts'] },
  { name: 'Tools', icon: Wrench, color: '#e2e8f0', skills: ['VS Code', 'GitHub', 'Figma', 'Canva'] },
];

function SkillPill({ skill, color, delay }: { skill: string; color: string; delay: number }) {
  return (
    <motion.div
      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium cursor-default select-none"
      style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, background: `${color}22`, boxShadow: `0 0 20px ${color}30` }}
    >
      {skill}
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="relative w-full overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }} />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-20"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e2e8f0' }}>
            My Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span style={{ color: '#f1f5f9' }}>Skills & </span>
            <span className="gradient-text glow-text">Technologies</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#64748b' }}>
            A growing toolkit built through real projects, deep study, and creative exploration.
          </p>
        </motion.div>

        {/* Cards  1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              className="p-5 sm:p-6 rounded-2xl group"
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)' }}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: catIdx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: `${cat.color}30`, boxShadow: `0 0 30px ${cat.color}10` }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}15` }}>
                  <cat.icon size={17} style={{ color: cat.color }} />
                </div>
                <h3 className="font-bold text-sm" style={{ color: '#e2e8f0' }}>{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillPill key={skill} skill={skill} color={cat.color} delay={catIdx * 0.1 + skillIdx * 0.05} />
                ))}
              </div>
              <motion.div
                className="mt-4 sm:mt-5 h-[2px] rounded-full"
                style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: catIdx * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Learning banner */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 p-5 sm:p-6 rounded-2xl text-center"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm" style={{ color: '#94a3b8' }}>
            Currently deepening expertise in{' '}
            <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">React.js</span>,{' '}
            <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Node.js</span>, and{' '}
            <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">advanced DSA</span>  always building, always learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
