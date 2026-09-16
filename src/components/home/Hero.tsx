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
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-medium mb-10">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="tracking-wide">Top Rated Dental Clinic in Sector 70, Gurugram</span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] mb-8">
            Precision Dentistry.<br/>
            <span className="text-primary-400 italic font-light tracking-normal font-serif">Impeccable Results.</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-light">
            Specializing in pain-free Root Canal Treatments, Zirconia Crowns, and Dental Implants. Experience premium dental care with Dr. Archana Raj Jha.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6">
            <PremiumButton href="/contact" variant="primary">
              Book Your Visit
            </PremiumButton>
            <PremiumButton href="/services" variant="outline">
              Explore Our Services
            </PremiumButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
