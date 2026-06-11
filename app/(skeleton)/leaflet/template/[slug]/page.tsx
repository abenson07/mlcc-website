import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsPageSection } from "@/components/byq/CmsPageSection";
import { CtaSection } from "@/components/byq/CtaSection";
import { getLeafletStory, leafletStories } from "@/data/leaflet-stories";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return leafletStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getLeafletStory(slug);

  if (!story) {
    return {};
  }

  return {
    title: `${story.title} — The Leaflet`,
    description: `${story.type} story from The Leaflet.`,
  };
}

export default async function LeafletStoryTemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const story = getLeafletStory(slug);

  if (!story) {
    notFound();
  }

  return (
    <main>
      <CmsPageSection title={story.title} />
      <CtaSection />
    </main>
  );
}
