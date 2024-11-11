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
            url: "https://kokonut.dev/docs/components/button",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://kokonut.dev/docs/components/card",
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
            url: "https://kokonut.dev/docs/components/text",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/docs/components/alert",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
