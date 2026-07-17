export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Start a Chapter", href: "#start-a-chapter" },
  { label: "Donate", href: "#donate" },
  { label: "Newsletter", href: "#newsletter" },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/threads4tmrw",
  tiktok: "https://tiktok.com/@threads4tmrw",
};

export const GOOGLE_FORM_LINK = "https://forms.gle/pRe7bV7yXfbjTmiR7";
export const DONATE_LINK = "YOUR_DONATE_LINK";

export const IMPACT_AREAS = [
  {
    title: "Community Cleanups",
    description:
      "Hands-on days spent restoring beaches, parks, and neighborhood green spaces alongside friends and neighbors.",
  },
  {
    title: "Sustainability Education",
    description:
      "Workshops and resources that make eco-literacy approachable, practical, and a little bit fun.",
  },
  {
    title: "Climate Awareness",
    description:
      "Conversations and campaigns that turn big climate ideas into small, everyday actions.",
  },
  {
    title: "Youth Leadership",
    description:
      "Real opportunities for young people to plan, lead, and grow chapters in their own communities.",
  },
];

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  learnMoreUrl: string;
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
    title: "Community Bake Sale",
    date: "Saturday, July 25",
    time: "4:00 PM – 8:00 PM",
    location: "Frisco Hills Park",
    learnMoreUrl: "https://www.instagram.com/p/Daik6XhujML/",
  },
];
