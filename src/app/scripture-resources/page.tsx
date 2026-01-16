import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

const resources = [
    { title: "The Gospel of John", type: "Reading Plan", description: "A 21-day journey through the life of Jesus." },
    { title: "Foundations of Faith", type: "Study Guide", description: "Core doctrines every believer should know." },
    { title: "Prayers for the Nation", type: "Collection", description: "Scriptural prayers for leaders and country." },
    { title: "Psalms of Comfort", type: "Reading List", description: "Selected Psalms for difficult times." },
];

export const metadata: Metadata = {
    title: "Scripture Resources | Atlantic Ministries Trust",
    description: "A library of biblical readings, daily devotions, and study guides for the Christian walk.",
};

export default function ScriptureResources() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Scripture Resources</h1>
                    <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                    <p className="mt-6 text-xl text-gray-600">A library of selected biblical readings and standards.</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Daily Devotion Feature */}
                    <div className="bg-royal-blue rounded-xl p-8 md:p-12 text-white mb-16 text-center">
                        <h2 className="font-serif text-3xl font-bold text-golden-yellow mb-6">Daily Devotion</h2>
                        <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                            <p className="text-xl md:text-2xl italic font-serif mb-4">"Thy word is a lamp unto my feet, and a light unto my path."</p>
                            <p className="font-bold text-golden-yellow uppercase tracking-widest">— Psalm 119:105</p>
                        </div>
                        <p className="mt-8 text-gray-200">
                            Start your day with truth. We provide daily readings and reflections to guide your walk with Christ.
                        </p>
                        <Button variant="secondary" className="mt-6" size="lg">Read Today's Devotion</Button>
                    </div>

                    <h2 className="font-serif text-3xl font-bold text-royal-blue mb-8 text-center">Resource Library</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {resources.map((res, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="text-xs font-bold text-golden-yellow uppercase tracking-wider mb-3 bg-royal-blue/5 inline-block px-3 py-1 rounded-full">{res.type}</div>
                                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">{res.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{res.description}</p>
                                <Button variant="outline" size="sm" className="w-full">Access Resource</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
