"use client";

import { motion } from "motion/react";
import { Award, GraduationCap, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { assetPath } from "@/lib/utils";
import Link from "next/link";

export default function DoctorSpotlight() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos of Dr. Archana Raj Jha */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto">
              
              {/* Primary Doctor Portrait */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/5] bg-slate-200">
                <img
                  src={assetPath("/dr_archana_raj_jha.jpg")}
                  alt="Dr. Archana Raj Jha, Dental Surgeon at Dental Arc Gurugram"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 text-white">
                  <h3 className="text-xl font-bold">Dr. Archana Raj Jha</h3>
                  <p className="text-xs text-primary-300 font-medium">B.D.S. • Dental Surgeon & Implantologist</p>
                </div>
              </div>

              {/* Inset Credential Badge: Convocation Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-4 sm:-right-6 w-36 sm:w-44 aspect-[3/4] rounded-xl overflow-hidden border-2 border-white shadow-xl bg-slate-100 hidden sm:block"
              >
                <img
                  src={assetPath("/dr_archana_graduation.jpg")}
                  alt="Dr. Archana Raj Jha Convocation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-2">
                  <span className="text-[10px] font-semibold text-white leading-tight">Certified Dental Surgeon</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bio and Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                Clinical Director & Founder
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Meet Dr. Archana Raj Jha
              </h2>
              <p className="text-sm font-semibold text-slate-500">
                Trained across premier dental surgical institutions in Jaipur and Bangalore.
              </p>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Dr. Archana brings years of dedicated clinical practice in microscopic root canal treatments, painless tooth restoration, diode laser gum aesthetics, and single-visit crown prosthetics. Known for her patient-first demeanor and gentle touch, she has transformed hundreds of smiles across Gurgaon.
            </p>

            {/* Credential Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <GraduationCap className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Premier Training</h4>
                  <p className="text-xs text-slate-500">Rigorous clinical residency across Jaipur and Bangalore centers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <Award className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">5.0 Star Reputation</h4>
                  <p className="text-xs text-slate-500">Consistent five-star patient reviews on Google Maps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Painless RCT Protocol</h4>
                  <p className="text-xs text-slate-500">Computerized anesthesia & precision apex locator rotary files.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Evening Consultations</h4>
                  <p className="text-xs text-slate-500">Available till 9 PM for working professionals and families.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-sm"
              >
                Book Appointment with Dr. Archana
              </Link>
              <a
                href="tel:+917979927696"
                className="text-slate-700 hover:text-primary-600 text-sm font-semibold flex items-center gap-2 px-4 py-3"
              >
                <span>Direct Line: +91 79799 27696</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
