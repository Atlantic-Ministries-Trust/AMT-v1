import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-24 pb-16 px-4 container mx-auto animate-fade-in-up">
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

                        {/* Map Placeholder */}
                        <div className="h-[300px] bg-gray-200 rounded-xl relative overflow-hidden flex items-center justify-center text-gray-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.347529683!2d-73.91!3d42.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de720000000000%3A0x0!2zMTczNyBVbmlvbiBTdCAjMTczLCBTY2hlbmVjdGFkeSwgTlkgMTIzMDk!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-[.8]"
                            />
                            <span className="relative z-10 bg-white/80 p-2 rounded pointer-events-none">Map View</span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="font-serif text-2xl font-bold text-royal-blue mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-royal-blue focus:border-transparent outline-none transition-all"></textarea>
                            </div>
                            <Button className="w-full py-6 text-lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
