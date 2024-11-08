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
            url: "https://kokonut.dev/components/ai-input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/components/buttons",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/components/cards",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/components/pricing",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonut.dev/components/texts",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
