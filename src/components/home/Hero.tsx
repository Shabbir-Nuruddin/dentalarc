"use client";

import { motion } from "motion/react";
import { Star, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { assetPath } from "@/lib/utils";
import ClinicImage from "@/components/ui/ClinicImage";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 scale-105"
        >
          <source src={assetPath("/dental-hero.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="layout-container relative z-10 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Rating Line */}
            <a
              href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Rating on Google</span>
              <span className="text-slate-500">•</span>
              <span className="text-primary-400 group-hover:text-primary-300 flex items-center gap-1">
                100+ Reviews <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
                Precision Dentistry &<br />
                <span className="font-bold text-white">Implant Center</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                Led by Dr. Archana Raj Jha. Painless root canals, dental implants, and laser aesthetics across Sector 70 and Sector 65, Gurugram.
              </p>
            </div>

            {/* Clinical Highlights Line */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 font-medium">
              <span>Painless Rotary RCT</span>
              <span className="text-slate-600">•</span>
              <span>Diode Laser Therapy</span>
              <span className="text-slate-600">•</span>
              <span>0% EMI Available</span>
              <span className="text-slate-600">•</span>
              <span>Open 7 Days till 9 PM</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-md shadow-primary-900/40"
              >
                Book Consultation
              </Link>

              {/* 1-Click WhatsApp Direct Button */}
              <a
                href="https://wa.me/917979927696?text=Hi%20Dr.%20Archana%2C%20I%20would%20like%20to%20book%20a%20dental%20consultation%20at%20Dental%20Arc."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-md shadow-emerald-950/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.245-.587-.494-.507-.677-.517-.176-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.24A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
                <span>WhatsApp Clinic</span>
              </a>

              <a
                href="tel:+917979927696"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white text-sm font-semibold px-5 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 transition-all"
              >
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+91 79799 27696</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Architectural Photo Frame of the Operatory */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ClinicImage
                  src="/clinic_operatory_overview.jpg"
                  alt="Dental Arc operatory suite in Sector 70 Gurgaon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-primary-300 border border-white/10">
                  Operatory Suite 1
                </div>
              </div>

              {/* Caption Strip */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-white">Dental Arc Operatory Suite</p>
                  <p className="text-slate-400 text-[11px]">Spaze Forum F-115, Sector 70 Gurugram</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 font-medium">Sterile Environment</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
