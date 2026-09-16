"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ClinicImage from "@/components/ui/ClinicImage";
import { GraduationCap, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      
      {/* Intro Story */}
      <div className="layout-container max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
            Our Practice
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mt-4 mb-6 leading-[1.1]">
            Dentistry rooted in <br/>
            <span className="font-bold">precision and empathy.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Founded by Dr. Archana Raj Jha, Dental Arc brings together hospital-grade sterilization, computerized diagnostics, and genuinely pain-free dental care across Gurugram.
          </p>
        </motion.div>
      </div>

      {/* Large Clinic Panoramic Operatory Image */}
      <div className="layout-container mb-24">
        <div className="w-full h-[55vh] rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100 shadow-lg">
          <ClinicImage 
            src="/clinic_operatory_overview.jpg" 
            alt="Dental Arc operatory suite in Sector 70 Gurgaon" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-4 py-2 rounded text-xs">
            <p className="font-bold">Spaze Forum Operatory Suite F-115</p>
            <p className="text-slate-300 text-[11px]">Sector 70, Gurugram</p>
          </div>
        </div>
      </div>

      {/* Doctor Profile */}
      <div className="layout-container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pb-16 border-b border-slate-200">
          
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <ClinicImage 
                src="/dr_archana_raj_jha.jpg" 
                alt="Dr. Archana Raj Jha Dental Surgeon" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700">Clinical Director</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">Dr. Archana Raj Jha</h2>
              <p className="text-sm font-semibold text-slate-500">B.D.S. • Dental Surgeon & Implantologist</p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Dr. Archana has undergone extensive clinical residency and training across premier dental surgical centers in Jaipur and Bangalore. She specializes in rotary root canal therapy, cosmetic porcelain restorations, diode laser procedures, and pediatric dentistry.
            </p>

            <div className="divide-y divide-slate-200 border-y border-slate-200 py-1 text-sm text-slate-700">
              <div className="py-2.5 flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-primary-600 shrink-0" />
                <span>Jaipur & Bangalore Dental Surgical Residency</span>
              </div>
              <div className="py-2.5 flex items-center gap-3">
                <Award className="w-4 h-4 text-teal-600 shrink-0" />
                <span>5.0 Star Rated Clinical Excellence on Google Maps</span>
              </div>
              <div className="py-2.5 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified Rotary Endodontics & Diode Laser Protocols</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs px-6 py-3 rounded-full transition-colors"
              >
                Book with Dr. Archana
              </Link>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
