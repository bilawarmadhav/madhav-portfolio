"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-white/10 bg-black/50 backdrop-blur-xl p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition} onClick={() => handleNav('#home')}>Home</Tab>
      <Tab setPosition={setPosition} onClick={() => handleNav('#about')}>About</Tab>
      <Tab setPosition={setPosition} onClick={() => handleNav('#projects')}>Projects</Tab>
      <Tab setPosition={setPosition} onClick={() => handleNav('#skills')}>Skills</Tab>
      <Tab setPosition={setPosition} onClick={() => handleNav('#contact')}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-400 md:px-5 md:py-3 md:text-[13px] hover:text-white transition-colors"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white/5 border border-white/5 md:h-[42px]"
      style={{ top: '4px' }}
    />
  );
};

export default NavHeader;
