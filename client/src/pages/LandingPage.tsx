import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import AIShowcase from "../components/landing/AIShowcase";
import DashboardPreview from "../components/landing/DashboardPreview";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <MainLayout>

      <HeroSection />

      <FeaturesSection />
      <AIShowcase />
      <DashboardPreview />
      <CTASection />

      <Footer />
      
      

    </MainLayout>
  );
};

export default LandingPage;