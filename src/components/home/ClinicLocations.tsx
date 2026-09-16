"use client";

import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

export default function ClinicLocations() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="pb-10 mb-12 border-b border-slate-200">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Locations & Clinic Hours
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Two accessible locations in Gurugram with dedicated parking.
          </p>
        </div>

        {/* Unboxed Layout: Info on Left, Live Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Two Clinic Branches with Hairlines */}
          <div className="lg:col-span-6 divide-y divide-slate-200">
            
            {/* Sector 70 - Main Clinic */}
            <div className="pb-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  Sector 70 (Main Practice)
                </span>
                <span className="text-xs text-slate-500 font-medium">Below Cult Fitness Gym</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Spaze Forum Branch
              </h3>

              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                  <span>
                    <strong>TULIP CHOWK, SPAZE FORUM, F-115</strong>,<br />
                    Sector 70 / Sector 69, Gurugram, Haryana 122018
                  </span>
                </p>

                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary-600 shrink-0" />
                  <a href="tel:+917979927696" className="font-semibold text-slate-900 hover:text-primary-700">
                    +91 79799 27696
                  </a>
                </p>

                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-primary-600 shrink-0" />
                  <span>Monday - Sunday: 10:00 AM - 9:00 PM</span>
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.google.com/maps/dir//DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs py-2.5 px-5 rounded-full transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-primary-700"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Sector 65 - Branch */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Sector 65 Branch
                </span>
                <span className="text-xs text-slate-500 font-medium">Golf Course Extension Road</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                M3M 65th Avenue Branch
              </h3>

              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <span>
                    <strong>M3M 65th Avenue</strong>,<br />
                    Golf Course Extension Road, Sector 65, Gurugram, Haryana 122018
                  </span>
                </p>

                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                  <a href="tel:+917979927696" className="font-semibold text-slate-900 hover:text-teal-700">
                    +91 79799 27696
                  </a>
                </p>

                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Monday - Sunday: 10:00 AM - 9:00 PM</span>
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.google.com/maps/dir//M3M+65th+Avenue+Sector+65+Gurgaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs py-2.5 px-5 rounded-full transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-6 space-y-3">
            <div className="w-full h-[480px] rounded-lg overflow-hidden border border-slate-300 shadow-sm bg-slate-200">
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
            <p className="text-xs text-slate-500 text-center">
              Spaze Forum (Sector 70) • Free Visitor Parking Available
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
