"use client";

import React, { useState } from "react";
import { assetPath } from "@/lib/utils";

interface ClinicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export default function ClinicImage({ src, alt, className, ...props }: ClinicImageProps) {
  const [currentSrc, setCurrentSrc] = useState(() => assetPath(src));
  const [failedOnce, setFailedOnce] = useState(false);

  const handleError = () => {
    if (!failedOnce) {
      setFailedOnce(true);
      // If the current src contains /dentalarc/, try root /
      if (currentSrc.includes("/dentalarc/")) {
        const fallback = currentSrc.replace("/dentalarc/", "/");
        setCurrentSrc(fallback);
      } else {
        // If it doesn't contain /dentalarc/, try with /dentalarc/
        const clean = src.startsWith("/") ? src : `/${src}`;
        setCurrentSrc(`/dentalarc${clean}`);
      }
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="eager"
      {...props}
    />
  );
}
