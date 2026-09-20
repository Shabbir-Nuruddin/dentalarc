"use client";

import React, { useState, useEffect, useRef } from "react";
import { playTick, playSnap } from "@/lib/sound";
import { Activity, ShieldCheck, Zap, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";

interface ClinicalStage {
  id: number;
  stageNum: string;
  title: string;
  subtitle: string;
  instrument: string;
  accuracy: string;
  timeEstimate: string;
  doctorNote: string;
  details: string[];
  graphicType: "apex" | "laser" | "cadcam";
}

const stages: ClinicalStage[] = [
  {
    id: 1,
    stageNum: "01",
    title: "Computerized 3D Apex Localization",
    subtitle: "Sub-millimeter canal depth tracking with zero radiation exposure",
    instrument: "Digital Multi-Frequency Apex Locator",
    accuracy: "±0.1 mm precision",
    timeEstimate: "12 mins",
    doctorNote:
      "Conventional X-rays flatten 3D root curves into 2D silhouettes. Electronic apex mapping tracks the exact apical foramen in real-time.",
    details: [
      "Real-time acoustic canal mapping without ionizing radiation",
      "Automatic detection of calcified and curved root anatomy",
      "Prevents over-instrumentation and post-procedure soreness",
    ],
    graphicType: "apex",
  },
  {
    id: 2,
    stageNum: "02",
    title: "Diode Laser Canal Cleansing & Sterilization",
    subtitle: "Deep photothermal decontamination eliminating 99.9% of micro-pathogens",
    instrument: "High-Frequency Soft-Tissue Diode Laser (980nm)",
    accuracy: "99.9% bacterial eradication",
    timeEstimate: "18 mins",
    doctorNote:
      "Chemical irrigants can't penetrate microscopic dentinal tubules. Laser energy vaporizes deep bacterial colonies in seconds.",
    details: [
      "Photothermal energy penetrates 1000μm into dentinal tubules",
      "Simultaneous bio-stimulation accelerates periapical healing",
      "Zero swelling, zero chemical taste, completely painless",
    ],
    graphicType: "laser",
  },
  {
    id: 3,
    stageNum: "03",
    title: "Monolithic CAD/CAM Zirconia Placement",
    subtitle: "3D scanned, computer-milled crown with 15-year manufacturer guarantee",
    instrument: "5-Axis High-Torque Dental Milling Center",
    accuracy: "50-micron margin seal",
    timeEstimate: "Single visit delivery",
    doctorNote:
      "Every restoration is milled from solid medical-grade zirconia. No metal substructure, zero black gum lines, and natural enamel luminescence.",
    details: [
      "High-translucency gradient mimicking natural enamel depth",
      "Over 1200 MPa flexural strength for heavy biting loads",
      "Certified 15-year warranty card provided to every patient",
    ],
    graphicType: "cadcam",
  },
];

export default function ClinicalScrollJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastReportedStage = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (containerHeight <= 0) return;

      const scrollProgress = Math.max(0, Math.min(1, -rect.top / containerHeight));
      const targetStage = Math.min(
        stages.length - 1,
        Math.floor(scrollProgress * stages.length)
      );

      if (targetStage !== lastReportedStage.current) {
        playTick(2400 + targetStage * 200, 0.04);
        lastReportedStage.current = targetStage;
        setActiveStage(targetStage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const selectStage = (index: number) => {
    playSnap(480, 0.06);
    setActiveStage(index);
  };

  const current = stages[activeStage];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] bg-[#FAF8F5] border-b-2 border-slate-900"
    >
      {/* Sticky Surgical Viewport Container */}
      <div className="sticky top-16 min-h-[calc(100vh-4rem)] flex items-center py-10">
        <div className="layout-container w-full">
          
          {/* Section Editorial Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-900 pb-4 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary-700">
                <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                <span>The Dental Arc Method • Clinical Telemetry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mt-1">
                Precision Protocol Scrubbing
              </h2>
            </div>

            {/* Stage Selector Chips (Interactive Audio Feedback) */}
            <div className="flex items-center gap-2">
              {stages.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => selectStage(i)}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all border ${
                    activeStage === i
                      ? "bg-slate-900 text-white border-slate-900 shadow-offset-sm scale-105"
                      : "bg-white text-slate-700 border-slate-300 hover:border-slate-800"
                  }`}
                >
                  ST.{st.stageNum}
                </button>
              ))}
            </div>
          </div>

          {/* Dual Column Layout: Left Telemetry / Right Interactive Schematic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Clinical Specs & Details (Tactile Card) */}
            <div className="lg:col-span-6 bg-white border-2 border-slate-900 p-6 sm:p-8 rounded-lg shadow-offset flex flex-col justify-between">
              
              <div className="space-y-5">
                {/* Stage Badge & Sittings Time */}
                <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-300 rounded">
                    PHASE {current.stageNum} OF 03
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-primary-600" />
                    <span>Duration: {current.timeEstimate}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {current.subtitle}
                  </p>
                </div>

                {/* Instrumental Spec Strip */}
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-mono">Apparatus:</span>
                    <strong className="text-slate-900">{current.instrument}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-mono">Clinical Target:</span>
                    <strong className="text-emerald-700 font-bold">{current.accuracy}</strong>
                  </div>
                </div>

                {/* Clinical Checkpoints */}
                <div className="space-y-2">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Surgical Protocol Steps:
                  </p>
                  {current.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctor Clinical Quote */}
              <div className="mt-6 pt-4 border-t border-dashed border-slate-300">
                <blockquote className="text-xs text-slate-600 italic border-l-2 border-primary-600 pl-3">
                  "{current.doctorNote}"
                </blockquote>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1.5 pl-3">
                  — Dr. Archana Raj Jha, Dental Surgeon & Clinical Director
                </p>
              </div>

            </div>

            {/* Right Column: Visual Stage Graphic & Interactive Progress Scrub */}
            <div className="lg:col-span-6 bg-[#0A101D] border-2 border-slate-900 rounded-lg p-6 sm:p-8 text-white shadow-offset flex flex-col justify-between relative overflow-hidden">
              
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Graphic Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-teal-300 font-bold">
                    Telemetry View • {current.graphicType.toUpperCase()}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  Scroll down to advance phase ↓
                </span>
              </div>

              {/* Central Graphic Simulation */}
              <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center space-y-5 min-h-[240px]">
                {current.graphicType === "apex" && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 animate-ping" />
                      <div className="w-24 h-24 rounded-full border-2 border-teal-400 flex items-center justify-center bg-teal-950/40 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                        <Zap className="w-10 h-10 text-teal-300 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-mono font-bold text-teal-300">
                        APICAL FORAMEN REACHED: 0.0 mm
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Electronic resistance verified across all 3 root canals
                      </p>
                    </div>
                  </div>
                )}

                {current.graphicType === "laser" && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                      <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />
                      <div className="w-24 h-24 rounded-full border-2 border-emerald-400 flex items-center justify-center bg-emerald-950/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        <ShieldCheck className="w-10 h-10 text-emerald-300" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-mono font-bold text-emerald-400">
                        980nm PHOTOTHERMAL DECONTAMINATION
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Endodontic micro-flora vaporized • Zero thermal damage
                      </p>
                    </div>
                  </div>
                )}

                {current.graphicType === "cadcam" && (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-amber-400/40 animate-spin-slow" />
                      <div className="w-24 h-24 rounded-full border-2 border-amber-400 flex items-center justify-center bg-amber-950/40 shadow-[0_0_20px_rgba(245,165,36,0.3)]">
                        <Sparkles className="w-10 h-10 text-amber-300" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-mono font-bold text-amber-300">
                        MONOLITHIC ZIRCONIA MILLED
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        CAD/CAM 5-axis margin fidelity • 15-Year Guarantee Card
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Bar & Stage Indicator */}
              <div className="relative z-10 pt-4 border-t border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>PROCEDURAL ADVANCEMENT</span>
                  <span className="text-teal-400 font-bold">
                    {Math.round(((activeStage + 1) / stages.length) * 100)}% COMPLETE
                  </span>
                </div>
                
                {/* Scrub Track */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-0.5 border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${((activeStage + 1) / stages.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
