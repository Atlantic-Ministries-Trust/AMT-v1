import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function WhoWeAre() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Who We Are</h1>
                    <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="font-serif text-2xl font-bold text-gray-800">Leadership & Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Atlantic Ministries Trust is led by a dedicated team of believers who share a profound love for both our Country and Christ.
                            We believe that true leadership starts with service, and our mission is to serve the community of Schenectady and beyond.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our leadership is committed to the Great Commission, ensuring that every action we take honors God and strengthens our nation's spiritual foundation.
                        </p>
                    </div>
                    <div className="bg-gray-100 h-[400px] rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">
                        [Leadership Team Image Placeholder]
                    </div>
                </div>

                {/* Values */}
                <div className="bg-royal-blue text-white rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="font-serif text-3xl font-bold mb-8 text-golden-yellow">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Faith</h3>
                            <p className="text-gray-300">Unwavering belief in the Gospel of Jesus Christ as the only hope for mankind.</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Family</h3>
                            <p className="text-gray-300">Strengthening the traditional family unit as the building block of a godly society.</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Freedom</h3>
                            <p className="text-gray-300">Defending the God-given liberties enshrined in our Constitution.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
