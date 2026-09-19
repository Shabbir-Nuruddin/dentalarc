"use client";

import React, { useId } from "react";
import { playTick } from "@/lib/sound";

interface CircularClinicSealProps {
  size?: number;
  className?: string;
  theme?: "dark" | "light" | "gold";
  text?: string;
}

export default function CircularClinicSeal({
  size = 130,
  className = "",
  theme = "dark",
  text = "★ DENTAL ARC GURUGRAM ★ DR. ARCHANA RAJ JHA BDS ★ CLINICAL EXCELLENCE ★",
}: CircularClinicSealProps) {
  const isGold = theme === "gold";
  const isDark = theme === "dark";

  const colors = isGold
    ? {
        bg: "bg-[#181024]",
        border: "border-amber-400/40",
        text: "#F5A524",
        ring: "rgba(245, 165, 36, 0.35)",
        centerText: "text-amber-300",
        subText: "text-amber-400/80",
      }
    : isDark
    ? {
        bg: "bg-[#0A101D]",
        border: "border-teal-500/40",
        text: "#2dd4bf",
        ring: "rgba(45, 212, 191, 0.3)",
        centerText: "text-white",
        subText: "text-teal-300",
      }
    : {
        bg: "bg-[#FAF8F5]",
        border: "border-slate-800/30",
        text: "#1E293B",
        ring: "rgba(30, 41, 59, 0.25)",
        centerText: "text-slate-900",
        subText: "text-slate-600",
      };

  const id = useId().replace(/:/g, "");
  const pathId = `seal-path-${id}`;

  return (
    <div
      className={`relative rounded-full flex items-center justify-center select-none group cursor-pointer transition-all duration-300 hover:scale-105 shadow-xl border ${colors.border} ${colors.bg} ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => playTick(2600, 0.03)}
      title="Dental Arc • Verified Surgical & Clinical Excellence"
    >
      {/* Outer Rotating Typographic Ring */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full animate-spin-slow group-hover:[animation-duration:12s]"
      >
        <defs>
          <path
            id={pathId}
            d="M 80, 80 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
          />
        </defs>

        {/* Concentric hairline rings (Letterpress tactile depth) */}
        <circle
          cx="80"
          cy="80"
          r="74"
          fill="none"
          stroke={colors.ring}
          strokeWidth="1"
        />
        <circle
          cx="80"
          cy="80"
          r="41"
          fill="none"
          stroke={colors.ring}
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Text running along circular path */}
        <text
          fill={colors.text}
          fontSize="9.2"
          fontWeight="700"
          letterSpacing="1.9"
          className="uppercase tracking-widest font-mono"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Static Inner Center Seal (Non-rotating for high readability) */}
      <div className="absolute inset-[27%] rounded-full flex flex-col items-center justify-center text-center pointer-events-none border border-white/10 shadow-inner">
        <span
          className={`font-serif text-base sm:text-lg font-black tracking-tight leading-none ${colors.centerText}`}
        >
          DA
        </span>
        <div className="w-4 h-[1px] bg-current my-1 opacity-50" />
        <span
          className={`text-[8px] font-mono tracking-wider uppercase font-bold leading-none ${colors.subText}`}
        >
          SEC 70
        </span>
      </div>
    </div>
  );
}
