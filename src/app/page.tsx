import Hero from "@/components/home/Hero";
import ReviewsMarquee from "@/components/home/ReviewsMarquee";
import ServicesEditorial from "@/components/home/ServicesEditorial";
import Technology from "@/components/home/Technology";
import Insurances from "@/components/home/Insurances";
import SmileGallery from "@/components/home/SmileGallery";
import PremiumButton from "@/components/ui/PremiumButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Insurances />
      <ServicesEditorial />
      <SmileGallery />
      <Technology />
      <ReviewsMarquee />
      
      {/* Final CTA Section */}
      <section className="py-32 bg-primary-900 text-white relative overflow-hidden">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-700/50 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3" />
        
        <div className="layout-container relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
            Ready for a better dental visit?
          </h2>
          <p className="text-primary-100 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Book your appointment online in seconds. We are currently accepting new patients for the upcoming month.
          </p>
          <PremiumButton href="/contact" variant="outline" className="bg-white text-primary-900 hover:bg-primary-50 border-none">
            Schedule Your Visit
          </PremiumButton>
        </div>
      </section>
    </>
  );
}
