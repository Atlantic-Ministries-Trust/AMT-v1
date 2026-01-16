import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "Patriotism & Faith | Atlantic Ministries Trust 🇺🇸",
    description: "Exploring the biblical roots of American liberty. God and Country are complimentary, not contradictory. ✝️",
});

export default function PatriotismFaith() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-24 px-4 container mx-auto animate-fade-in-up md:pt-48">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-block px-4 py-1 bg-red-600 text-white rounded-full text-xs font-black uppercase tracking-[0.2em]">
                        God & Country
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-black text-royal-blue mb-4 uppercase tracking-tighter">
                        Patriotism <br />& Faith
                    </h1>
                    <div className="h-2 w-24 bg-golden-yellow mx-auto rounded-full" />
                    <p className="mt-8 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
                        Exploring the biblical roots of American liberty and our responsibility as citizens of two kingdoms.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white rotate-2 group hover:rotate-0 transition-all duration-700">
                            <Image
                                src="/images/patriotism-faith.png"
                                alt="American Heritage"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-royal-blue/20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                                <div>
                                    <p className="text-golden-yellow uppercase font-black tracking-widest text-sm mb-2">Our Foundation</p>
                                    <h3 className="text-white text-3xl font-serif font-black italic">Endowed by Their Creator</h3>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="prose prose-xl mx-auto text-gray-600 font-medium leading-relaxed space-y-8">
                                <p className="text-2xl font-serif italic text-royal-blue border-l-8 border-golden-yellow pl-8">
                                    "We believe that love for God and love for country are not mutually exclusive but profoundly complimentary. A nation that honors God is a nation that prospers in true liberty."
                                </p>
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">Our Heritage</h3>
                                    <p>
                                        America was founded on biblical principles that recognize the inherent dignity of every individual endowed by their Creator with unalienable rights.
                                        This wasn't just political theory; it was a theological conviction that human rights come from God, not from government.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div className="space-y-8">
                                <h3 className="text-4xl font-serif font-black text-golden-yellow uppercase tracking-tight italic">The Christian Patriot</h3>
                                <div className="prose prose-xl text-blue-50 font-medium leading-relaxed space-y-6">
                                    <p>
                                        A Christian patriot is one who prays for their leaders, obeys just laws, stands against injustice, and actively works for the peace and prosperity of their city (Jeremiah 29:7).
                                    </p>
                                    <p>
                                        We reject the notion that faith should be private; rather, it should inform every aspect of our public life. To love our neighbor is to care about the laws and values that shape their world.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md">
                                <div className="text-center space-y-8">
                                    <span className="text-5xl">📖</span>
                                    <p className="font-serif text-3xl italic text-gray-100 leading-tight">
                                        "Blessed is the nation whose God is the Lord, the people he chose for his inheritance."
                                    </p>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="h-1 w-12 bg-golden-yellow rounded-full" />
                                        <p className="font-black text-golden-yellow uppercase tracking-widest text-sm">Psalm 33:12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
