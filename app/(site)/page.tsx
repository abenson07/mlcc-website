import { CenteredTextImageCardsSection } from "@/components/sections/CenteredTextImageCardsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesGridMarqueeSection } from "@/components/sections/FeaturesGridMarqueeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesMarqueeSection } from "@/components/sections/ServicesMarqueeSection";

export default function Home() {
  return (
    <main className="bg-sparkles-cream">
      <HeroSection />
      <ServicesMarqueeSection />
      <FeaturesGridMarqueeSection />
      <CenteredTextImageCardsSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}
