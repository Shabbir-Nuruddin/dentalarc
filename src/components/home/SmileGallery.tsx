"use client";

import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/utils";

const outcomes = [
  {
    title: "Zirconia Crown & Gum Restoration",
    detail: "10 Days Post-Procedure Outcome",
    desc: "Biological crown contours with complete gingival healing and natural aesthetic emergence.",
    img: "/clinic_clinical_case.jpg",
  },
  {
    title: "Aesthetic Smile Transformation",
    detail: "Cosmetic Anterior Alignment",
    desc: "Restoration of incisal symmetry and natural shade harmony without invasive enamel reduction.",
    img: "/dental_arc_clinic_9.jpg",
  },
  {
    title: "Laser Periodontal Therapy",
    detail: "Clinical Operatory Case",
    desc: "Diode laser debridement for localized inflammation, restoring healthy pink gingival margins.",
    img: "/clinic_treatment_laser.jpg",
  },
  {
    title: "Implant Consultation & Fitment",
    detail: "Complete Rehabilitation",
    desc: "Stable dental implant placement restoring full masticatory function and patient confidence.",
    img: "/clinic_happy_patient.jpg",
  }
];

export default function SmileGallery() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-12 border-b border-slate-200 gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Clinical Case Evidence
            </h2>
            <p className="text-slate-600 text-base">
              Documented treatment outcomes from our Gurugram practice.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <span>Verified Patient Outcomes on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Image Editorial Strip - Clean lines, NO Card Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-slate-100 border border-slate-200">
                <img
                  src={assetPath(item.img)}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-semibold text-primary-700 uppercase tracking-wide">
                  {item.detail}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
