"use client";

import { MapPin, Phone, Mail, Calendar, Clock, Navigation, ExternalLink, MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock Next 5 days
  const dates = [
    { day: "Mon", date: 15 },
    { day: "Tue", date: 16 },
    { day: "Wed", date: 17 },
    { day: "Thu", date: 18 },
    { day: "Fri", date: 19 },
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="pt-32 pb-24 bg-surface">
      <div className="layout-container max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Schedule Your Visit
          </h1>
          <p className="text-lg text-slate-600">
            Select a convenient time below, or call our clinic directly. We look forward to seeing your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Booking Interactive UI */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/40">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Calendar className="text-primary-600" /> Book an Appointment
            </h2>
            
            <div className="space-y-8">
              {/* Step 1: Date */}
              <div>
                <label className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-4 block">1. Select Date</label>
                <div className="flex flex-wrap gap-3">
                  {dates.map((d, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedDate(i)}
                      className={cn(
                        "flex flex-col items-center justify-center w-20 h-24 rounded-2xl border-2 transition-all",
                        selectedDate === i 
                          ? "border-primary-600 bg-primary-50 text-primary-900 shadow-sm" 
                          : "border-slate-100 hover:border-primary-200 bg-white text-slate-600"
                      )}
                    >
                      <span className="text-sm font-medium">{d.day}</span>
                      <span className="text-2xl font-bold">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Time */}
              <div className={cn("transition-opacity duration-300", selectedDate !== null ? "opacity-100" : "opacity-30 pointer-events-none")}>
                <label className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-4 block">2. Select Time</label>
                <div className="flex flex-wrap gap-3">
                  {times.map((t, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedTime(t)}
                      className={cn(
                        "px-6 py-3 rounded-xl border-2 font-medium transition-all",
                        selectedTime === t
                          ? "border-primary-600 bg-primary-600 text-white shadow-md"
                          : "border-slate-100 hover:border-primary-200 bg-white text-slate-600"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Details */}
              <div className={cn("transition-opacity duration-300 space-y-4", selectedTime !== null ? "opacity-100" : "opacity-30 pointer-events-none")}>
                <label className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-2 block">3. Your Details</label>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50" placeholder="First Name" />
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50" placeholder="Last Name" />
                </div>
                <input type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50" placeholder="Phone Number" />
                
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-5 rounded-xl transition-all shadow-lg hover:shadow-xl mt-4">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-xl flex-grow">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Our Clinics</h2>
                <a 
                  href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary-600/20 text-primary-400 border border-primary-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-primary-600/30 transition-colors"
                >
                  <span>★ 5.0 on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-7">
                {/* Sector 70 */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">Sector 70 (Main Clinic)</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      F-115, 1st Floor, Spaze Forum (Corporate Park), Tulip Chowk, below Cult Fitness Gym, Sector 70, Gurugram, Haryana 122018
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=28.395294,77.030255" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary-400 hover:text-primary-300 font-semibold flex items-center gap-1"
                      >
                        <Navigation className="w-3.5 h-3.5" /> Get Directions
                      </a>
                      <a 
                        href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" /> View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sector 65 */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <MapPin className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">Sector 65 (Branch)</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      R7-101 & 101A, M3M 65th Avenue, Emerald Hills Rd, Sector 65, Gurugram, Haryana 122102
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <Phone className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">Call & WhatsApp</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <a 
                        href="tel:+917979927696" 
                        className="text-primary-400 hover:text-primary-300 font-bold text-lg"
                      >
                        +91 79799 27696
                      </a>
                      <a 
                        href="https://wa.me/917979927696?text=Hi%20Dental%20Arc,%20I%20would%20like%20to%20book%20an%20appointment" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full hover:bg-emerald-500/30 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Available for regular visits and dental emergency triage</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <Clock className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">Working Hours</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Mon - Sat: 9:00 AM - 9:00 PM<br/>
                      Sunday: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Google Map Embed for Sector 70 Gurgaon */}
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-md relative bg-slate-100 flex flex-col">
              <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dental Arc - Sector 70 Gurgaon</h4>
                  <p className="text-xs text-slate-500">Spaze Forum, Tulip Chowk</p>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=28.395294,77.030255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-primary-600 hover:bg-primary-700 text-white font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
              <div className="h-72 w-full relative">
                <iframe 
                  src="https://maps.google.com/maps?q=28.395294,77.030255+(DENTAL+ARC+Dental+Clinic+Sector+70+Gurgaon)&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
