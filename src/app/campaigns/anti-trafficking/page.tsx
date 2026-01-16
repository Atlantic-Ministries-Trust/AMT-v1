import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Shield, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anti-Trafficking Campaign | Atlantic Ministries Trust",
    description: "Protect the Vulnerable. Stop Exploitation. Combat child and sex trafficking through prevention and support.",
};

export default function AntiTraffickingCampaign() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-royal-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Shield size={18} className="text-golden-yellow" />
                        <span className="font-bold tracking-widest uppercase text-sm">Protect the Vulnerable</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
                        Combat Child &<br />Sex Trafficking
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-8 max-w-3xl mx-auto">
                        "Stop Exploitation. Restore Dignity."
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                We are committed to combating child and sex trafficking through prevention, awareness, and survivor support—working with trusted, vetted partners and local resources.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                                <div className="flex gap-4">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-900 mt-0">Important Safety Notice</h4>
                                        <p className="text-sm m-0 text-red-800 font-medium">
                                            We do not encourage vigilantism. If you suspect trafficking or exploitation, contact local law enforcement immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-12 mb-6">Learn the Signs</h3>
                            <div className="grid sm:grid-cols-2 gap-4 not-prose">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Isolation & Control</h4>
                                    <p className="text-sm">Sudden isolation or control by another person who speaks for them.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Scripted Responses</h4>
                                    <p className="text-sm">Inability to speak freely or seeming rehearsed in their answers.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Signs of Fear</h4>
                                    <p className="text-sm">Visible signs of fear, coercion, or frequent unexplained relocations.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-2">Unexplained Wealth</h4>
                                    <p className="text-sm">Unexplained gifts, money, or expensive items accompanied by secrecy.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28">
                            <GiveBox
                                campaignName="Anti-Trafficking Campaign"
                                paypalItemNumber="Anti-Trafficking Campaign"
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
