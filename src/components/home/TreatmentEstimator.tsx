"use client";

import React, { useState } from "react";
import { playTick, playSnap } from "@/lib/sound";
import { Check, Shield, Clock, Award, Sparkles, ArrowRight, Calculator } from "lucide-react";

interface TreatmentOption {
  id: string;
  name: string;
  category: string;
  singleSittingAvailable: boolean;
  standard: {
    sittings: string;
    chairTime: string;
    materials: string;
    warranty: string;
    startingFee: string;
    emiStarts: string;
    highlights: string[];
  };
  premium: {
    sittings: string;
    chairTime: string;
    materials: string;
    warranty: string;
    startingFee: string;
    emiStarts: string;
    highlights: string[];
  };
}

const treatmentCatalog: TreatmentOption[] = [
  {
    id: "rct",
    name: "Rotary Root Canal (RCT)",
    category: "Tooth Preservation",
    singleSittingAvailable: true,
    standard: {
      sittings: "2 Sittings",
      chairTime: "35 mins per visit",
      materials: "Rotary NiTi Files • Resin Sealer",
      warranty: "Clinical Preservation",
      startingFee: "₹3,500",
      emiStarts: "0% EMI on requests",
      highlights: [
        "Digital apex locator depth control",
        "Painless computerized local anesthesia",
        "Preserves natural root structure",
      ],
    },
    premium: {
      sittings: "1 Sitting (Single-Visit)",
      chairTime: "45 mins single session",
      materials: "Dentsply ProTaper Gold • Bioceramic Sealer • Diode Laser",
      warranty: "Extended Clinical Seal",
      startingFee: "₹5,200",
      emiStarts: "0% EMI available",
      highlights: [
        "980nm Diode laser canal sterilization",
        "Bioceramic hermetic root apex seal",
        "Zero post-operative inflammation guarantee",
      ],
    },
  },
  {
    id: "crown",
    name: "CAD/CAM Zirconia Crown",
    category: "Restorative Dentistry",
    singleSittingAvailable: true,
    standard: {
      sittings: "2 Sittings (Scan + Delivery)",
      chairTime: "25 mins scan, 20 mins fit",
      materials: "High-Translucency Multilayer Zirconia",
      warranty: "10 Years Official Warranty",
      startingFee: "₹7,500",
      emiStarts: "₹625 / mo (12 mos)",
      highlights: [
        "Zero black metal lines at gum margin",
        "Computer-milled 50-micron fit accuracy",
        "Manufacturer warranty certificate provided",
      ],
    },
    premium: {
      sittings: "Fast-Track 24hr Placement",
      chairTime: "Digital 3D Scan + Next-Day Fixation",
      materials: "Monolithic 3D Diamond Zirconia (BruxZir)",
      warranty: "15 Years Extended Warranty",
      startingFee: "₹11,500",
      emiStarts: "₹958 / mo (12 mos)",
      highlights: [
        "1200+ MPa fracture resistance",
        "Natural multi-gradient enamel translucency",
        "15-Year unconditional replacement warranty",
      ],
    },
  },
  {
    id: "laser",
    name: "Diode Laser Gum Aesthetics",
    category: "Cosmetic Periodontics",
    singleSittingAvailable: true,
    standard: {
      sittings: "1 Sitting",
      chairTime: "30 mins",
      materials: "Soft-Tissue Laser Ablation (Standard Protocol)",
      warranty: "Natural Tissue Renewal",
      startingFee: "₹4,500",
      emiStarts: "Direct payment",
      highlights: [
        "Removes dark melanin pigmentation",
        "Virtually bloodless execution",
        "Fast 7-day surface healing",
      ],
    },
    premium: {
      sittings: "1 Sitting + 14-Day Healing Follow-up",
      chairTime: "40 mins full arch sculpting",
      materials: "Dual-Wavelength Diode Laser + Bio-Stimulation",
      warranty: "Comprehensive Aesthetic Tone Guarantee",
      startingFee: "₹7,500",
      emiStarts: "0% EMI available",
      highlights: [
        "Photobiomodulation for immediate cell regeneration",
        "Simultaneous gum contouring & symmetry balance",
        "Zero scalpels, zero stitches, zero post-op pain",
      ],
    },
  },
  {
    id: "implant",
    name: "Titanium Dental Implant",
    category: "Permanent Tooth Replacement",
    singleSittingAvailable: false,
    standard: {
      sittings: "2 Clinical Stages",
      chairTime: "40 mins implant, follow-up crown",
      materials: "Medical Grade IV Pure Titanium",
      warranty: "15 Years Structural Warranty",
      startingFee: "₹24,000",
      emiStarts: "₹2,000 / mo (12 mos)",
      highlights: [
        "Computer-guided surgical insertion",
        "Permanent bone integration (Osseointegration)",
        "Looks, chews, and cleans like a natural tooth",
      ],
    },
    premium: {
      sittings: "2 Clinical Stages + Zirconia Abutment",
      chairTime: "45 mins flapless precision placement",
      materials: "Active Hydrophilic Titanium + CAD/CAM Zirconia Crown",
      warranty: "Lifetime Manufacturer Warranty",
      startingFee: "₹36,000",
      emiStarts: "₹3,000 / mo (12 mos)",
      highlights: [
        "Accelerated 4-week osseointegration technology",
        "Custom CAD/CAM zirconia aesthetic abutment",
        "Lifetime global replacement warranty card",
      ],
    },
  },
  {
    id: "aligners",
    name: "Clear Aesthetic Aligners",
    category: "Orthodontic Realignment",
    singleSittingAvailable: false,
    standard: {
      sittings: "Digital Impression + Quarterly Checkups",
      chairTime: "30 mins setup visit",
      materials: "Medical Grade Multi-Layer Thermoplastic",
      warranty: "Planned Realignment Trajectory",
      startingFee: "₹45,000",
      emiStarts: "₹3,750 / mo (12 mos)",
      highlights: [
        "Virtually invisible from conversational distance",
        "Removable for meals and oral hygiene",
        "Custom 3D simulation video provided before starting",
      ],
    },
    premium: {
      sittings: "3D Digital Intraoral Scan + Accelerated Monitoring",
      chairTime: "Comprehensive Smile Architecture Session",
      materials: "SmartTrack High-Elasticity Polymer Aligners",
      warranty: "Full Refinement Guarantee",
      startingFee: "₹75,000",
      emiStarts: "₹6,250 / mo (12 mos)",
      highlights: [
        "Accelerated tooth movement with gentle continuous force",
        "Includes post-treatment Vivera retainers",
        "Free refinements until target smile is achieved",
      ],
    },
  },
];

