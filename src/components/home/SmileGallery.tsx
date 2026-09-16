"use client";

import { motion } from "motion/react";
import { ArrowRight, Star, MapPin } from "lucide-react";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

const cases = [
  {
    treatment: "Zirconia Crown Restoration",
    patient: "Saurabh Rawat",
    review: "Replaced old ceramic crown with monolithic zirconia. Bite and aesthetics feel completely natural.",
    img: "/scraped_img_4.jpg",
    tag: "Restorative"
  },
  {
    treatment: "Dual Dental Implants",
    patient: "Ankit Jangra Milkpuria",
    review: "Both implants placed in a single visit without pain or swelling. Truly grateful for Dr. Archana's care.",
    img: "/scraped_img_5.jpg",
    tag: "Implantology"
  },
  {
    treatment: "Canine Replacement & Alignment",
    patient: "Apoorwa Dutt",
    review: "Astonished with the final aesthetic result after missing canine treatment. Flawless outcome.",
    img: "/scraped_img_1.jpg",
    tag: "Cosmetic"
  },
  {
    treatment: "Painless Multi-Canal RCT",
    patient: "Amit Mishra",
    review: "Completely pain-free root canal and perfectly fitted crown. No discomfort or sensitivity.",
    img: "/clinic-hero.jpg",
    tag: "Endodontics"
  }
];

export default function SmileGallery() {
  return (
    <section className="py-28 bg-slate-900 text-white overflow-hidden">
      <div className="layout-container max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-slate-800 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary-400 block mb-2">
              Evidence-Based Outcomes
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Documented Patient Transformations
            </h2>
          </div>
          <a 
            href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>Read all 100+ Verified Patient Reviews on Google</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Minimalist Visual Grid - Clean Lines, Architectural Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col justify-between border-t border-slate-800 pt-6"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-800 relative mb-5">
                  <img
                    src={assetPath(c.img)}
                    alt={c.treatment}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-primary-400 border border-white/10">
                    {c.tag}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {c.treatment}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  "{c.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">{c.patient}</span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
