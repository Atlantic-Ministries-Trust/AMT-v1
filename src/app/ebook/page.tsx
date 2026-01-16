"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Copy, Check, Mail, BookOpen, Sparkles, ShieldCheck, Heart, Users } from "lucide-react";
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
                            <h2 className="font-serif text-2xl md:text-3xl text-gray-500 italic font-bold">
                                Finding True Strength Through the Way of the Servant
                            </h2>
                            <p className="text-lg font-bold text-gray-400 uppercase tracking-widest">By Michael P. Carlson</p>

                            <div className="prose prose-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    <strong>Feeling Burnt Out, Spiritually Stuck, or Tired of Performance-Based Faith?</strong>
                                </p>
                                <p>
                                    Discover a Better Way—One That Jesus Walked First.
                                    The Descending Path will show you how real strength, peace, and purpose are found through the quiet power of servanthood.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="px-12 py-8 text-xl w-full sm:w-auto" onClick={() => document.getElementById('preorder-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Secure Your Copy Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem / The Invitation */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl space-y-24">
                    {/* Problem */}
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <div className="inline-block px-3 py-1 bg-red-100 text-red-600 font-bold text-xs uppercase tracking-widest rounded-full">The Struggle</div>
                            <h2 className="font-serif text-3xl md:text-4xl font-black text-gray-900">The Problem So Many Christians Face Today</h2>
                        </div>
                        <div className="prose prose-xl mx-auto text-gray-600 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                            <p>You’re trying to follow Jesus… You’re doing “all the right things”… But you still feel spiritually dry, anxious, or burned out.</p>
                            <p className="font-bold text-gray-800">Deep down, you wonder:</p>
                            <ul className="list-none space-y-2 pl-0">
                                <li className="flex gap-2"><span className="text-red-400">✖</span> “Why do I feel so disconnected from God even though I’m serving Him?”</li>
                                <li className="flex gap-2"><span className="text-red-400">✖</span> “Why does faith feel like pressure instead of peace?”</li>
                                <li className="flex gap-2"><span className="text-red-400">✖</span> “What if I’ve been chasing the wrong kind of growth?”</li>
                            </ul>
                            <p>You’re not alone. Many sincere believers are quietly exhausted—burned out by performance, striving, and spiritual perfectionism.</p>
                            <p className="text-xl font-bold text-royal-blue border-l-4 border-golden-yellow pl-4 italic">
                                But Jesus offers a different way. A better way. A descending way.
                            </p>
                        </div>
                    </div>

                    {/* Invitation */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 order-2 md:order-1">
                            <h2 className="font-serif text-3xl md:text-4xl font-black text-royal-blue">The Invitation: Walk the Path Jesus Walked</h2>
                            <p className="text-lg text-gray-600 font-medium">
                                Jesus didn’t climb. He knelt. He served. He surrendered.
                            </p>
                            <p className="text-lg text-gray-600 font-medium">
                                And through that surrender came real power—resurrection power. This book is your invitation to follow Jesus down—not into defeat, but into deeper life.
                            </p>
                        </div>
                        <div className="bg-royal-blue text-white p-10 rounded-[3rem] text-center space-y-6 shadow-2xl order-1 md:order-2">
                            <div className="text-6xl mb-4">✝️</div>
                            <h3 className="font-serif text-2xl font-bold italic">"He humbled himself..."</h3>
                            <p className="text-blue-100">Philippians 2:8</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-1 flex-grow bg-gray-100" />
                        <span className="text-gray-400 uppercase tracking-widest font-bold text-sm">Author's Note</span>
                        <div className="h-1 flex-grow bg-gray-100" />
                    </div>

                    <h2 className="font-serif text-4xl font-black text-gray-900 mb-8 text-center">Why I Wrote This Book</h2>

                    <div className="prose prose-lg text-gray-600 leading-relaxed">
                        <p>There was a season where I was drained—emotionally, spiritually, even physically.</p>
                        <p>I was doing ministry. I was helping others. But inside? I was empty.</p>
                        <p>No matter how much I accomplished, I felt like I was falling behind spiritually.</p>
                        <p>One day, in desperation, I opened to John 13—Jesus washing the disciples’ feet.</p>
                        <p className="text-xl font-serif italic text-royal-blue">It hit me: I had been climbing, while Jesus was stooping.</p>
                        <p>He didn’t seek applause. He didn’t perform for approval. He served out of intimacy with the Father. And He invited me to do the same.</p>
                        <p>That moment began my journey down the Descending Path. It’s changed how I lead, how I serve, how I rest, and how I relate to God.</p>
                        <p>I wrote this book for others like me—who are ready to stop striving and start walking in peace, purpose, and Christlike strength.</p>
                    </div>
                </div>
            </section>

            {/* Discovery Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-black text-golden-yellow mb-6">What You’ll Discover Inside</h2>
                        <div className="h-1 w-24 bg-white/20 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "The surprising key to spiritual maturity (hint: it’s not doing more)",
                            "The difference between performance-based faith and grace-driven formation",
                            "Why going lower is the only way to grow stronger in Christ",
                            "How to experience lasting peace—even in pressure-filled seasons",
                            "How to lead your family, team, or ministry from a place of love—not burnout",
                            "A daily posture of surrender that brings deeper intimacy with God"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="text-golden-yellow font-bold text-xl mb-4">✅</div>
                                <p className="font-medium text-lg leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Imagine Section */}
            <section className="py-24 bg-royal-blue/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-serif text-4xl font-black text-royal-blue mb-12">Imagine...</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-royal-blue/10 flex items-start gap-4">
                            <Sparkles className="text-golden-yellow shrink-0" size={32} />
                            <p className="text-lg font-medium text-gray-700">Waking up with peace in your soul.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-royal-blue/10 flex items-start gap-4">
                            <Heart className="text-golden-yellow shrink-0" size={32} />
                            <p className="text-lg font-medium text-gray-700">Serving others without chasing approval.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-royal-blue/10 flex items-start gap-4">
                            <Users className="text-golden-yellow shrink-0" size={32} />
                            <p className="text-lg font-medium text-gray-700">Leading with humility.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-royal-blue/10 flex items-start gap-4">
                            <ShieldCheck className="text-golden-yellow shrink-0" size={32} />
                            <p className="text-lg font-medium text-gray-700">Resting in who you are—because your identity is secure in Christ.</p>
                        </div>
                    </div>
                    <p className="mt-12 text-2xl font-serif italic text-royal-blue font-bold">That’s what happens when you walk the Descending Path.</p>
                </div>
            </section>

            {/* Donation/Pre-order Section */}
            <section id="preorder-form" className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-golden-yellow text-royal-blue font-black rounded-full uppercase tracking-widest text-sm">Exclusive Pre-Order Offer</div>
                        <h2 className="font-serif text-4xl md:text-5xl font-black text-royal-blue">Receive These Gifts</h2>
                        <p className="text-xl text-gray-500">When you make a donation to support the release of The Descending Path today.</p>
                    </div>

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

                        {/* Gift Breakdown */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-6">
                                <h3 className="font-serif text-2xl font-black text-royal-blue uppercase">This Is a Donor-Supported Project</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    This is more than just a book—it’s a mission. Your donation will help fund the editing, production, and outreach to get The Descending Path into the hands of believers, pastors, and ministries who desperately need it.
                                </p>
                                <p className="text-gray-600 font-medium">
                                    <strong>Suggested Donation: $100</strong> <br />
                                    But we believe in generosity, not guilt—so you’re free to give whatever amount God leads you to. Whether it’s $10 or $1,000, every donor receives the full pre-order package as a thank-you gift.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center font-black text-xl shrink-0">📘</div>
                                    <div>
                                        <h4 className="font-bold text-royal-blue text-lg">The Full Ebook</h4>
                                        <p className="text-gray-600 text-sm">200+ pages of spiritual formation, servant leadership, and grace-based transformation. <span className="text-xs font-bold text-gray-400 uppercase">(Value: $29)</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center font-black text-xl shrink-0">🧠</div>
                                    <div>
                                        <h4 className="font-bold text-royal-blue text-lg">The Companion Workbook</h4>
                                        <p className="text-gray-600 text-sm">Reflection questions, journal prompts, and spiritual practices to help you go deeper. <span className="text-xs font-bold text-gray-400 uppercase">(Value: $19)</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-golden-yellow/20 text-royal-blue flex items-center justify-center font-black text-xl shrink-0">🧑‍🏫</div>
                                    <div>
                                        <h4 className="font-bold text-royal-blue text-lg">Leader’s Guide (Bonus)</h4>
                                        <p className="text-gray-600 text-sm">Perfect for small groups or churches—includes session outlines, teaching points, and discussion guides. <span className="text-xs font-bold text-gray-400 uppercase">(Value: $25)</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center font-black text-xl shrink-0">📥</div>
                                    <div>
                                        <h4 className="font-bold text-royal-blue text-lg">Early Access PDF</h4>
                                        <p className="text-gray-600 text-sm">Read the book before its official release. <span className="text-xs font-bold text-gray-400 uppercase">(Value: Priceless)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join the Movement */}
            <section className="py-24 bg-royal-blue text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl space-y-8">
                    <h2 className="font-serif text-5xl font-black text-golden-yellow uppercase tracking-tight">Join the Movement</h2>
                    <p className="text-2xl font-serif italic leading-relaxed text-blue-100">
                        "The church doesn’t need louder leaders. It needs humbler ones. It needs people like you—willing to walk the path Jesus walked."
                    </p>
                    <div className="prose prose-xl prose-invert mx-auto">
                        <p>If you’re ready to exchange performance for peace… Striving for surrender… And spiritual exhaustion for deeper love—</p>
                        <p className="font-bold text-xl uppercase tracking-widest text-golden-yellow">Then The Descending Path is for you.</p>
                    </div>
                    <div className="pt-8">
                        <Button size="lg" variant="secondary" className="px-12 py-8 text-xl shadow-xl" onClick={() => document.getElementById('preorder-form')?.scrollIntoView({ behavior: 'smooth' })}>
                            Make Your Donation
                        </Button>
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
