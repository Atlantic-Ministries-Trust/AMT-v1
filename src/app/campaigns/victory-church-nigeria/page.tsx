import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Globe, CheckCircle, ShieldAlert } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Victory Church Nigeria | Atlantic Ministries Trust",
    description: "Support our partners in Nigeria with urgent needs including hunger relief, medicine, and safety improvements.",
};

export default function NigeriaCampaign() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-royal-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Globe size={18} className="text-golden-yellow" />
                        <span className="font-bold tracking-widest uppercase text-sm">International Mission</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
                        Support Victory<br />Church Nigeria
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-8 max-w-3xl mx-auto">
                        "Delivering hope and practical aid in challenging times."
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="prose prose-lg max-w-none text-gray-600">
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 mb-8">
                                <h3 className="font-black uppercase text-green-900 text-lg mb-3">Latest Impact Update</h3>
                                <p className="text-green-800 font-medium leading-relaxed m-0">
                                    This week, we sent $1,500 in donations to support urgent needs including hunger relief, medicine,
                                    livelihood support (farm animals), community protection needs (including dogs used for property protection/early warning),
                                    and appropriate security improvements (e.g., lighting/locks/cameras) during local unrest.
                                </p>
                            </div>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-8 mb-4">Donations Support</h3>
                            <ul className="grid gap-4 list-none pl-0">
                                {[
                                    "Food relief for families and children",
                                    "Medicine and urgent care needs",
                                    "Sustainable help (farm animals/basic supplies)",
                                    "Practical non-violent safety improvements",
                                    "Ministry outreach, discipleship resources, pastoral care"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle className="text-golden-yellow shrink-0 mt-1" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-xl my-8">
                                <div className="flex gap-4">
                                    <ShieldAlert className="text-gray-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mt-0">A Note on Safety & Non-Violence</h4>
                                        <p className="text-sm m-0 font-medium">
                                            We operate in an area affected by armed extremists and criminal banditry.
                                            We support legitimate safety measures for the community.
                                            <span className="block mt-2 font-bold">We do not fund weapons or anything intended to harm others.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-12 mb-4">Stewardship & Transparency</h3>
                            <p>
                                We maintain direct, verified contact with leadership on the ground. All needs are designated and verified.
                                We publish updates on impact while carefully protecting the exact location and identity of our partners
                                due to security risks.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28">
                            <GiveBox
                                campaignName="Victory Church Nigeria Campaign"
                                paypalItemNumber="Victory Church Nigeria Campaign"
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
