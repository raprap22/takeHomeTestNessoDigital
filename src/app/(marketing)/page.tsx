import WelcomingSection from './sections/WelcomingSection';
import { IntroSection } from './sections/IntroSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProductsSection } from './sections/ProductsSection';
import { ProcessSection } from './sections/ProcessSection';
import { HeroSection } from './sections/HeroSection';
import { BannerSection } from './sections/BannerSection';

export default function MarketingPage() {
  return (
    <div className="bg-white">
      <WelcomingSection />
      <IntroSection />
      <ServicesSection />
      <ProductsSection />
      <ProcessSection />
      <HeroSection />
      <BannerSection />
    </div>
  );
}
