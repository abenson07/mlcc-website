import { DonateAmountSection } from "@/components/sections/DonateAmountSection";
import { DonateCtaSection } from "@/components/sections/DonateCtaSection";
import { DonateGoalSection } from "@/components/sections/DonateGoalSection";
import { DonateImpactSection } from "@/components/sections/DonateImpactSection";
import { DonateMarqueeSection } from "@/components/sections/DonateMarqueeSection";
import { DonateStoriesSection } from "@/components/sections/DonateStoriesSection";
import { DonateValueSection } from "@/components/sections/DonateValueSection";

export default function DonatePage() {
  return (
    <main className="bg-sparkles-cream">
      <DonateMarqueeSection />
      <DonateAmountSection />
      <DonateGoalSection />
      <DonateImpactSection />
      <DonateValueSection />
      <DonateStoriesSection />
      <DonateCtaSection />
    </main>
  );
}
