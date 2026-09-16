"use client";

import { Star, ArrowUpRight } from "lucide-react";

const patientReviews = [
  {
    name: "PRAVEEN YADAV",
    treatment: "Root Canal & 3 Crowns",
    review: "Outstanding dental care and a truly professional experience. Dr. Archana Jha performed my root canal treatment and fixed three crowns with remarkable precision and expertise. The entire treatment was completely pain-free, comfortable, and flawlessly executed.",
  },
  {
    name: "Amit Mishra",
    treatment: "Root Canal & Crown",
    review: "Dr. Archana did an excellent job with my root canal and crown treatment. The procedure was completely pain-free, and the crown was fitted perfectly. Highly recommend her clinic in Sector 70.",
  },
  {
    name: "Munish Fauzdar",
    treatment: "Dental Implant & Filling",
    review: "Had a great experience at Dental Arc, Sector 70 Gurgaon. I recently got my dental implant and filling done here, and the entire process was smooth and comfortable. Very gentle care.",
  },
  {
    name: "Saurabh Rawat",
    treatment: "Zirconia Crown Replacement",
    review: "I went to Dr Archana clinic for replacement of my crown. She did fantastic job with replacing old ceramic based crown to zirconia crown. I feel much better than before.",
  },
  {
    name: "Ankit Jangra Milkpuria",
    treatment: "Dual Implants for Mother",
    review: "Great experience with Dr.Archana and her team for my mother's dental implants treatment. Both implants were placed in one visit without pain and swelling later.",
  }
];

export default function ReviewsMarquee() {
  const featured = patientReviews[0];
  const others = patientReviews.slice(1);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-14 border-b border-slate-200 gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Verified Patient Experiences
            </h2>
            <p className="text-slate-600 text-base">
              Real testimonials from our Google Maps profile across Sector 70 & Sector 65 Gurugram.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <span>Read all 100+ Reviews on Google</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Editorial Review Layout - NO Card Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Large Featured Testimonial Quote */}
          <div className="lg:col-span-6 space-y-6 lg:border-r lg:border-slate-200 lg:pr-12">
            <div className="flex text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl font-light text-slate-800 leading-relaxed italic">
              "{featured.review}"
            </blockquote>

            <div className="pt-2">
              <p className="font-bold text-slate-900 text-base">{featured.name}</p>
              <p className="text-xs text-primary-700 font-semibold">{featured.treatment} • Verified Google Review</p>
            </div>
          </div>

          {/* Right: Hairline-Divided Testimonial List */}
          <div className="lg:col-span-6 divide-y divide-slate-200">
            {others.map((rev, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{rev.name}</span>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "{rev.review}"
                </p>
                <p className="text-[11px] text-slate-400 font-medium">{rev.treatment}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
