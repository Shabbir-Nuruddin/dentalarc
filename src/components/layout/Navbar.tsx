"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DentalSaltLogo from "@/components/ui/DentalSaltLogo";
import { Phone, Menu, X, ArrowUpRight, Clock, Star } from "lucide-react";
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
    <header className="fixed top-3 sm:top-4 inset-x-0 mx-auto w-full max-w-6xl z-50 px-3 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto rounded-full border border-slate-900/15 transition-all duration-300 flex items-center justify-between pl-3.5 pr-2 sm:pl-5 sm:pr-2.5 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-xl py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            : "bg-[#FAF9F6]/85 backdrop-blur-md py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Brand Logo & Location Indicator */}
        <Link
          href="/"
          onClick={handleNavClick}
          className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity group shrink-0 min-w-0"
        >
          <DentalSaltLogo className="h-7 sm:h-8 w-auto shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="font-black text-base sm:text-lg tracking-tight text-slate-900 leading-none truncate">
              The Dental <span className="font-light text-teal-700">Salt</span>
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono uppercase font-bold tracking-wider text-slate-500 mt-0.5 truncate">
              <span className="hidden lg:inline">Sector 70 & Golf Course Ext. • </span>Gurugram
            </span>
          </div>
        </Link>

        {/* Center Editorial Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-700 shrink-0">
          <Link
            href="/services"
            onClick={handleNavClick}
            className="hover:text-teal-700 transition-colors py-1 relative group"
          >
            <span>Treatments</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 group-hover:w-full transition-all duration-200" />
          </Link>
          <Link
            href="/about"
            onClick={handleNavClick}
            className="hover:text-teal-700 transition-colors py-1 relative group"
          >
            <span>Dr. Madhushree</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 group-hover:w-full transition-all duration-200" />
          </Link>
          <a
            href="#reviews"
            onClick={handleNavClick}
            className="hover:text-teal-700 transition-colors py-1 relative group flex items-center gap-1"
          >
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>4.9 Reviews</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 group-hover:w-full transition-all duration-200" />
          </a>
          <Link
            href="/contact"
            onClick={handleNavClick}
            className="hover:text-teal-700 transition-colors py-1 relative group"
          >
            <span>Locations</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-700 group-hover:w-full transition-all duration-200" />
          </Link>
        </nav>

        {/* Right Action Stack: Phone & Booking Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Working Hours Micro-Pill (Only on 2XL wide screens) */}
          <div className="hidden 2xl:flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
            <Clock className="w-3 h-3 text-emerald-600" />
            <span>Open 7 Days till 8 PM</span>
          </div>

          {/* Full Telephone Pill (Only on XL+ screens) */}
          <a
            href="tel:+919999385782"
            onClick={() => playTick(2200, 0.04)}
            className="hidden xl:flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 hover:text-teal-700 px-3 py-1.5 rounded-full border border-slate-300 hover:border-slate-800 transition-all bg-white"
          >
            <Phone className="w-3.5 h-3.5 text-teal-700" />
            <span>+91 99993 85782</span>
          </a>

          {/* Compact Telephone Icon Button (On MD to LG screens) */}
          <a
            href="tel:+919999385782"
            onClick={() => playTick(2200, 0.04)}
            aria-label="Call clinic at +91 99993 85782"
            className="hidden sm:flex xl:hidden p-2 rounded-full border border-slate-300 hover:border-slate-800 bg-white text-teal-700 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Main Book Consultation Button - Always nested cleanly inside pill */}
          <Link
            href="/contact"
            onClick={() => playSnap(500, 0.06)}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 sm:px-4 py-2 rounded-full transition-all shrink-0 hover:opacity-95"
          >
            Book Consultation
          </Link>

          {/* Mobile/Tablet Hamburger Toggle */}
          <button
            onClick={() => {
              playSnap(isOpen ? 360 : 480, 0.05);
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-1.5 text-slate-800 hover:text-teal-700 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="pointer-events-auto mt-2 rounded-2xl border-2 border-slate-900 bg-[#FAF9F6] p-5 shadow-offset animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-3 font-bold text-sm text-slate-900">
            <Link
              href="/services"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Treatments & Care</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
            <Link
              href="/about"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Dr. Madhushree Agarwal</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
            <a
              href="#reviews"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>4.9★ Patient Stories (250+ Reviews)</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors flex justify-between items-center"
            >
              <span>Sector 70 & Golf Course Ext. Clinics</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="pt-2 border-t border-dashed border-slate-300 flex flex-col gap-2">
              <a
                href="tel:+919999385782"
                className="w-full text-center py-2.5 rounded-lg border-2 border-slate-900 font-bold text-xs"
              >
                Call Clinic: +91 99993 85782
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
