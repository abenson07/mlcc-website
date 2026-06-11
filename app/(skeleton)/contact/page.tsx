import { ContactSection } from "@/components/byq/ContactSection";
import { CtaSection } from "@/components/byq/CtaSection";
import { FaqSection } from "@/components/byq/FaqSection";

export default function ContactPage() {
  return (
    <main>
      <ContactSection title="Contact" />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
