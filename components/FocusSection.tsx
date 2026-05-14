'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Target, Brain, BookOpen } from 'lucide-react';

const focuses = [
  {
    icon: Monitor,
    title: 'Clean UI Design',
    desc: 'Every interface I build is intentional  minimal clutter, maximum clarity, and a visual language that feels premium.',
    color: '#a1a1aa',
  },
  {
    icon: Target,
    title: 'Real-World Usefulness',
    desc: 'I build things that actually work and solve real problems  not just demos, but projects with genuine purpose.',
    color: '#94a3b8',
  },
  {
    icon: Brain,
    title: 'Creative Thinking',
    desc: 'I approach every project with a creative lens  finding unique angles, unexpected solutions, and fresh perspectives.',
    color: '#d1d5db',
  },
  {
    icon: BookOpen,
    title: 'Strong Fundamentals',
    desc: 'DSA, DBMS, algorithms  I invest in the foundations that make everything else possible and scalable.',
    color: '#71717a',
  },
];

export default function FocusSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative w-full overflow-hidden px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ color: '#e2e8f0' }}>
            What Defines Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span style={{ color: '#f1f5f9' }}>My Work </span>
            <span className="gradient-text">Focus</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#64748b' }}>
            The principles that guide every project, every line of code, every design decision.
          </p>
        </motion.div>

        {/* Cards  1 col mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {focuses.map((focus, i) => (
            <motion.div
              key={i}
              className="relative p-5 sm:p-6 rounded-2xl overflow-hidden group cursor-default"
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ borderColor: `${focus.color}35`, boxShadow: `0 0 40px ${focus.color}15`, y: -8 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 100%, ${focus.color}08 0%, transparent 70%)` }}
              />
              <motion.div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
                style={{ background: `${focus.color}15` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <focus.icon size={20} style={{ color: focus.color }} />
              </motion.div>
              <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3" style={{ color: '#e2e8f0' }}>{focus.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{focus.desc}</p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${focus.color}, transparent)` }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
