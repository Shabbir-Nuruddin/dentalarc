"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Star } from "lucide-react";
import { useRef } from "react";
import PremiumButton from "@/components/ui/PremiumButton";

// Staggered text animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        <img 
          src="/clinic-hero.jpg" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>
      
      <div className="layout-container relative z-20 w-full pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-white"
        >
          <motion.div variants={item}>
            <a 
              href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-sm font-medium mb-10 transition-colors group cursor-pointer"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="tracking-wide text-slate-200 group-hover:text-white">5.0 Star Rated on Google • Sector 70 & 65 Gurugram</span>
            </a>
          </motion.div>
          
          <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] mb-8">
            Precision Dentistry.<br/>
            <span className="text-primary-400 italic font-light tracking-normal font-serif">Impeccable Results.</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-light">
            Specializing in pain-free Root Canal Treatments, Zirconia Crowns, and Dental Implants. Experience premium dental care with Dr. Archana Raj Jha.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <PremiumButton href="/contact" variant="primary">
              Book Appointment
            </PremiumButton>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=28.395294,77.030255"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all font-semibold text-sm flex items-center gap-2"
            >
              <span>Get Directions</span>
            </a>
            <a 
              href="tel:+917979927696"
              className="px-6 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white transition-all font-semibold text-sm flex items-center gap-2 shadow-lg"
            >
              <span>Call +91 79799 27696</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
