import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (typeof window !== "undefined") {
    const segments = window.location.pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "dentalsalt" || segments[0] === "dentalarc")) {
      return `/${segments[0]}${clean}`;
    }
  }
  const repo = process.env.NEXT_PUBLIC_REPO_NAME || "dentalsalt";
  return process.env.NODE_ENV === "production" ? `/${repo}${clean}` : clean;
}

