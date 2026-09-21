"use client";

import { Award, GraduationCap, Clock, ShieldCheck, Heart, Sparkles } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";
import CircularClinicSeal from "@/components/ui/CircularClinicSeal";
import Link from "next/link";
import { playSnap, playTick } from "@/lib/sound";

export default function DoctorSpotlight() {
  return (
    <section className="py-24 bg-white border-b-2 border-slate-900">
      <div className="layout-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Doctor Portrait & Convocation */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* Rotating Clinical Seal */}
            <div className="absolute -top-6 -right-6 z-20 hidden sm:block">
              <CircularClinicSeal size={115} theme="gold" />
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-100 shadow-offset">
              <ClinicImage
                src="/dr_madhushree_agarwal.jpg"
                alt="Dr. Madhushree Agarwal, Principal Dental Surgeon at The Dental Salt Gurugram"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold">
                  Founder & Principal Dentist
                </span>
                <h3 className="text-xl sm:text-2xl font-black">Dr. Madhushree Agarwal</h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  B.D.S. • Endodontics & Aesthetic Dentist (15+ Years)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-600 px-1 font-mono">
              <GraduationCap className="w-4 h-4 text-teal-700 shrink-0" />
              <span>Alumna of Dr. R. Ahmed Dental College & Hospital, Kolkata</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-300 px-3 py-1 rounded-full">
                Clinical Director • The Dental Salt
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-2">
                Dr. Madhushree Agarwal
              </h2>
            </div>

            {/* Philosophy Pull-Quote */}
            <blockquote className="text-lg sm:text-xl font-light text-slate-700 italic border-l-4 border-teal-600 pl-4 leading-relaxed bg-[#FAF9F6] p-4 rounded-r-lg">
              "Dentistry should be easy to understand and easy to trust. At The Dental Salt, our guiding principle is conservative tooth preservation—saving your natural teeth rather than pushing unnecessary treatments."
            </blockquote>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With over <strong>15 years of dedicated clinical practice</strong>, Dr. Madhushree Agarwal brings an exceptional medical pedigree. Trained at <strong>Dr. R. Ahmed Dental College & Hospital</strong> (established in 1920 as Asia's first dental college), she subsequently served as <strong>Clinic Head at Clove Dental for 5 years</strong> and as <strong>Senior Medical Editor at Apollo 24*7</strong>.
            </p>

            {/* Trust Pillars - Clean Typographic List */}
            <div className="divide-y divide-slate-200 border-y-2 border-slate-900 py-2 text-sm">
              <div className="py-3 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Conservative Tooth Preservation:</strong> Prioritizes saving your natural enamel and root structure with biocompatible restorative materials.
                </div>
              </div>

              <div className="py-3 flex items-start gap-3">
                <Heart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Painless Rotary Endodontics:</strong> Digital electronic apex locators and computerized localized anesthesia eliminate procedure discomfort.
                </div>
              </div>

              <div className="py-3 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">4.9 Star Reputation (250+ Reviews):</strong> Widely praised by families across Sector 70 & Golf Course Ext for gentle hands, patient empathy, and honest diagnoses.
                </div>
              </div>

              <div className="py-3 flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Open 7 Days (9 AM – 8 PM):</strong> Convenient morning and evening appointments accommodating working professionals and families.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                onClick={() => playSnap(500, 0.06)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-offset-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Schedule Consultation
              </Link>
              <a
                href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20would%20like%20to%20consult%20with%20you%20at%20The%20Dental%20Salt."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2400, 0.04)}
                className="text-teal-800 hover:text-teal-950 font-bold text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Direct WhatsApp: +91 99993 85782 →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
