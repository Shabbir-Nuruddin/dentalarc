import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionbar from "@/components/layout/MobileActionbar";
import WhatsAppBooking from "@/components/ui/WhatsAppBooking";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DENTAL ARC | Dental Clinic In Sector 70 Gurgaon | Dr. Archana Raj Jha",
  description: "Dentist | RCT | Implants Treatment in Sector 69 Gurugram. Experience world-class dental care in a modern, comfortable environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-surface text-text-main flex flex-col min-h-screen relative`}>
        {/* Subtle Paper & Ink Grain Noise Overlay (Physical tactile paper depth) */}
        <div className="grain-print fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-overlay" />
        
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppBooking />
        <MobileActionbar />
      </body>
    </html>
  );
}
