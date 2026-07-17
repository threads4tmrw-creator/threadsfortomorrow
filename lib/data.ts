export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Volunteer", href: "#volunteer" },
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
  { title: "Fundraisers" },
  { title: "Education" },
  { title: "Service" },
  { title: "Youth Leadership" },
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

export type VolunteerOpportunity = {
  title: string;
  date: string;
  time: string;
  location: string;
  learnMoreUrl: string;
};

export const VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [];
