"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Root Canal Treatment (RCT)",
    description: "Experience completely pain-free root canal treatments with high-quality Zirconia crown fittings.",
    img: "/scraped_img_6.jpg",
  },
  {
    title: "General Care",
    description: "Comprehensive exams, cleanings, and preventive treatments to ensure lifelong oral health.",
    img: "/scraped_img_1.jpg",
  },
  {
    title: "Implants & Surgery",
    description: "Permanent solutions for missing teeth using advanced 3D imaging and painless surgical techniques.",
    img: "/scraped_img_2.jpg",
  }
];

export default function ServicesEditorial() {
  return (
    <section className="py-32 bg-surface-muted">
      <div className="layout-container">
        <div className="max-w-3xl mb-24">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary-600 mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
            Comprehensive Care, <br/> Elevated Standards.
          </h3>
        </div>

        <div className="flex flex-col gap-32">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col md:flex-row gap-12 md:gap-24 items-center",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Image with subtle parallax reveal */}
              <motion.div 
                initial={{ opacity: 0, clipPath: "inset(20% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className="w-full md:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full md:w-1/2"
              >
                <h4 className="text-3xl font-bold tracking-tight mb-6">{service.title}</h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md">
                  {service.description}
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
                >
                  Learn more 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
