"use client";

import { Sparkles, ShieldCheck, Activity, ArrowRight } from "lucide-react";
import DentalArcLogo from "@/components/ui/DentalArcLogo";
import Link from "next/link";
import { motion } from "motion/react";

const allServices = [
  {
    category: "General Dentistry",
    icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
    img: "/scraped_img_3.jpg",
    items: [
      { name: "Comprehensive Exams", desc: "Thorough checkups utilizing digital X-rays and 3D scanning." },
      { name: "Professional Cleanings", desc: "Preventative hygiene appointments to keep gums and teeth healthy." },
      { name: "Fillings & Sealants", desc: "Tooth-colored composite fillings for a natural look." },
    ]
  },
  {
    category: "Cosmetic Procedures",
    icon: <Sparkles className="w-8 h-8 text-primary-600" />,
    img: "/scraped_img_4.jpg",
    items: [
      { name: "Porcelain Veneers", desc: "Custom-crafted shells to correct chips, gaps, or discoloration." },
      { name: "Teeth Whitening", desc: "Professional in-office whitening for a noticeably brighter smile." },
      { name: "Invisalign®", desc: "Clear aligner therapy for straight teeth without metal braces." },
    ]
  },
  {
    category: "Restorative Care",
    icon: <Activity className="w-8 h-8 text-primary-600" />,
    img: "/scraped_img_5.jpg",
    items: [
      { name: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
      { name: "Crowns & Bridges", desc: "Durable ceramic restorations designed to blend seamlessly." },
      { name: "Root Canal Therapy", desc: "Painless endodontic treatments to save infected teeth." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-surface">
      {/* Header */}
      <div className="layout-container text-center max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Transformative Care.
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            From routine maintenance to advanced restorative surgery, we offer everything you need to achieve and maintain a healthy, beautiful smile.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="layout-container max-w-6xl">
        <div className="space-y-32">
          {allServices.map((section, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`order-2 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{section.category}</h2>
                </div>
                
                <div className="grid gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-8 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold mb-2 text-slate-900">{item.name}</h3>
                      <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`order-1 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} w-full h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative`}
              >
                <img 
                  src={section.img} 
                  alt={section.category}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>

            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="layout-container mt-40">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <DentalArcLogo className="w-20 h-20 text-primary-400 mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 relative z-10">Unsure what you need?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl text-lg font-light leading-relaxed relative z-10">
            Schedule a comprehensive consultation. We will evaluate your oral health and build a customized, transparent treatment plan just for you.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
