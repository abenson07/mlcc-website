import { CmsGrid13Section } from "@/components/byq/CmsGrid13Section";
import { CtaSection } from "@/components/byq/CtaSection";
import { FaqSection } from "@/components/byq/FaqSection";
import { FeatureIntroWithVideoCardsSection } from "@/components/byq/FeatureIntroWithVideoCardsSection";
import { HeroSection } from "@/components/byq/HeroSection";
import { ValueFeature33Section } from "@/components/byq/ValueFeature33Section";
import { ValueFeature49Section } from "@/components/byq/ValueFeature49Section";

export default function SkeletonHomePage() {
  return (
    <main>
      <HeroSection title="Home" />
      <FeatureIntroWithVideoCardsSection />
      <ValueFeature33Section />
      <ValueFeature49Section />
      <CmsGrid13Section />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
