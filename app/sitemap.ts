import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { profile, projects } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";

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
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}/projects/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [c.hero, ...c.screenshots].map((s) => `${SITE_URL}${s.src}`),
    })),
  ];
}
