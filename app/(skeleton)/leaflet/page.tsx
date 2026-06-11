import { CmsGridSection } from "@/components/byq/CmsGridSection";
import { CtaSection } from "@/components/byq/CtaSection";
import { getPublishedLeafletStories } from "@/data/leaflet-stories";

export default function LeafletPage() {
  return (
    <main>
      <CmsGridSection title="The Leaflet" stories={getPublishedLeafletStories()} />
      <CtaSection />
    </main>
  );
}
