import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WaysToGive } from "@/components/giving/WaysToGive";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "Ways to Give | Support Our Mission 💝",
    description: "Support Atlantic Ministries Trust through Zelle, Venmo, Cash App, or PayPal. Every gift helps support our campaigns and mission. 🙏",
});

export default function Donate() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40 text-center">
                <h1 className="font-serif text-4xl md:text-6xl font-black text-royal-blue mb-6 uppercase tracking-tight">
                    Ways to Give
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                    Your generosity fuels our mission to bring faith, hope, and practical help to those in need.
                </p>
                <div className="h-1.5 w-24 bg-golden-yellow mx-auto rounded-full mb-16" />
            </div>

            {/* Main Donation Options */}
            <div className="container mx-auto px-4 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* General Fund Box */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl font-black text-royal-blue text-center lg:text-left">General Donation</h2>
                        <GiveBox
                            campaignName="General Fund"
                            paypalItemNumber="General Donation"
                        />
                    </div>

                    {/* Campaigns List */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl font-black text-royal-blue text-center lg:text-left">Designate Your Gift</h2>
                        <div className="grid gap-4">
                            <Link href="/campaigns/do-good" className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-golden-yellow hover:shadow-md transition-all flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-royal-blue group-hover:text-golden-yellow transition-colors">Do Good Campaign</h3>
                                    <p className="text-sm text-gray-500">Patriot Edition: One Nation—Love Over Fear</p>
                                </div>
                                <ArrowRight className="text-gray-300 group-hover:text-golden-yellow transition-colors" />
                            </Link>
                            <Link href="/campaigns/meals" className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-golden-yellow hover:shadow-md transition-all flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-royal-blue group-hover:text-golden-yellow transition-colors">Meals for Families</h3>
                                    <p className="text-sm text-gray-500">Provide groceries and food support</p>
                                </div>
                                <ArrowRight className="text-gray-300 group-hover:text-golden-yellow transition-colors" />
                            </Link>
                            <Link href="/campaigns/veterans-dogs" className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-golden-yellow hover:shadow-md transition-all flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-royal-blue group-hover:text-golden-yellow transition-colors">Veterans + Dogs</h3>
                                    <p className="text-sm text-gray-500">Support companionship pairings</p>
                                </div>
                                <ArrowRight className="text-gray-300 group-hover:text-golden-yellow transition-colors" />
                            </Link>
                            <Link href="/campaigns/anti-trafficking" className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-golden-yellow hover:shadow-md transition-all flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-royal-blue group-hover:text-golden-yellow transition-colors">Anti-Trafficking</h3>
                                    <p className="text-sm text-gray-500">Prevention and survivor support</p>
                                </div>
                                <ArrowRight className="text-gray-300 group-hover:text-golden-yellow transition-colors" />
                            </Link>
                            <Link href="/campaigns/victory-church-nigeria" className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-golden-yellow hover:shadow-md transition-all flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg text-royal-blue group-hover:text-golden-yellow transition-colors">Victory Church Nigeria</h3>
                                    <p className="text-sm text-gray-500">International mission support</p>
                                </div>
                                <ArrowRight className="text-gray-300 group-hover:text-golden-yellow transition-colors" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Ways to Give */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <WaysToGive />
                </div>
            </section>

            {/* Shop CTA */}
            <div className="container mx-auto px-4 py-16">
                <ShopToSupport />
            </div>

            <Footer />
        </main>
    );
}
