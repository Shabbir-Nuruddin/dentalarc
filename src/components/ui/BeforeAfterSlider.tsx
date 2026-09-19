"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import ClinicImage from "@/components/ui/ClinicImage";
import { playTick, playSnap } from "@/lib/sound";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before Treatment",
  afterLabel = "10 Days Post-Procedure",
  className = "aspect-[16/10]",
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTickPos = useRef(50);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));

    // Acoustic micro-click every 3% step change
    if (Math.abs(pos - lastTickPos.current) >= 3.0) {
      playTick(2400, 0.035);
      lastTickPos.current = pos;
    }

    setSliderPos(pos);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => {
    setIsDragging(true);
    playSnap(480, 0.05);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => {
        const next = Math.max(0, prev - 5);
        playTick(2200, 0.04);
        return next;
      });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => {
        const next = Math.min(100, prev + 5);
        playTick(2600, 0.04);
        return next;
      });
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMove]);


  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="slider"
      aria-label="Before and after clinical comparison slider"
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      className={`relative w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-900 select-none cursor-ew-resize group shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
    >
      {/* After Image (Full Base) */}
      <div className="absolute inset-0 w-full h-full">
        <ClinicImage
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-emerald-400 text-[10px] font-semibold px-2.5 py-1 rounded tracking-wider uppercase border border-white/10">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <div
          className="relative h-full"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
          }}
        >
          <ClinicImage
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2.5 py-1 rounded tracking-wider uppercase border border-white/10">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Draggable Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.7)] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Center Grab Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border border-slate-300 group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Interactive Bottom Hint */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
        <span className="bg-black/60 backdrop-blur-sm text-white/80 text-[10px] px-3 py-1 rounded-full tracking-wide">
          Drag slider to view before & after
        </span>
      </div>
    </div>
  );
}
