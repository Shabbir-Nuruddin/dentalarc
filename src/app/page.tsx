import Hero from "@/components/home/Hero";
import ServicesEditorial from "@/components/home/ServicesEditorial";
import DoctorSpotlight from "@/components/home/DoctorSpotlight";
import SmileGallery from "@/components/home/SmileGallery";
import ReviewsMarquee from "@/components/home/ReviewsMarquee";
import PatientFAQ from "@/components/home/PatientFAQ";
import ClinicLocations from "@/components/home/ClinicLocations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero: Personalized, Painless & Evidence-Based Dentistry */}
      <Hero />

      {/* 2. Doctor Spotlight: Dr. Madhushree Agarwal & 15+ Yrs Pedigree */}
      <DoctorSpotlight />

      {/* 3. Comprehensive Conservative Dental Services */}
      <ServicesEditorial />

      {/* 4. Verified Before/After Restoration Outcome Slider */}
      <SmileGallery />

      {/* 5. 4.9 Star Patient Stories (250+ Reviews) */}
      <ReviewsMarquee />

      {/* 6. The Essential Questions FAQ Accordion */}
      <PatientFAQ />

      {/* 7. Dual Clinic Locations (Sector 70 & Golf Course Ext) */}
      <ClinicLocations />
    </div>
  );
}
