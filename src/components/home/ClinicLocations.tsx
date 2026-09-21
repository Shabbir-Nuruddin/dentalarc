"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { playTick } from "@/lib/sound";

export default function ClinicLocations() {
  return (
    <section className="py-24 bg-white border-b-2 border-slate-900 text-slate-900">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-300 px-3 py-1 rounded-full">
            Gurugram Practices
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-2.5">
            Visit The Dental Salt
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Conveniently accessible across Sector 70 (Tapasya Grand Walk) and Golf Course Extension Road with dedicated parking and open 7 days.
          </p>
        </div>

        {/* Dual Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Clinic 1: Sector 70 Tapasya Grand Walk */}
          <div className="bg-[#FAF9F6] border-2 border-slate-900 rounded-2xl p-6 sm:p-8 shadow-offset space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
                <span className="text-xs font-mono font-bold uppercase text-teal-800 bg-white border border-slate-300 px-2.5 py-1 rounded">
                  Clinic Location 01
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold">Open Today till 8 PM</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Sector 70 Practice</h3>
                <p className="text-sm text-slate-600 mt-1">Tapasya Grand Walk (Near Tulip Chowk)</p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>1st Floor, C-112A, Tapasya Grand Walk, Sector 70, Gurugram, Haryana 122018</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Mon – Sun: 09:00 AM – 08:00 PM (Open 7 Days)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <a href="tel:+919999385782" className="font-bold text-slate-900 hover:underline">
                    +91 99993 85782
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-dashed border-slate-300 flex items-center justify-between">
              <a
                href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20want%20to%20book%20an%20appointment%20at%20Sector%2070%20Tapasya%20Grand%20Walk."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2400, 0.04)}
                className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
              >
                <span>Book Sector 70 Visit</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Clinic 2: Golf Course Extension Road */}
          <div className="bg-[#FAF9F6] border-2 border-slate-900 rounded-2xl p-6 sm:p-8 shadow-offset space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
                <span className="text-xs font-mono font-bold uppercase text-teal-800 bg-white border border-slate-300 px-2.5 py-1 rounded">
                  Clinic Location 02
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold">Open Today till 8 PM</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Golf Course Extension Practice</h3>
                <p className="text-sm text-slate-600 mt-1">Golf Course Ext. Road, Gurugram</p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>B/1, Golf Course Extension Road, Gurugram, Haryana 122101</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Mon – Sun: 09:00 AM – 08:00 PM (Open 7 Days)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <a href="tel:+919999385782" className="font-bold text-slate-900 hover:underline">
                    +91 99993 85782
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-dashed border-slate-300 flex items-center justify-between">
              <a
                href="https://wa.me/919999385782?text=Hi%20Dr.%20Madhushree%2C%20I%20want%20to%20book%20an%20appointment%20at%20Golf%20Course%20Extension."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2400, 0.04)}
                className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
              >
                <span>Book Golf Course Ext. Visit</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
