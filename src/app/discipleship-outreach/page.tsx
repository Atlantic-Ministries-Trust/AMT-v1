import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discipleship & Outreach | Atlantic Ministries Trust",
    description: "Training believers and serving the community. Join our Bible studies and outreach programs in Schenectady.",
};

export default function Discipleship() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Discipleship & Outreach</h1>
                    <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                        Training believers to walk in the fullness of Christ and reach their neighbors with the Truth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    <div className="relative h-[300px] md:h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg border-2 border-golden-yellow/20">
                        <Image
                            src="/images/discipleship.png"
                            alt="Bible Study and Discipleship"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-white">
                            <h3 className="font-serif text-2xl font-bold text-royal-blue mb-4">Biblical Training</h3>
                            <p className="text-gray-600 mb-6">
                                We offer deep-dive study groups and resources to help you understand Scripture and apply it to daily life.
                                Our curriculum focuses on the foundations of the faith, apologetics, and biblical citizenship.
                            </p>
                            <Button variant="outline" asChild><a href="/scripture-resources">View Resources</a></Button>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow bg-royal-blue text-white">
                            <h3 className="font-serif text-2xl font-bold text-golden-yellow mb-4">Community Outreach</h3>
                            <p className="text-gray-100 mb-6">
                                From food drives to street evangelism, we are the hands and feet of Jesus in Schenectady.
                                We believe faith without works is dead, and we are committed to serving our neighbors.
                            </p>
                            <Button variant="secondary" asChild><a href="/contact">Get Involved</a></Button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
