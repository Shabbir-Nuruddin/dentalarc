"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    title: "Porcelain Veneers",
    patient: "Sarah, 34",
    img: "https://images.pexels.com/photos/6501995/pexels-photo-6501995.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    desc: "Corrected severe spacing and discoloration with 8 custom-layered porcelain veneers.",
  },
  {
    title: "Full Arch Implants",
    patient: "Michael, 58",
    img: "https://images.pexels.com/photos/6501986/pexels-photo-6501986.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    desc: "Restored chewing function and confidence with a fixed implant-supported bridge.",
  }
];

export default function SmileGallery() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-600 mb-4">Patient Transformations</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
              Real results. <br/> Life-changing smiles.
            </h3>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            View all cases <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-900">
                  {c.title}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{c.patient}</h4>
                <p className="text-slate-600 leading-relaxed font-light">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
