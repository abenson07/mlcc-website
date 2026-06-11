import type { Metadata } from "next";
import { CmsGrid12Section } from "@/components/byq/CmsGrid12Section";
import { CtaSection } from "@/components/byq/CtaSection";

export const metadata: Metadata = {
  title: "Events — Maple Leaf Community Council",
  description:
    "Upcoming Maple Leaf Community Council events — Silent Book Club, Summer Social, neighborhood gatherings, and more.",
};

export default function EventsPage() {
  return (
    <main>
      <CmsGrid12Section title="Events" />
      <CtaSection />
    </main>
  );
}
