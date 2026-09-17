"use client";

import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function MobileActionbar() {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 flex items-center gap-2">
      {/* 1-Click WhatsApp Button */}
      <a 
        href="https://wa.me/917979927696?text=Hi%20Dr.%20Archana%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dental%20Arc." 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg rounded-full py-3 px-3 flex items-center justify-center gap-1.5 font-bold text-xs transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.245-.587-.494-.507-.677-.517-.176-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.24A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Call Button */}
      <a 
        href="tel:+917979927696" 
        className="flex-1 bg-white text-slate-900 border border-slate-300 shadow-lg rounded-full py-3 px-3 flex items-center justify-center gap-1.5 font-bold text-xs hover:bg-slate-50 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-primary-600 shrink-0" />
        <span>Call</span>
      </a>
      
      {/* Book Visit Button */}
      <Link 
        href="/contact" 
        className="flex-1 bg-primary-600 text-white shadow-lg rounded-full py-3 px-3 flex items-center justify-center gap-1.5 font-bold text-xs hover:bg-primary-500 transition-colors"
      >
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <span>Book</span>
      </Link>
    </div>
  );
}
