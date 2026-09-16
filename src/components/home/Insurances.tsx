"use client";

import { ShieldCheck, Phone, CheckCircle2 } from "lucide-react";

export default function Insurances() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="layout-container">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Insurance & 0% EMI Financing
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              We provide itemized billing, diagnostic sheets, and claim forms for seamless reimbursement across all health insurance policies.
            </p>
          </div>

          <a
            href="tel:+917979927696"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-700 hover:text-primary-800 shrink-0"
          >
            <Phone className="w-4 h-4 text-primary-600" />
            <span>Verify Policy Coverage: +91 79799 27696</span>
          </a>
        </div>

        {/* Clean Typographic Partner Strip - NO 6 Card Boxes */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 text-sm block">Bajaj Finserv</span>
            <span className="text-[11px] text-primary-700 font-semibold uppercase">0% Interest EMI</span>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-slate-900 text-sm block">Star Health</span>
            <span className="text-[11px] text-slate-500 font-medium">Reimbursement</span>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-slate-900 text-sm block">HDFC ERGO</span>
            <span className="text-[11px] text-slate-500 font-medium">Corporate Claims</span>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-slate-900 text-sm block">ICICI Lombard</span>
            <span className="text-[11px] text-slate-500 font-medium">Dental OPD Support</span>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-slate-900 text-sm block">Care Health</span>
            <span className="text-[11px] text-slate-500 font-medium">Claim Paperwork</span>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-slate-900 text-sm block">Niva Bupa</span>
            <span className="text-[11px] text-slate-500 font-medium">Direct Invoicing</span>
          </div>
        </div>

        {/* Minimal Footer Note */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>0% Interest EMI available on Root Canals, Implants, and Aligners.</span>
          </span>
          <span className="hidden sm:inline-block">Cashless & Direct Reimbursement</span>
        </div>

      </div>
    </section>
  );
}
