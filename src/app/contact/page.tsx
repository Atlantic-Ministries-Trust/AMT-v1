import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

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
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-royal-blue mb-4">Contact Us</h1>
                    <div className="h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <h3 className="font-serif text-2xl font-bold text-royal-blue mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-golden-yellow shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-800">Visit Us</h4>
                                        <p className="text-gray-600">1737 Union Street, Suite 173<br />Schenectady, NY 12309</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-golden-yellow shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800">Call Us</h4>
                                        <p className="text-gray-600"><a href="tel:+15182885654" className="hover:text-royal-blue">+1 (518) 288-5654</a></p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-golden-yellow shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-800">Email Us</h4>
                                        <p className="text-gray-600">info@atlanticministries.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg border-2 border-golden-yellow/20">
                            <Image
                                src="/images/contact-hero.png"
                                alt="Connect with Atlantic Ministries"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="font-serif text-2xl font-bold text-royal-blue mb-6">Send a Message</h3>
                        <form className="space-y-6" action="mailto:info@atlanticministries.org" method="post" encType="text/plain">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-royal-blue uppercase tracking-tight">Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold placeholder:text-gray-400 focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all shadow-sm resize-none"
                                ></textarea>
                            </div>
                            <Button className="w-full py-6 text-lg" type="submit">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
