"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Check, 
  ArrowRight, 
  Eye, 
  Award, 
  HeartHandshake, 
  BadgeCheck, 
  Layers,
  Clock,
  ExternalLink
} from "lucide-react";
import { playSnap, playTick } from "@/lib/sound";

export default function ServicesEditorial() {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6] border-b-2 border-slate-900 text-slate-900 scroll-mt-20">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b-2 border-slate-900 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-300 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
              <span>Evidence-Based Clinical Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Specialized Care. <br className="hidden sm:inline" />
              <span className="text-teal-800 font-light italic">Conservative by Design.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              At The Dental Salt, every treatment follows Dr. Madhushree’s 15-year guiding ethos: 
              <strong> save natural tooth enamel first</strong>, eliminate treatment pain, and provide honest, transparent diagnoses without corporate upselling.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-600 bg-white border border-slate-300 px-4 py-2.5 rounded-xl shadow-offset-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting Consultations across Sector 70 & Golf Course Ext.</span>
          </div>
        </div>

        {/* Row 1: Asymmetric Hero Bento (Tooth Preservation & Painless Rotary RCT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Card 1: The Signature Discipline - Conservative Tooth Preservation (7 Cols, Inky Slate-950) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-2xl border-2 border-slate-900 shadow-offset p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle background tactile grid pattern */}
            <div className="absolute inset-0 opacity-5 grain-print pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 border border-teal-800/80 px-3 py-1 rounded-full">
                  Signature Specialty • Tooth Preservation
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Biomimetic Restorations
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Preserving Your Natural Tooth Enamel
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  Our first clinical instinct is always to <strong>rescue and fortify your natural tooth</strong>. 
                  Where high-volume commercial dental chains quickly recommend aggressive crown shaving or extractions, Dr. Madhushree specializes in micro-invasive cavity removals, ceramic inlays, and biomimetic composites that chemically bond with natural dentin.
                </p>
              </div>

              {/* Clinical Metrics Matrix */}
              <div className="grid grid-cols-3 gap-3 py-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-teal-400">3×</span>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5 block leading-tight">Natural Tooth Longevity</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-white">0%</span>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5 block leading-tight">Healthy Enamel Sacrificed</span>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-emerald-400">100%</span>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5 block leading-tight">Biocompatible Ceramic</span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-teal-500 pl-3.5 py-1">
                "No artificial prosthetic will ever match the biomechanics of your natural tooth root. Saving it is our greatest clinical triumph."
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                <span>Micro-hybrid resin • Ceramic onlays • Pulp capping</span>
              </span>
              <Link
                href="/contact"
                onClick={() => playSnap(500, 0.06)}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-4 py-2.5 rounded-full transition-all"
              >
                <span>Consult on Tooth Preservation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Painless Rotary Endodontics (5 Cols, Warm Clinic Canvas) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border-2 border-slate-900 shadow-offset p-7 sm:p-9 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-300 px-3 py-1 rounded-full">
                  Painless Rotary RCT
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Single-Sitting</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Electronic Apex Rotary Endodontics
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Root canals at The Dental Salt are completely transformed. Dr. Madhushree utilizes <strong>flexible NiTi rotary instrumentation</strong> and <strong>digital electronic apex locators</strong> for 0.1mm canal precision, completely eliminating the scraping friction and pain of old hand-filing methods.
                </p>
              </div>

              {/* Protocol Spec Highlights */}
              <div className="space-y-2.5 bg-[#FAF9F6] border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Diagnostic Guidance</span>
                  <span className="font-mono text-slate-500">Digital Electronic Apex Locator</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Bioseal Material</span>
                  <span className="font-mono text-slate-500">Bioceramic Hermetic Sealant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Pain-Free Rate</span>
                  <span className="font-mono text-emerald-700 font-bold">98.6% Procedural Comfort</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-dashed border-slate-300 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">Completed in 45–60 mins</span>
              <a
                href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20have%20tooth%20pain%20and%20need%20an%20evaluation%20for%20a%20painless%20root%20canal."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2400, 0.04)}
                className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1 hover:underline"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Row 2: Three Distinct Clinical Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card A: Metal-Free CAD/CAM Zirconia Crowns */}
          <div className="bg-white rounded-2xl border-2 border-slate-900 shadow-offset p-6 sm:p-7 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800">
                  Restorative Craft
                </span>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded font-bold">
                  10–15 Yr Warranty
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                CAD/CAM Monolithic Zirconia Crowns
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Computer-milled, 100% metal-free zirconia restorations tailored to match your natural enamel translucency. 
                Zero grey lines at the gum margin and 1,200+ MPa fracture resistance.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Optical digital 3D impression scans</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Certified authenticity card with warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Bite-balanced micro-occlusal adjustment</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500 font-mono">Precision milled for crowns & bridges</span>
            </div>
          </div>

          {/* Card B: Gentle Pediatric & Family Dentistry */}
          <div className="bg-[#FAF9F6] rounded-2xl border-2 border-slate-900 shadow-offset p-6 sm:p-7 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800">
                  Family & Pediatric
                </span>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded font-bold">
                  Zero-Anxiety Care
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                Gentle Pediatric Dentistry
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Renowned among parents in Sector 70 for her soft-spoken empathy, Dr. Madhushree makes pediatric dental visits cheerful and completely fear-free for children of all ages.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Preventive fluoride & pit-fissure sealants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Early orthodontic & habit interception</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Parents always welcome chairside</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500 font-mono">Special care for kids & anxious teens</span>
            </div>
          </div>

          {/* Card C: Prosthodontics & Permanent Implants */}
          <div className="bg-white rounded-2xl border-2 border-slate-900 shadow-offset p-6 sm:p-7 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-800">
                  Prosthetics & Implants
                </span>
                <span className="text-[10px] font-mono text-teal-800 bg-teal-50 border border-teal-300 px-2 py-0.5 rounded font-bold">
                  0% EMI Available
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                BPS Dentures & Fixed Implants
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete oral rehabilitation restoring full chewing comfort, natural facial aesthetics, and clear speech for adults and seniors across Gurugram.
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Titanium osseointegrated dental implants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Comfort-fit flexible and BPS dentures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>Ultrasonic scaling & enamel stain prophylaxis</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs">
              <span className="text-slate-500 font-mono">Full-mouth rehabilitation plans</span>
            </div>
          </div>

        </div>

        {/* Clinical Standards & Patient Guarantee Strip (Pillars of Clinical Trust) */}
        <div className="bg-white rounded-2xl border-2 border-slate-900 p-8 sm:p-10 shadow-offset">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800">
              The Dental Salt Patient Covenant
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Why Gurugram Families Trust Us
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800">
                <Eye className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm">Intraoral Camera Transparency</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                You see the high-magnification screen of your tooth before any drill touches enamel. Zero mystery diagnoses.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm">Class-B Vacuum Sterilization</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hospital-grade 4-tier autoclave cycle. Sealed instrument pouches opened strictly in your presence chairside.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <Activity className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm">Painless Anesthesia Protocol</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computer-timed localized numbing ensures zero procedure pain. Even anxious patients feel total relief.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-900">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-slate-900 text-sm">Written Honest Estimates</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Itemized treatment plans with zero unexpected fees, no commission-driven sales, and flexible 0% interest EMI.
              </p>
            </div>

          </div>

          {/* Consultation CTA Bar */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 text-sm">Have an existing X-Ray or dental concern?</p>
              <p className="text-xs text-slate-500">Dr. Madhushree provides honest second opinions on root canals and extractions.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20would%20like%20a%20second%20opinion%20on%20my%20dental%20case."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2400, 0.04)}
                className="text-xs font-bold text-teal-800 hover:text-teal-950 px-4 py-2.5 rounded-full border border-teal-300 bg-teal-50 hover:bg-teal-100 transition-all flex items-center gap-1.5"
              >
                <span>Send X-Ray on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contact"
                onClick={() => playSnap(500, 0.06)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-offset-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Book In-Person Consultation
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
