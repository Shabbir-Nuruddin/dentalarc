"use client";

import React from "react";
import ClinicImage from "@/components/ui/ClinicImage";

export default function DentalSaltLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <ClinicImage
        src="/dental_salt_logo.png"
        alt="The Dental Salt Logo"
        className="h-9 w-auto object-contain"
      />
    </div>
  );
}
