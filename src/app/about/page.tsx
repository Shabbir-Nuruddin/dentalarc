"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      
      {/* Intro Story */}
      <div className="layout-container max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary-600 mb-4">Our Story</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
            Dentistry rooted in <br/> compassion and craft.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
            We started this clinic with a singular vision: to remove the fear and anxiety from the dental chair. By combining the world's most advanced technology with genuine human empathy, we don't just fix teeth - we restore confidence.
          </p>
        </motion.div>
      </div>

      {/* Large Clinic Image */}
      <div className="layout-container mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl relative"
        >
          <img 
            src="/scraped_img_1.jpg" 
            alt="Inside our state-of-the-art clinic" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/10" />
        </motion.div>
      </div>

      {/* Doctors / Team Profiles */}
      <div className="layout-container">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-16 text-center">
          Meet Your Specialists
        </h2>

        <div className="flex flex-col gap-24 max-w-5xl mx-auto">
          
          {/* Doctor 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shrink-0">
              <img 
                src="/scraped_img_2.jpg" 
                alt="Dr. Archana Raj Jha" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-7/12">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">Dr. Archana Raj Jha</h3>
              <p className="text-primary-600 font-semibold uppercase tracking-wider text-sm mb-6">Lead Dentist & Implantologist</p>
              <div className="prose prose-lg text-slate-600 font-light leading-relaxed">
                <p>
                  "I believe that a smile is the most important thing you wear. My goal is to make sure every patient leaves our clinic feeling more confident than when they walked in."
                </p>
                <p>
                  Dr. Archana has extensive experience in painless Root Canal Treatments, Zirconia Crowns, and Dental Implants. She is dedicated to providing high-quality, personalized dental care in Gurugram, ensuring every patient is comfortable and completely pain-free.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="layout-container mt-32 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Experience the difference today.</h2>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg group"
        >
          Schedule a Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
