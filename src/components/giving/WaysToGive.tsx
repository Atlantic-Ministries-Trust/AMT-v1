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

            <div className="grid md:grid-cols-3 gap-6">
                {/* Zelle */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                    <div className="flex flex-col items-center text-center gap-4 flex-grow justify-center">
                        <span className="font-black text-2xl text-royal-blue">Zelle</span>
                        <div className="bg-gray-50 w-full py-3 rounded-lg font-mono font-bold text-lg text-gray-700 flex items-center justify-center gap-2 group cursor-pointer" onClick={() => copyToClipboard("518-288-5864", "zelle")}>
                            <span className="truncate">518-288-5864</span>
                            <span className="text-gray-400 group-hover:text-royal-blue transition-colors">
                                {copied === "zelle" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Use our phone number to find us.</p>
                    </div>
                </div>

                {/* Venmo */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                    <div className="flex flex-col items-center text-center gap-4 flex-grow justify-center">
                        <span className="font-black text-2xl text-[#008CFF]">Venmo</span>
                        <div className="bg-gray-50 w-full py-3 rounded-lg font-mono font-bold text-sm md:text-base text-gray-700 flex items-center justify-center gap-2 group cursor-pointer" onClick={() => copyToClipboard("@AtlanticMinistriesTrust", "venmo")}>
                            <span className="truncate max-w-[200px]">@AtlanticMinistriesTrust</span>
                            <span className="text-gray-400 group-hover:text-[#008CFF] transition-colors shrink-0">
                                {copied === "venmo" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                            </span>
                        </div>
                        <a href="https://venmo.com/u/AtlanticMinistriesTrust" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#008CFF] hover:underline mt-auto">
                            Open Venmo App
                        </a>
                    </div>
                </div>

                {/* Cash App */}
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                    <div className="flex flex-col items-center text-center gap-4 flex-grow justify-center">
                        <span className="font-black text-2xl text-[#00D632]">Cash App</span>
                        <div className="bg-gray-50 w-full py-3 rounded-lg font-mono font-bold text-sm md:text-base text-gray-700 flex items-center justify-center gap-2 group cursor-pointer" onClick={() => copyToClipboard("$AtlanticMinistriesTrust", "cashapp")}>
                            <span className="truncate max-w-[200px]">$AtlanticMinistriesTrust</span>
                            <span className="text-gray-400 group-hover:text-[#00D632] transition-colors shrink-0">
                                {copied === "cashapp" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                            </span>
                        </div>
                        <a href="https://cash.app/$AtlanticMinistriesTrust" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#00D632] hover:underline mt-auto">
                            Open Cash App
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
