import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CampaignCard } from "@/components/CampaignCard";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { WaysToGive } from "@/components/giving/WaysToGive";
import { Heart, Utensils, Flag, Shield, Globe } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Campaigns | Atlantic Ministries Trust",
    description: "Explore our active campaigns: Do Good, Meals for Families, Veterans Support, Anti-Trafficking, and International Missions.",
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
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-100">
                        Our campaigns are designed to bring hope through practical help, prayer, and action.
                    </p>
                    <div className="h-2 w-24 bg-golden-yellow mx-auto mt-8 rounded-full animate-fade-in-up delay-200" />
                </div>
            </div>

            {/* Campaign Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Do Good */}
                        <CampaignCard
                            featured={true}
                            title="Do Good: Patriot Edition"
                            description="One Nation—Love Over Fear. Join us in choosing a positive, unifying response through prayer, service, and practical help."
                            href="/campaigns/do-good"
                            icon={<Flag size={28} />}
                        />

                        {/* Meals */}
                        <CampaignCard
                            title="Meals for Families & Kids"
                            description="No family should have to choose between groceries and basic needs. Provide meals to those who need a helping hand."
                            href="/campaigns/meals"
                            icon={<Utensils size={28} />}
                        />

                        {/* Veterans + Dogs */}
                        <CampaignCard
                            title="Veterans + Unwanted Dogs"
                            description="We help bring veterans and unwanted dogs together—offering companionship, renewed purpose, and practical support."
                            href="/campaigns/veterans-dogs"
                            icon={<Heart size={28} />}
                        />

                        {/* Anti-Trafficking */}
                        <CampaignCard
                            title="Combat Human Trafficking"
                            description="Committed to combating child and sex trafficking through prevention, awareness, and survivor support."
                            href="/campaigns/anti-trafficking"
                            icon={<Shield size={28} />}
                        />

                        {/* Nigeria */}
                        <CampaignCard
                            title="Victory Church Nigeria"
                            description="Support urgent needs including hunger relief, medicine, and safety improvements for our partners in Nigeria."
                            href="/campaigns/victory-church-nigeria"
                            icon={<Globe size={28} />}
                        />
                    </div>
                </div>
            </section>

            {/* Shop To Support */}
            <div className="container mx-auto px-4">
                <ShopToSupport />
            </div>

            {/* General Ways to Give */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <WaysToGive />
                </div>
            </section>

            <Footer />
        </main>
    );
}
