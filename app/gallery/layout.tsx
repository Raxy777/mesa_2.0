import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "MESA photo archive — workshop floors, symposiums, industrial visits, robotics builds and community moments at NIT Durgapur.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery | MESA, NIT Durgapur",
    description:
      "Moments from the workshop floor, symposiums, and everything we've machined together.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
