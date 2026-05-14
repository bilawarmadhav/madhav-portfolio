'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { GlassButton } from '@/components/ui/apple-tahoe-liquid-glass-button';

const experience = [
  {
    role: 'Full-Stack Developer (Personal Projects)',
    period: '2023 – Present',
    highlights: [
      'Built and shipped 4+ complete software products independently',
      'Developed a live DSA visualization platform (DSA Storyboard)',
      'Led full-stack development for a college coding event portal',
      'Built a professional business website for Vihaan Glass Interiors',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Pune University',
    period: '2022 – Present',
    highlights: ['Java, C, DSA, DBMS, Computer Networks, OOP', 'Consistent academic performance'],
  },
];

const skillCategories = [
  { label: 'Languages',  skills: ['Java', 'C', 'JavaScript'] },
  { label: 'Frontend',   skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind', 'Framer Motion'] },
  { label: 'Backend',    skills: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Database',   skills: ['MySQL', 'MongoDB'] },
  { label: 'Core CS',    skills: ['DSA', 'DBMS', 'OOP', 'Algorithms'] },
  { label: 'Tools',      skills: ['VS Code', 'GitHub', 'Figma', 'Canva', 'Netlify'] },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 pb-12 pt-32 sm:pt-40">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #0a0a0a 0%, #050505 70%)' }} />
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-5 block" style={{ color: '#e2e8f0' }}>
              Professional Summary
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              <span style={{ color: '#f1f5f9' }}>My </span>
              <span className="gradient-text glow-text">Resume</span>
            </h1>
            <p className="text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8" style={{ color: '#64748b' }}>
              A curated overview of my skills, education, projects, and experience.
            </p>

            {/* Download CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <GlassButton
                type="button"
                className="shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                glassColor="rgba(255,255,255,0.07)"
                style={{ color: '#fff' }}
                onClick={() => alert('Resume PDF coming soon! Contact me directly for a copy.')}
              >
                <Download size={15} />
                Download Resume
              </GlassButton>

              <a
                href="mailto:bilawarmadhav@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
              >
                <Mail size={14} />
                Request PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="relative px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">

          {/* Contact Bar */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center p-5 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {[
              { icon: Mail, label: 'bilawarmadhav@gmail.com', href: 'mailto:bilawarmadhav@gmail.com' },
              { icon: GithubIcon, label: 'github.com/bilawarmadhav', href: 'https://github.com/bilawarmadhav' },
              { icon: LinkedinIcon, label: 'linkedin.com/in/madhav-bilawar', href: 'https://www.linkedin.com/in/madhav-bilawar-a2217a340' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-2 text-xs font-medium transition-colors duration-200"
                style={{ color: '#64748b' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <Icon size={13} />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Professional Summary */}
          <ResumeSection title="Professional Summary" accent="#94a3b8">
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#94a3b8' }}>
              BCA student and aspiring software developer with hands-on experience building{' '}
              <span className="font-semibold text-white">complete full-stack applications</span>,{' '}
              interactive learning tools, and professional business websites. Passionate about{' '}
              <span className="font-semibold text-slate-300">clean UI design</span>, practical software engineering,
              and continuously expanding my technical depth through real-world projects.
            </p>
          </ResumeSection>

          {/* Education */}
          <ResumeSection title="Education" accent="#a1a1aa">
            {education.map((edu, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold" style={{ color: '#f1f5f9' }}>{edu.degree}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: '#475569' }}>{edu.school}</p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {edu.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-xs flex items-start gap-2" style={{ color: '#64748b' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          {/* Experience */}
          <ResumeSection title="Experience" accent="#d1d5db">
            {experience.map((exp, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm sm:text-base font-bold" style={{ color: '#f1f5f9' }}>{exp.role}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: '#64748b', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-xs flex items-start gap-2" style={{ color: '#64748b' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          {/* Skills */}
          <ResumeSection title="Skills" accent="#e2e8f0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.label} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#475569' }}>{cat.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* Projects */}
          <ResumeSection title="Projects" accent="#71717a">
            <div className="space-y-4">
              {[
                { title: 'DSA Storyboard', desc: 'Interactive algorithm visualization platform. Live at tenalitactician.netlify.app.', link: 'https://tenalitactician.netlify.app/', status: 'Live' },
                { title: 'Vihaan Glass Interiors', desc: 'Professional business website for a glass/interior design brand.', status: 'Coming Soon' },
                { title: 'Coding Event Portal', desc: 'Full-stack team event platform with auth, rounds, and admin dashboard.', status: 'In Progress' },
                { title: 'Portfolio Website', desc: 'This multi-page cinematic developer portfolio built with Next.js + Framer Motion.', status: 'Live' },
              ].map((proj, i) => (
                <div key={i} className="flex items-start justify-between gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold" style={{ color: '#e2e8f0' }}>{proj.title}</h3>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: proj.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)',
                          color: proj.status === 'Live' ? '#4ade80' : '#64748b',
                          border: `1px solid ${proj.status === 'Live' ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.07)'}`,
                        }}>
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{proj.desc}</p>
                  </div>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer"
                      className="shrink-0 transition-colors duration-200" style={{ color: '#475569' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#475569')}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/projects" className="text-sm font-medium transition-colors duration-200" style={{ color: '#64748b' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
                View all projects →
              </Link>
            </div>
          </ResumeSection>

          {/* Bottom CTA */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl text-center"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm sm:text-base font-semibold mb-2" style={{ color: '#e2e8f0' }}>
              Interested in working together?
            </p>
            <p className="text-xs sm:text-sm mb-6" style={{ color: '#64748b' }}>
              I'm open to internships, freelance projects, and collaborations.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#f1f5f9' }}>
              <Mail size={14} />
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ResumeSection({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="h-[2px] w-6 rounded-full" style={{ background: accent }} />
        <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#f1f5f9' }}>{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
