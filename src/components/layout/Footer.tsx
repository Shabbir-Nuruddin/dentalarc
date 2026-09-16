import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-auto">
      <div className="layout-container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold tracking-tight">Dental Arc</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Redefining dental care with a modern, comfortable, and patient-first approach. 
            Experience the difference of impeccable dentistry.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-primary-400 transition-colors">Meet The Team</Link></li>
            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Book Online</Link></li>
            <li><Link href="#" className="hover:text-primary-400 transition-colors">Patient Portal</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Clinics & Location</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Sector 70 (Main Clinic):</span>
                <span>F-115, Spaze Forum (Corporate Park), Tulip Chowk, Sector 70, Gurugram (below Cult Fitness)</span>
                <div className="mt-1 flex gap-3 text-xs">
                  <a 
                    href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 underline font-medium"
                  >
                    Google Maps
                  </a>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=28.395294,77.030255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 underline font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 pt-2 border-t border-slate-800">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Sector 65 Branch:</span>
                <span>R7-101 & 101A, M3M 65th Avenue, Emerald Hills Rd, Sector 65, Gurugram</span>
              </div>
            </li>
            <li className="flex items-center gap-3 pt-1">
              <Phone className="w-5 h-5 text-primary-500 shrink-0" />
              <a href="tel:+917979927696" className="text-white hover:text-primary-400 transition-colors font-semibold">
                +91 79799 27696
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-500 shrink-0" />
              <span>contact@dentalarc.in</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Clinic Timings</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Mon - Sat</span>
              <span className="text-slate-300 font-medium">9:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Sunday</span>
              <span className="text-slate-300 font-medium">9:00 AM - 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Emergency Care</span>
              <span className="text-primary-400 font-medium">On Call (24/7)</span>
            </li>
          </ul>

          <div className="pt-2">
            <a 
              href="https://www.google.com/maps/place/DENTAL+ARC+%7C+Dental+Clinic+In+Sector+70+Gurgaon%7CDentist+%7C+RCT+%7C+Implants+Treatment+in+Sector+69+Gurugram%7C+Dr.Archana+Raj+Jha/@28.395294,77.030255,17z/data=!4m8!3m7!1s0x390d2308072eed75:0xdf3be68ea474d7bc!8m2!3d28.395294!4d77.030255!9m1!1b1!16s%2Fg%2F11t9qzcjv5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg transition-colors border border-slate-700"
            >
              <span>★ 5.0 Rating on Google Reviews</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="layout-container mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Dental Arc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
