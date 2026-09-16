import Hero from "@/components/home/Hero";
import ClinicShowcase from "@/components/home/ClinicShowcase";
import ServicesEditorial from "@/components/home/ServicesEditorial";
import DoctorSpotlight from "@/components/home/DoctorSpotlight";
import SmileGallery from "@/components/home/SmileGallery";
import Insurances from "@/components/home/Insurances";
import ReviewsMarquee from "@/components/home/ReviewsMarquee";
import ClinicLocations from "@/components/home/ClinicLocations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Impactful Video & Operatory Hero */}
      <Hero />

      {/* 2. Authentic Clinic & Operatory Showcase */}
      <ClinicShowcase />

      {/* 3. Comprehensive Specialized Dental Treatments */}
      <ServicesEditorial />

      {/* 4. Dr. Archana Raj Jha Spotlight & Credentials */}
      <DoctorSpotlight />

      {/* 5. Case Spotlight & Outcomes */}
      <SmileGallery />

      {/* 6. Insurance & 0% EMI Financing */}
      <Insurances />

      {/* 7. Patient Reviews */}
      <ReviewsMarquee />

      {/* 8. Dual Clinic Locations with Interactive Google Maps */}
      <ClinicLocations />
    </div>
  );
}
