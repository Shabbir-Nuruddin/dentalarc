"use client";

import Link from "next/link";
import { ArrowUpRight, Shield, Sparkles, Heart, Activity, CheckCircle2 } from "lucide-react";
import { playTick } from "@/lib/sound";

const services = [
  {
    category: "Painless Endodontics",
    title: "Rotary Root Canal (RCT)",
    description: "Computerized electronic apex locators and flexible NiTi rotary instruments allow Dr. Madhushree to perform precise, single-sitting painless root canals.",
    highlights: ["Electronic apex tracking", "Bioceramic hermetic sealing", "Over 98% painless success"],
    href: "/services",
  },
  {
    category: "Conservative Care",
    title: "Tooth Preservation & Restorations",
    description: "Our core philosophy. We prioritize saving natural teeth using biomimetic tooth-colored composites, ceramic inlays, and onlays instead of premature extractions.",
    highlights: ["Biocompatible composites", "Micro-invasive prep", "Natural enamel aesthetics"],
    href: "/services",
  },
  {
    category: "Restorative Dentistry",
    title: "CAD/CAM Zirconia Crowns & Bridges",
    description: "Computer-scanned, precision-milled metal-free zirconia crowns with certified warranties. Natural enamel translucency with zero black gum margins.",
    highlights: ["10-15 year warranty", "1200+ MPa strength", "Zero metal substructure"],
    href: "/services",
  },
  {
    category: "Family & Kids",
    title: "Gentle Pediatric Dentistry",
    description: "A patient, stress-free environment designed specifically for children. Pit and fissure sealants, fluoride treatments, and gentle habit-breaking counseling.",
    highlights: ["Zero-anxiety environment", "Preventive fluoridation", "Friendly, soft-spoken care"],
    href: "/services",
  },
  {
    category: "Fixed Replacement",
    title: "Dental Implants & 0% EMI",
    description: "Permanent titanium implants that look, chew, and feel like natural teeth. Backed by computer-guided placement and flexible 0% interest EMI financing.",
    highlights: ["Osseointegrated titanium", "Lifetime integration", "0% EMI options available"],
    href: "/services",
  },
  {
    category: "Smile Aesthetics",
    title: "Teeth Whitening & Stain Prophylaxis",
    description: "Ultrasonic tartar removal, stain prophylaxis, and enamel-safe clinical whitening for a bright, confident, natural smile.",
    highlights: ["Ultrasonic scaling", "Enamel-safe polishing", "Visible single-visit lift"],
    href: "/services",
  },
];

export default function ServicesEditorial() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b-2 border-slate-900 text-slate-900">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-300 px-3 py-1 rounded-full">
            Clinical Services • The Dental Salt
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-2.5">
            Evidence-Based Dental Treatments
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Conservative, transparent care tailored for children, adults, and seniors across Sector 70 and Golf Course Extension, Gurugram.
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-900 rounded-xl p-6 shadow-offset hover:translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-800 font-bold bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                  {svc.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {svc.description}
                </p>

                <div className="pt-2 space-y-1.5 border-t border-dashed border-slate-200">
                  {svc.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20would%20like%20to%20inquire%20about%20treatment%20at%20The%20Dental%20Salt."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playTick(2400, 0.04)}
                  className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
