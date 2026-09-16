"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark";
  className?: string;
}

export default function PremiumButton({ href, children, variant = "primary", className }: PremiumButtonProps) {
  const baseStyles = "group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 ease-[0.19,1,0.22,1]";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.8)]",
    outline: "bg-transparent text-white border border-white/30 hover:border-white",
    dark: "bg-slate-900 text-white hover:shadow-2xl"
  };

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <motion.span 
          className="inline-block"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      </span>
      {/* Background sweep effect */}
      <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
    </Link>
  );
}
