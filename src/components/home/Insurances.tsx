"use client";

import { motion } from "motion/react";
import { ShieldCheck, CreditCard, FileCheck2, Phone } from "lucide-react";

const partners = [
  { name: "Bajaj Finserv", type: "0% Interest EMI", desc: "Easy monthly installments" },
  { name: "Star Health", type: "Health Insurance", desc: "Reimbursement & cashless support" },
  { name: "HDFC ERGO", type: "General Insurance", desc: "Dental benefit claim assistance" },
  { name: "ICICI Lombard", type: "Health & Wellness", desc: "Corporate & OPD cover support" },
  { name: "Care Health", type: "Health Insurance", desc: "Comprehensive claim documentation" },
  { name: "Niva Bupa", type: "Health Insurance", desc: "Accredited billing paperwork" },
];

export default function Insurances() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="layout-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            Transparent & Accessible Healthcare
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mt-3">
            Insurances & Easy EMI Options
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base font-light">
            We facilitate dental reimbursement paperwork for all major health insurance providers in India and offer flexible, 0% interest EMI options.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-primary-300 hover:shadow-md transition-all text-center"
            >
              <div className="w-9 h-9 mx-auto rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                {partner.type.includes("EMI") ? (
                  <CreditCard className="w-4 h-4" />
                ) : (
                  <ShieldCheck className="w-4 h-4" />
                )}
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{partner.name}</h3>
              <span className="text-[11px] font-semibold text-primary-600 uppercase tracking-wider mt-0.5 block">
                {partner.type}
              </span>
              <p className="text-[11px] text-slate-500 mt-1 font-light">{partner.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">
                Have questions about your corporate dental policy or insurance coverage?
              </h4>
              <p className="text-xs md:text-sm text-slate-500 font-light mt-0.5">
                Our front desk provides complete itemized receipts, diagnostic charts, and claim forms for smooth reimbursement.
              </p>
            </div>
          </div>
          <a
            href="tel:+917979927696"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-colors shadow-sm shrink-0"
          >
            <Phone className="w-4 h-4 text-primary-400" />
            <span>Verify Policy with Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
