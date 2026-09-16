"use client";

import { Navigation, ExternalLink, ShieldCheck } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";

export default function ClinicShowcase() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-14 border-b border-slate-200 gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The Clinic & Facilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Take a look inside our treatment operatories at Spaze Forum (Sector 70) and M3M 65th Avenue (Sector 65).
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>View on Google Maps</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Editorial Photo Essay - Asymmetric Grid, NO Card Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Panoramic Operatory Feature (7 columns) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="aspect-[16/11] w-full overflow-hidden bg-slate-100 rounded-sm">
              <ClinicImage
                src="/clinic_operatory_overview.jpg"
                alt="Operatory Room with Dental Chair and Digital Radiography"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-baseline justify-between pt-1 border-t border-slate-100 text-xs text-slate-500">
              <span className="font-semibold text-slate-900">Computerized Operatory Suite</span>
              <span>Spaze Forum, Sector 70</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              Equipped with an ergonomic motorized treatment chair, shadowless surgical LED lighting, digital apex locators, and intraoral radiography display.
            </p>
          </div>

          {/* Right Side Two-Photo Vignette (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Top Vignette: Laser Dentistry */}
            <div className="space-y-3">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 rounded-sm">
                <ClinicImage
                  src="/clinic_treatment_laser.jpg"
                  alt="Dr. Archana Raj Jha performing laser dentistry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between pt-1 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-semibold text-slate-900">Diode Laser Treatment</span>
                <span>Clinical Procedure</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Minimally invasive soft-tissue laser procedures for gum depigmentation, crown lengthening, and periodontal decontamination.
              </p>
            </div>

            {/* Bottom Vignette: Consultation Suite & Signboard */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="aspect-square w-full overflow-hidden bg-slate-100 rounded-sm">
                  <ClinicImage
                    src="/clinic_consultation_suite.jpg"
                    alt="Consultation Suite"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] text-slate-600 font-medium">Consultation Lounge</p>
              </div>

              <div className="space-y-2">
                <div className="aspect-square w-full overflow-hidden bg-slate-100 rounded-sm">
                  <ClinicImage
                    src="/clinic_exterior_signboard.jpg"
                    alt="Dental Arc Physical Signboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] text-slate-600 font-medium">Clinic Facade Signboard</p>
              </div>
            </div>

          </div>

        </div>

        {/* Minimal Sterilization Protocol Strip - No Box */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary-600 shrink-0" />
            <span><strong className="text-slate-900">Class-B Autoclave Sterilization:</strong> Individual vacuum-sealed instrument pouches and hospital-grade operatory sanitisation.</span>
          </div>
          <a href="tel:+917979927696" className="text-primary-700 hover:text-primary-900 font-semibold whitespace-nowrap">
            Appointment: +91 79799 27696
          </a>
        </div>

      </div>
    </section>
  );
}
