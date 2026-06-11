import { CmsGrid6Section } from "@/components/byq/CmsGrid6Section";
import { ContactCtaPreFooterSection } from "@/components/byq/ContactCtaPreFooterSection";
import { CtaSection } from "@/components/byq/CtaSection";
import { Hero35Section } from "@/components/byq/Hero35Section";
import { IntroText12Section } from "@/components/byq/IntroText12Section";
import { Team4Section } from "@/components/byq/Team4Section";
import { ValueFeature48Section } from "@/components/byq/ValueFeature48Section";

export function CommitteeDetailPage({ title }: { title: string }) {
  return (
    <main>
      <Hero35Section title={title} />
      <IntroText12Section />
      <ValueFeature48Section />
      <Team4Section />
      <CmsGrid6Section />
      <ContactCtaPreFooterSection />
      <CtaSection />
    </main>
  );
}
