"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Smile, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-slate-100">
      <div className="layout-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors">
          <Smile className="w-8 h-8" />
          <span className="font-semibold text-xl tracking-tight text-slate-900">Dental <span className="font-light text-slate-500">Arc</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/services" className="hover:text-primary-600 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-primary-600 transition-colors">Our Team</Link>
          <Link href="/contact" className="hover:text-primary-600 transition-colors">Location</Link>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="bg-primary-600 text-white px-5 py-2.5 rounded-full shadow-sm hover:bg-primary-700 hover:shadow-md transition-all font-semibold tracking-wide"
            >
              Book Appointment
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 absolute w-full"
        >
          <nav className="flex flex-col p-4 gap-4 text-center font-medium text-slate-600 shadow-lg">
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>Our Team</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Location</Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-primary-600 text-white px-5 py-3 rounded-xl shadow-sm mt-2"
            >
              Book Appointment
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
