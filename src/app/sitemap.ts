import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://emc2-biotech.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://emc2-biotech.com/pitch",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://emc2-biotech.com/main",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
