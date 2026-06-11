export type Event = {
  slug: string;
  title: string;
  date: string;
  shortDescription: string;
  locationName: string;
  category: string;
  image: string;
  href: string;
  external?: boolean;
};

const EVENT_IMAGES = {
  silentBookClub: "/images/events/silent-book-club-featured.png",
  summerSocial: "/images/events/summer-social.png",
  yardSale: "/images/events/maple-leaf-free-yard-sale.png",
  springMeeting: "/images/events/spring-community-meeting.png",
} as const;

function formatEventDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

export const events: Event[] = [
  {
    slug: "silent-book-club-at-watershed-pub",
    title: "May Silent Book Club",
    date: formatEventDate("2026-05-17T22:00:00.000Z"),
    shortDescription: "Bring what you're reading. Quiet hour, good neighbors. Third Sunday.",
    locationName: "Watershed Pub & Kitchen",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://maps.google.com/?cid=15529902946554199916",
  },
  {
    slug: "june-silent-book-club",
    title: "June Silent Book Club",
    date: formatEventDate("2026-06-21T22:00:00.000Z"),
    shortDescription: "Longer evenings, good book, neighbors at Watershed. Third Sunday.",
    locationName: "Watershed Pub & Kitchen",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://maps.google.com/?cid=15529902946554199916",
  },
  {
    slug: "maple-leaf-free-yard-sale-day",
    title: "Maple Leaf Free Yard Sale Day",
    date: formatEventDate("2026-07-12T17:00:00.000Z"),
    shortDescription:
      "Neighbors setting out free stuff yard-sale style — in driveways and along roads, at no cost.",
    locationName: "Maple Leaf",
    category: "Community",
    image: EVENT_IMAGES.yardSale,
    href: "https://www.facebook.com/events/967367092776193/",
    external: true,
  },
  {
    slug: "2026-summer-social",
    title: "2026 Summer Social",
    date: formatEventDate("2026-07-16T00:30:00.000Z"),
    shortDescription: "Maple Leaf Park gathering, good company, fresh air, all welcome.",
    locationName: "Maple Leaf Park Playground",
    category: "Community",
    image: EVENT_IMAGES.summerSocial,
    href: "https://maps.google.com/?cid=18316883148481642978",
  },
  {
    slug: "july-silent-book-club",
    title: "July Silent Book Club",
    date: formatEventDate("2026-07-19T22:00:00.000Z"),
    shortDescription: "Midsummer reading hour, no homework, just neighbors. Third Sunday.",
    locationName: "Watershed Pub",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://www.google.com/maps/search/?api=1&query=Watershed%20Pub%20Seattle",
  },
  {
    slug: "august-silent-book-club",
    title: "August Silent Book Club",
    date: formatEventDate("2026-08-16T22:00:00.000Z"),
    shortDescription: "Cool off with a quiet read and friendly neighbors. Third Sunday.",
    locationName: "Watershed Pub",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://www.google.com/maps/search/?api=1&query=Watershed%20Pub%20Seattle",
  },
  {
    slug: "september-silent-book-club",
    title: "September Silent Book Club",
    date: formatEventDate("2026-09-20T22:00:00.000Z"),
    shortDescription: "Ease into fall rhythms with a calm reading hour. Third Sunday.",
    locationName: "Watershed Pub",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://www.google.com/maps/search/?api=1&query=Watershed%20Pub%20Seattle",
  },
  {
    slug: "october-silent-book-club",
    title: "October Silent Book Club",
    date: formatEventDate("2026-10-18T22:00:00.000Z"),
    shortDescription: "Crisp fall Sunday, good book, good neighbors. Third Sunday at Watershed.",
    locationName: "Watershed Pub",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://www.google.com/maps/search/?api=1&query=Watershed%20Pub%20Seattle",
  },
  {
    slug: "november-silent-book-club",
    title: "November Silent Book Club",
    date: formatEventDate("2026-11-15T23:00:00.000Z"),
    shortDescription: "Cozy rainy-season reading with neighbors. Third Sunday at Watershed.",
    locationName: "Watershed Pub",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://www.google.com/maps/search/?api=1&query=Watershed%20Pub%20Seattle",
  },
  {
    slug: "december-silent-book-club",
    title: "December Silent Book Club",
    date: formatEventDate("2026-12-20T23:00:00.000Z"),
    shortDescription: "A quiet read with neighbors before the holiday rush. Third Sunday.",
    locationName: "Watershed Pub",
    category: "Book Club",
    image: EVENT_IMAGES.silentBookClub,
    href: "https://www.google.com/maps/search/?api=1&query=Watershed%20Pub%20Seattle",
  },
];
