import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.neave.tech";

  /* Case-study routes temporarily disabled.
  const caseStudySlugs = [
    "msetcl-visitor-management-system",
    "msetcl-guest-house-management",
    "msetcl-employee-attendance-system",
    "industries-department-maharashtra-website",
  ];
  */

  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/privacy`, lastModified: new Date(), priority: 0.5 },
    // { url: `${base}/case-studies`, lastModified: new Date(), priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    /* ...caseStudySlugs.map((slug) => ({
      url: `${base}/case-studies/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })), */
  ];
}