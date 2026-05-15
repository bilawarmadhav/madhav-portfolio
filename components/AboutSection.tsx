'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Lightbulb, Layers, Zap } from 'lucide-react';

const traits = [
  { icon: Code2, title: 'Developer', desc: 'Writing clean, structured code across Java, C, and web technologies.', color: '#a1a1aa' },
  { icon: Lightbulb, title: 'Problem Solver', desc: 'Turning complex problems into elegant, practical solutions.', color: '#94a3b8' },
  { icon: Layers, title: 'Builder', desc: 'Creating real-world projects that are useful, polished, and impactful.', color: '#d1d5db' },
  { icon: Zap, title: 'Learner', desc: 'Constantly growing through DSA, DBMS, and modern web development.', color: '#71717a' },
];

const journey = [
  { year: '2024', label: 'Jain College BBA, BCA & B.Com', desc: 'Started formal CS education' },
  { year: '2025', label: 'First Projects', desc: 'Built real-world web projects' },
  { year: '2026', label: 'Deep Dive', desc: 'DSA, DBMS, Java, UI/UX focus' },
  { year: '2026+', label: 'Building', desc: 'Creating impactful digital experiences' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative w-full overflow-hidden px-4 sm:px-6 pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16 lg:pb-32 scroll-mt-24">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)' }} />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
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
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span style={{ color: '#f1f5f9' }}>About </span>
            <span className="gradient-text glow-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left  text */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: '#94a3b8' }}>
              I'm a <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">BCA student</span> focused on <span style={{ color: '#e2e8f0' }}>software development</span>,
              <span style={{ color: '#e2e8f0' }}> DSA</span>, <span style={{ color: '#e2e8f0' }}>DBMS</span>, and <span style={{ color: '#e2e8f0' }}>modern web development</span>. My work is not just about writing code
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-7" style={{ color: '#94a3b8' }}>
              I like turning <span className="font-semibold text-slate-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">raw ideas</span> into useful, polished, and
              visually engaging projects that actually solve problems and feel <span className="font-semibold gradient-text drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">premium</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { num: '4+', label: 'Projects Built' },
                { num: '5+', label: 'Technologies' },
                { num: '', label: 'Ideas Brewing' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-3 sm:p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl sm:text-2xl font-black gradient-text mb-1">{stat.num}</div>
                  <div className="text-[10px] sm:text-xs" style={{ color: '#64748b' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right  trait cards */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                className="p-4 sm:p-5 rounded-2xl group cursor-default"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ borderColor: `${trait.color}40`, boxShadow: `0 0 30px ${trait.color}20`, y: -4 }}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${trait.color}20` }}>
                  <trait.icon size={16} style={{ color: trait.color }} />
                </div>
                <h3 className="font-bold text-xs sm:text-sm mb-1" style={{ color: '#e2e8f0' }}>{trait.title}</h3>
                <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: '#64748b' }}>{trait.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-center text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-8 sm:mb-10" style={{ color: '#475569' }}>
            Developer Journey
          </h3>
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
            <div
              className="hidden sm:block absolute top-1/2 left-0 right-0 h-[1px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.15), transparent)' }}
            />
            <div
              className="block sm:hidden absolute left-[1.375rem] top-0 bottom-0 w-[1px]"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.15), transparent)' }}
            />
            {journey.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex flex-row sm:flex-col items-center sm:text-center flex-1 gap-4 sm:gap-0"
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center sm:mb-3 z-10 shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="text-[10px] sm:text-xs font-bold gradient-text">{item.year}</span>
                </div>
                <div className="text-left sm:text-center">
                  <p className="text-sm font-semibold mb-0.5" style={{ color: '#e2e8f0' }}>{item.label}</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
