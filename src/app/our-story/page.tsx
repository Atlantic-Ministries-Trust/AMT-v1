import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function OurStory() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Our Story</h1>
                        <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                    </div>

                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p>
                            Founded in the heart of Schenectady, NY, Atlantic Ministries Trust began with a simple yet powerful vision:
                            to bridge the gap between faith and civic duty.
                        </p>
                        <p>
                            Our roots run deep in New York soil, where the desire for spiritual revival met the need for patriotic renewal.
                            What started as a small gathering has grown into a ministry dedicated to equipping believers to stand firm in their faith
                            while actively participating in the stewardship of their community and country.
                        </p>
                        <p>
                            We are named "Atlantic" to signify our scope—from the shores of the East Coast, looking outward to the world,
                            serving the Great Commission from our local community to the ends of the earth.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
