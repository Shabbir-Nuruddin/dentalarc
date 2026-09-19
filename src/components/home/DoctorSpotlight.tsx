"use client";

import { Award, GraduationCap, Clock, ShieldCheck } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";
import CircularClinicSeal from "@/components/ui/CircularClinicSeal";
import Link from "next/link";

export default function DoctorSpotlight() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="layout-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Convocation (Clean Framing, NO Card Box) */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* Rotating Seal Stamp of Clinical Credential */}
            <div className="absolute -top-6 -right-6 z-20 hidden sm:block">
              <CircularClinicSeal size={110} theme="light" />
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-200 shadow-md">
              <ClinicImage
                src="/dr_archana_raj_jha.jpg"
                alt="Dr. Archana Raj Jha, Dental Surgeon at Dental Arc Gurugram"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 text-white">
                <h3 className="text-xl font-bold">Dr. Archana Raj Jha</h3>
                <p className="text-xs text-primary-300 font-medium">B.D.S. • Dental Surgeon & Implantologist</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 px-1">
              <GraduationCap className="w-4 h-4 text-primary-600 shrink-0" />
              <span>Trained across premier dental surgical centers in Jaipur & Bangalore</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Credentials (Unboxed) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-700">
                Clinical Director & Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-1">
                Dr. Archana Raj Jha
              </h2>
            </div>

            {/* Large Pull-Quote */}
            <blockquote className="text-lg sm:text-xl font-light text-slate-700 italic border-l-2 border-primary-600 pl-4 leading-relaxed">
              "Dental care should never be intimidating. Our commitment is painless execution, clinical transparency, and restorations that last for decades."
            </blockquote>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With extensive experience in endodontics, cosmetic restorations, and laser therapies, Dr. Archana has established Dental Arc as Gurugram's high-trust practice. Her approach prioritizes tooth preservation, painless rotary root canals, and single-visit zirconia crown placements.
            </p>

            {/* Credential Lines - Clean Typographic List, NO Card Boxes */}
            <div className="divide-y divide-slate-200 border-y border-slate-200 py-2 text-sm">
              <div className="py-3 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Zero-Pain Rotary Protocol:</strong> Computerized electronic apex locators ensure comfortable, precise treatment.
                </div>
              </div>

              <div className="py-3 flex items-start gap-3">
                <Award className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">5.0 Star Google Reputation:</strong> Consistently praised for gentle hands, patient empathy, and lasting restorations.
                </div>
              </div>

              <div className="py-3 flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                <div>
                  <strong className="text-slate-900">Open 7 Days till 9:00 PM:</strong> Accommodating corporate working hours across Sector 70 & Sector 65.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full transition-all shadow-sm"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+917979927696"
                className="text-slate-700 hover:text-primary-700 font-semibold text-xs sm:text-sm"
              >
                Direct: +91 79799 27696
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
