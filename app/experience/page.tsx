'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, GraduationCap, Award, Rocket, Trophy, Star } from 'lucide-react';

const timeline = [
  {
    type: 'education',
    icon: GraduationCap,
    year: '2024',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Jain College BBA, BCA & B.Com',
    desc: 'Pursuing a comprehensive BCA degree covering software development, DBMS, operating systems, computer networks, and advanced programming in Java and C.',
    accent: '#94a3b8',
    tags: ['Java', 'C', 'DBMS', 'Networking', 'OOP'],
  },
  {
    type: 'milestone',
    icon: Rocket,
    year: '2025',
    title: 'First Real-World Projects',
    org: 'Self-Directed',
    desc: 'Built and shipped first real web projects — moving beyond tutorials into actual products. Developed a glass interiors business site and started exploring UI/UX design principles.',
    accent: '#a1a1aa',
    tags: ['HTML/CSS', 'JavaScript', 'UI/UX', 'Web Design'],
  },
  {
    type: 'project',
    icon: Star,
    year: '2026',
    title: 'DSA Storyboard — Live Product',
    org: 'Personal Project',
    desc: 'Designed, built, and launched DSA Storyboard — an interactive algorithm visualization platform. The project gained real users and demonstrated the ability to build complete, polished software independently.',
    accent: '#d1d5db',
    tags: ['JavaScript', 'DSA', 'Product Development', 'Netlify'],
  },
  {
    type: 'achievement',
    icon: Trophy,
    year: '2026+',
    title: 'Coding Event Portal',
    org: 'College Initiative',
    desc: 'Led the development of a custom full-stack portal for a college coding competition. The platform handled team registration, multi-round challenges, and a real-time leaderboard.',
    accent: '#71717a',
    tags: ['Node.js', 'MongoDB', 'Full Stack', 'Leadership'],
  },
];

const certifications = [
  { title: 'Java Programming Fundamentals', org: 'Coursera / NPTEL', year: '2023', color: '#a1a1aa' },
  { title: 'Web Development Bootcamp', org: 'Udemy', year: '2023', color: '#94a3b8' },
  { title: 'Data Structures & Algorithms', org: 'Self-Paced Study', year: '2024', color: '#d1d5db' },
  { title: 'DBMS & SQL Mastery', org: 'Academic Coursework', year: '2024', color: '#71717a' },
];

const achievements = [
  { text: 'Built and deployed 4+ complete software projects independently', icon: '🚀' },
  { text: 'Led full-stack development for a college coding event platform', icon: '🏆' },
  { text: 'DSA Storyboard gained real external users post-launch', icon: '⭐' },
  { text: 'Consistent GitHub activity and open-source contributions', icon: '💻' },
  { text: 'Self-taught TypeScript, React, and Next.js outside curriculum', icon: '📚' },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Hero */}
      <section id="experience" className="relative w-full overflow-hidden px-4 sm:px-6 pb-16 pt-32 sm:pt-40 scroll-mt-24">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #0a0a0a 0%, #050505 70%)' }} />
        <div
          className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-5 block" style={{ color: '#e2e8f0' }}>
              The Journey
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span style={{ color: '#f1f5f9' }}>Experience & </span>
              <span className="gradient-text glow-text">Growth</span>
            </h1>
            <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#64748b' }}>
              A timeline of education, milestones, projects, and the continuous pursuit of craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-10 text-center"
            style={{ color: '#475569' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Developer Journey
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 sm:left-6 top-0 bottom-0 w-[1px]"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)' }}
            />

            <div className="space-y-8 sm:space-y-10">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="relative pl-14 sm:pl-18"
                    initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Icon dot */}
                    <div
                      className="absolute left-0 sm:left-2 top-5 w-8 h-8 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}30`,
                        boxShadow: `0 0 20px ${item.accent}15`,
                      }}
                    >
                      <Icon size={14} style={{ color: item.accent }} />
                    </div>

                    <div
                      className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}25`;
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${item.accent}10`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex flex-wrap items-start gap-3 mb-3">
                        <span
                          className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                          style={{ background: `${item.accent}12`, color: item.accent, border: `1px solid ${item.accent}25` }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: '#f1f5f9' }}>{item.title}</h3>
                      <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: '#475569' }}>{item.org}</p>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-[10px] font-medium"
                            style={{ background: `${item.accent}10`, border: `1px solid ${item.accent}20`, color: item.accent }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block" style={{ color: '#475569' }}>
              Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              <span style={{ color: '#f1f5f9' }}>Certifications & </span>
              <span className="gradient-text">Courses</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-5 sm:p-6 rounded-2xl flex items-start gap-4"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ borderColor: `${cert.color}30`, boxShadow: `0 0 25px ${cert.color}10` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${cert.color}15` }}>
                  <Award size={16} style={{ color: cert.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: '#e2e8f0' }}>{cert.title}</h3>
                  <p className="text-xs" style={{ color: '#475569' }}>{cert.org} · {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 block" style={{ color: '#475569' }}>
              Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              <span style={{ color: '#f1f5f9' }}>Key </span>
              <span className="gradient-text">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                className="p-5 sm:p-6 rounded-2xl flex items-start gap-4"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 0 25px rgba(255,255,255,0.04)' }}
              >
                <span className="text-2xl shrink-0">{ach.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{ach.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
