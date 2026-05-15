'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LiquidButton } from './ui/liquid-glass-button';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';





function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconMail() {
  return <Mail size={18} />;
}

const socialLinks = [
  { label: 'GitHub',    href: 'https://github.com/bilawarmadhav',                     Icon: GithubIcon },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/madhav-bilawar-a2217a340', Icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/madhav.dx_',                 Icon: InstagramIcon },
  { label: 'Email',     href: 'mailto:bilawarmadhav@gmail.com',                       Icon: IconMail },
];

export default function HeroSection() {
  const router = useRouter();

  const handleNavigation = (href: string, selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-4 sm:px-6 pb-16 pt-24 sm:pb-20 sm:pt-28 md:pb-24 md:pt-32 lg:min-h-screen lg:pb-32"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at top right, #101010 0%, #050505 60%, #050505 100%)' }}
      />
      <div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(255, 255, 255, 0.03)' }}
      />
      <div
        className="absolute right-0 top-1/4 h-80 w-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(148, 163, 184, 0.05)' }}
      />

      <div className="relative z-10 mx-auto flex flex-col lg:grid w-full max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT  text */}
        <motion.div
          className="flex flex-col items-start text-left w-full"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mobile Top Row Constraint */}
          <div className="w-[55%] sm:w-[60%] lg:w-full flex flex-col items-start min-h-[180px] sm:min-h-[220px] lg:min-h-0">
          {/* Badge */}


          {/* Name */}
          <motion.h1
            className="text-left text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[5.6rem] lg:leading-[0.92]"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">Madhav</span>
            <span className="gradient-text block glow-text">Bilawar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-left text-base font-semibold text-slate-200 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ color: '#e2e8f0' }}>Creative Developer</span> <span style={{ color: '#64748b' }}>&amp;</span> <span style={{ color: '#94a3b8' }}>BCA Student</span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-4 max-w-xl text-left text-sm leading-6 text-slate-400 sm:text-base sm:leading-8"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            I build clean websites, practical software ideas, and interactive digital experiences
            that mix logic with creativity.
          </motion.p>

          </div>

          {/* CTA buttons */}
          <motion.div
            className="mt-7 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <LiquidButton
              type="button"
              onClick={() => handleNavigation('/projects', '#projects')}
              className="w-full sm:w-auto text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow"
              glassColor="rgba(255, 255, 255, 0.05)"
            >
              View My Work
              <ArrowRight size={15} />
            </LiquidButton>

            <LiquidButton
              type="button"
              onClick={() => handleNavigation('/contact', '#contact')}
              className="w-full sm:w-auto text-slate-300 shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow"
              glassColor="rgba(255, 255, 255, 0.02)"
            >
              Contact Me
              <Send size={15} />
            </LiquidButton>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border text-slate-300 transition-colors"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
                whileHover={{
                  y: -3,
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT  profile image */}
        <motion.div
          className="absolute right-0 top-6 sm:top-8 lg:static flex justify-center lg:justify-end w-[45%] sm:w-[40%] lg:w-full pointer-events-none lg:pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="relative flex items-center justify-center mb-8 lg:mb-0"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow */}
            <motion.div
              className="absolute w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:h-80 lg:w-80 rounded-full blur-2xl sm:blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(200, 200, 200, 0.03) 45%, transparent 72%)' }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Outer spinning ring */}
            <motion.div
              className="absolute w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:h-96 lg:w-96 rounded-full opacity-40"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'conic-gradient(from 120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.1))',
                maskImage: 'radial-gradient(circle, transparent 62%, black 63%)',
                WebkitMaskImage: 'radial-gradient(circle, transparent 62%, black 63%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner counter-spin ring */}
            <motion.div
              className="absolute w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:h-80 lg:w-80 rounded-full border opacity-50"
              style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className="absolute -top-1.5 lg:-top-2 left-1/2 h-2 w-2 lg:h-3 lg:w-3 -translate-x-1/2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #ffffff, #a1a1aa)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
                }}
              />
            </motion.div>
            {/* Profile image */}
            <div
              className="relative flex w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:h-72 lg:w-72 items-center justify-center rounded-full shadow-2xl"
              style={{
                boxShadow: '0 0 40px rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-transparent">
                <Image
                  src="/madhav.jpg"
                  alt="Portrait of Madhav Bilawar"
                  fill
                  priority
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 140px, 120px"
                  className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
