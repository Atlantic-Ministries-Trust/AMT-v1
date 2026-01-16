import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Flag, Heart, Users, CheckCircle, Utensils, Shield, Globe, Info, Dog, AlertTriangle } from "lucide-react";
import { campaigns } from "@/data/campaigns";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
    return campaigns.map((campaign) => ({
        slug: campaign.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const campaign = campaigns.find((c) => c.slug === params.slug);
    if (!campaign) return {};

    return constructMetadata({
        title: campaign.title,
        description: campaign.description,
    });
}

const IconMap: { [key: string]: any } = {
    flag: Flag,
    heart: Heart,
    users: Users,
    utensils: Utensils,
    shield: Shield,
    globe: Globe,
    info: Info,
    dog: Dog,
    alert: AlertTriangle,
};

export default function CampaignPage({ params }: { params: { slug: string } }) {
    const campaign = campaigns.find((c) => c.slug === params.slug);

    if (!campaign) {
        notFound();
    }

    const HeroIcon = IconMap[campaign.waysToHelp[2]?.icon] || Flag;

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-royal-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                        <HeroIcon size={18} className="text-golden-yellow" />
                        <span className="font-bold tracking-widest uppercase text-sm">{campaign.heroMetadata}</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
                        {campaign.heroTitle}
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-8 max-w-3xl mx-auto">
                        {campaign.heroSubtitle}
                    </p>
                    {campaign.goal && (
                        <div className="inline-block bg-white text-royal-blue font-black text-xl px-6 py-3 rounded-xl shadow-lg transform rotate-[-2deg]">
                            {campaign.goal}
                        </div>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                {campaign.contentLead}
                            </p>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-8 mb-4">Funds Support</h3>
                            <ul className="grid gap-4 list-none pl-0">
                                {campaign.fundsSupport.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle className="text-golden-yellow shrink-0 mt-1" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-royal-blue font-black uppercase text-xl mt-12 mb-4">Ways to Help</h3>
                            <div className="grid sm:grid-cols-3 gap-4 not-prose">
                                {campaign.waysToHelp.map((way, i) => {
                                    const Icon = IconMap[way.icon] || Heart;
                                    return (
                                        <div key={i} className="bg-blue-50 p-4 rounded-xl text-center">
                                            <Icon className="mx-auto text-royal-blue mb-2" />
                                            <span className="font-bold block text-sm">{way.label}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {campaign.pledge && (
                                <div className="bg-royal-blue text-white p-8 rounded-2xl mt-12 shadow-xl relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="font-serif text-2xl font-black text-golden-yellow mb-4 uppercase">{campaign.pledge.title}</h3>
                                        <p className="text-lg font-medium italic leading-relaxed">
                                            {campaign.pledge.text}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {campaign.howItWorks && (
                                <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 my-8">
                                    <h3 className="text-royal-blue font-black uppercase text-xl mb-6">{campaign.howItWorks.title}</h3>
                                    <div className="space-y-6">
                                        {campaign.howItWorks.steps.map((step, i) => (
                                            <div key={i} className="flex gap-4">
                                                <div className="bg-royal-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                                                    <p className="text-sm">{step.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28">
                            <GiveBox
                                campaignName={campaign.heroTitle}
                                paypalItemNumber={campaign.paypalItemNumber}
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
