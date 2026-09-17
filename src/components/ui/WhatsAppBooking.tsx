"use client";

import { useState } from "react";
import { X, Send, Clock, MapPin, Sparkles } from "lucide-react";

const options = [
  {
    title: "Root Canal / Tooth Pain",
    desc: "Single-sitting rotary RCT with Dr. Archana",
    msg: "Hi Dr. Archana, I am having tooth pain and would like to book a Root Canal consultation at Dental Arc.",
  },
  {
    title: "Dental Implants & 0% EMI",
    desc: "Fixed tooth replacement with easy financing",
    msg: "Hi Dr. Archana, I would like to inquire about Dental Implants and 0% EMI options at Dental Arc.",
  },
  {
    title: "Teeth Cleaning & Scaling",
    desc: "Ultrasonic prophylaxis and stain removal",
    msg: "Hi Dr. Archana, I want to book an appointment for teeth cleaning and scaling at Sector 70 clinic.",
  },
  {
    title: "Laser Gum Aesthetics",
    desc: "Diode laser depigmentation & contouring",
    msg: "Hi Dr. Archana, I want to consult about Laser Gum treatment and smile aesthetic correction.",
  },
  {
    title: "General Checkup / Other",
    desc: "Oral exam and consultation",
    msg: "Hi Dr. Archana, I would like to schedule a dental checkup consultation at Dental Arc.",
  },
];

export default function WhatsAppBooking() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917979927696?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-20 md:bottom-8 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp with Dr. Archana"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group border-2 border-white"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.451-.527.151-.176.201-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.235-.245-.587-.494-.507-.677-.517-.176-.01-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.24A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
          </svg>
          <span className="font-semibold text-xs sm:text-sm tracking-wide hidden sm:inline-block">
            WhatsApp Dr. Archana
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse hidden sm:inline-block" />
        </button>
      </div>

      {/* Interactive WhatsApp Booking Concierge Popover */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-5 w-[92vw] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Concierge Header */}
          <div className="bg-slate-900 p-4 text-white flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Direct WhatsApp Booking
                </span>
              </div>
              <h3 className="font-bold text-base text-white">Dental Arc Clinic</h3>
              <p className="text-xs text-slate-300">Dr. Archana Raj Jha • +91 79799 27696</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Notice */}
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-primary-600" />
              <span>Replies in under 15 mins</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>Sector 70 & 65</span>
            </span>
          </div>

          {/* Select Treatment Option */}
          <div className="p-4 space-y-2 max-h-[320px] overflow-y-auto">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Select inquiry to start WhatsApp:
            </p>

            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOpenWhatsApp(opt.msg)}
                className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:border-[#25D366] hover:bg-emerald-50/50 transition-all flex items-center justify-between group"
              >
                <div className="pr-2">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    {opt.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{opt.desc}</p>
                </div>
                <Send className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#25D366] shrink-0" />
              </button>
            ))}
          </div>

          {/* Direct Custom Message Link */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 text-center">
            <button
              onClick={() =>
                handleOpenWhatsApp(
                  "Hi Dr. Archana, I would like to book a dental appointment at Dental Arc."
                )
              }
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center justify-center gap-1.5 w-full py-1.5"
            >
              <span>Custom consultation request</span>
              <span>→</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
}
