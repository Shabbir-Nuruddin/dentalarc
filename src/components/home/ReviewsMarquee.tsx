"use client";

import { Star, ShieldCheck, Quote } from "lucide-react";

const patientReviews = [
  {
    name: "Ananya Sen",
    location: "Golf Course Ext. Road",
    service: "Painless Rotary RCT",
    rating: 5,
    text: "Dr. Madhushree is remarkably gentle and soft-spoken. I had severe dental anxiety from childhood, but her rotary root canal was completely painless. She patiently explained every single step before touching a tooth.",
  },
  {
    name: "Rohit Mehra",
    location: "Sector 70 Gurugram",
    service: "Conservative Tooth Preservation",
    rating: 5,
    text: "Unlike corporate chains that immediately pushed me for an expensive crown and extraction, Dr. Madhushree took a conservative approach and preserved my natural molar with simple restoration. 100% honest advice.",
  },
  {
    name: "Pooja Sharma",
    location: "Tulip Orange, Sec 70",
    service: "Pediatric Dentistry (8-yr-old)",
    rating: 5,
    text: "Brought my 8-year-old daughter for severe tooth pain. Dr. Madhushree was so patient, warm, and friendly that my daughter didn't even cry once! Highly recommend The Dental Salt for all families.",
  },
  {
    name: "Vikas Malhotra",
    location: "Sector 65 Gurugram",
    service: "Zirconia Crown Placement",
    rating: 5,
    text: "Outstanding crown placement. The bite feels completely natural, perfectly color-matched, and she gave me the 10-year warranty card on the spot. Great clinic ambiance and strict sterilization.",
  },
  {
    name: "Sneha Gupta",
    location: "Sector 48 Gurugram",
    service: "Teeth Cleaning & Gum Care",
    rating: 5,
    text: "Dr. Madhushree is one of the most honest dental practitioners in Gurgaon. No unnecessary upselling, clean clinic, and genuinely empathetic care. The Dental Salt has earned my full trust.",
  },
];

export default function ReviewsMarquee() {
  return (
    <section id="reviews" className="py-24 bg-white border-b-2 border-slate-900 text-slate-900 scroll-mt-20">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b-2 border-slate-900 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-teal-800">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Patient Stories • Google & Practo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Trusted by Hundreds of Families
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Consistently rated <strong>4.9 / 5.0 across 250+ reviews</strong> for gentle execution, honest conservative advice, and painless treatments.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="text-3xl font-black text-slate-900">4.9</span>
              <div className="flex text-amber-500 justify-end gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Patient Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] border-2 border-slate-900 rounded-xl p-6 shadow-offset flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-800 bg-white border border-slate-300 px-2 py-0.5 rounded font-bold">
                    {rev.service}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-slate-300 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">{rev.name}</p>
                  <p className="text-[11px] text-slate-500 font-mono">{rev.location}</p>
                </div>
                <span className="text-emerald-700 font-bold text-[10px] uppercase font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
