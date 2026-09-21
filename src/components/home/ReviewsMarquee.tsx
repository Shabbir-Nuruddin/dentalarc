"use client";

import { Star, ShieldCheck, Quote } from "lucide-react";

const patientReviews = [
  {
    name: "Verified Patient",
    location: "Practo Verified • Pediatric Care",
    service: "Orthodontic & Child Care",
    rating: 5,
    text: "My daughter was paranoid of braces and had lots of doubts. Dr. Madhushree was very calm and with high levels of patience and friendliness, she explained everything and won our confidence on the treatment. Now my daughter is undergoing treatment very well. Thank you Doctor.",
  },
  {
    name: "Verified Patient",
    location: "Practo Verified • Sector 70",
    service: "Dentures & 3 Tooth Crowns",
    rating: 5,
    text: "Very nice doctor, gentle and soft-spoken.. Her looks pretty much may deceive her experience.. She has worked on a denture for my mother and crowns for 3 teeth for my dad, I actually prefer her advice instead of a general physician.. If this review matters please visit her...",
  },
  {
    name: "Verified Patient",
    location: "Google Review • Gurugram",
    service: "Post-RCT Diagnosis & Relief",
    rating: 5,
    text: "Dr. Madhushree is someone who would patiently understand all your concerns and make sure to address each one of them. I visited her for my post RCT issues that I got done from somewhere else. She explained my situation in detail to me and was quite precise about the solutions. It left me more aware about my dental health. Strongly recommend her.",
  },
  {
    name: "Verified Patient",
    location: "Practo Verified • Tooth Saving",
    service: "Conservative Tooth Preservation",
    rating: 5,
    text: "I had a wonderful experience with Dr. Madhushree, she is a very friendly and honest doctor. When other dentists couldn't save my tooth because there was major work to be done and insisted on Extraction, Dr. Madhushree went out of her way to save my tooth!",
  },
  {
    name: "Verified Patient",
    location: "Google Review • Gurugram",
    service: "Accurate Diagnostic Care",
    rating: 5,
    text: "Dr. Madhushree has been amazing in her diagnostic approach. She saved my tooth just by doing a filling while the other dentist I visited outright suggested a RCT. Thanks doc.",
  },
  {
    name: "Verified Patient",
    location: "Practo Verified • Sector 70",
    service: "Transparent & Friendly Care",
    rating: 5,
    text: "Highly satisfied with the treatment... I came to know about a lot of things... Budget friendly with high quality services. She was open to explaining the reason about the different issues in layman terms.",
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
