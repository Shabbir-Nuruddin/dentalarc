"use client";

import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

export default function ClinicLocations() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="layout-container">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
            Visit Our Clinics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Two Prime Locations in Gurugram
          </h2>
          <p className="text-slate-600 text-base">
            Conveniently accessible with ample parking at Spaze Forum (Sector 70) and M3M 65th Avenue (Sector 65).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Branch 1: Sector 70 Spaze Forum */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-primary-600 text-white text-xs font-bold uppercase tracking-wide">
                  Main Clinic
                </span>
                <span className="text-xs font-semibold text-slate-500">Sector 70, Gurugram</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Spaze Forum Branch
              </h3>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-900">TULIP CHOWK, SPAZE FORUM, F-115</strong>,<br />
                    Below Cult Fitness Gym, Sector 70 / Sector 69,<br />
                    Gurugram, Haryana 122018
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary-600 shrink-0" />
                  <a href="tel:+917979927696" className="font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                    +91 79799 27696
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-600 shrink-0" />
                  <span>Monday - Sunday: 10:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="Dental Arc Sector 70 Google Map"
                src="https://maps.google.com/maps?q=DENTAL%20ARC%20Spaze%20Forum%20Sector%2070%20Gurgaon&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.google.com/maps/dir//DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Branch 2: Sector 65 M3M 65th Avenue */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-teal-600 text-white text-xs font-bold uppercase tracking-wide">
                  Branch Clinic
                </span>
                <span className="text-xs font-semibold text-slate-500">Sector 65, Gurugram</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                M3M 65th Avenue Branch
              </h3>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-900">M3M 65th Avenue</strong>,<br />
                    Golf Course Extension Road, Sector 65,<br />
                    Gurugram, Haryana 122018
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                  <a href="tel:+917979927696" className="font-semibold text-slate-900 hover:text-teal-600 transition-colors">
                    +91 79799 27696
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>Monday - Sunday: 10:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="Dental Arc Sector 65 Google Map"
                src="https://maps.google.com/maps?q=M3M%2065th%20Avenue%20Sector%2065%20Gurgaon&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.google.com/maps/dir//M3M+65th+Avenue+Sector+65+Gurgaon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="tel:+917979927696"
                className="inline-flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <span>Call Branch</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
