import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Flag, Heart, Users, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Do Good Campaign | Atlantic Ministries Trust",
    description: "One Nation—Love Over Fear. Raise the Flag. Lift Your Neighbor.",
};

export default function DoGoodCampaign() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-royal-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Flag size={18} className="text-golden-yellow" />
                        <span className="font-bold tracking-widest uppercase text-sm">Patriot Edition</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
                        DO GOOD
                        <span className="block text-golden-yellow text-2xl md:text-4xl mt-2 tracking-normal font-bold">One Nation—Love Over Fear</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-8">
                        "Raise the Flag. Lift Your Neighbor."
                    </p>
                    <div className="inline-block bg-white text-royal-blue font-black text-xl px-6 py-3 rounded-xl shadow-lg transform rotate-[-2deg]">
                        $25,000 Goal
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                In a season of division, we’re choosing a positive, unifying response: prayer, service, and practical help.
                                This campaign is nonpartisan and focused on serving people and strengthening community.
                            </p>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-8 mb-4">Funds Support</h3>
                            <ul className="grid gap-4 list-none pl-0">
                                {[
                                    "Community Care",
                                    "Unity Service Projects",
                                    "Prayer + Discipleship Support",
                                    "Essential operating costs directly tied to outreach"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle className="text-golden-yellow shrink-0 mt-1" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-12 mb-4">3 Ways to Help</h3>
                            <div className="grid sm:grid-cols-3 gap-4 not-prose">
                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                    <Heart className="mx-auto text-royal-blue mb-2" />
                                    <span className="font-bold block text-sm">Donate</span>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                    <Users className="mx-auto text-royal-blue mb-2" />
                                    <span className="font-bold block text-sm">Volunteer & Pray</span>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl text-center">
                                    <Flag className="mx-auto text-royal-blue mb-2" />
                                    <span className="font-bold block text-sm">Shop to Support</span>
                                </div>
                            </div>

                            <div className="bg-royal-blue text-white p-8 rounded-2xl mt-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="font-serif text-2xl font-black text-golden-yellow mb-4 uppercase">The Do Good Pledge</h3>
                                    <p className="text-lg font-medium italic leading-relaxed">
                                        “I will choose love over fear. I will respect others, serve someone outside my circle,
                                        pray for unity, and do one tangible act of good this week.”
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28">
                            <GiveBox
                                campaignName="Do Good Campaign"
                                paypalItemNumber="Do Good Campaign"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop CTA */}
            <div className="container mx-auto px-4 pb-16">
                <ShopToSupport />
            </div>

            <Footer />
        </main>
    );
}
