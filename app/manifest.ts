import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: profile.name,
    description: profile.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [
      {
        src: "/images/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/nadun.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
