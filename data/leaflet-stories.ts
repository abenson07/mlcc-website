export type LeafletStoryType = "From the Council" | "Neighborhood Update";

export type LeafletStory = {
  slug: string;
  webflowSlug: string;
  title: string;
  author: string;
  publishDate: string;
  type: LeafletStoryType;
  featured: boolean;
  draft: boolean;
  image?: string;
};

export const leafletStories: LeafletStory[] = [
  {
    slug: "2026-volunteer-open-house",
    webflowSlug: "a-fresh-start-for-maple-leaf-join-our-2026-volunteer-committee-open-house",
    title: "A fresh start for Maple Leaf: join our 2026 volunteer & committee open house",
    author: "alex-benson",
    publishDate: "2025-12-30",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/69540779dacfe8969b3b1a95_summer_social_2024-1%201.webp",
  },
  {
    slug: "advocacy-and-zoning-workshops",
    webflowSlug: "a-place-to-work-through-hard-questions-together",
    title: "A place to work through hard questions together",
    author: "alex-benson",
    publishDate: "2026-01-09",
    type: "From the Council",
    featured: true,
    draft: true,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/68c82d9a55f62655acb2e46c_IMG_9152.jpg",
  },
  {
    slug: "silent-book-club",
    webflowSlug: "a-quiet-way-to-belong",
    title: "A quiet way to belong",
    author: "alex-benson",
    publishDate: "2026-01-08",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/695b30685a1f306acdc73283_IMG_6862.jpg",
  },
  {
    slug: "community-meetings",
    webflowSlug: "bringing-neighbors-together-to-learn-ask-questions-and-be-heard",
    title: "Bringing neighbors together to learn, ask questions, and be heard",
    author: "rebecca-letwin",
    publishDate: "2025-12-31",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/695313c6b976b35d22bb2d6d_community-meeting.webp",
  },
  {
    slug: "movies-by-the-tower",
    webflowSlug: "building-connections-under-the-stars",
    title: "Building Connections Under the Stars",
    author: "alex-benson",
    publishDate: "2026-01-05",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/695b2928eb2f48f58fa2aef8_movies-tower.webp",
  },
  {
    slug: "built-by-neighbors",
    webflowSlug: "built-by-neighbors-sustained-by-neighbors",
    title: "Built by neighbors, sustained by neighbors",
    author: "alex-benson",
    publishDate: "2026-01-04",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/6877bff9b59839fa1fd6792c_Photo-Jun-11-2025.jpg",
  },
  {
    slug: "halloween-parade",
    webflowSlug: "carrying-the-halloween-parade-forward",
    title: "Carrying the Halloween Parade forward",
    author: "alex-benson",
    publishDate: "2026-01-05",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/695b2c3441277b54461fac94_IMG_6554.jpg",
  },
  {
    slug: "the-leaflet",
    webflowSlug: "connecting-maple-leaf-through-the-decades",
    title: "Connecting Maple Leaf through the decades",
    author: "alex-benson",
    publishDate: "2025-12-30",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/695312357b037d99bca1b7e9_leaflet.webp",
  },
  {
    slug: "love-your-neighbor",
    webflowSlug: "conversations-close-to-home",
    title: "Conversations close to home",
    author: "alex-benson",
    publishDate: "2026-01-07",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/695b2ef4da00327d5e0c5403_love-your-neighbor.webp",
  },
  {
    slug: "housing-types",
    webflowSlug: "housing-types",
    title: "Housing Types",
    author: "ethan-delavan",
    publishDate: "2026-01-31",
    type: "Neighborhood Update",
    featured: false,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/697eb3592b1c8f4dd7e6a98f_cohousing-infographic.png",
  },
  {
    slug: "one-seattle-plan",
    webflowSlug: "one-seattle-plan-speak-up-for-maple-leafs-future",
    title: "One Seattle Plan: Speak Up for Maple Leaf's Future",
    author: "laurie-vette",
    publishDate: "2025-11-12",
    type: "Neighborhood Update",
    featured: false,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/6913dbb252ed363168221ae6_Maple_Leaf.jpg",
  },
  {
    slug: "summer-social",
    webflowSlug: "summer-social-tradition-what-it-takes",
    title: "What it takes to keep a neighborhood tradition alive",
    author: "stefan-hoerschelmann",
    publishDate: "2025-12-29",
    type: "From the Council",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/69530e8b1aadf47968a6eb09_summer_social_2024-62%20(1).webp",
  },
  {
    slug: "visioning-survey",
    webflowSlug: "survey",
    title: "Your Maple Leaf Visioning Survey",
    author: "ethan-delavan",
    publishDate: "2026-02-22",
    type: "Neighborhood Update",
    featured: true,
    draft: false,
    image:
      "https://cdn.prod.website-files.com/67f50cf24b62add5c586bc28/699b422af10d9dff50983357_Survey_Email_Header-2-narrow.png",
  },
  {
    slug: "cybersecurity-incident",
    webflowSlug: "cybersecurity-incident",
    title: "Cybersecurity Incident",
    author: "ethan-delavan",
    publishDate: "2026-05-26",
    type: "Neighborhood Update",
    featured: false,
    draft: true,
  },
];

export function getLeafletStory(slug: string): LeafletStory | undefined {
  return leafletStories.find((story) => story.slug === slug);
}

export const leafletStoryRoutes = leafletStories.map((story) => ({
  path: `/leaflet/template/${story.slug}`,
  label: story.title,
  layout: "not-started" as const,
  content: "not-started" as const,
  polish: "not-started" as const,
}));
