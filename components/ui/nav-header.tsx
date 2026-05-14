"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home",       href: "/",           hashTarget: "#home"     },
  { label: "Projects",   href: "/projects",   hashTarget: "#projects" },
  { label: "Skills",     href: "/skills",     hashTarget: "#skills"   },
  { label: "Experience", href: "/experience", hashTarget: null        },
  { label: "Contact",    href: "/contact",    hashTarget: "#contact"  },
  { label: "Resume",     href: "/resume",     hashTarget: null        },
];

function NavHeader() {
  const pathname = usePathname();
  const router   = useRouter();

  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  const handleClick = (href: string, hashTarget: string | null) => {
    if (pathname === "/" && hashTarget) {
      const el = document.querySelector(hashTarget);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/10 bg-black/60 backdrop-blur-xl p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {NAV_ITEMS.map(({ label, href, hashTarget }) => (
        <Tab
          key={label}
          setPosition={setPosition}
          onClick={() => handleClick(href, hashTarget)}
          active={isActive(href)}
        >
          {label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
  active,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  onClick?: () => void;
  active?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-2.5 py-2 text-[10px] font-bold uppercase tracking-wider md:px-5 md:py-2.5 md:text-[12px] transition-colors"
      style={{ color: active ? "#f1f5f9" : "#64748b" }}
    >
      {children}
      {active && (
        <span
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/40"
        />
      )}
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => (
  <motion.li
    animate={position}
    className="absolute z-0 h-8 rounded-full bg-white/5 border border-white/5 md:h-[38px]"
    style={{ top: "4px" }}
  />
);

export default NavHeader;
