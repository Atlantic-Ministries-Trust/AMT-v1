import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.atlanticministries.org";

    const routes = [
        "",
        "/who-we-are",
        "/our-story",
        "/discipleship-outreach",
        "/patriotism-faith",
        "/scripture-resources",
        "/contact",
        "/donate",
        "/legal/privacy",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
