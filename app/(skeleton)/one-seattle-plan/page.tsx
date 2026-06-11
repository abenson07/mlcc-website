import { BentoSection } from "@/components/byq/BentoSection";
import { CmsGrid26Section } from "@/components/byq/CmsGrid26Section";
import { ContactCtaPreFooterSection } from "@/components/byq/ContactCtaPreFooterSection";
import { CtaSection } from "@/components/byq/CtaSection";
import { IntroText12Section } from "@/components/byq/IntroText12Section";
import { IntroText13Section } from "@/components/byq/IntroText13Section";
import { ValueFeature50Section } from "@/components/byq/ValueFeature50Section";
import { ValueFeature53Section } from "@/components/byq/ValueFeature53Section";
import { ValueFeature57Section } from "@/components/byq/ValueFeature57Section";
import { ValueFeatures29Section } from "@/components/byq/ValueFeatures29Section";

export default function OneSeattlePlanPage() {
  return (
    <main>
      <ValueFeatures29Section title="One Seattle Plan" />
      <IntroText12Section />
      <ValueFeature50Section />
      <ValueFeature53Section />
      <ValueFeature57Section />
      <BentoSection />
      <CmsGrid26Section />
      <IntroText13Section />
      <ContactCtaPreFooterSection />
      <CtaSection />
    </main>
  );
}
