import { Metadata } from "next";

const SITE_URL = "https://atlanticministries.org";

export function constructMetadata({
    title = "Atlantic Ministries Trust ✝️ Faith, Family, Freedom 🇺🇸",
    description = "Serving the Great Commission from Schenectady to the ends of the earth. Join us in supporting community, veterans, and faith-driven initiatives. 🙌",
    image = "/images/socialsharing.jpg",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: SITE_URL,
            siteName: "Atlantic Ministries Trust",
            images: [
                {
                    url: image,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@AtlanticMinistries",
        },
        metadataBase: new URL(SITE_URL),
        icons: {
            icon: [
                { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
                { url: "/favicon.svg", type: "image/svg+xml" },
                { url: "/favicon.ico" },
            ],
            apple: [
                { url: "/apple-touch-icon.png", sizes: "180x180" },
            ],
        },
        manifest: "/site.webmanifest",
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
