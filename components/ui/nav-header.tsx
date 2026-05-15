"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LiquidButton } from "./liquid-glass-button";
import { 
  Home, 
  Briefcase, 
  Code2, 
  History, 
  Mail, 
  FileText 
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",       href: "/",           hashTarget: "#home",     icon: Home },
  { label: "About",      href: "/#about",     hashTarget: "#about",    icon: FileText },
  { label: "Projects",   href: "/projects",   hashTarget: "#projects", icon: Briefcase },
  { label: "Skills",     href: "/skills",     hashTarget: "#skills",   icon: Code2 },
  { label: "Experience", href: "/experience", hashTarget: "#experience", icon: History },
  { label: "Contact",    href: "/contact",    hashTarget: "#contact",  icon: Mail },
  { label: "Resume",     href: "/resume",     hashTarget: null,        icon: FileText },
];

function NavHeader() {
  const pathname = usePathname();
  const router   = useRouter();

  const handleClick = (href: string, hashTarget: string | null) => {
    if (hashTarget) {
      const el = document.querySelector(hashTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    router.push(href);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const path = href.split('#')[0];
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <div className="flex w-fit items-center justify-center rounded-full border border-white/5 bg-black/40 backdrop-blur-md p-1.5 shadow-2xl">
      <div className="flex items-center gap-1 md:gap-1.5">
        {NAV_ITEMS.map(({ label, href, hashTarget, icon: Icon }) => {
          const active = isActive(href);
          return (
            <LiquidButton
              key={label}
              size="sm"
              onClick={() => handleClick(href, hashTarget)}
              className={cn(
                "relative transition-all duration-300",
                active ? "text-white" : "text-slate-400 hover:text-slate-200"
              )}
              glassColor={active ? "rgba(255, 255, 255, 0.08)" : "transparent"}
            >
              <Icon size={14} className={cn("transition-transform duration-300", active && "scale-110")} />
              <span className="hidden md:block text-[11px] font-bold uppercase tracking-wider">
                {label}
              </span>
              {active && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </LiquidButton>
          );
        })}
      </div>
    </div>
  );
}

export default NavHeader;
