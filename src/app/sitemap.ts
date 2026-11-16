import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: append listing and category URLs from the database
  return [{ url: siteConfig.url, lastModified: new Date() }];
}
