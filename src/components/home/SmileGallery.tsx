"use client";

import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function SmileGallery() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b-2 border-slate-900">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-300 px-3 py-1 rounded-full">
            Clinical Case Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-2.5">
            Conservative Restoration Outcome
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Drag the interactive slider below to inspect pre-treatment presentation versus the healed conservative outcome restored by Dr. Madhushree Agarwal.
          </p>
        </div>

        {/* Before / After Slider Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Container */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-900 p-3 rounded-2xl shadow-offset">
            <BeforeAfterSlider
              beforeImage="/clinic_before_case.jpg"
              afterImage="/clinic_after_case.jpg"
              beforeLabel="Pre-Treatment Presentation"
              afterLabel="10-Day Healed Outcome"
              className="aspect-[16/10] rounded-xl"
            />
          </div>

          {/* Clinical Protocol Case Notes */}
          <div className="lg:col-span-4 bg-white border-2 border-slate-900 p-6 rounded-2xl shadow-offset space-y-5">
            <div className="border-b border-dashed border-slate-300 pb-3">
              <span className="text-[10px] font-mono uppercase text-teal-800 font-bold bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                Verified Clinical Case
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1.5">
                Tooth Preservation & Laser Therapy
              </h3>
            </div>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>Micro-invasive rotary canal cleansing preserving natural enamel</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>Diode soft-tissue decontamination with zero swelling</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>CAD/CAM monolithic zirconia restoration with 15-year seal</span>
              </div>
            </div>

            <div className="pt-3 border-t border-dashed border-slate-300 text-xs text-slate-500">
              <p className="font-semibold text-slate-900">Patient Outcome Note:</p>
              <p className="italic mt-0.5">"Full chewing function restored with zero discomfort during or after the procedure."</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
