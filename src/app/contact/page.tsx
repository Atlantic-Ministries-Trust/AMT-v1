import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Atlantic Ministries Trust",
    description: "Get in touch with Atlantic Ministries Trust. Visit us in Schenectady, call, or send a message.",
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 px-4 container mx-auto animate-fade-in-up md:pt-40">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-royal-blue mb-4 uppercase tracking-tighter">Contact Us</h1>
                    <div className="h-1.5 w-24 bg-golden-yellow mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Info Column */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="font-serif text-2xl font-black text-royal-blue mb-8">Connection Details</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <MapPin className="w-6 h-6 text-golden-yellow shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-black text-royal-blue uppercase text-xs tracking-widest mb-1">Our Location</h4>
                                        <p className="text-gray-700 font-bold leading-relaxed">1737 Union Street, Suite 173<br />Schenectady, NY 12309</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Phone className="w-6 h-6 text-golden-yellow shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-black text-royal-blue uppercase text-xs tracking-widest mb-1">Phone Number</h4>
                                        <p className="text-gray-700 font-bold leading-relaxed">
                                            <a href="tel:+15182885654" className="hover:text-royal-blue">+1 (518) 288-5654</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Mail className="w-6 h-6 text-golden-yellow shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-black text-royal-blue uppercase text-xs tracking-widest mb-1">Email Address</h4>
                                        <p className="text-gray-700 font-bold leading-relaxed">info@atlanticministries.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100">
                            <Image
                                src="/images/contact-hero.png"
                                alt="Connect with Atlantic Ministries"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-serif text-2xl font-black text-royal-blue mb-8">Send a Message</h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
