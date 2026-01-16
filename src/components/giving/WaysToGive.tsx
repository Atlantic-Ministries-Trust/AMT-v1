"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function WaysToGive() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="space-y-8">
            <h3 className="font-serif text-3xl font-black text-royal-blue text-center uppercase tracking-tight">Global Ways to Give</h3>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Zelle */}
                <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="flex flex-col items-center text-center gap-6 flex-grow justify-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-2">
                            <span className="font-black text-3xl text-royal-blue">Z</span>
                        </div>
                        <span className="font-black text-2xl text-royal-blue uppercase tracking-tight">Zelle</span>
                        <div
                            className="bg-gray-50 w-full py-4 px-4 rounded-xl font-mono font-bold text-lg text-gray-700 flex items-center justify-center gap-3 border border-transparent group-hover:border-royal-blue/20 transition-all cursor-pointer whitespace-nowrap"
                            onClick={() => copyToClipboard("518-288-5864", "zelle")}
                        >
                            <span>518-288-5864</span>
                            <span className="text-gray-400 group-hover:text-royal-blue transition-colors shrink-0">
                                {copied === "zelle" ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Use our phone number to find us.</p>
                    </div>
                </div>

                {/* Venmo */}
                <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="flex flex-col items-center text-center gap-6 flex-grow justify-center">
                        <div className="w-16 h-16 bg-[#008CFF]/10 rounded-2xl flex items-center justify-center mb-2">
                            <span className="font-black text-3xl text-[#008CFF]">V</span>
                        </div>
                        <span className="font-black text-2xl text-[#008CFF] uppercase tracking-tight">Venmo</span>
                        <div
                            className="bg-gray-50 w-full py-4 px-4 rounded-xl font-mono font-bold text-sm sm:text-base lg:text-lg text-gray-700 flex items-center justify-center gap-3 border border-transparent group-hover:border-[#008CFF]/20 transition-all cursor-pointer whitespace-nowrap"
                            onClick={() => copyToClipboard("@AtlanticMinistriesTrust", "venmo")}
                        >
                            <span>@AtlanticMinistriesTrust</span>
                            <span className="text-gray-400 group-hover:text-[#008CFF] transition-colors shrink-0">
                                {copied === "venmo" ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                            </span>
                        </div>
                        <a href="https://venmo.com/u/AtlanticMinistriesTrust" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#008CFF] hover:underline mt-auto flex items-center gap-2">
                            Open Venmo App
                            <span className="text-xs">↗</span>
                        </a>
                    </div>
                </div>

                {/* Cash App */}
                <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="flex flex-col items-center text-center gap-6 flex-grow justify-center">
                        <div className="w-16 h-16 bg-[#00D632]/10 rounded-2xl flex items-center justify-center mb-2">
                            <span className="font-black text-3xl text-[#00D632]">$</span>
                        </div>
                        <span className="font-black text-2xl text-[#00D632] uppercase tracking-tight">Cash App</span>
                        <div
                            className="bg-gray-50 w-full py-4 px-4 rounded-xl font-mono font-bold text-sm sm:text-base lg:text-lg text-gray-700 flex items-center justify-center gap-3 border border-transparent group-hover:border-[#00D632]/20 transition-all cursor-pointer whitespace-nowrap"
                            onClick={() => copyToClipboard("$AtlanticMinistriesTrust", "cashapp")}
                        >
                            <span>$AtlanticMinistriesTrust</span>
                            <span className="text-gray-400 group-hover:text-[#00D632] transition-colors shrink-0">
                                {copied === "cashapp" ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                            </span>
                        </div>
                        <a href="https://cash.app/$AtlanticMinistriesTrust" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#00D632] hover:underline mt-auto flex items-center gap-2">
                            Open Cash App
                            <span className="text-xs">↗</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-golden-yellow/10 p-6 rounded-2xl text-center max-w-3xl mx-auto">
                <p className="text-royal-blue font-bold text-lg mb-2">
                    Memo/Note Instructions
                </p>
                <p className="text-royal-blue/80 leading-relaxed font-medium">
                    Please write the campaign name in the memo: <br className="hidden md:block" />
                    <span className="font-black">Do Good / Meals / Veterans + Dogs / Anti-Trafficking / Victory Church Nigeria</span>.
                    <br />Include your email in the memo if you would like a receipt.
                </p>
            </div>

            <p className="text-xs text-center text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Donations are voluntary contributions and donors do not receive goods or services in exchange.
                Merchandise purchases include the purchased item(s), and net proceeds support our mission and campaigns.
            </p>
        </div>
    );
}
