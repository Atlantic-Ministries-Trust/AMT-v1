import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CampaignCard } from "@/components/CampaignCard";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { WaysToGive } from "@/components/giving/WaysToGive";
import { Heart, Utensils, Flag, Shield, Globe, Users } from "lucide-react";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "Our Campaigns | Atlantic Ministries Trust 🚩",
    description: "Explore our active campaigns from community meals to anti-trafficking. Join us in making a tangible difference. ✨",
});

import { campaigns } from "@/data/campaigns";

const IconMap: { [key: string]: any } = {
    flag: Flag,
    heart: Heart,
    users: Users,
    utensils: Utensils,
    shield: Shield,
    globe: Globe,
};

export default function CampaignsHub() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-black text-royal-blue mb-6 uppercase tracking-tight animate-fade-in-up">
                        Campaigns That Do Good
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-100">
                        We believe in a faith that moves. Our campaigns are the engines of our mission—targeted, tangible initiatives designed to meet specific needs in our community and beyond. Whether it's feeding a hungry family, honoring a veteran, or fighting for the freedom of the oppressed, every campaign is an invitation to join us in doing good.
                    </p>
                    <div className="h-2 w-24 bg-golden-yellow mx-auto mt-8 rounded-full animate-fade-in-up delay-200" />
                </div>
            </div>

            {/* Campaign Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {campaigns.map((c, i) => {
                            const Icon = IconMap[c.waysToHelp[2]?.icon] || Flag;
                            return (
                                <CampaignCard
                                    key={c.slug}
                                    featured={i === 0}
                                    title={c.heroTitle}
                                    description={c.description.split('.')[0] + '.'}
                                    href={`/campaigns/${c.slug}`}
                                    icon={<Icon size={28} />}
                                    image={c.image}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shop To Support */}
            <div className="container mx-auto px-4">
                <ShopToSupport />
            </div>

            {/* General Ways to Give */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-7xl">
                    <WaysToGive />
                </div>
            </section>

            <Footer />
        </main>
    );
}
