"use client";

import { motion } from "motion/react";
import { Star, ArrowUpRight } from "lucide-react";

const allReviews = [
  {
    name: "PRAVEEN YADAV",
    treatment: "Root Canal & 3 Crowns",
    text: "Outstanding dental care and a truly professional experience. Dr. Archana Jha performed my root canal treatment and fixed three crowns with remarkable precision and expertise. The entire treatment was completely pain-free...",
  },
  {
    name: "Amit Mishra",
    treatment: "Root Canal & Crown",
    text: "Dr. Archana did an excellent job with my root canal and crown treatment. The procedure was completely pain-free, and the crown was fitted perfectly.",
  },
  {
    name: "Kamal X",
    treatment: "Painless RCT & Crown",
    text: "I must say I had the most amazing dental treatment so far. Dr.Archana is truly knowledgeable and explain things understandable to the patient. Rct was painless and crown looks fabulous.",
  },
  {
    name: "Munish Fauzdar",
    treatment: "Dental Implant & Filling",
    text: "Had a great experience at Dental Arc, Sector 70 Gurgaon. I recently got my dental implant and filling done here, and the entire process was smooth and comfortable.",
  },
  {
    name: "Saurabh Rawat",
    treatment: "Zirconia Crown",
    text: "I went to Dr Archana clinic for replacement of my crown. She did fantastic job with replacing old ceramic based crown to zirconia crown. I feel better than before.",
  },
  {
    name: "rishi bajpai",
    treatment: "Tooth Extraction",
    text: "Dr. Archana is an excellent dentist. She treated my father's tooth pain and extraction very effectively, and the entire experience was smooth and reassuring.",
  },
  {
    name: "Dheeraj Verma",
    treatment: "Root Canal Therapy",
    text: "Pain was completely gone on the first sitting of root canal treatment. As I was very anxious and wanted to get my teeth removed because my threshold for pain is minimal but Dr.Archana assured me that the pain will vanish by 80-90% on the same day.",
  },
  {
    name: "Ankit jangra milkpuria",
    treatment: "Dual Dental Implants",
    text: "Great experience with Dr.Archana and her team for my mother's dental implants treatment. The treatment was well planned and both the implants were placed in one visit without pain and swelling later.",
  },
  {
    name: "Sonu Saxena",
    treatment: "Wisdom Tooth Surgery",
    text: "The surgery for wisdom tooth extraction was well planned and took less time than expected. Dentist was humble and knowledgeable. Absolutely recommended.",
  },
  {
    name: "SUNNY Kumar",
    treatment: "Painless Extraction",
    text: "Extraction was painless and took very less time. Dr.Archana kept following up after the treatment and reminded instructions so that the healing gets faster.",
  },
  {
    name: "212Jyoti Sharma",
    treatment: "Gum Bleeding Therapy",
    text: "I had gums bleeding and pyorhea... after teeth cleaning my gums bleeding issue has stopped, And Ma'am is also very nice; she did the treatment in such a way that there was no pain at all.",
  },
  {
    name: "Kumari Anjali",
    treatment: "Wisdom Extraction",
    text: "I had my wisdom tooth extracted by Dr. Archana Jha, and the experience was much better than I expected. She was very gentle throughout the procedure.",
  },
  {
    name: "Savita Dubey",
    treatment: "Deep Teeth Cleaning",
    text: "Dr.Archana has a very gentle hand. Got teeth cleaning done and so far this has been the best experience. I even experienced no bleeding at all this time.",
  },
  {
    name: "Vikram Yadav",
    treatment: "Filling & Cleaning",
    text: "Visited Dental Arc clinic for cavity filling and teeth cleaning. The service was amazing, pain-free, and done with utmost care. Most importantly, the scheduled appointment was honored.",
  },
  {
    name: "ajay panday",
    treatment: "Cavity Filling",
    text: "Good experience in getting filling done at dental arc. Dr.Archana did a splendid job.",
  },
  {
    name: "Akshit Gupta",
    treatment: "Two Root Canals",
    text: "I came in with severe tooth pain and discovered that two of my teeth needed root canal treatment. Dr. Archana made the entire experience incredibly smooth...",
  },
  {
    name: "Anmol Marwah",
    treatment: "Routine Consultation",
    text: "Such a calming experience I had. Archana is super professional and knowledgable. I am totally satisfied and recommeding visiting here for any dental issues.",
  },
  {
    name: "Manish Kumar Jha",
    treatment: "Teeth Extraction",
    text: "I recently got my teeth extraction done at Dental Arc and had a surprisingly smooth experience. The dentist was professional, explained everything clearly, and made sure I was comfortable.",
  },
  {
    name: "Advocate Ashutosh Raghav",
    treatment: "Full Checkup & Cleaning",
    text: "Excellent service! The dentist and staff was very professional, friendly and made me feel at ease. I was impressed by the modern equipment and technology used.",
  },
  {
    name: "Vandana Singh",
    treatment: "Mother's Dental Implant",
    text: "We went to get implant treatment for my mother and surgery went very smooth. She is completely painfree within couple of days. Also Dr.Archana kept following up and was very empathetic.",
  }
];

export default function ReviewsMarquee() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="layout-container mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700">
              Verified Patient Experiences
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Google Maps Reviews
            </h2>
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
      </div>

      {/* Row 1: Scrolling Left */}
      <div className="relative w-full flex overflow-x-hidden no-scrollbar mb-6">
        <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-6 pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...allReviews, ...allReviews].map((rev, i) => (
            <div
              key={i}
              className="inline-flex flex-col w-[360px] shrink-0 p-5 rounded-lg border border-slate-200 bg-white shadow-xs hover:border-primary-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 text-sm">{rev.name}</span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 whitespace-normal text-xs leading-relaxed line-clamp-3 mb-3">
                "{rev.text}"
              </p>
              <span className="text-[11px] text-primary-700 font-medium mt-auto">
                {rev.treatment} • Verified Review
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Scrolling Right */}
      <div className="relative w-full flex overflow-x-hidden no-scrollbar">
        <div className="absolute left-0 top-0 w-28 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-28 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-6 pl-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...allReviews.slice(10), ...allReviews.slice(0, 10), ...allReviews].map((rev, i) => (
            <div
              key={i}
              className="inline-flex flex-col w-[360px] shrink-0 p-5 rounded-lg border border-slate-200 bg-white shadow-xs hover:border-primary-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 text-sm">{rev.name}</span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 whitespace-normal text-xs leading-relaxed line-clamp-3 mb-3">
                "{rev.text}"
              </p>
              <span className="text-[11px] text-primary-700 font-medium mt-auto">
                {rev.treatment} • Verified Review
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
