"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DentalArcLogo from "@/components/ui/DentalArcLogo";
import { Phone, Menu, X, ArrowUpRight, Clock } from "lucide-react";
import { playTick, playSnap } from "@/lib/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    playTick(2400, 0.04);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 mx-auto max-w-6xl z-50 px-3 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto rounded-full border border-slate-900/15 transition-all duration-300 flex items-center justify-between px-4 sm:px-6 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-xl py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            : "bg-[#FAF8F5]/80 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Brand Logo & Location Indicator */}
        <Link
          href="/"
          onClick={handleNavClick}
          className="flex items-center gap-2.5 text-slate-900 hover:opacity-90 transition-opacity group shrink-0"
        >
          <DentalArcLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-slate-900 leading-none">
              Dental <span className="font-light text-primary-700">Arc</span>
            </span>
            <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-slate-500 mt-0.5">
              Sector 70 & 65 • Gurugram
            </span>
          </div>
        </Link>

        {/* Center Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Link
            href="/services"
            onClick={handleNavClick}
            className="hover:text-primary-700 transition-colors py-1 relative group"
          >
            <span>Treatments</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-200" />
          </Link>
          <a
            href="#estimator"
            onClick={handleNavClick}
            className="hover:text-primary-700 transition-colors py-1 relative group"
          >
            <span>Care Estimator</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-200" />
          </a>
          <Link
            href="/about"
            onClick={handleNavClick}
            className="hover:text-primary-700 transition-colors py-1 relative group"
          >
            <span>Dr. Archana</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-200" />
          </Link>
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="hover:text-primary-700 transition-colors py-1 relative group"
          >
            <span>Locations</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-200" />
          </Link>
        </nav>

        {/* Right Action Stack: Phone & Tactical Booking Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Working Hours Micro-Pill */}
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
            <Clock className="w-3 h-3 text-emerald-600" />
            <span>Open till 9 PM</span>
          </div>

          <a
            href="tel:+917979927696"
            onClick={() => playTick(2200, 0.04)}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 hover:text-primary-700 px-3 py-1.5 rounded-full border border-slate-300 hover:border-slate-800 transition-all bg-white"
          >
            <Phone className="w-3.5 h-3.5 text-primary-700" />
            <span>+91 79799 27696</span>
          </a>

          <Link
            href="/contact"
            onClick={() => playSnap(500, 0.06)}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-offset-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => {
            playSnap(isOpen ? 360 : 480, 0.05);
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-slate-800 hover:text-primary-700 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="pointer-events-auto mt-2 rounded-2xl border-2 border-slate-900 bg-[#FAF8F5] p-5 shadow-offset animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3 font-bold text-sm text-slate-900">
            <Link
              href="/services"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Treatments & Pricing</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
            <a
              href="#estimator"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Care & Sitting Estimator</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <Link
              href="/about"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Dr. Archana Raj Jha</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Sector 70 & Sector 65 Clinics</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="pt-2 border-t border-dashed border-slate-300 flex flex-col gap-2">
              <a
                href="tel:+917979927696"
                className="w-full text-center py-2.5 rounded-lg border-2 border-slate-900 font-bold text-xs"
              >
                Call Clinic: +91 79799 27696
              </a>
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="w-full text-center py-3 rounded-lg bg-slate-900 text-white font-bold text-xs shadow-offset-sm"
              >
                Book In-Person Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
