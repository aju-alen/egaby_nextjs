import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { HeroSection } from "@/components/home-components/HeroSection";
import { BrandsSection } from "@/components/home-components/BrandsSection";
import { ServicesSection } from "@/components/home-components/ServicesSection";
import { WhyChooseUsSection } from "@/components/home-components/WhyChooseUsSection";
import { AboutSection } from "@/components/home-components/AboutSection";
import { ContactSection } from "@/components/home-components/ContactSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ContactSection />
      <WhatsAppIcon />
    </div>
  );
}