import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-royal-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="relative h-16 w-16 mb-4 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 p-1">
                            <Image
                                src="/images/logo.png"
                                alt="Atlantic Ministries Trust"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-serif text-lg font-bold">Atlantic Ministries Trust</h3>
                        <p className="text-gray-300 text-sm">
                            Faith, Family, and Freedom. Serving the Great Commission from Schenectady to the Ends of the Earth.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-bold text-golden-yellow">Contact Us</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-golden-yellow shrink-0" />
                                <span>1737 Union Street, Suite 173<br />Schenectady, NY 12309</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-golden-yellow shrink-0" />
                                <a href="tel:+15182885654" className="hover:text-white transition-colors">+1 (518) 288-5654</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-golden-yellow shrink-0" />
                                <a href="mailto:info@atlanticministries.org" className="hover:text-white transition-colors">info@atlanticministries.org</a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-bold text-golden-yellow">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
                            <li><Link href="/discipleship-outreach" className="hover:text-white transition-colors">Discipleship</Link></li>
                            <li><Link href="/scripture-resources" className="hover:text-white transition-colors">Scripture Resources</Link></li>
                            <li><Link href="/donate" className="hover:text-white transition-colors">Make a Donation</Link></li>
                            <li><Link href="/privacy" className="hover:text-golden-yellow transition-colors font-bold">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-black text-golden-yellow uppercase tracking-tighter">Mission Statement</h4>
                        <p className="text-xs text-gray-400 font-medium leading-relaxed">
                            Atlantic Ministries Trust is a 501(c)(3) non-profit organization dedicated to the spiritual revival of our nation.
                            No goods or services were provided in exchange for this contribution.
                            All donations are tax-deductible to the full extent of the law.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="hover:text-golden-yellow transition-colors"><Facebook className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-golden-yellow transition-colors"><Instagram className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Atlantic Ministries Trust. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
