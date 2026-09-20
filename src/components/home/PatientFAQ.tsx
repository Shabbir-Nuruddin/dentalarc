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
    question: "Is the Rotary Root Canal really painless?",
    answer:
      "Yes. Traditional root canals were uncomfortable because manual steel hand-files created friction and vibration. At Dental Arc, Dr. Archana utilizes computerized electronic apex locators paired with ultra-flexible nickel-titanium (NiTi) rotary files and profound localized micro-anesthesia. Over 98% of our patients report feeling no pain whatsoever during treatment.",
    category: "Root Canal Treatment",
  },
  {
    question: "How does 0% EMI financing work for Implants and Crowns?",
    answer:
      "We believe high-end dentistry should be financially accessible without compromise. We have integrated 0% interest EMI options spanning 3, 6, 9, or 12 months in partnership with major credit cards, Bajaj Finserv, and Pine Labs. Paperwork is processed at our Sector 70 reception desk in under 10 minutes.",
    category: "Financing & 0% EMI",
  },
  {
    question: "Can a Root Canal and Crown be completed in a single sitting?",
    answer:
      "For teeth without severe acute periapical abscess, single-visit endodontics is our specialty. Dr. Archana cleans, sterilizes with a diode laser, and seals the root canal in a single 45-minute appointment. We then take a 3D digital intraoral scan for your CAD/CAM zirconia crown, with expedited 24-hour delivery.",
    category: "Single-Sitting Protocol",
  },
  {
    question: "Do you accept health insurance and provide cashless claims?",
    answer:
      "We support all private health insurance policies that cover dental trauma, maxillofacial procedures, or OPD dental riders. Our clinic provides itemized tax invoices, pre- and post-op digital radiograph proof, and formal doctor discharge summaries to ensure smooth reimbursement processing.",
    category: "Insurance & Claims",
  },
  {
    question: "What makes Diode Laser Gum treatment superior to traditional scalpel surgery?",
    answer:
      "Traditional gum depigmentation and contouring required surgical blades, bleeding, and sutures, requiring 2 to 3 weeks of recovery. Our 980nm soft-tissue diode laser vaporizes excess melanin pigment and coagulates capillaries simultaneously. There are zero scalpels, zero stitches, and patients resume regular eating the very next day.",
    category: "Laser Aesthetics",
  },
];

export default function PatientFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    playSnap(openIdx === index ? 360 : 480, 0.05);
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FAF8F5] border-b-2 border-slate-900 text-slate-900">
      <div className="layout-container max-w-4xl">
        
        {/* Editorial Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clinical Transparency • Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-1.5">
            The Essential Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, honest answers regarding pain management, single-visit execution, insurance claims, and 0% EMI financing.
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
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1.5 group-hover:text-primary-700 transition-colors">
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

                {/* Smooth Expansion Content */}
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
              Have an idiosyncratic question about your teeth?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Speak directly with Dr. Archana Raj Jha or visit our Sector 70 clinic today.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917979927696"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded border-2 border-slate-900 hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 79799 27696</span>
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
