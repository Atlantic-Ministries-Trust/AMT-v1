import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GiveBox } from "@/components/giving/GiveBox";
import { ShopToSupport } from "@/components/cta/ShopToSupport";
import { Flag, Heart, Users, CheckCircle, Utensils, Shield, Globe, Info, Dog, AlertTriangle, Sparkles } from "lucide-react";
import { campaigns } from "@/data/campaigns";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import Image from "next/image";

export async function generateStaticParams() {
    return campaigns.map((campaign) => ({
        slug: campaign.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const campaign = campaigns.find((c) => c.slug === slug);
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

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const campaign = campaigns.find((c) => c.slug === slug);

    if (!campaign) {
        notFound();
    }

    const HeroIcon = IconMap[campaign.waysToHelp[2]?.icon] || Flag;

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Background Image */}
            <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-white overflow-hidden min-h-[500px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={campaign.image}
                        alt={campaign.heroTitle}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-royal-blue/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-royal-blue/40 to-black/30" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30 animate-fade-in-up">
                        <HeroIcon size={20} className="text-golden-yellow" />
                        <span className="font-black tracking-[0.2em] uppercase text-xs md:text-sm">{campaign.heroMetadata}</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tighter leading-none animate-fade-in-up delay-100 italic">
                        {campaign.heroTitle}
                    </h1>
                    <p className="text-xl md:text-3xl font-serif italic text-blue-100 mb-10 max-w-4xl mx-auto drop-shadow-md animate-fade-in-up delay-200">
                        "{campaign.heroSubtitle}"
                    </p>
                    {campaign.goal && (
                        <div className="inline-flex items-center gap-3 bg-golden-yellow text-royal-blue font-black text-2xl px-8 py-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transform rotate-[-1deg] animate-scale-in">
                            <Sparkles className="animate-pulse" />
                            {campaign.goal}
                        </div>
                    )}
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-7 space-y-16">
                        <section className="space-y-8">
                            <div className="inline-block border-b-4 border-golden-yellow pb-2">
                                <h2 className="text-royal-blue font-black uppercase text-3xl tracking-tight">Our Mission</h2>
                            </div>
                            <p className="text-2xl font-medium text-gray-700 leading-relaxed font-serif italic border-l-8 border-gray-100 pl-8">
                                {campaign.contentLead}
                            </p>

                            <div className="bg-gray-50 p-10 rounded-[2.5rem] border-2 border-gray-100 shadow-sm space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-royal-blue rounded-2xl text-white shadow-lg">
                                        <Shield size={32} />
                                    </div>
                                    <h3 className="text-royal-blue font-black uppercase text-2xl">How Your Giving Helps</h3>
                                </div>
                                <ul className="grid gap-4">
                                    {campaign.fundsSupport.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm group hover:border-golden-yellow transition-all">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-royal-blue group-hover:bg-golden-yellow group-hover:text-white transition-colors">
                                                <CheckCircle size={24} />
                                            </div>
                                            <span className="font-bold text-gray-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Ways to Help Icons */}
                        <section className="space-y-8">
                            <h3 className="text-royal-blue font-black uppercase text-xl tracking-widest text-center">Engagement Channels</h3>
                            <div className="grid grid-cols-3 gap-6">
                                {campaign.waysToHelp.map((way, i) => {
                                    const Icon = IconMap[way.icon] || Heart;
                                    return (
                                        <div key={i} className="bg-white p-8 rounded-3xl text-center border-2 border-gray-100 hover:border-royal-blue/20 hover:shadow-xl transition-all group">
                                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <Icon className="text-royal-blue" size={32} />
                                            </div>
                                            <span className="font-black text-gray-900 uppercase tracking-tighter text-sm">{way.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Special Pledge Section */}
                        {campaign.pledge && (
                            <section className="bg-royal-blue text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden-yellow/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                                <div className="relative z-10 space-y-6 text-center">
                                    <div className="w-20 h-2 bg-golden-yellow mx-auto rounded-full" />
                                    <h3 className="font-serif text-4xl font-black text-golden-yellow uppercase tracking-tight italic">
                                        {campaign.pledge.title}
                                    </h3>
                                    <p className="text-2xl font-medium italic leading-relaxed text-blue-50 max-w-2xl mx-auto">
                                        {campaign.pledge.text}
                                    </p>
                                    <div className="pt-6">
                                        <Users className="mx-auto text-golden-yellow/50" size={48} />
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar with Giving Box */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28 space-y-8">
                            <GiveBox
                                campaignName={campaign.heroTitle}
                                paypalItemNumber={campaign.paypalItemNumber}
                            />

                            {/* How It Works (if present) */}
                            {campaign.howItWorks && (
                                <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
                                    <h3 className="font-black uppercase text-xl tracking-widest text-golden-yellow border-b border-white/10 pb-4">
                                        {campaign.howItWorks.title}
                                    </h3>
                                    <div className="space-y-6">
                                        {campaign.howItWorks.steps.map((step, i) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="bg-golden-yellow text-royal-blue w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0 group-hover:rotate-12 transition-transform">
                                                    {i + 1}
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-white uppercase text-sm tracking-wide">{step.title}</h4>
                                                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{step.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop CTA */}
            <div className="container mx-auto px-4 pb-24">
                <ShopToSupport />
            </div>

            <Footer />
        </main>
    );
}
