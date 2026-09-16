"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function MobileActionbar() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex gap-2">
      <Link 
        href="tel:5551234567" 
        className="flex-1 bg-white text-slate-900 border border-slate-200 shadow-xl rounded-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm hover:bg-slate-50 transition-colors"
      >
        <Phone className="w-4 h-4 text-primary-600" /> Call Now
      </Link>
      
      <Link 
        href="/contact" 
        className="flex-1 bg-primary-600 text-white shadow-xl rounded-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-sm hover:bg-primary-500 transition-colors"
      >
        <Calendar className="w-4 h-4" /> Book Visit
      </Link>
    </div>
  );
}
