"use client";

import { motion } from "motion/react";
import { Star, MapPin, Phone, ShieldCheck, Play, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  return (
    <section className="relative min-h-[92vh] pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background Video Loop with Subtle Cinematic Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {isPlayingVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25 scale-105 transition-opacity duration-1000"
          >
            <source src={assetPath("/dental-hero.mp4")} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="layout-container relative z-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clinic Introduction and Direct Trust Badges */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Real Google Rating Pill */}
            <motion.a
              href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z/data=!4m15!1m7!3m6!1s0x390d2308072eed75:0xdf3be68ea474d7bc!2sDENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha!8m2!3d28.395294!4d77.030255!16s%2Fg%2F11t9qzcjv5!3m6!1s0x390d2308072eed75:0xdf3be68ea474d7bc!8m2!3d28.395294!4d77.030255!10e5!16s%2Fg%2F11t9qzcjv5"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all group cursor-pointer text-xs sm:text-sm"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Star Rated on Google Maps</span>
              <span className="text-white/60">|</span>
              <span className="text-primary-300 group-hover:text-primary-200 flex items-center gap-1 font-medium">
                Verified Clinic <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Precision Dentistry &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-teal-200 to-primary-400">
                  Implant Center
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                Led by <span className="text-white font-medium">Dr. Archana Raj Jha</span>, Dental Arc delivers painless root canal treatments, immediate dental implants, laser gum therapy, and smile designing across Sector 70 & Sector 65, Gurugram.
              </p>
            </motion.div>

            {/* Quick Key Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-xs sm:text-sm text-slate-300 pt-2"
            >
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Painless RCT & Laser</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>0% EMI Available</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-sm col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open 7 Days • Till 9 PM</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold text-base shadow-lg shadow-primary-900/40 hover:shadow-primary-700/50 transition-all transform hover:-translate-y-0.5"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+917979927696"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all"
              >
                <Phone className="w-4 h-4 text-primary-300" />
                <span>+91 79799 27696</span>
              </a>

              <a
                href="https://www.google.com/maps/dir//DENTAL+ARC+Spaze+Forum+Sector+70+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                <span>Directions to Spaze Forum</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: High-Impact Authentic Clinic Photo Feature */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-800 shadow-2xl shadow-black/60 group"
            >
              {/* Primary Operatory Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={assetPath("/clinic_operatory_overview.jpg")}
                  alt="Dental Arc actual operatory and dental treatment chair in Sector 70 Gurgaon"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Live Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium tracking-wide uppercase text-white">Actual Clinic Facility</span>
                </div>

                {/* Subtitle Bar at Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
                  <p className="text-sm font-semibold">Dental Arc Operatory Suite</p>
                  <p className="text-xs text-slate-300">Spaze Forum F-115, Sector 70 Gurugram</p>
                </div>
              </div>

              {/* Inset Strip: Clinic Signboard & Consultation Room */}
              <div className="grid grid-cols-2 gap-px bg-white/10 border-t border-white/15">
                <div className="relative aspect-[16/9] overflow-hidden group/sub">
                  <img
                    src={assetPath("/clinic_exterior_signboard.jpg")}
                    alt="Dental Arc physical clinic exterior signboard below Cult Fitness Gym"
                    className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                    <span className="text-[10px] font-medium text-white/90">Exterior Signboard</span>
                  </div>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden group/sub">
                  <img
                    src={assetPath("/clinic_treatment_laser.jpg")}
                    alt="Dr. Archana Raj Jha performing laser dentistry procedure"
                    className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                    <span className="text-[10px] font-medium text-white/90">Laser Treatment in Action</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
