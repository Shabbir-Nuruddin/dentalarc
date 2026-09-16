"use client";

import { Star, ArrowUpRight, CheckCircle2, MessageSquareQuote } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";

export default function SmileGallery() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-12 border-b border-slate-200 gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-700">
              Documented Clinical Outcome
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Real-Life Case Study
            </h2>
            <p className="text-slate-600 text-base">
              A verified patient transformation from our Google Maps practice in Sector 70 Gurugram.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <span>Read on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ONE Singular Featured Real-Life Example */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Clinical Result Photo */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-md">
              <ClinicImage
                src="/clinic_clinical_case.jpg"
                alt="Dental Arc actual patient root canal and zirconia crown outcome 10 days post procedure"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-emerald-400 border border-white/10">
                10 Days Post-Procedure
              </div>
            </div>

            <div className="flex items-baseline justify-between text-xs text-slate-500 px-1">
              <span className="font-semibold text-slate-900">Microscopic RCT & 3 Monolithic Zirconia Crowns</span>
              <span>Spaze Forum, Sector 70</span>
            </div>
          </div>

          {/* Right Column: Actual Google Review & Verified Outcome */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Reviewer Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-sm">
                    PY
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-tight">PRAVEEN YADAV</h3>
                    <p className="text-xs text-slate-500">2 reviews • 3 photos • Verified Google Patient</p>
                  </div>
                </div>

                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Actual Google Review Quote */}
            <blockquote className="text-base sm:text-lg font-light text-slate-800 leading-relaxed italic border-l-2 border-primary-600 pl-4">
              "Outstanding dental care and a truly professional experience. Dr. Archana Jha performed my root canal treatment and fixed three crowns with remarkable precision and expertise. The entire treatment was completely pain-free, comfortable, and flawlessly executed."
            </blockquote>

            {/* Owner Response from Dr. Archana */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200/80 space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-primary-700 font-semibold">
                <MessageSquareQuote className="w-3.5 h-3.5" />
                <span>Response from Dr. Archana Raj Jha (Owner)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                "Thank you for your kind words about Dental Arc, your preferred dental clinic in Sector 70 Gurgaon. Your satisfaction is our goal, and we are pleased to know you had a positive experience with our services."
              </p>
            </div>

            {/* Clinical Highlights of this Case */}
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Pain Rotary RCT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3 Monolithic Zirconia Crowns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Natural Bite Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Healthy Gingival Margins</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
