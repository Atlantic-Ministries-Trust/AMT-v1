import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const resources = [
    { title: "The Gospel of John", type: "Reading Plan", description: "A 21-day journey through the life of Jesus." },
    { title: "Foundations of Faith", type: "Study Guide", description: "Core doctrines every believer should know." },
    { title: "Prayers for the Nation", type: "Collection", description: "Scriptural prayers for leaders and country." },
    { title: "Psalms of Comfort", type: "Reading List", description: "Selected Psalms for difficult times." },
];

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

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {resources.map((res, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-sm font-bold text-golden-yellow uppercase tracking-wider mb-2">{res.type}</div>
                            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">{res.title}</h3>
                            <p className="text-gray-600">{res.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
