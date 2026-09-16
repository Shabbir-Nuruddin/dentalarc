"use client";

import { MapPin, Phone, Mail, Calendar, Clock } from "lucide-react";
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
            <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-xl flex-grow">
              <h2 className="text-2xl font-bold mb-8">Our Clinic</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <MapPin className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">New York Office</h3>
                    <p className="text-slate-300 leading-relaxed">TULIP CHOWK, SPAZE FORUM, F-115, below Cult Fitness Gym<br/>Sector 70, Sector 69, Gurugram, Haryana 122018</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Phone className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Direct Line</h3>
                    <p className="text-slate-300 leading-relaxed">+91 99999 99999<br/><span className="text-sm text-slate-400">Available 24/7 for emergencies</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Clock className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                    <p className="text-slate-300 leading-relaxed">Mon - Thu: 8:00 AM - 6:00 PM<br/>Fri: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Google Map Embed */}
            <div className="rounded-[2rem] h-64 overflow-hidden border border-slate-200 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
