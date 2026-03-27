import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
