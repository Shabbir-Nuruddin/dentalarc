"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Sparkles, Activity, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, teeth whitening, and complete smile makeovers.",
    icon: <Sparkles className="w-8 h-8 text-primary-500" />,
    colSpan: "md:col-span-2",
    bg: "bg-slate-900 text-white",
    iconBg: "bg-slate-800",
    textDesc: "text-slate-300",
    linkHover: "group-hover:text-primary-400"
  },
  {
    title: "General Care",
    description: "Exams, cleanings, and preventive treatments.",
    icon: <ShieldCheck className="w-8 h-8 text-slate-700" />,
    colSpan: "md:col-span-1",
    bg: "bg-surface-muted border border-slate-100",
    iconBg: "bg-white",
    textDesc: "text-slate-600",
    linkHover: "group-hover:text-primary-600"
  },
  {
    title: "Implants & Surgery",
    description: "Permanent solutions for missing teeth using advanced 3D imaging.",
    icon: <Activity className="w-8 h-8 text-slate-700" />,
    colSpan: "md:col-span-3",
    bg: "bg-primary-50 border border-primary-100",
    iconBg: "bg-white",
    textDesc: "text-slate-600",
    linkHover: "group-hover:text-primary-600"
  }
];

export default function ServicesBento() {
  return (
    <section className="section-padding bg-white">
      <div className="layout-container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Comprehensive Care <br/> For Every Smile.
          </h2>
          <p className="text-lg text-slate-600">
            From routine checkups to full mouth restorations, we provide all the treatments you need under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "group rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-lg",
                service.colSpan,
                service.bg
              )}
            >
              <div className="mb-12">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm", service.iconBg)}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 tracking-tight">{service.title}</h3>
                <p className={cn("text-base leading-relaxed max-w-sm", service.textDesc)}>
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <Link 
                  href="/services" 
                  className={cn("inline-flex items-center gap-2 font-medium transition-colors", service.linkHover)}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