export default function TreatmentEstimator() {
  const [selectedId, setSelectedId] = useState("rct");
  const [tier, setTier] = useState<"standard" | "premium">("premium");
  const [unitCount, setUnitCount] = useState(1);

  const currentTreatment =
    treatmentCatalog.find((t) => t.id === selectedId) || treatmentCatalog[0];
  const activePlan = tier === "premium" ? currentTreatment.premium : currentTreatment.standard;

  const handleSelectTreatment = (id: string) => {
    playTick(2400, 0.04);
    setSelectedId(id);
  };

  const handleToggleTier = (newTier: "standard" | "premium") => {
    playSnap(500, 0.06);
    setTier(newTier);
  };

  const handleUnitCount = (delta: number) => {
    playTick(2600, 0.04);
    setUnitCount((prev) => Math.max(1, Math.min(6, prev + delta)));
  };

  // Construct direct WhatsApp inquiry string
  const waMessage = `Hi Dr. Archana, I used your Treatment Estimator for ${currentTreatment.name} (${tier.toUpperCase()} Tier, ${unitCount} unit/tooth). I would like to schedule a consultation at Dental Arc Gurugram.`;
  const waUrl = `https://wa.me/917979927696?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="estimator" className="py-24 bg-[#FAF8F5] border-b-2 border-slate-900 text-slate-900 scroll-mt-20">
      <div className="layout-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary-700">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Care Planning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-1.5">
            Transparent Treatment & Sitting Estimator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Select your clinical concern below to calculate estimated clinic sittings, materials, warranty, and 0% EMI financing before your visit.
          </p>
        </div>

        {/* Treatment Selector Chips (Horizontal Scrolling on Mobile) */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8">
          {treatmentCatalog.map((t) => (
            <button
              key={t.id}
              onClick={() => handleSelectTreatment(t.id)}
              className={`shrink-0 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all border-2 ${
                selectedId === t.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-offset-sm scale-102"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-800"
              }`}
            >
              <span>{t.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Toggles & Clinical Protocol Details */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-900 rounded-lg p-6 sm:p-8 shadow-offset flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Category & Single Sitting Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-slate-300 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Clinical Classification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {currentTreatment.name}
                  </h3>
                </div>

                {currentTreatment.singleSittingAvailable && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Single-Sitting Eligible</span>
                  </span>
                )}
              </div>

              {/* Tier Switcher: Standard vs Premium Monolithic */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Clinical Grade & Tier:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleToggleTier("standard")}
                    className={`p-3.5 rounded-lg border-2 text-left transition-all ${
                      tier === "standard"
                        ? "border-slate-900 bg-slate-100 shadow-offset-sm"
                        : "border-slate-200 hover:border-slate-400 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold text-slate-900">
                        Clinical Standard
                      </span>
                      {tier === "standard" && <Check className="w-4 h-4 text-slate-900" />}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      High precision clinical protocol
                    </p>
                  </button>

                  <button
                    onClick={() => handleToggleTier("premium")}
                    className={`p-3.5 rounded-lg border-2 text-left transition-all ${
                      tier === "premium"
                        ? "border-teal-700 bg-teal-50/70 shadow-offset-sm"
                        : "border-slate-200 hover:border-slate-400 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold text-teal-900">
                        3D Monolithic / Laser
                      </span>
                      {tier === "premium" && <Check className="w-4 h-4 text-teal-700" />}
                    </div>
                    <p className="text-[11px] text-teal-700 mt-1 line-clamp-1">
                      Advanced laser / CAD-CAM grade
                    </p>
                  </button>
                </div>
              </div>

              {/* Quantity / Affected Teeth Counter */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Number of Affected Teeth / Units:
                  </span>
                  <span className="text-xs font-mono text-slate-400">Max 6 units</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleUnitCount(-1)}
                    disabled={unitCount <= 1}
                    className="w-10 h-10 rounded border-2 border-slate-900 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-white flex items-center justify-center font-mono font-bold text-base transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-mono font-bold text-lg text-slate-900">
                    {unitCount}
                  </span>
                  <button
                    onClick={() => handleUnitCount(1)}
                    disabled={unitCount >= 6}
                    className="w-10 h-10 rounded border-2 border-slate-900 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-white flex items-center justify-center font-mono font-bold text-base transition-colors"
                  >
                    +
                  </button>
                  <span className="text-xs text-slate-500 ml-2">
                    {unitCount === 1 ? "Single tooth treatment" : `Multi-unit treatment (${unitCount} teeth)`}
                  </span>
                </div>
              </div>

              {/* Clinical Protocol Highlights */}
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Treatment Specifications:
                </p>
                {activePlan.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Micro Notice */}
            <div className="mt-6 pt-4 border-t border-dashed border-slate-300 text-[11px] text-slate-500">
              *All treatments performed under sterile operatory conditions in Sector 70 & Sector 65 Gurugram. Exact fee confirmed after digital X-ray inspection.
            </div>

          </div>

          {/* Right Column: Calculation Readout & WhatsApp Handoff */}
          <div className="lg:col-span-5 bg-slate-900 text-white border-2 border-slate-900 rounded-lg p-6 sm:p-8 shadow-offset flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Card Title */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                  Estimated Care Summary
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {tier.toUpperCase()} TIER
                </span>
              </div>

              {/* Sittings & Chair Time Readout */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Estimated Clinic Sittings
                    </span>
                    <strong className="text-sm font-bold text-white">
                      {activePlan.sittings}
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Manufacturer Warranty
                    </span>
                    <strong className="text-sm font-bold text-white">
                      {activePlan.warranty}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Materials & Apparatus Used */}
              <div className="text-xs space-y-1.5 border-t border-slate-800 pt-4">
                <span className="text-slate-400 font-mono text-[11px] block">Materials & Precision Tech:</span>
                <p className="text-slate-200 font-medium">
                  {activePlan.materials}
                </p>
              </div>

              {/* Fee & EMI Breakdown */}
              <div className="border-t border-slate-800 pt-4 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  Indicative Starting Fee (Per Unit):
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {activePlan.startingFee}
                  </span>
                  {unitCount > 1 && (
                    <span className="text-xs font-mono text-teal-400">
                      × {unitCount} units
                    </span>
                  )}
                </div>
                <p className="text-xs text-emerald-400 font-medium pt-1">
                  Flexible Financing: {activePlan.emiStarts}
                </p>
              </div>

            </div>

            {/* 1-Click WhatsApp Booking Handoff */}
            <div className="mt-8 pt-4 border-t border-slate-800 space-y-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(2800, 0.05)}
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md group"
              >
                <span>Inquire With This Setup on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[11px] text-center text-slate-400">
                Direct route to Dr. Archana Raj Jha • Instant replies
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
