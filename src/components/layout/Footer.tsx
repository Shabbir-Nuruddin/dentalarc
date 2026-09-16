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
          <h4 className="text-white font-medium">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
              <span>TULIP CHOWK, SPAZE FORUM, F-115, below Cult Fitness Gym<br/>Sector 70, Sector 69, Gurugram, Haryana 122018</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-500 shrink-0" />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-500 shrink-0" />
              <span>contact@dentalarc.in</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-4">
          <h4 className="text-white font-medium">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Mon - Thu</span>
              <span className="text-slate-400">8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Friday</span>
              <span className="text-slate-400">8:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Sat - Sun</span>
              <span className="text-primary-400 font-medium">Emergency Only</span>
            </li>
          </ul>
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
