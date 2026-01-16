export interface Campaign {
    slug: string;
    title: string;
    description: string;
    heroMetadata: string;
    heroLabel: string;
    heroTitle: string;
    heroSubtitle: string;
    goal?: string;
    contentLead: string;
    fundsSupport: string[];
    waysToHelp: {
        label: string;
        icon: string;
    }[];
    pledge?: {
        title: string;
        text: string;
    };
    howItWorks?: {
        title: string;
        steps: {
            title: string;
            text: string;
        }[];
    };
    paypalItemNumber: string;
    colorTheme: string;
    image: string;
}

export const campaigns: Campaign[] = [
    {
        slug: "do-good",
        title: "Do Good Campaign | Atlantic Ministries Trust 🇺🇸",
        description: "One Nation—Love Over Fear. Raise the Flag. Lift Your Neighbor. Join the Do Good patriotic mission to serve our community and honor our heritage. ❤️",
        heroMetadata: "Patriot Edition",
        heroLabel: "do-good",
        heroTitle: "DO GOOD",
        heroSubtitle: "One Nation—Love Over Fear",
        goal: "$25,000 Goal",
        contentLead: "In a season of division, we’re choosing a positive, unifying response: prayer, service, and practical help. This campaign is nonpartisan and focused on serving people, strengthening community, and reminding ourselves that we are one nation under God. We believe that small acts of kindness, rooted in faith, can bridge any divide.",
        fundsSupport: [
            "Local Community Care & Crisis Relief",
            "Unity Service Projects & Neighborhood Cleanup",
            "Prayer + Discipleship Support for local families",
            "Essential operating costs directly tied to outreach",
            "Supporting American heritage and values initiatives"
        ],
        waysToHelp: [
            { label: "Donate", icon: "heart" },
            { label: "Volunteer & Pray", icon: "users" },
            { label: "Shop to Support", icon: "flag" }
        ],
        pledge: {
            title: "The Do Good Pledge",
            text: "“I will choose love over fear. I will respect others, serve someone outside my circle, pray for unity, and do one tangible act of good this week. I commit to being a light in my community.”"
        },
        paypalItemNumber: "Do Good Campaign",
        colorTheme: "royal",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
    },
    {
        slug: "meals",
        title: "Meals for Families & Kids | Atlantic Ministries Trust 🍲",
        description: "Providing meals and food support to households and children who need a helping hand. Join the mission to fight hunger and show Christ's love through provision. 🥣",
        heroMetadata: "Community Support",
        heroLabel: "meals",
        heroTitle: "MEALS FOR FAMILIES",
        heroSubtitle: "Love Served Warm",
        goal: "Feed 500 Families",
        contentLead: "The kitchen table is where hearts are opened and communities are built. We are partnering with local food pantries and farms to ensure no family in our city goes to bed hungry.",
        fundsSupport: [
            "Weekly grocery distribution for at-risk families",
            "Hot meal service at the community center",
            "Weekend food bags for school children",
            "Support for local urban farming initiatives",
            "Emergency food relief fund"
        ],
        waysToHelp: [
            { label: "Give Food", icon: "utensils" },
            { label: "Serve Meals", icon: "heart" },
            { label: "Donate", icon: "sparkles" }
        ],
        paypalItemNumber: "Meals Campaign",
        colorTheme: "golden",
        image: "/images/campaign-meals.png"
    },
    {
        slug: "veterans-dogs",
        title: "Veterans + Dogs | Atlantic Ministries Trust 🐕",
        description: "Healing heroes with four-legged companions. Supporting the training and placement of service dogs with veterans. 🇺🇸",
        heroMetadata: "Service & Honor",
        heroLabel: "veterans-dogs",
        heroTitle: "VETERANS + DOGS",
        heroSubtitle: "Healing Heroes, One Paw at a Time",
        goal: "Sponsor 5 Teams",
        contentLead: "We owe a debt of gratitude to those who served. This campaign bridges the gap for veterans struggling with PTSD by connecting them with trained service dogs, fostering a bond that saves lives.",
        fundsSupport: [
            "Sponsorship of service dog training programs",
            "Veterinary care for service animals",
            "Placement and integration support for veterans",
            "Awareness events for veteran mental health",
            "Essential gear for service dog teams"
        ],
        waysToHelp: [
            { label: "Sponsor a Dog", icon: "dog" },
            { label: "Volunteer", icon: "users" },
            { label: "Donate", icon: "heart" }
        ],
        paypalItemNumber: "Veterans + Dogs",
        colorTheme: "navy",
        image: "/images/campaign-veterans.png"
    },
    {
        slug: "anti-trafficking",
        title: "Anti-Trafficking | Atlantic Ministries Trust 🛡️",
        description: "Shining a light in the darkness. Prevention, rescue, and restoration for survivors of human trafficking. 🕯️",
        heroMetadata: "Justice & Rescue",
        heroLabel: "anti-trafficking",
        heroTitle: "ANTI-TRAFFICKING",
        heroSubtitle: "Freedom is Non-Negotiable",
        goal: "$50,000 Rescue Fund",
        contentLead: "Modern-day slavery is a reality we cannot ignore. We are committed to funding rescue operations, providing safe houses for survivors, and educating our youth to prevent exploitation before it starts.",
        fundsSupport: [
            "Direct support for rescue organizations",
            "Safe house operational costs and security",
            "Trauma counseling and rehabilitation for survivors",
            "Prevention education in local schools",
            "Legal advocacy for victims"
        ],
        waysToHelp: [
            { label: "Donate", icon: "shield" },
            { label: "Educate", icon: "info" },
            { label: "Pray", icon: "alert-triangle" }
        ],
        paypalItemNumber: "Anti-Trafficking",
        colorTheme: "dark",
        image: "/images/campaign-anti-trafficking.png"
    },
    {
        slug: "victory-church-nigeria",
        title: "Victory Church Nigeria | Atlantic Ministries Trust 🇳🇬",
        description: "Building faith across the ocean. Supporting our partner church in Nigeria with resources, prayer, and mission trips. 🌍",
        heroMetadata: "Global Missions",
        heroLabel: "victory-church-nigeria",
        heroTitle: "VICTORY CHURCH",
        heroSubtitle: "A Light in West Africa",
        goal: "Building Fund",
        contentLead: "The Gospel knows no borders. Our partnership with Victory Church in Nigeria is about equipping local leaders to preach the Word, serve their communities, and bring the hope of Christ to West Africa.",
        fundsSupport: [
            "Construction and maintenance of church facilities",
            "Pastoral training and leadership development",
            "Community medical and educational outreach",
            "Bibles and discipleship materials in local dialects",
            "Mission trip logistics and support"
        ],
        waysToHelp: [
            { label: "Give", icon: "globe" },
            { label: "Go", icon: "plane" },
            { label: "Pray", icon: "heart" }
        ],
        paypalItemNumber: "Victory Church Nigeria",
        colorTheme: "green",
        image: "/images/campaign-nigeria.png"
    }
];
