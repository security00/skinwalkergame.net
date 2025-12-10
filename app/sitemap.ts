import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://skinwalkergame.net";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
  ];
}
