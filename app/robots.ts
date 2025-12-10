import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://skinwalkergame.net/sitemap.xml",
    host: "https://skinwalkergame.net",
  };
}
