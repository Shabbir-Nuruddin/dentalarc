"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Star, ArrowUpRight, Phone, Clock, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";
import CircularClinicSeal from "@/components/ui/CircularClinicSeal";
import Link from "next/link";
import { playTick, playSnap } from "@/lib/sound";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring physics for scroll depth
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 70]), {
    stiffness: 100,
    damping: 25,
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 flex items-center bg-[#FAF8F5] text-slate-900 overflow-hidden border-b-2 border-slate-900"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Hairline Scroll Progress Bar along Top of Viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-primary-600 to-amber-500 origin-left z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="layout-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Kinetic Editorial Headline & Action Matrix */}
          <motion.div
            style={{ opacity: textOpacity }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Google Rating Micro-Pill */}
            <div className="inline-flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2400, 0.04)}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-slate-900 shadow-offset-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-slate-900">
                  5.0 on Google
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-bold text-teal-800 flex items-center gap-1 group-hover:underline">
                  100+ Reviews <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sterile Operatory</span>
              </span>
            </div>

            {/* High-Character Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                Precision Dentistry &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-primary-700 to-slate-900">
                  Aesthetic Implant Center
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 max-w-xl font-normal leading-relaxed">
                Led by Dr. Archana Raj Jha. Painless rotary root canals, bespoke CAD/CAM zirconia restorations, and laser gum therapy in Gurugram Sector 70 & Sector 65.
              </p>
            </div>

            {/* Clinical Highlights Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                "Painless Rotary RCT",
                "Diode Laser Therapy",
                "0% EMI In-Clinic",
                "Open 7 Days till 9 PM",
              ].map((highlight, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-white border border-slate-300 text-xs font-mono font-semibold text-slate-800 shadow-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Action Matrix: Consultation + WhatsApp + Phone */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Link
                href="/contact"
                onClick={() => playSnap(520, 0.07)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-offset hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Book Consultation
              </Link>

              {/* Direct WhatsApp Action Button */}
              <a
                href="https://wa.me/917979927696?text=Hi%20Dr.%20Archana%2C%20I%20would%20like%20to%20book%20a%20dental%20consultation%20at%20Dental%20Arc."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2600, 0.05)}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-offset-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.245-.587-.494-.507-.677-.517-.176-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.24A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
                <span>WhatsApp Dr. Archana</span>
              </a>

              {/* Direct Telephone */}
              <a
                href="tel:+917979927696"
                onClick={() => playTick(2200, 0.04)}
                className="inline-flex items-center gap-2 text-slate-800 hover:text-primary-800 text-sm font-bold px-5 py-3.5 rounded-full border-2 border-slate-900 bg-white shadow-offset-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4 text-primary-700" />
                <span>+91 79799 27696</span>
              </a>
            </div>

            {/* In-Clinic Micro Trust Indicators */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary-700" />
                <span>Spaze Forum, Sec 70 & M3M Urbana, Sec 65</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Same-Day Emergency Relief</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Architectural Operatory Showcase with Scroll Parallax */}
          <motion.div
            style={{ y: smoothY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Rotating Circular Seal of Clinical Excellence */}
            <div className="absolute -top-7 -right-7 z-20 hidden sm:block">
              <CircularClinicSeal size={125} theme="gold" />
            </div>

            {/* Tactile Architectural Card with Hard Offset Shadow */}
            <div className="relative rounded-2xl border-2 border-slate-900 bg-white p-2.5 shadow-offset transition-transform">
              
              {/* Photo Viewport */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <motion.div style={{ scale: photoScale }} className="w-full h-full">
                  <ClinicImage
                    src="/clinic_operatory_overview.jpg"
                    alt="Dental Arc surgical operatory suite in Sector 70 Gurugram"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Micro Live Telemetry Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-slate-900 border border-slate-900 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Suite 01 • Active Operatory</span>
                </div>
              </div>

              {/* Architectural Caption Strip */}
              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-slate-200 mt-2.5 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">Dental Arc Operatory Suite</p>
                  <p className="text-slate-500 text-[11px] font-mono">Spaze Forum F-115, Sector 70 Gurugram</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-mono font-bold">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Sterile Setup</span>
                  </span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
