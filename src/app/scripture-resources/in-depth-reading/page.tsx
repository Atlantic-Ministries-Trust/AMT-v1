import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Foundations of Faith | Atlantic Ministries Trust",
    description: "In-depth biblical training and theological study guides.",
};

export default function InDepthReading() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-golden-yellow font-black uppercase tracking-[0.2em] text-sm md:text-base">Deep Dive Series</span>
                        <h1 className="font-serif text-4xl md:text-6xl font-black text-royal-blue mt-2 mb-4">Foundations of Faith</h1>
                        <div className="h-1.5 w-32 bg-golden-yellow mx-auto rounded-full shadow-sm" />
                    </div>

                    <div className="space-y-16">
                        <section className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-3xl font-serif font-bold text-royal-blue border-b-2 border-golden-yellow/20 pb-4">I. The Authority of Scripture</h2>
                            <p>
                                The foundation of every true ministry and every free society is the acknowledgement of an absolute Truth. At Atlantic Ministries Trust, we hold that the 66 books of the Bible are the inspired, inerrant, and final authority for all matters of faith and practice.
                            </p>
                            <p>
                                <strong>Sola Scriptura:</strong> This principle, recovered during the Reformation, asserts that Scripture alone is the final court of appeal. In an age of "subjective truth" and ever-shifting cultural norms, the Word of God remains an immovable rock.
                            </p>
                        </section>

                        <section className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-3xl font-serif font-bold text-royal-blue border-b-2 border-golden-yellow/20 pb-4">II. The Doctrine of Man & Liberty</h2>
                            <p>
                                To understand American Patriotism through a biblical lens, one must understand the *Imago Dei*—that humans are created in the image of God. This is the spiritual root of the "unalienable rights" mentioned in our founding documents.
                            </p>
                            <p>
                                Because man is created by God, his fundamental rights are given by God, not granted by the State. Therefore, the State's role is not to grant rights, but to protect those pre-existing God-given liberties. When a nation forgets God, it inevitably begins to trample on the Rights of Man.
                            </p>
                        </section>

                        <section className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-3xl font-serif font-bold text-royal-blue border-b-2 border-golden-yellow/20 pb-4">III. The Great Commission in the Marketplace</h2>
                            <p>
                                Our training focuses on taking the Gospel beyond the four walls of the church. Discipleship is not just personal piety; it is the transformation of the mind so that every sphere of life—business, family, education, and government—is brought under the Lordship of Christ.
                            </p>
                        </section>

                        <div className="bg-royal-blue text-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
                            <h3 className="font-serif text-2xl font-bold text-golden-yellow mb-6">Upcoming Training Seminars</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Biblical Ethics in Business</span>
                                    <span className="font-bold">May 12th</span>
                                </li>
                                <li className="flex justify-between border-b border-white/10 pb-2">
                                    <span>The History of Christian Patriotism</span>
                                    <span className="font-bold">June 15th</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Foundations of Biblical Law</span>
                                    <span className="font-bold">July 22nd</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
