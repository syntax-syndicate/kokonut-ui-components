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
        {
            url: "https://kokonut.dev/docs",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://kokonut.dev/docs/components/ai-input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/docs/components/buttons",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://kokonut.dev/docs/components/cards",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/docs/components/pricing",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://kokonut.dev/docs/components/texts",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/docs/components/alerts",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
