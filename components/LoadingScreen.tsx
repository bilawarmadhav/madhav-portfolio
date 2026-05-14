'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal'>('loading');

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('reveal'), 200);
          setTimeout(onComplete, 1400);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#050505' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Background orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full animate-pulse-glow"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                animationDelay: '1s',
              }}
            />
          </div>

          {/* Logo / Name */}
          <motion.div
            className="relative z-10 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Glowing ring */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div
                className="w-20 h-20 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
                  padding: '2px',
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ background: '#050505' }}
                >
                  <span className="text-2xl font-bold gradient-text">MB</span>
                </div>
              </div>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="gradient-text glow-text">Madhav Bilawar</span>
            </motion.h1>
            <motion.p
              className="text-sm tracking-[0.3em] uppercase"
              style={{ color: '#64748b' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Creative Developer
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="relative z-10 w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="h-[2px] rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #94a3b8, #e2e8f0)',
                  width: `${Math.min(progress, 100)}%`,
                  boxShadow: '0 0 10px rgba(255,255,255,0.2)',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs" style={{ color: '#475569' }}>
                Loading
              </span>
              <span className="text-xs font-mono" style={{ color: '#e2e8f0' }}>
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
