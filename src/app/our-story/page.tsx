import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Atlantic Ministries Trust",
    description: "From Schenectady to the world. Learn about the history and heritage of Atlantic Ministries Trust.",
};

export default function OurStory() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Our Story</h1>
                        <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/our-story.png"
                                alt="Historic Bible and Map of Schenectady"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="prose prose-lg text-gray-700">
                            <p className="lead font-serif text-xl text-royal-blue">
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
            <Footer />
        </main>
    );
}
