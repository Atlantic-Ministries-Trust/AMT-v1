import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patriotism & Faith | Atlantic Ministries Trust",
    description: "Exploring the biblical roots of American liberty. God and Country are complimentary, not contradictory.",
};

export default function PatriotismFaith() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Patriotism & Faith</h1>
                    <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white mb-8">
                        <Image
                            src="/images/patriotic.png"
                            alt="Eagle, Cross and Flag"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white text-xl font-serif italic">"God and Country"</p>
                        </div>
                    </div>

                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p>
                            We believe that love for God and love for country are not mutually exclusive but complimentary.
                            A nation that honors God is a nation that prospers in true liberty.
                        </p>
                        <h3>Our Heritage</h3>
                        <p>
                            America was founded on biblical principles that recognize the inherent dignity of every individual
                            endowed by their Creator with unalienable rights. We seek to preserve this heritage by educating
                            citizens on the spiritual roots of our nation.
                        </p>
                        <h3>The Christian Patriot</h3>
                        <p>
                            A Christian patriot is one who prays for their leaders, obeys just laws, stands against injustice,
                            and actively works for the peace and prosperity of their city (Jeremiah 29:7).
                            We reject the notion that faith should be private; rather, it should inform every aspect of our public life.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-8 rounded-xl border-l-4 border-royal-blue quote">
                        <p className="font-serif text-xl italic text-gray-800">
                            "Blessed is the nation whose God is the Lord."
                        </p>
                        <p className="mt-4 font-bold text-gray-600">— Psalm 33:12</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
