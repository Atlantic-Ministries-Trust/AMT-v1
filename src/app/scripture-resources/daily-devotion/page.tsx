import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Daily Devotion | Atlantic Ministries Trust",
    description: "Extensive biblical readings and daily reflections for the faithful.",
};

export default function DailyDevotion() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-golden-yellow font-black uppercase tracking-[0.2em] text-sm md:text-base">Mornings with the Word</span>
                        <h1 className="font-serif text-4xl md:text-6xl font-black text-royal-blue mt-2 mb-4">Daily Devotional</h1>
                        <div className="h-1.5 w-32 bg-golden-yellow mx-auto rounded-full shadow-sm" />
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl mb-12">
                        <div className="prose prose-xl prose-stone mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-royal-blue italic">"The Anchor of Hope"</h2>
                            <p className="text-lg text-gray-500 italic mb-8">Reading: Hebrews 6:13-20</p>

                            <p>
                                In the ancient world, an anchor was more than just a tool for sailors; it was a symbol of security in the midst of a violent sea. When the author of Hebrews speaks of our hope as a "sure and steadfast anchor of the soul," he is speaking to people who felt the waves of persecution and uncertainty crashing against their lives.
                            </p>

                            <blockquote className="border-l-4 border-golden-yellow pl-6 py-2 my-8 not-italic">
                                <p className="text-2xl font-serif text-gray-800">
                                    "Which hope we have as an anchor of the soul, both sure and steadfast, and which entereth into that within the veil."
                                </p>
                                <footer className="text-gray-500 font-bold mt-2">— Hebrews 6:19 (KJV)</footer>
                            </blockquote>

                            <h3 className="text-2xl font-bold text-royal-blue mt-12 mb-4">Reflection</h3>
                            <p>
                                Where is your anchor dropped today? If it is dropped into the shifting sands of politics, finances, or even family, you will find yourself drifting when the storms of life intensify. But there is an anchor that reaches "within the veil"—into the very presence of God where Jesus has gone before us.
                            </p>

                            <p>
                                A Christian patriot understands that while we love our country, our ultimate citizenship and our ultimate security are found in Christ alone. When we stand on the Truth of Scripture, we are anchored to something that the world cannot move. The storms may howl, the winds may blow, but the Anchor holds.
                            </p>

                            <h3 className="text-2xl font-bold text-royal-blue mt-12 mb-4">Prayer</h3>
                            <p className="italic text-gray-700">
                                Heavenly Father, we thank You that Your promises are immutable. When the world around us feels like a raging sea, remind us that our hope is anchored in Your Son, Jesus Christ. Give us the strength to stand firm for Truth, for Family, and for the Freedom we have in You. Amen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
