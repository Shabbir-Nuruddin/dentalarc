"use client";

import ClinicImage from "@/components/ui/ClinicImage";
import { Sparkles, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    category: "Restorative Endodontics & Implants",
    icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
    img: "/clinic_treatment_laser.jpg",
    items: [
      { name: "Single-Sitting Root Canal (RCT)", desc: "Painless electronic apex locator rotary treatments." },
      { name: "Dental Implants", desc: "Bio-compatible titanium implants with 0% EMI options." },
      { name: "Monolithic Zirconia Crowns", desc: "CAD/CAM milled unbreakable crowns with shade calibration." },
    ]
  },
  {
    category: "Diode Laser & Aesthetic Dentistry",
    icon: <Sparkles className="w-6 h-6 text-primary-600" />,
    img: "/clinic_clinical_case.jpg",
    items: [
      { name: "Laser Gum Depigmentation", desc: "Gentle soft-tissue ablation for healthy pink gums." },
      { name: "Cosmetic Porcelain Veneers", desc: "Minimal enamel reduction for harmonious smile design." },
      { name: "Invisalign & Clear Aligners", desc: "Transparent orthodontic correction without metal wires." },
    ]
  },
  {
    category: "Preventative & Surgical Care",
    icon: <Activity className="w-6 h-6 text-primary-600" />,
    img: "/clinic_operatory_overview.jpg",
    items: [
      { name: "Atraumatic Wisdom Tooth Surgery", desc: "Gentle surgical extraction with minimal recovery time." },
      { name: "Ultrasonic Scaling & Polishing", desc: "Deep calculus removal with zero gum bleeding." },
      { name: "Pediatric & Family Dentistry", desc: "Gentle preventive care and sealants for children." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="layout-container text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-4 leading-[1.1]">
          Clinical Catalog & <br />
          <span className="font-bold">Treatments</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Every procedure at Dental Arc is performed under strict hospital-grade sterilization with transparent treatment plans.
        </p>
      </div>

      {/* Services List - Unboxed, Hairline Separated */}
      <div className="layout-container max-w-6xl mx-auto space-y-20">
        {allServices.map((cat, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-slate-200">
            
            {/* Photo Column */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <ClinicImage 
                  src={cat.img} 
                  alt={cat.category}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                {cat.icon}
                <h2 className="text-2xl font-bold text-slate-900">{cat.category}</h2>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {cat.items.map((item, i) => (
                  <div key={i} className="py-4 space-y-1">
                    <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs py-3 px-6 rounded-full transition-colors"
                >
                  <span>Book This Treatment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
