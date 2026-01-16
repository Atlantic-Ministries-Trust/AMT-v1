import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Heart, CheckCircle, Info } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veterans + Unwanted Dogs | Atlantic Ministries Trust",
    description: "Support veterans by pairing them with unwanted dogs—providing companionship and renewed purpose.",
};

export default function VeteransDogsCampaign() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-royal-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Heart size={18} className="text-golden-yellow" />
                        <span className="font-bold tracking-widest uppercase text-sm">Companionship & Purpose</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
                        Veterans +<br />Unwanted Dogs
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-8 max-w-3xl mx-auto">
                        "Bringing them together for renewed purpose."
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                Many veterans carry heavy burdens in silence. Many dogs sit unwanted with nowhere to go.
                                We help bring them together—offering companionship, renewed purpose, and practical support.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-royal-blue p-6 rounded-r-xl my-8">
                                <div className="flex gap-4">
                                    <Info className="text-royal-blue shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-royal-blue mt-0">Important Note</h4>
                                        <p className="text-sm m-0">These are companion pairings; we do not claim service-animal certification unless explicitly stated.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-8 mb-4">Funds Cover</h3>
                            <ul className="grid gap-4 list-none pl-0">
                                {[
                                    "Adoption fees",
                                    "Basic supplies (food, beds, leashes)",
                                    "Initial vet checks when applicable",
                                    "Training support when applicable",
                                    "Coordination with shelters & rescues"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle className="text-golden-yellow shrink-0 mt-1" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28">
                            <GiveBox
                                campaignName="Veterans + Dogs Campaign"
                                paypalItemNumber="Veterans + Dogs Campaign"
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
