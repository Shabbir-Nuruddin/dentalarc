"use client";

import { motion } from "motion/react";

const techList = [
  {
    name: "3D CBCT Imaging",
    desc: "Provides a complete 360-degree view of your jaw, teeth, and nerves for pinpoint accuracy in implant surgery and diagnostics.",
  },
  {
    name: "Trios Intraoral Scanner",
    desc: "No more messy impressions. We take a digital 3D mold of your teeth in seconds for perfectly fitting Invisalign and crowns.",
  },
  {
    name: "Laser Dentistry",
    desc: "Minimally invasive soft-tissue lasers mean less pain, less bleeding, and dramatically faster healing times.",
  }
];

export default function Technology() {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-primary-400 mb-4">Our Technology</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8">
              The future of dentistry, <br/> available today.
            </h3>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
              We reinvest heavily into the world's most advanced dental technologies. Why? Because better tools mean faster procedures, more accurate diagnoses, and a completely pain-free experience for you.
            </p>
            
            <div className="space-y-8">
              {techList.map((tech, i) => (
                <div key={i} className="border-l-2 border-primary-500 pl-6">
                  <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                  <p className="text-slate-400 leading-relaxed font-light">{tech.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full h-[700px] rounded-[3rem] overflow-hidden shadow-2xl relative"
          >
            <img 
              src="/scraped_img_5.jpg" 
              alt="Advanced Dental Technology" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
