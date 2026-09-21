"use client";

import Link from "next/link";
import DentalSaltLogo from "@/components/ui/DentalSaltLogo";
import { Phone, MapPin, Clock, Star, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t-2 border-slate-900 pt-16 pb-12">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <DentalSaltLogo className="h-8 w-auto brightness-200" />
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white leading-none">
                  The Dental <span className="text-teal-400 font-light">Salt</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-0.5">
                  Sector 70 & Golf Course Ext. • Gurugram
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Personalized, painless and evidence-based dentistry for children, adults, and seniors in Gurugram. Led by Dr. Madhushree Agarwal (15+ Years Clinical Excellence).
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono pt-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">250+ Verified Reviews</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
              Clinical Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Painless Rotary RCT</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Conservative Tooth Preservation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">CAD/CAM Zirconia Crowns</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Gentle Pediatric Dentistry</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Dental Implants & 0% EMI</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Teeth Whitening & Scaling</Link></li>
            </ul>
          </div>

          {/* Col 3: Practices & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
              Clinic Contact & Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>Sector 70:</strong> C-112A, Tapasya Grand Walk, Gurugram 122018</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>Golf Course Ext:</strong> B/1, Golf Course Ext Road, Gurugram 122101</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sun: 09:00 AM – 08:00 PM (Open 7 Days)</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+919999385782" className="text-white font-bold hover:text-teal-300 transition-colors">
                  +91 99993 85782
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} The Dental Salt. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Dr. Madhushree Agarwal • Dr. R. Ahmed Dental College Alumna</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
