"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  { name: "PRAVEEN YADAV", text: "Outstanding dental care and a truly professional experience. Dr. Archana Jha performed my root canal treatment and fixed three crowns with remarkable precision and expertise. The entire treatment was completely pain-free..." },
  { name: "Amit Mishra", text: "Dr. Archana did an excellent job with my root canal and crown treatment. The procedure was completely pain-free, and the crown was fitted perfectly." },
  { name: "Kamal X", text: "I must say I had the most amazing dental treatment so far. Dr.Archana is truly knowledgeable and explain things understandable to the patient. Rct was painless and crown looks fabulous." },
  { name: "Munish Fauzdar", text: "Had a great experience at Dental Arc, Sector 70 Gurgaon. I recently got my dental implant and filling done here, and the entire process was smooth and comfortable." },
  { name: "Saurabh Rawat", text: "I went to Dr Archana clinic for replacement of my crown. She did fantastic job with replacing old ceramic based crown to zirconia crown. I feel better than before." },
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
