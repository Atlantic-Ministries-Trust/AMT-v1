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
    colorTheme: string; // 'royal' | 'gold' | 'red' etc.
}

export const campaigns: Campaign[] = [
    {
        slug: "do-good",
        title: "Do Good Campaign | Atlantic Ministries Trust 🇺🇸",
        description: "One Nation—Love Over Fear. Raise the Flag. Lift Your Neighbor. Join the Do Good patriotic mission. ❤️",
        heroMetadata: "Patriot Edition",
        heroLabel: "do-good",
        heroTitle: "DO GOOD",
        heroSubtitle: "One Nation—Love Over Fear",
        goal: "$25,000 Goal",
        contentLead: "In a season of division, we’re choosing a positive, unifying response: prayer, service, and practical help. This campaign is nonpartisan and focused on serving people and strengthening community.",
        fundsSupport: [
            "Community Care",
            "Unity Service Projects",
            "Prayer + Discipleship Support",
            "Essential operating costs directly tied to outreach"
        ],
        waysToHelp: [
            { label: "Donate", icon: "heart" },
            { label: "Volunteer & Pray", icon: "users" },
            { label: "Shop to Support", icon: "flag" }
        ],
        pledge: {
            title: "The Do Good Pledge",
            text: "“I will choose love over fear. I will respect others, serve someone outside my circle, pray for unity, and do one tangible act of good this week.”"
        },
        paypalItemNumber: "Do Good Campaign",
        colorTheme: "royal"
    },
    {
        slug: "meals",
        title: "Meals for Families & Kids | Atlantic Ministries Trust 🍲",
        description: "Providing meals and food support to households and children who need a helping hand. Join the mission to feed families. 🥣",
        heroMetadata: "Community Support",
        heroLabel: "meals",
        heroTitle: "Meals for Families & Kids",
        heroSubtitle: "\"No family should have to choose between groceries and basic needs.\"",
        contentLead: "Your giving helps provide meals and food support to households and children who need a helping hand. We believe that no one in our community should go hungry.",
        fundsSupport: [
            "Emergency Food Relief",
            "School Weekend Bags",
            "Holiday Meal Support",
            "Local Food Pantry Partnerships"
        ],
        waysToHelp: [
            { label: "Donate", icon: "heart" },
            { label: "Food Drives", icon: "utensils" },
            { label: "Local Partners", icon: "globe" }
        ],
        howItWorks: {
            title: "How It Works",
            steps: [
                { title: "You Give", text: "Your donations directly fund the purchase of food and groceries." },
                { title: "We Coordinate", text: "We distribute support directly to families or work with trusted partners to maximize impact." },
                { title: "We Share Outcomes", text: "We report on the impact while strictly protecting the privacy and dignity of recipients." }
            ]
        },
        paypalItemNumber: "Meals Campaign",
        colorTheme: "royal"
    },
    {
        slug: "veterans-dogs",
        title: "Veterans + Unwanted Dogs | Support Our Heroes 🐕",
        description: "Your gift helps provide training and care for unwanted dogs that will serve as companions to veterans. Supporting those who served. 🇺🇸",
        heroMetadata: "Veterans Initiative",
        heroLabel: "veterans",
        heroTitle: "Veterans + Unwanted Dogs",
        heroSubtitle: "\"Providing companionship and renewed purpose.\"",
        contentLead: "We believe in supporting those who have served our country. This initiative pairs veterans with unwanted dogs, providing a second chance for both.",
        fundsSupport: [
            "Professional Dog Training",
            "Veterinary Care & Supplies",
            "Veteran Outreach Programs",
            "Shelter Partnership Costs"
        ],
        waysToHelp: [
            { label: "Donate", icon: "heart" },
            { label: "Adopt/Foster", icon: "dog" },
            { label: "Awareness", icon: "info" }
        ],
        paypalItemNumber: "Veterans + Dogs Campaign",
        colorTheme: "royal"
    },
    {
        slug: "anti-trafficking",
        title: "Anti-Trafficking Mission | Combat Child & Sex Trafficking 🛡️",
        description: "Support our efforts to combat child and sex trafficking through prayer, awareness, and direct support to frontline organizations. ⚔️",
        heroMetadata: "Protect the Vulnerable",
        heroLabel: "anti-trafficking",
        heroTitle: "Combat Child & Sex Trafficking",
        heroSubtitle: "\"Stop Exploitation. Restore Dignity.\"",
        contentLead: "We are committed to combating child and sex trafficking through prevention, awareness, and survivor support—working with trusted, vetted partners and local resources.",
        fundsSupport: [
            "Frontline NGO Grants",
            "Awareness Campaigns",
            "Survivor Recovery Support",
            "Prevention Education"
        ],
        waysToHelp: [
            { label: "Donate", icon: "heart" },
            { label: "Pray for Safety", icon: "shield" },
            { label: "Learn Signs", icon: "alert" }
        ],
        paypalItemNumber: "Anti-Trafficking Campaign",
        colorTheme: "royal"
    },
    {
        slug: "victory-church-nigeria",
        title: "Victory Church Nigeria | Global Missions 🇳🇬",
        description: "Partnering with Victory Church in Nigeria to support local ministry, community outreach, and the expansion of the Gospel. ✝️",
        heroMetadata: "Global Missions",
        heroLabel: "missions",
        heroTitle: "Victory Church Nigeria",
        heroSubtitle: "\"Empowering Local Ministry, Reaching the World.\"",
        contentLead: "We are proud to partner with Victory Church in Nigeria, supporting their vital work on the ground to provide spiritual leadership and community aid.",
        fundsSupport: [
            "Local Outreach Projects",
            "Children's Ministry",
            "Leadership Training",
            "Community Infrastructure"
        ],
        waysToHelp: [
            { label: "Donate", icon: "heart" },
            { label: "Mission Trips", icon: "globe" },
            { label: "Prayer Partners", icon: "users" }
        ],
        paypalItemNumber: "Victory Church Nigeria",
        colorTheme: "royal"
    }
];
