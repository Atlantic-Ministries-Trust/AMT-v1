import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Atlantic Ministries Trust",
    description: "Our commitment to your privacy and data protection.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-royal-blue mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-gray-700 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                Atlantic Ministries Trust ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website atlanticministries.org.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information Collection</h2>
                            <p>
                                We may collect personal information such as your name, email address, and phone number when you voluntarily provide it to us through our contact forms or donation portal.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Contact Information (Name, Email, Phone)</li>
                                <li>Donation Details (processed through secure third-party portals like PayPal)</li>
                                <li>Usage Data (IP address, browser type, visited pages)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
                            <p>
                                We use the collected information to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to your inquiries</li>
                                <li>Process your donations and send tax receipts</li>
                                <li>Send you updates about our ministry (only if you opt-in)</li>
                                <li>Improve our website functionality and user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions regarding this privacy policy, you may contact us at info@atlanticministries.org.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
