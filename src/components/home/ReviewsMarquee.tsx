"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    "name": "PRAVEEN YADAV",
    "text": "Outstanding dental care and a truly professional experience. Dr. Archana Jha performed my root canal treatment and fixed three crowns with remarkable precision and expertise. The entire treatment was completely pain-free..."
  },
  {
    "name": "Amit Mishra",
    "text": "Dr. Archana did an excellent job with my root canal and crown treatment. The procedure was completely pain-free, and the crown was fitted perfectly."
  },
  {
    "name": "Kamal X",
    "text": "I must say I had the most amazing dental treatment so far. Dr.Archana is truly knowledgeable and explain things understandable to the patient. Rct was painless and crown looks fabulous."
  },
  {
    "name": "Munish Fauzdar",
    "text": "Had a great experience at Dental Arc, Sector 70 Gurgaon. I recently got my dental implant and filling done here, and the entire process was smooth and comfortable."
  },
  {
    "name": "Saurabh Rawat",
    "text": "I went to Dr Archana clinic for replacement of my crown. She did fantastic job with replacing old ceramic based crown to zirconia crown. I feel better than before."
  },
  {
    "name": "rishi bajpai",
    "text": "Dr. Archana is an excellent dentist. She treated my father's tooth pain and extraction very effectively, and the entire experience was smooth and reassuring."
  },
  {
    "name": "Dheeraj Verma",
    "text": "Pain was completely gone on the first sitting of root canal treatment. As I was very anxious and wanted to get my teeth removed because my threshold for pain is minimal but Dr.Archana assured me that the pain will vanish by 80-90% on the same day."
  },
  {
    "name": "Ankit jangra milkpuria",
    "text": "Great experience with Dr.Archana and her team for my mother's dental implants treatment. The treatment was well planned and both the implants were placed in one visit without pain and swelling later."
  },
  {
    "name": "Sonu Saxena",
    "text": "The surgery for wisdom tooth extraction was well planned and took less time than expected. Dentist was humble and knowledgeable. Absolutely recommended."
  },
  {
    "name": "SUNNY Kumar",
    "text": "Extraction was painless and took very less time. Dr.Archana kept following up after the treatment and reminded instructions so that the healing gets faster."
  },
  {
    "name": "212Jyoti Sharma",
    "text": "I had gums bleeding and pyorhea... after teeth cleaning my gums bleeding issue has stopped , And Ma'am is also very nice; she did the treatment in such a way that there was no pain at all."
  },
  {
    "name": "Kumari Anjali",
    "text": "I had my wisdom tooth extracted by Dr. Archana Jha, and the experience was much better than I expected. She was very gentle throughout the procedure."
  },
  {
    "name": "Savita Dubey",
    "text": "Dr.Archana has a very gentle hand. Got teeth cleaning done and so far this has been the best experience. I even experienced no bleeding at all this time."
  },
  {
    "name": "Vikram Yadav",
    "text": "Visited Dental Arc clinic for cavity filling and teeth cleaning. The service was amazing, pain-free, and done with utmost care. Most importantly, the scheduled appointment was honored."
  },
  {
    "name": "ajay panday",
    "text": "Good experience in getting filling done at dental arc. Dr.Archana did a splendid job."
  },
  {
    "name": "Akshit Gupta",
    "text": "I came in with severe tooth pain and discovered that two of my teeth needed root canal treatment. Dr. Archana made the entire experience incredibly smooth..."
  },
  {
    "name": "Anmol Marwah",
    "text": "Such a calming experience I had. Archana is super professional and knowledgable . I am totally satisfied and recommeding visiting here for any dental issues."
  },
  {
    "name": "Manish Kumar Jha",
    "text": "I recently got my teeth extraction done at Dental Arc and had a surprisingly smooth experience. The dentist was professional, explained everything clearly, and made sure I was comfortable."
  },
  {
    "name": "Advocate Ashutosh Raghav & Associates",
    "text": "Excellent service! The dentist and staff was very professional, friendly and made me feel at ease. I was impressed by the modern equipment and technology used."
  },
  {
    "name": "Vandana Singh",
    "text": "We went to get implant treatment for my mother and surgery went very smooth. She is completely painfree within couple of days. Also Dr.Archana kept following up and was very empathetic."
  }
];

export default function ReviewsMarquee() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-2">Patient Stories</h2>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden no-scrollbar">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-6 pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed
          }}
        >
          {/* Duplicate the reviews array to create the seamless loop */}
          {[...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className={cn(
                "inline-flex flex-col w-[350px] shrink-0 p-6 rounded-2xl border border-slate-100 bg-surface-muted",
                "hover:shadow-md transition-shadow cursor-default"
              )}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 whitespace-normal text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <span className="text-slate-900 font-medium text-sm mt-auto">{review.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
