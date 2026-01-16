import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "Discipleship & Outreach | Atlantic Ministries Trust 🤝",
    description: "Training believers and serving the community. Join our Bible studies and outreach programs in Schenectady. ✝️",
});

export default function Discipleship() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-32 pb-24 px-4 container mx-auto animate-fade-in-up md:pt-48">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-royal-blue text-white rounded-full text-xs font-black uppercase tracking-[0.2em]">
                        Equipping the Saints
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-black text-royal-blue mb-4 uppercase tracking-tighter italic">
                        Discipleship & <br />Outreach
                    </h1>
                    <div className="h-2 w-24 bg-golden-yellow mx-auto rounded-full" />
                    <p className="mt-8 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
                        Training believers to walk in the fullness of Christ and reach their neighbors with the Truth—from the classroom to the streets.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-24">
                    <div className="relative min-h-[400px] lg:min-h-full rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
                        <Image
                            src="/images/discipleship-study.png"
                            alt="Bible Study and Discipleship"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-0 left-0 p-12 text-white">
                            <h3 className="text-3xl font-serif font-black italic mb-2">Anchored in the Word</h3>
                            <p className="text-blue-100 font-medium">Equipping you for every good work.</p>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="p-10 bg-white rounded-[3rem] border-2 border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue/5 rounded-full -mr-16 -mt-16 group-hover:bg-royal-blue/10 transition-colors" />
                            <h3 className="font-serif text-3xl font-black text-royal-blue mb-6 uppercase tracking-tight">Biblical Training</h3>
                            <div className="prose prose-lg text-gray-600 mb-8 font-medium leading-relaxed">
                                <p>
                                    We offer deep-dive study groups and resources to help you understand Scripture and apply it to daily life.
                                    Our curriculum focuses on the foundations of the faith, apologetics, and biblical citizenship, ensuring you can "give a reason for the hope that is in you."
                                </p>
                            </div>
                            <Button size="lg" className="w-full sm:w-auto h-16 px-8 text-lg shadow-lg" asChild>
                                <a href="/scripture-resources/in-depth-reading">View Training Manual</a>
                            </Button>
                        </div>

                        <div className="p-10 bg-royal-blue text-white rounded-[3rem] shadow-2xl group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <h3 className="font-serif text-3xl font-black text-golden-yellow mb-6 uppercase tracking-tighter relative z-10">Community Outreach</h3>
                            <div className="prose prose-lg text-blue-50 mb-8 font-medium leading-relaxed relative z-10">
                                <p>
                                    From food drives to street evangelism, we are the hands and feet of Jesus in Schenectady and beyond.
                                    We believe faith without works is dead, and we are committed to serving our neighbors with both bread for their bodies and the Bread of Life for their souls.
                                </p>
                            </div>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-8 text-lg shadow-[8px_8px_0px_rgba(0,0,0,0.2)] relative z-10" asChild>
                                <a href="/contact">Get Involved Now</a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Impact Statement */}
                <div className="max-w-5xl mx-auto bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center border-2 border-white shadow-inner">
                    <h2 className="font-serif text-4xl font-black text-royal-blue mb-8 uppercase italic italic">"Go and Make Disciples"</h2>
                    <p className="text-2xl text-gray-600 font-medium leading-relaxed font-serif italic max-w-3xl mx-auto">
                        It’s not just a suggestion; it’s our primary mandate. Whether through one-on-one mentorship or large-scale community events, everything we do is aimed at pointing people back to the Savior.
                    </p>
                    <div className="mt-12 flex justify-center gap-4">
                        <div className="w-3 h-3 bg-golden-yellow rounded-full" />
                        <div className="w-3 h-3 bg-royal-blue rounded-full" />
                        <div className="w-3 h-3 bg-golden-yellow rounded-full" />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
