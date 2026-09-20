import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MESA",
  description:
    "Contact MESA at NIT Durgapur — questions, event proposals, membership, volunteering and sponsorships. Email mesa.me@nitdgp.ac.in, visit Mahatma Gandhi Avenue, Durgapur 713209.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact MESA | NIT Durgapur",
    description:
      "Questions, proposals, or just want to talk machines? Our inbox is always open — mesa.me@nitdgp.ac.in.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I become a member of MESA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out the membership application on the website or visit the MESA office at NIT Durgapur during business hours.",
        },
      },
      {
        "@type": "Question",
        name: "How often does MESA host events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MESA hosts 2-3 events per month including workshops, networking mixers, guest lectures and competitions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I volunteer with MESA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Contact mesa.me@nitdgp.ac.in to volunteer for committees and event roles.",
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
