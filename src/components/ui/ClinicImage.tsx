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
      const clean = src.startsWith("/") ? src : `/${src}`;
      if (currentSrc.includes("/dentalsalt/")) {
        setCurrentSrc(`/dentalarc${clean}`);
      } else if (currentSrc.includes("/dentalarc/")) {
        setCurrentSrc(clean);
      } else {
        setCurrentSrc(`/dentalsalt${clean}`);
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
