"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Copy, Check, Mail, BookOpen, Sparkles, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function EbookPage() {
    const [selectedAmount, setSelectedAmount] = useState<string | null>("100");
    const [copied, setCopied] = useState<string | null>(null);

    const tiers = ["25", "50", "100", "250", "500"];

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* 3D Book Display */}
                        <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
                            <motion.div
                                initial={{ rotateY: -30, rotateX: 10, opacity: 0, x: -50 }}
                                animate={{ rotateY: -15, rotateX: 5, opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                whileHover={{ rotateY: -5, rotateX: 0, scale: 1.02 }}
                                className="relative preserve-3d group cursor-pointer"
                            >
                                {/* Spine depth effect */}
                                <div className="absolute -left-6 top-0 bottom-0 w-8 bg-royal-blue/90 origin-right transform rotate-y-90 shadow-2xl rounded-l-sm" />

                                <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] shadow-[20px_20px_60px_rgba(0,0,0,0.3)] rounded-r-lg overflow-hidden border-r border-white/10">
                                    <Image
                                        src="/images/the-descending-path-ebook.jpg"
                                        alt="The Descending Path eBook Cover"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Dynamic Light/Glow */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-700 pointer-events-none" />
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-blue/10 text-royal-blue rounded-full text-sm font-black uppercase tracking-widest">
                                <Sparkles size={16} />
                                New Release Pre-Order
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-none">
                                The Descending <br />Path
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                                A profound journey of faith and discovery. Pre-order your copy today and be among the first to receive this transformative work.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-golden-yellow/20 flex items-center justify-center shrink-0">
                                        <Mail className="text-royal-blue" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-royal-blue">Instant PDF Delivery</h3>
                                        <p className="text-gray-500">Upon confirmation of your donation, the eBook will be sent directly to your email inbox.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-golden-yellow/20 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="text-royal-blue" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-royal-blue">Your Support Matters</h3>
                                        <p className="text-gray-500">All proceeds go directly towards our community outreach and international missions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="px-12 py-8 text-xl" onClick={() => document.getElementById('preorder-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Secure Your Copy Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation/Pre-order Section */}
            <section id="preorder-form" className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Custom Give Box */}
                        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden">
                            <div className="bg-royal-blue p-8 text-center">
                                <h2 className="font-serif text-3xl font-black text-white uppercase tracking-tight">Pre-Order Donation</h2>
                                <p className="text-white/80 font-medium mt-2">Suggested Donation: <span className="text-golden-yellow text-xl">$100</span></p>
                            </div>

                            <div className="p-8 space-y-8">
                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center">Select an Amount</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {tiers.map((amount) => (
                                            <button
                                                key={amount}
                                                onClick={() => setSelectedAmount(amount)}
                                                className={cn(
                                                    "py-4 px-4 rounded-xl font-black text-xl transition-all duration-200 border-2",
                                                    selectedAmount === amount
                                                        ? "bg-golden-yellow border-golden-yellow text-royal-blue shadow-md scale-105"
                                                        : "bg-gray-50 border-gray-100 text-gray-600 hover:border-golden-yellow hover:text-royal-blue"
                                                )}
                                            >
                                                ${amount}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setSelectedAmount("custom")}
                                            className={cn(
                                                "py-4 px-4 rounded-xl font-black text-sm uppercase transition-all duration-200 border-2",
                                                selectedAmount === "custom"
                                                    ? "bg-golden-yellow border-golden-yellow text-royal-blue shadow-md scale-105"
                                                    : "bg-gray-50 border-gray-100 text-gray-600 hover:border-golden-yellow hover:text-royal-blue"
                                            )}
                                        >
                                            Custom
                                        </button>
                                    </div>
                                    <div className="bg-blue-50 text-royal-blue text-sm font-bold p-4 rounded-xl text-center">
                                        {selectedAmount === "100" ? "Suggested Donation Selected: $100. Any amount helps!" : "Choose any amount to receive your eBook copy."}
                                    </div>
                                </div>

                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <input type="hidden" name="business" value="payments@atlanticflagpole.com" />
                                    <input type="hidden" name="item_name" value="eBook Pre-Order: The Descending Path" />
                                    <input type="hidden" name="item_number" value="EBOOK-PREORDER" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <Button type="submit" className="w-full py-8 text-2xl shadow-xl">
                                        Complete Pre-Order
                                    </Button>
                                </form>

                                <div className="border-t border-gray-100 pt-8 mt-8">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center mb-6">Other Ways to Pre-Order</p>
                                    <div className="grid gap-4">
                                        {/* Venmo */}
                                        <div className="bg-gray-50 p-6 rounded-2xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-[#008CFF]/20" onClick={() => copyToClipboard("@AtlanticMinistriesTrust", "venmo")}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-[#008CFF]/10 rounded-xl flex items-center justify-center font-black text-[#008CFF] text-xl">V</div>
                                                <span className="font-mono font-bold text-gray-700">@AtlanticMinistriesTrust</span>
                                            </div>
                                            {copied === "venmo" ? <Check className="text-green-500" /> : <Copy className="text-gray-400" />}
                                        </div>
                                        {/* Cash App */}
                                        <div className="bg-gray-50 p-6 rounded-2xl flex items-center justify-between group cursor-pointer border border-transparent hover:border-[#00D632]/20" onClick={() => copyToClipboard("$AtlanticMinistriesTrust", "cashapp")}>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-[#00D632]/10 rounded-xl flex items-center justify-center font-black text-[#00D632] text-xl">$</div>
                                                <span className="font-mono font-bold text-gray-700">$AtlanticMinistriesTrust</span>
                                            </div>
                                            {copied === "cashapp" ? <Check className="text-green-500" /> : <Copy className="text-gray-400" />}
                                        </div>
                                    </div>
                                    <div className="bg-golden-yellow/10 p-4 rounded-xl text-center mt-6">
                                        <p className="text-sm text-royal-blue font-bold">
                                            Important: Please write <span className="uppercase">"EBOOK"</span> and <span className="uppercase">YOUR EMAIL</span> in the memo so we can send your copy!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info / FAQ */}
                        <div className="space-y-12 lg:pt-12">
                            <div>
                                <h2 className="font-serif text-4xl font-black text-royal-blue uppercase tracking-tight mb-8">How it Works</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-royal-blue text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg">1</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-royal-blue mb-2">Donate Any Amount</h4>
                                            <p className="text-gray-600">While $100 is our suggested donation, we welcome any contribution. Every dollar supports our mission in Schenectady and beyond.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-royal-blue text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg">2</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-royal-blue mb-2">Confirmation</h4>
                                            <p className="text-gray-600">Once your donation is processed, our team receives an automated notification. Our systems verify the transaction against your provided email.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-royal-blue text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg">3</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-royal-blue mb-2">Email Delivery</h4>
                                            <p className="text-gray-600">The eBook PDF will be dispatched to your email address within 24 hours (usually much faster!). Make sure to check your spam folder just in case.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-royal-blue rounded-3xl text-white space-y-6 shadow-xl">
                                <BookOpen className="text-golden-yellow" size={48} />
                                <h3 className="font-serif text-3xl font-black uppercase tracking-tight">Why Pre-Order?</h3>
                                <p className="text-blue-100 font-medium leading-relaxed">
                                    "The Descending Path" is more than just a book; it's a testament to the work we are doing at Atlantic Ministries Trust.
                                    By pre-ordering, you are providing the critical seed funding needed to expand our reach and touch more lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .rotate-y-90 {
                    transform: rotateY(-90deg);
                }
            `}</style>
        </main>
    );
}
