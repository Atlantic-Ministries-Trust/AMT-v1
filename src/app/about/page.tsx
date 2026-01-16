import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "About Us | Atlantic Ministries Trust ✝️",
    description: "Meet the leadership, explore our history, and discover the vision behind Atlantic Ministries Trust. Serving Schenectady and beyond. ⛪",
});

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-24 px-4 container mx-auto animate-fade-in-up md:pt-48">
                {/* Title */}
                <div className="text-center mb-24 max-w-4xl mx-auto space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-royal-blue/10 text-royal-blue rounded-full text-sm font-black uppercase tracking-widest mb-4">
                        Our Identity & Purpose
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-black text-royal-blue mb-4 uppercase tracking-tighter leading-none">
                        Driven by Faith, <br />Rooted in Freedom
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                        Discover the hearts behind the mission to serve Schenectady and the global commission.
                    </p>
                    <div className="h-2 w-32 bg-golden-yellow mx-auto rounded-full mt-8" />
                </div>

                {/* Section 1: Leadership & Vision */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="font-serif text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">Leadership & Vision</h2>
                            <p className="text-royal-blue font-bold text-lg tracking-widest uppercase">Serving the servant-hearted</p>
                        </div>
                        <div className="prose prose-xl text-gray-600 leading-relaxed font-medium space-y-6">
                            <p>
                                Atlantic Ministries Trust is led by a dedicated team of believers who share a profound love for both our Country and Christ.
                                We recognize that leadership in the Kingdom is measured by sacrifice, not status.
                            </p>
                            <p>
                                Our leadership is committed to the Great Commission, ensuring that every action we take—whether local outreach in Schenectady or missions in West Africa—honors God and strengthens our nation's spiritual foundation.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-royal-blue">
                                <p className="italic text-gray-800 font-serif">
                                    "Our vision is to see a generation of believers who are not only secure in their eternal destination but active in their earthly assignment."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-royal-blue rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform duration-700 opacity-10" />
                        <div className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700">
                            <Image
                                src="/images/leadership.png"
                                alt="Atlantic Ministries Trust Leadership Team"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-12">
                                <span className="text-golden-yellow font-black uppercase tracking-widest text-sm">Our Core Team</span>
                                <h3 className="text-white text-2xl font-serif font-black italic">Committed to Service</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Our Story */}
                <div className="bg-gray-900 text-white rounded-[4rem] p-12 md:p-24 mb-32 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 w-96 h-96 bg-royal-blue/20 rounded-full -mr-48 -mt-48 blur-3xl" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 order-2 lg:order-1 group">
                            <Image
                                src="/images/about-heritage.png"
                                alt="Historic Schenectady Heritage"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-royal-blue/30" />
                        </div>
                        <div className="space-y-10 order-1 lg:order-2">
                            <div className="space-y-4">
                                <h2 className="font-serif text-4xl md:text-6xl font-black text-golden-yellow uppercase tracking-tighter">Our Story</h2>
                                <h3 className="text-2xl font-serif italic text-blue-200">From Local Soil to Global Shores</h3>
                            </div>
                            <div className="prose prose-xl text-blue-50 leading-relaxed font-medium max-w-2xl space-y-6">
                                <p className="text-xl">
                                    Founded in the heart of Schenectady, NY, Atlantic Ministries Trust began with a simple yet powerful vision: to bridge the gap between faith and civic duty.
                                </p>
                                <p>
                                    Our roots run deep in the history of New York, where the desire for spiritual revival historically met the need for patriotic renewal. We stand on the shoulders of giants who understood that freedom is a gift from God, requiring stewardship and constant prayer.
                                </p>
                                <p>
                                    We are named "Atlantic" to signify our scope—looking outward to the world from the shores of the East, serving the Great Commission from our local community to the ends of the earth.
                                </p>
                                <div className="pt-6">
                                    <div className="h-1 w-20 bg-golden-yellow rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Values */}
                <div className="space-y-20">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <h2 className="font-serif text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tight">Our Pillars</h2>
                        <p className="text-xl text-gray-500 font-medium">The non-negotiables that define every campaign we launch and every resource we provide.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="group bg-white p-12 rounded-[2.5rem] border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-royal-blue group-hover:text-white transition-colors duration-500">
                                <span className="font-serif text-4xl font-black italic">✝️</span>
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase text-royal-blue tracking-tighter">Faith</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                Unwavering belief in the Gospel of Jesus Christ as the only hope for mankind. We lead with prayer and anchored truth in everything we do.
                            </p>
                        </div>

                        <div className="group bg-white p-12 rounded-[2.5rem] border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                            <div className="w-20 h-20 bg-golden-yellow/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-golden-yellow group-hover:text-royal-blue transition-colors duration-500">
                                <span className="font-serif text-4xl font-black italic">🏠</span>
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase text-royal-blue tracking-tighter">Family</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                Strengthening the traditional family unit as the building block of a godly society. We support households with practical needs and spiritual health.
                            </p>
                        </div>

                        <div className="group bg-white p-12 rounded-[2.5rem] border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                            <div className="w-20 h-20 bg-royal-blue/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-500">
                                <span className="font-serif text-4xl font-black italic">🇺🇸</span>
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase text-royal-blue tracking-tighter">Freedom</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-lg">
                                Defending the God-given liberties enshrined in our Constitution. We believe a free church and a free people can change the world for good.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
