"use client";

import { motion } from "motion/react";

const logos = [
  { name: "Bajaj Finserv", url: "https://placehold.co/400x150/ffffff/0f172a?text=Bajaj+Finserv" },
  { name: "Star Health", url: "https://placehold.co/400x150/ffffff/0f172a?text=Star+Health" },
  { name: "HDFC ERGO", url: "https://placehold.co/400x150/ffffff/0f172a?text=HDFC+ERGO" },
  { name: "ICICI Lombard", url: "https://placehold.co/400x150/ffffff/0f172a?text=ICICI+Lombard" },
];

export default function Insurances() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="layout-container text-center">
        <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-12">
          Accepted Insurances & EMI Partners
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
          {logos.map((logo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-32 md:w-40 flex items-center justify-center"
            >
              <img src={logo.url} alt={logo.name} className="max-w-full max-h-12 object-contain rounded-lg" />
            </motion.div>
          ))}
        </div>
        
        <p className="mt-12 text-slate-500 font-light max-w-2xl mx-auto">
          We believe premium dental care should be accessible. We partner with leading Indian health insurance providers and offer flexible, 0% interest EMI options through Bajaj Finserv.
        </p>
      </div>
    </section>
  );
}
