import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: "https://kokonut.dev",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
