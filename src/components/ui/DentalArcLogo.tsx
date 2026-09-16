import React from "react";

export default function DentalArcLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className || ""}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-primary-600"
      >
        {/* Sleek Outer Dental Arc / Arch */}
        <path
          d="M8 36C10.5 18 16 8 24 8C32 8 37.5 18 40 36"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Subtle Inner Concentric Arch */}
        <path
          d="M14 36C16 23 19.5 15 24 15C28.5 15 32 23 34 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />

        {/* Minimal Stylized Tooth Apex in Center */}
        <path
          d="M20 25C20 21.5 21.8 19.5 24 19.5C26.2 19.5 28 21.5 28 25C28 28.5 26.5 33 25.5 35.5C24.8 37 23.2 37 22.5 35.5C21.5 33 20 28.5 20 25Z"
          fill="currentColor"
        />

        {/* Diamond Sparkle of clinical precision */}
        <path
          d="M24 3L25.2 5.8L28 7L25.2 8.2L24 11L22.8 8.2L20 7L22.8 5.8L24 3Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
