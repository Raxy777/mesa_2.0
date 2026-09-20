export const siteConfig = {
  name: "MESA",
  fullName: "Mechanical Engineering Students' Association",
  tagline: "Where steel meets ideas.",
  description:
    "MESA — the Mechanical Engineering Students' Association at NIT Durgapur. Workshops, CAD/FEA bootcamps, industrial visits, robotics competitions, research circles and career guidance for mechanical engineers.",
  url: "https://mesa-nitdgp.vercel.app",
  ogImage: "/opengraph-image",
  locale: "en_IN",
  keywords: [
    "MESA",
    "Mechanical Engineering Students Association",
    "NIT Durgapur",
    "NIT Durgapur mechanical engineering",
    "mechanical engineering club India",
    "CAD workshop",
    "SolidWorks bootcamp",
    "ANSYS FEA workshop",
    "robotics competition",
    "SAE BAJA",
    "mechanical engineering events",
    "engineering student association",
  ],
  authors: [{ name: "MESA, NIT Durgapur" }],
  creator: "MESA, NIT Durgapur",
  social: {
    email: "mesa.me@nitdgp.ac.in",
    phone: "+91 76075 49708",
  },
  address: {
    street: "Mahatma Gandhi Avenue",
    locality: "Durgapur",
    region: "West Bengal",
    postalCode: "713209",
    country: "IN",
  },
  geo: {
    latitude: 23.547,
    longitude: 87.293,
  },
} as const;

export type SiteConfig = typeof siteConfig;
