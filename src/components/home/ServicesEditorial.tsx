"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/utils";

const services = [
  {
    num: "01",
    title: "Root Canal Treatment (RCT)",
    note: "Single-Sitting • Rotary Precision • Zirconia Crown",
    desc: "Pain-free endodontic therapy utilizing electronic apex locators and computerized rotary instrumentation. Infection is eliminated in one comfortable visit with natural monolithic zirconia crown fitment.",
    evidence: "Pain vanished on first sitting. 3 crowns fitted with flawless precision.",
    patient: "Praveen Yadav • Google Review",
    img: "/clinic_treatment_laser.jpg",
  },
  {
    num: "02",
    title: "Dental Implants & Rehabilitation",
    note: "Titanium Implants • Flapless Placement • 0% EMI",
    desc: "Permanent, bio-compatible tooth replacement planned with computerized digital diagnostics. Minimally invasive placement allows rapid healing with zero postoperative facial swelling.",
    evidence: "Both implants placed in one visit without pain or swelling.",
    patient: "Ankit Jangra • Google Review",
    img: "/clinic_operatory_chair.jpg",
  },
  {
    num: "03",
    title: "Diode Laser Aesthetics & Gum Care",
    note: "Laser Depigmentation • Bleeding Gum Therapy",
    desc: "Gentle soft-tissue laser ablation for dark gum depigmentation, pocket sterilisation, and aesthetic smile recontouring with zero bleeding and rapid same-day recovery.",
    evidence: "Gum bleeding stopped completely after gentle cleaning and laser therapy.",
    patient: "Jyoti Sharma • Google Review",
    img: "/clinic_clinical_case.jpg",
  },
  {
    num: "04",
    title: "Ceramic Crowns & Cosmetic Veneers",
    note: "Monolithic Zirconia • E-Max • Shade Matching",
    desc: "CAD/CAM engineered ceramic crowns and ultra-thin porcelain veneers calibrated to match your natural tooth contour, translucency, and bite alignment.",
    evidence: "Replaced old ceramic crown with zirconia. Looks and feels completely natural.",
    patient: "Saurabh Rawat • Google Review",
    img: "/dental_arc_clinic_9.jpg",
  },
  {
    num: "05",
    title: "Wisdom Tooth Surgical Extraction",
    note: "Atraumatic Extraction • Impaction Management",
    desc: "Gentle surgical removal of impacted wisdom teeth with atraumatic techniques, minimal bone disturbance, and proactive healing management.",
    evidence: "Extraction was painless and took very less time than expected.",
    patient: "Sunny Kumar & Sonu Saxena • Google Review",
    img: "/clinic_consultation_suite.jpg",
  },
  {
    num: "06",
    title: "Orthodontics & Clear Aligners",
    note: "Invisalign Certified • Invisible Aligners",
    desc: "Digitally mapped teeth straightening using transparent, removable aligners. Corrects crowding, spacing, and bite irregularities without metal brackets.",
    evidence: "Flawless aesthetic alignment and personalized orthodontic follow-up.",
    patient: "Apoorwa Dutt • Google Review",
    img: "/clinic_happy_patient.jpg",
  }
];

export default function ServicesEditorial() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-12 border-b border-slate-200 gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Specialized Treatments
            </h2>
            <p className="text-slate-600 text-base">
              Comprehensive dental care performed under strict sterilization and magnification.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <span>View Full Treatment Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Unboxed Editorial List - Split Screen with Dynamic Photo Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Hairline-Separated Service Items */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {services.map((s, idx) => {
              const isSelected = active === idx;
              return (
                <div
                  key={s.num}
                  onClick={() => setActive(idx)}
                  className={`py-6 cursor-pointer transition-all ${
                    isSelected ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono font-bold text-primary-600">{s.num}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {s.title}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                      {s.note}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pl-8 space-y-2 text-sm text-slate-600 leading-relaxed">
                      <p>{s.desc}</p>
                      <div className="pt-2 text-xs text-slate-500 italic border-l-2 border-primary-500 pl-3">
                        "{s.evidence}" — <span className="text-slate-700 font-medium">{s.patient}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Case / Operatory Evidence */}
          <div className="lg:col-span-5 sticky top-28 space-y-3">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-100 border border-slate-200">
              <img
                src={assetPath(services[active].img)}
                alt={services[active].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex items-baseline justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-900">{services[active].title}</span>
              <span className="text-primary-700 font-medium">Dental Arc Clinical Protocol</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Procedures planned with digital radiography and execute with painless local anesthesia protocols.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
