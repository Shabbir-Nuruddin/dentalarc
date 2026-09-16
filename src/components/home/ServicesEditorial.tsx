"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { assetPath } from "@/lib/utils";

const specializations = [
  {
    id: "01",
    title: "Single-Sitting Root Canal (RCT)",
    subtitle: "Zero Pain Endodontics & Zirconia Crowns",
    desc: "Specialized root canal treatment utilizing digital apex locators and rotary instrumentation. Complete pain relief within the first sitting with natural-looking monolithic zirconia crown fitment.",
    reviewQuote: "Pain vanished completely on the first sitting. 3 zirconia crowns fitted with flawless precision.",
    reviewer: "Praveen Yadav & Dheeraj Verma • Verified Google Reviews",
    img: "/clinic-actual-1.jpg",
  },
  {
    id: "02",
    title: "Dental Implants & Rehabilitation",
    subtitle: "Titanium & Zirconia Implants",
    desc: "Permanent, stable tooth replacements planned with 3D CBCT imaging. Flapless, minimally invasive placement allows immediate recovery with zero postoperative swelling.",
    reviewQuote: "Both implants placed in one visit without pain or swelling. Truly grateful for the exceptional care.",
    reviewer: "Munish Fauzdar & Ankit Jangra • Verified Google Reviews",
    img: "/scraped_img_5.jpg",
  },
  {
    id: "03",
    title: "Painless Wisdom Tooth Extraction",
    subtitle: "Surgical & Impaction Precision",
    desc: "Gentle atraumatic surgical extraction for impacted third molars. Quick procedure time with proactive post-op healing management and regular follow-ups.",
    reviewQuote: "The wisdom tooth surgery was well planned, painless and took far less time than expected.",
    reviewer: "Sonu Saxena & Kumari Anjali • Verified Google Reviews",
    img: "/scraped_img_1.jpg",
  },
  {
    id: "04",
    title: "Ultrasonic Scaling & Periodontal Care",
    subtitle: "Pyorrhea & Gum Bleeding Therapy",
    desc: "Deep ultrasonic cleaning and subgingival plaque removal with an exceptionally gentle touch. Eliminates sensitivity, bad breath, and gum bleeding without dental trauma.",
    reviewQuote: "Dr. Archana has an extremely gentle hand. My gum bleeding stopped completely after cleaning.",
    reviewer: "Jyoti Sharma & Savita Dubey • Verified Google Reviews",
    img: "/clinic-hero.jpg",
  }
];

export default function ServicesEditorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = specializations[activeIndex];

  return (
    <section className="py-28 bg-white border-b border-slate-100">
      <div className="layout-container max-w-7xl">
        
        {/* Section Header with Architectural Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-slate-200/80 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600 block mb-3">
              Specialized Dental Practice
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Clinical Disciplines & Craft
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base font-light leading-relaxed">
            Led by Dr. Archana Raj Jha (BDS, Dental Surgeon & Implantologist), Dental Arc combines 12+ years of surgical expertise with empathetic, pain-free patient care.
          </p>
        </div>

        {/* Asymmetric Editorial Grid - NO Generic Card Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Numbered Clinical List */}
          <div className="lg:col-span-6 divide-y divide-slate-200/80 border-y border-slate-200/80">
            {specializations.map((spec, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`py-8 cursor-pointer transition-all ${
                    isCurrent ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono font-bold text-primary-600 tracking-wider">
                        {spec.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                        {spec.title}
                      </h3>
                    </div>
                    {isCurrent && (
                      <span className="text-xs uppercase font-bold tracking-widest text-primary-600 hidden sm:inline-block">
                        Featured
                      </span>
                    )}
                  </div>

                  {isCurrent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 pl-8 space-y-4"
                    >
                      <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                        {spec.desc}
                      </p>

                      <div className="p-4 bg-slate-50 border-l-2 border-primary-600">
                        <p className="text-xs md:text-sm italic text-slate-700">
                          "{spec.reviewQuote}"
                        </p>
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mt-1">
                          - {spec.reviewer}
                        </span>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <span>Consult Dr. Archana for {spec.title}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Authentic Large Photography Showcase */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={assetPath(active.img)}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Minimalist Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl text-white flex items-center justify-between border border-white/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-primary-400 block">
                    Dental Arc Clinical Suite
                  </span>
                  <span className="text-sm font-bold text-white">
                    Sector 70, Spaze Forum Gurugram
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sterilized & Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

