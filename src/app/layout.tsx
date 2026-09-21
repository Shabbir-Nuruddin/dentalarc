import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionbar from "@/components/layout/MobileActionbar";
import WhatsAppBooking from "@/components/ui/WhatsAppBooking";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Dental Salt | Dr. Madhushree Agarwal | Dental Clinic in Sector 70 & Golf Course Ext Gurugram",
  description: "Personalized, painless and evidence-based dentistry in Gurugram by Dr. Madhushree Agarwal (15+ yrs clinical excellence, Dr. R. Ahmed alumna). Call/WhatsApp +91 99993 85782.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-surface text-text-main flex flex-col min-h-screen relative`}>
        {/* Subtle Paper & Ink Grain Noise Overlay */}
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
