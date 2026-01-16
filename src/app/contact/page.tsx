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
                    {/* Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 shadow-sm">
                            <h3 className="font-serif text-3xl font-black text-royal-blue mb-8 uppercase tracking-tighter">Get in Touch</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-royal-blue/10 p-4 rounded-2xl group-hover:bg-royal-blue/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-royal-blue shrink-0" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-royal-blue uppercase text-xs tracking-[0.2em] mb-1">Visit Us</h4>
                                        <p className="text-gray-800 font-bold leading-relaxed text-lg">1737 Union Street, Suite 173<br />Schenectady, NY 12309</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-royal-blue/10 p-4 rounded-2xl group-hover:bg-royal-blue/20 transition-colors">
                                        <Phone className="w-6 h-6 text-royal-blue shrink-0" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-royal-blue uppercase text-xs tracking-[0.2em] mb-1">Call Us</h4>
                                        <p className="text-gray-800 font-bold leading-relaxed text-lg">
                                            <a href="tel:+15182885654" className="hover:text-royal-blue transition-colors tracking-tight">+1 (518) 288-5654</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="bg-royal-blue/10 p-4 rounded-2xl group-hover:bg-royal-blue/20 transition-colors">
                                        <Mail className="w-6 h-6 text-royal-blue shrink-0" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-royal-blue uppercase text-xs tracking-[0.2em] mb-1">Email Us</h4>
                                        <p className="text-gray-800 font-bold leading-relaxed text-lg">info@atlanticministries.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                            <Image
                                src="/images/contact-hero.png"
                                alt="Connect with Atlantic Ministries"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Form Component Container */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-100 shadow-2xl">
                        <h3 className="font-serif text-3xl font-black text-royal-blue mb-8 uppercase tracking-tighter">Send a Message</h3>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
