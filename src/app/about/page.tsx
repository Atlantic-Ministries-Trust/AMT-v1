import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Atlantic Ministries Trust",
    description: "Meet the leadership, explore our history, and discover the vision behind Atlantic Ministries Trust.",
};

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40">
                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-royal-blue mb-4 uppercase tracking-tighter">About Us</h1>
                    <div className="h-1.5 w-24 bg-golden-yellow mx-auto rounded-full" />
                </div>

                {/* Section 1: Leadership & Vision */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-black text-gray-900 uppercase tracking-tight">Leadership & Vision</h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                            <p>
                                Atlantic Ministries Trust is led by a dedicated team of believers who share a profound love for both our Country and Christ.
                                We believe that true leadership starts with service, and our mission is to serve the community of Schenectady and beyond.
                            </p>
                            <p>
                                Our leadership is committed to the Great Commission, ensuring that every action we take honors God and strengthens our nation's spiritual foundation.
                                We are not just an organization; we are a family united by a common purpose to see revival in our land.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/images/leadership.png"
                            alt="Atlantic Ministries Trust Leadership Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Section 2: Our Story */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-24 border border-gray-100 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-1 hover:rotate-0 transition-transform duration-500 order-2 md:order-1">
                            <Image
                                src="/images/our-story.png"
                                alt="Historic Bible and Map of Schenectady"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <h2 className="font-serif text-3xl font-black text-gray-900 uppercase tracking-tight">Our Story</h2>
                            <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                                <p className="text-royal-blue font-bold text-xl">
                                    Founded in the heart of Schenectady, NY, Atlantic Ministries Trust began with a simple yet powerful vision:
                                    to bridge the gap between faith and civic duty.
                                </p>
                                <p>
                                    Our roots run deep in New York soil, where the desire for spiritual revival met the need for patriotic renewal.
                                    What started as a small gathering has grown into a ministry dedicated to equipping believers to stand firm in their faith.
                                </p>
                                <p>
                                    We are named "Atlantic" to signify our scope—from the shores of the East Coast, looking outward to the world,
                                    serving the Great Commission from our local community to the ends of the earth. We stand on the shoulders of
                                    giants who built this nation on biblical truth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Values */}
                <div className="bg-royal-blue text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="font-serif text-3xl md:text-4xl font-black mb-12 text-golden-yellow uppercase tracking-tight">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-2xl font-black mb-4 uppercase">Faith</h3>
                                <p className="text-blue-100 font-medium leading-relaxed">Unwavering belief in the Gospel of Jesus Christ as the only hope for mankind.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-2xl font-black mb-4 uppercase">Family</h3>
                                <p className="text-blue-100 font-medium leading-relaxed">Strengthening the traditional family unit as the building block of a godly society.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-2xl font-black mb-4 uppercase">Freedom</h3>
                                <p className="text-blue-100 font-medium leading-relaxed">Defending the God-given liberties enshrined in our Constitution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
