import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { profile, projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Listing every image lets Google Images discover and index them,
  // which is what surfaces the photos/screenshots in image search.
  const images = [
    `${SITE_URL}${profile.avatar}`,
    `${SITE_URL}${profile.aboutImage}`,
    ...projects.map((p) => `${SITE_URL}${p.image}`),
  ];

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images,
    },
  ];
}
