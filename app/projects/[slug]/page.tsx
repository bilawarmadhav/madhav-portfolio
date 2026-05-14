'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { notFound } from 'next/navigation';

// Centralized project data — expand as needed
const PROJECTS: Record<string, {
  id: string;
  number: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  challenges: string[];
  learnings: string[];
  future: string[];
  accent: string;
  category: string;
  status: string;
  github: string;
  demo: string;
}> = {
  'dsa-storyboard': {
    id: 'dsa-storyboard',
    number: '01',
    title: 'DSA Storyboard',
    tagline: 'Making Data Structures & Algorithms visual, interactive, and unforgettable.',
    overview:
      'DSA Storyboard is a creative learning platform designed to bridge the gap between dry theory and intuitive understanding. Instead of reading static explanations, users watch algorithms come to life through animated, step-by-step visual storytelling.',
    problem:
      'Most DSA resources are either too abstract (just code) or too basic (simple diagrams). Learners struggle to visualize what actually happens during algorithm execution — arrays shifting, pointers moving, stacks growing. This leads to surface-level understanding that breaks down in interviews.',
    solution:
      'Build an interactive visualization engine that animates each algorithmic step with clear narration, color-coded elements, and a story-driven UI. Every algorithm gets its own "episode" — complete with context, execution breakdown, and insight callouts.',
    features: [
      'Step-by-step algorithm visualization with animated transitions',
      'Story-mode narration for each algorithm',
      'Color-coded element highlighting during execution',
      'Multiple sorting and searching algorithms supported',
      'Progress tracking across algorithm episodes',
      'Download transcripts as TXT/PDF',
      'Simulated interview mode with hints',
      'Dark cinematic UI with premium aesthetics',
    ],
    tech: ['JavaScript (Vanilla)', 'HTML5 Canvas', 'CSS3 Animations', 'Local Storage API', 'Netlify Deployment'],
    challenges: [
      'Building a generic animation engine flexible enough for different algorithm types',
      'Synchronizing narration text with visual state transitions',
      'Keeping the UI from feeling cluttered while showing algorithm state',
      'Ensuring smooth frame-by-frame control without heavy libraries',
    ],
    learnings: [
      'Deep understanding of canvas-based animation timing',
      'How to design educational UX that is both fun and informative',
      'Importance of state management even in vanilla JS projects',
      'Performance optimization for smooth 60fps animations',
    ],
    future: [
      'Add graph algorithm visualizations (BFS, DFS, Dijkstra)',
      'User accounts with cross-device progress sync',
      'AI-powered hint system for stuck learners',
      'Community-contributed algorithm modules',
      'Mobile app version',
    ],
    accent: '#94a3b8',
    category: 'Creative Tech',
    status: 'Live',
    github: 'https://github.com/bilawarmadhav',
    demo: 'https://tenalitactician.netlify.app/',
  },
  'vihaan-glass': {
    id: 'vihaan-glass',
    number: '02',
    title: 'Vihaan Glass Interiors',
    tagline: 'A premium web presence for a glass and interior design brand.',
    overview:
      'Vihaan Glass Interiors is a professional business website built for a real glass and interior design company. The goal was to create a clean, trustworthy, and premium digital presence that converts visitors into customers.',
    problem:
      'The client had no digital presence — customers couldn\'t find them online, understand their services, or easily make contact. A hand-built basic site wasn\'t cutting it in a competitive market.',
    solution:
      'Design and build a fully responsive, modern business website with a strong visual identity, clear service breakdown, portfolio gallery, testimonials, and a prominent contact/inquiry flow.',
    features: [
      'Clean modern homepage with hero section',
      'Service breakdown with visual categories',
      'Portfolio/gallery section',
      'Contact form and Google Maps integration',
      'Mobile-first responsive design',
      'Fast load times and SEO basics',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API'],
    challenges: [
      'Translating an offline brand into a coherent visual identity',
      'Making the design feel premium without complex technology',
      'Optimizing images for fast mobile load times',
    ],
    learnings: [
      'Client communication and turning vague requirements into concrete designs',
      'How a strong visual hierarchy improves conversion',
      'The importance of mobile-first design from the start',
    ],
    future: [
      'Backend admin panel for the client to update portfolio',
      'WhatsApp chat integration',
      'SEO optimization and analytics',
    ],
    accent: '#a1a1aa',
    category: 'Web Development',
    status: 'Coming Soon',
    github: 'https://github.com/bilawarmadhav',
    demo: '',
  },
  'coding-event-portal': {
    id: 'coding-event-portal',
    number: '03',
    title: 'Coding Event Portal',
    tagline: 'A surreal, team-based coding competition platform built from scratch.',
    overview:
      'A full-stack event platform designed for hosting multi-round, team-based coding competitions. Built with a surreal, cinematic aesthetic to match the event\'s "Surreal Coding" theme.',
    problem:
      'Standard event platforms like Google Forms or Eventbrite are generic and boring. For an immersive coding competition, you need login, team formation, round-by-round content delivery, scoring, and a unique visual experience.',
    solution:
      'Build a custom full-stack portal with Node.js/Express backend, JWT auth, round-based challenge delivery, admin dashboard, and a dark surreal frontend theme.',
    features: [
      'Team registration and login with JWT auth',
      'Round-based challenge unlock system',
      'Admin dashboard for event management',
      'Real-time leaderboard',
      'Surreal themed UI with custom animations',
      'Phase 1 (elimination) and Phase 2 (finals) structure',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'JavaScript', 'HTML/CSS'],
    challenges: [
      'Designing a round-unlock system that prevents cheating',
      'Real-time leaderboard without WebSockets (polling strategy)',
      'Managing event state across hundreds of concurrent teams',
    ],
    learnings: [
      'Full-stack architecture from auth to database to frontend',
      'Importance of race condition handling in concurrent systems',
      'Admin UX needs as much attention as user-facing UX',
    ],
    future: [
      'WebSocket-based real-time updates',
      'Automated judge for code submissions',
      'Mobile responsive admin interface',
    ],
    accent: '#d1d5db',
    category: 'Full Stack',
    status: 'Coming Soon',
    github: 'https://github.com/bilawarmadhav',
    demo: '',
  },
  'academic-practice': {
    id: 'academic-practice',
    number: '04',
    title: 'Academic & Technical Practice',
    tagline: 'Building unbreakable foundations through deep study and structured practice.',
    overview:
      'A curated collection of academic projects, algorithm implementations, and structured practice work across Java, C, DBMS, and DSA. This represents the foundation beneath everything else I build.',
    problem:
      'Without strong fundamentals, complex software breaks. Many developers rush to frameworks without truly understanding what\'s happening underneath — leading to fragile code and poor problem-solving in interviews.',
    solution:
      'Systematically work through core CS concepts — implementing data structures from scratch, solving DBMS normalization problems, analyzing algorithm complexity, and building small but complete programs in Java and C.',
    features: [
      'Data structure implementations from scratch (arrays, linked lists, trees, graphs)',
      'Sorting and searching algorithm library with complexity analysis',
      'DBMS projects with normalization, ER diagrams, and SQL queries',
      'Java OOP projects demonstrating design patterns',
      'C programs covering pointers, memory management, file I/O',
    ],
    tech: ['Java', 'C', 'SQL', 'MySQL', 'DSA', 'DBMS Concepts'],
    challenges: [
      'Staying disciplined without external deadlines',
      'Understanding low-level memory in C after working in higher-level languages',
      'Making academic work feel purposeful and connected',
    ],
    learnings: [
      'True understanding of how computers store and manipulate data',
      'How OOP design patterns solve recurring architectural problems',
      'Database normalization and the art of efficient schema design',
      'Time and space complexity thinking applied to every solution',
    ],
    future: [
      'Compile into an open-source learning repository',
      'Add interactive visualizations for key algorithms',
      'Document patterns in a personal engineering notebook',
    ],
    accent: '#71717a',
    category: 'Core CS',
    status: 'Ongoing',
    github: 'https://github.com/bilawarmadhav',
    demo: '',
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS[resolvedParams.slug];
  if (!project) notFound();

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 pb-16 pt-32 sm:pt-40">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #101010 0%, #050505 70%)' }} />
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${project.accent}08 0%, transparent 70%)` }}
        />
        <div
          className="absolute h-[2px] top-0 left-0 right-0"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}50, transparent)` }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            {/* Back link */}
            <motion.div custom={0} variants={fadeUp} className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: '#64748b' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <ArrowLeft size={15} />
                Back to Projects
              </Link>
            </motion.div>

            <motion.div custom={1} variants={fadeUp}>
              <span className="text-[10px] font-semibold tracking-widest uppercase mb-3 block" style={{ color: project.accent }}>
                {project.category}
              </span>
            </motion.div>

            <motion.h1 custom={2} variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              <span className="gradient-text glow-text">{project.title}</span>
            </motion.h1>

            <motion.p custom={3} variants={fadeUp} className="text-lg sm:text-xl leading-relaxed mb-8" style={{ color: '#64748b' }}>
              {project.tagline}
            </motion.p>

            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide"
                style={{
                  background: project.status === 'Live' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${project.status === 'Live' ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`,
                  color: project.status === 'Live' ? '#4ade80' : '#64748b',
                }}
              >
                {project.status}
              </span>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                  style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30`, color: project.accent }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
              >
                <GithubIcon size={14} />
                Repository
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-4 sm:px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">

          {/* Overview */}
          <ContentBlock title="Project Overview" accent={project.accent}>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#94a3b8' }}>{project.overview}</p>
          </ContentBlock>

          {/* Problem */}
          <ContentBlock title="The Problem" accent={project.accent}>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#94a3b8' }}>{project.problem}</p>
          </ContentBlock>

          {/* Solution */}
          <ContentBlock title="The Solution" accent={project.accent}>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#94a3b8' }}>{project.solution}</p>
          </ContentBlock>

          {/* Features */}
          <ContentBlock title="Key Features" accent={project.accent}>
            <ul className="space-y-2.5">
              {project.features.map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: '#94a3b8' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
                  {f}
                </motion.li>
              ))}
            </ul>
          </ContentBlock>

          {/* Tech Stack */}
          <ContentBlock title="Tech Stack" accent={project.accent}>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}28`, color: project.accent }}
                >
                  {t}
                </span>
              ))}
            </div>
          </ContentBlock>

          {/* Challenges */}
          <ContentBlock title="Challenges Faced" accent={project.accent}>
            <ul className="space-y-2.5">
              {project.challenges.map((c, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: '#94a3b8' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
                  {c}
                </motion.li>
              ))}
            </ul>
          </ContentBlock>

          {/* Learnings */}
          <ContentBlock title="Key Learnings" accent={project.accent}>
            <ul className="space-y-2.5">
              {project.learnings.map((l, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: '#94a3b8' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
                  {l}
                </motion.li>
              ))}
            </ul>
          </ContentBlock>

          {/* Future */}
          <ContentBlock title="Future Improvements" accent={project.accent}>
            <ul className="space-y-2.5">
              {project.future.map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: '#94a3b8' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
                  {f}
                </motion.li>
              ))}
            </ul>
          </ContentBlock>

          {/* CTA */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl text-center"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: '#e2e8f0' }}>Interested in collaborating?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#f1f5f9' }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContentBlock({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="h-[2px] w-6 rounded-full" style={{ background: accent }} />
        <h2 className="text-lg sm:text-xl font-bold" style={{ color: '#f1f5f9' }}>{title}</h2>
      </div>
      <div
        className="p-5 sm:p-6 rounded-2xl"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
      >
        {children}
      </div>
    </motion.div>
  );
}
