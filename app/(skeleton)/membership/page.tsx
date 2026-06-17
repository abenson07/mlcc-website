import { MembershipCtaSection } from "@/components/sections/MembershipCtaSection";
import { MembershipGoalSection } from "@/components/sections/MembershipGoalSection";
import { MembershipMarqueeSection } from "@/components/sections/MembershipMarqueeSection";
import { MembershipStoriesSection } from "@/components/sections/MembershipStoriesSection";
import { MembershipValueSection } from "@/components/sections/MembershipValueSection";

export default function MembershipPage() {
  return (
    <main className="bg-sparkles-cream">
      <MembershipMarqueeSection />
      <MembershipGoalSection />
      <MembershipValueSection />
      <MembershipStoriesSection />
      <MembershipCtaSection />
    </main>
  );
}
