import { campaigns } from "@/data/campaigns";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://atlanticministries.org";

    const staticPages = [
        "",
        "/about",
        "/donate",
        "/campaigns",
        "/contact",
        "/scripture-resources",
        "/discipleship-outreach",
        "/patriotism-faith",
        "/ebook",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const campaignPages = campaigns.map((campaign) => ({
        url: `${baseUrl}/campaigns/${campaign.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticPages, ...campaignPages];
}
