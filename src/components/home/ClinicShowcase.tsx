"use client";

import { motion } from "motion/react";
import { MapPin, Navigation, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { assetPath } from "@/lib/utils";

const clinicImages = [
  {
    src: "/clinic_operatory_overview.jpg",
    title: "Computerized Operatory Suite",
    desc: "Ergonomic treatment chair, surgical lighting, and digitized radiographic display.",
    tag: "Operatory 1",
  },
  {
    src: "/clinic_treatment_laser.jpg",
    title: "Advanced Diode Laser System",
    desc: "Pain-free laser gum depigmentation and soft-tissue therapeutic procedures.",
    tag: "Clinical Care",
  },
  {
    src: "/clinic_consultation_suite.jpg",
    title: "Consultation & Operatory Room",
    desc: "Dedicated patient consultation desk with illuminated aesthetic mirrors.",
    tag: "Sector 70 Suite",
  },
  {
    src: "/clinic_exterior_signboard.jpg",
    title: "Clinic Exterior & Entrance",
    desc: "Located at Spaze Forum, F-115, right below Cult Fitness Gym at Tulip Chowk.",
    tag: "Easy to Find",
  },
];

export default function ClinicShowcase() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>Real Clinic Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Inside Our Gurugram Practices
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore authentic photos of our clinic facilities at Spaze Forum (Sector 70) and M3M 65th Avenue (Sector 65), equipped with hospital-grade sterilization and modern dental equipment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:text-primary-700 hover:border-primary-400 bg-slate-50 hover:bg-white text-xs font-semibold transition-all shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-primary-600" />
              <span>Open on Google Maps</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 4-Image Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinicImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 hover:border-primary-300/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={assetPath(item.src)}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              <div className="p-6 bg-white space-y-1">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sterilization & Safety Guarantee Banner */}
        <div className="mt-12 bg-primary-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <ShieldCheck className="w-6 h-6 text-primary-300" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">Class-B Autoclave 4-Tier Sterilization</h4>
              <p className="text-xs sm:text-sm text-slate-300">100% sterile instruments, individual sealed pouches, and sanitised operatories after every patient.</p>
            </div>
          </div>
          <a
            href="tel:+917979927696"
            className="shrink-0 bg-white text-primary-900 hover:bg-primary-50 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors"
          >
            Call: +91 79799 27696
          </a>
        </div>

      </div>
    </section>
  );
}
