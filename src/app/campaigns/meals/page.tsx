import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Utensils, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meals for Families & Kids | Atlantic Ministries Trust",
    description: "Providing meals and food support to households and children who need a helping hand.",
};

export default function MealsCampaign() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-royal-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Utensils size={18} className="text-golden-yellow" />
                        <span className="font-bold tracking-widest uppercase text-sm">Community Support</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
                        Meals for<br />Families & Kids
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-8 max-w-3xl mx-auto">
                        "No family should have to choose between groceries and basic needs."
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                Your giving helps provide meals and food support to households and children who need a helping hand.
                                We believe that no one in our community should go hungry.
                            </p>

                            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 my-8">
                                <h3 className="text-royal-blue font-black uppercase text-xl mb-6">How It Works</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="bg-royal-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">You Give</h4>
                                            <p className="text-sm">Your donations directly fund the purchase of food and groceries.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-royal-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">We Coordinate</h4>
                                            <p className="text-sm">We distribute support directly to families or work with trusted partners to maximize impact.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-royal-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">We Share Outcomes</h4>
                                            <p className="text-sm">We report on the impact while strictly protecting the privacy and dignity of recipients.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28">
                            <GiveBox
                                campaignName="Meals for Families & Kids"
                                paypalItemNumber="Meals Campaign"
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
