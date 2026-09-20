import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.fullName}, NIT Durgapur`,
    short_name: "MESA",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/logo/mesa-black.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/logo/mesa-white.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
