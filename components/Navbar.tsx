'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavHeader from './ui/nav-header';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-2 py-3 md:px-4 md:py-6 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    >
      <div className="max-w-3xl mx-auto flex justify-center pointer-events-auto">
        <NavHeader />
      </div>
    </motion.nav>
  );
}
