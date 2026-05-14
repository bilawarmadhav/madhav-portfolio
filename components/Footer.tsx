'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="relative py-10 px-6 text-center"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: '#050505',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm mb-1" style={{ color: '#475569' }}>
          Designed & Built by{' '}
          <span className="gradient-text font-semibold">Madhav Bilawar</span>
        </p>
        <p className="text-xs" style={{ color: '#334155' }}>
          {year !== null ? `© ${year} · All rights reserved` : ''}
        </p>
      </motion.div>
    </footer>
  );
}
