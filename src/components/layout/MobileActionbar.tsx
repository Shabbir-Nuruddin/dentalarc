"use client";

import { Phone, Calendar, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { playTick, playSnap } from "@/lib/sound";

export default function MobileActionbar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t-2 border-slate-900 py-2 px-3 shadow-lg">
      <div className="grid grid-cols-4 gap-1 text-center">
        
        {/* Direct Call */}
        <a
          href="tel:+919999385782"
          onClick={() => playTick(2200, 0.04)}
          className="flex flex-col items-center justify-center p-1 text-slate-700 hover:text-teal-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-700" />
          <span className="text-[9px] font-bold mt-1 uppercase font-mono">Call</span>
        </a>

        {/* 1-Click WhatsApp */}
        <a
          href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment%20at%20The%20Dental%20Salt."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playTick(2400, 0.04)}
          className="flex flex-col items-center justify-center p-1 text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-[9px] font-bold mt-1 uppercase font-mono">WhatsApp</span>
        </a>

        {/* Direction / Location */}
        <Link
          href="/contact"
          onClick={() => playTick(2400, 0.04)}
          className="flex flex-col items-center justify-center p-1 text-slate-700 hover:text-teal-700 transition-colors"
        >
          <MapPin className="w-4 h-4 text-slate-800" />
          <span className="text-[9px] font-bold mt-1 uppercase font-mono">Clinic</span>
        </Link>

        {/* Book Appointment CTA */}
        <Link
          href="/contact"
          onClick={() => playSnap(500, 0.06)}
          className="flex flex-col items-center justify-center p-1 bg-slate-900 text-white rounded-lg shadow-sm"
        >
          <Calendar className="w-4 h-4 text-teal-400" />
          <span className="text-[9px] font-bold mt-1 uppercase font-mono">Book</span>
        </Link>

      </div>
    </div>
  );
}
