"use client";

import React, { useState } from "react";
import { playSnap } from "@/lib/sound";
import { Plus, HelpCircle, PhoneCall } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why the name 'The Dental Salt'?",
    answer:
      "Salt has been dentistry's most fundamental, pure healing mineral for millennia. At The Dental Salt, our philosophy is returning dentistry to pure honesty, conservative tooth preservation, and transparent care. We never recommend aggressive or expensive procedures when gentle preventive care can save your natural teeth.",
    category: "Our Philosophy",
  },
  {
    question: "Is Rotary Root Canal treatment with Dr. Madhushree really painless?",
    answer:
      "Yes. Dr. Madhushree Agarwal has over 15 years of specialization in rotary endodontics. By using digital electronic apex locators and flexible nickel-titanium (NiTi) rotary files with computerized localized micro-anesthesia, the procedure is completed with virtually zero discomfort. Over 98% of our patients report feeling no pain.",
    category: "Painless Endodontics",
  },
  {
    question: "How does Dr. Madhushree's conservative approach save my natural teeth?",
    answer:
      "Many commercial dental chains prematurely extract teeth or recommend aggressive full-coverage crowns. Dr. Madhushree evaluates each tooth individually and uses biomimetic restorative techniques to remove only decayed tissue, preserving maximum healthy tooth structure for decades.",
    category: "Tooth Preservation",
  },
  {
    question: "How do you handle nervous patients and young children?",
    answer:
      "Dr. Madhushree is renowned for her calm, soft-spoken, and empathetic chairside manner. She walks patients through every step before initiating treatment, ensuring complete comfort and eliminating dental anxiety for both children and adults.",
    category: "Patient Comfort",
  },
  {
    question: "Do you offer 0% EMI financing for dental implants and crowns?",
    answer:
      "Yes. We believe quality healthcare should be accessible. The Dental Salt offers flexible 0% interest EMI options spanning 3 to 12 months with minimal paperwork right at our reception desk.",
    category: "Financing & EMI",
  },
];

export default function PatientFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    playSnap(openIdx === index ? 360 : 480, 0.05);
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FAF9F6] border-b-2 border-slate-900 text-slate-900">
      <div className="layout-container max-w-4xl">
        
        {/* Editorial Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-widest text-teal-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clinical Transparency • Common Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-1.5">
            The Essential Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, honest answers regarding pain management, tooth preservation, pediatric care, and financing at The Dental Salt.
          </p>
        </div>

        {/* Tactile Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bg-white border-2 border-slate-900 rounded-lg shadow-offset overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1.5 group-hover:text-teal-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Tactile Spring Rotating Indicator (+ to ×) */}
                  <div
                    className={`w-8 h-8 rounded border-2 border-slate-900 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {/* Expansion Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-dashed border-slate-200 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Inquiries Help Card */}
        <div className="mt-12 bg-white border-2 border-slate-900 p-6 rounded-lg shadow-offset flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Have a specific question about your dental health?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Speak directly with Dr. Madhushree Agarwal or visit our Sector 70 clinic today.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919999385782"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded border-2 border-slate-900 hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 99993 85782</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-offset-sm"
            >
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
