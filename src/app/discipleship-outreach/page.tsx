import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

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

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="font-serif text-2xl font-bold text-royal-blue mb-4">Biblical Training</h3>
                        <p className="text-gray-600 mb-6">
                            We offer deep-dive study groups and resources to help you understand Scripture and apply it to daily life.
                        </p>
                        <Button variant="outline">View Resources</Button>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="font-serif text-2xl font-bold text-royal-blue mb-4">Community Outreach</h3>
                        <p className="text-gray-600 mb-6">
                            From food drives to street evangelism, we are the hands and feet of Jesus in Schenectady.
                        </p>
                        <Button variant="primary">Get Involved</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
