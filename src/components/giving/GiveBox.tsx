"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface GiveBoxProps {
    campaignName: string;
    paypalItemNumber: string;
    showTiers?: boolean;
}

export function GiveBox({ campaignName, paypalItemNumber, showTiers = true }: GiveBoxProps) {
    const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
    const [copied, setCopied] = useState<string | null>(null);

    const tiers = ["25", "50", "100", "250", "500"];

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-royal-blue p-6 text-center">
                <h3 className="font-serif text-2xl font-black text-white uppercase tracking-tight">
                    Give to {campaignName}
                </h3>
                <p className="text-white/80 text-sm font-medium mt-2">
                    Your gift makes a direct impact.
                </p>
            </div>

            <div className="p-6 md:p-8 space-y-8">
                {/* Suggested Tiers */}
                {showTiers && (
                    <div className="space-y-4">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center">
                            Select an Amount
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {tiers.map((amount) => (
                                <button
                                    key={amount}
                                    onClick={() => setSelectedAmount(amount)}
                                    className={cn(
                                        "py-3 px-4 rounded-xl font-black text-lg transition-all duration-200 border-2",
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
                                    "py-3 px-4 rounded-xl font-black text-sm uppercase transition-all duration-200 border-2",
                                    selectedAmount === "custom"
                                        ? "bg-golden-yellow border-golden-yellow text-royal-blue shadow-md scale-105"
                                        : "bg-gray-50 border-gray-100 text-gray-600 hover:border-golden-yellow hover:text-royal-blue"
                                )}
                            >
                                Custom
                            </button>
                        </div>
                        {selectedAmount && selectedAmount !== "custom" && (
                            <div className="bg-blue-50 text-royal-blue text-sm font-bold p-3 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                                You selected ${selectedAmount}. Please enter this amount on the payment page.
                            </div>
                        )}
                        {selectedAmount === "custom" && (
                            <div className="bg-blue-50 text-royal-blue text-sm font-bold p-3 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                                Choose any amount you placed on your heart.
                            </div>
                        )}
                    </div>
                )}

                {/* PayPal Button */}
                <div className="pt-2">
                    <form action="https://www.paypal.com/donate" method="post" target="_top" className="flex justify-center">
                        <input type="hidden" name="business" value="payments@atlanticflagpole.com" />
                        <input type="hidden" name="no_recurring" value="0" />
                        <input type="hidden" name="item_name" value={`Atlantic Ministries Trust - ${campaignName}`} />
                        <input type="hidden" name="item_number" value={paypalItemNumber} />
                        <input type="hidden" name="currency_code" value="USD" />

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full text-xl py-8 shadow-xl hover:scale-[1.02] transition-transform"
                        >
                            Donate via PayPal / Card
                        </Button>
                        <img alt="" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" className="hidden" />
                    </form>
                    <p className="text-center text-xs text-gray-400 mt-3 font-medium">
                        Securely processed by PayPal. You can use a Credit/Debit card without a PayPal account.
                    </p>
                </div>

                {/* Other Methods */}
                <div className="border-t-2 border-dashed border-gray-100 pt-6 space-y-4">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center">
                        Other Ways to Give
                    </p>

                    <div className="grid gap-3">
                        {/* Zelle */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <span className="font-black text-royal-blue">Zelle</span>
                                <span className="text-sm font-medium text-gray-600">518-288-5864</span>
                            </div>
                            <button
                                onClick={() => copyToClipboard("518-288-5864", "zelle")}
                                className="text-gray-400 hover:text-royal-blue transition-colors"
                            >
                                {copied === "zelle" ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </button>
                        </div>

                        {/* Venmo */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <span className="font-black text-[#008CFF]">Venmo</span>
                                <span className="text-sm font-medium text-gray-600">@AtlanticMinistriesTrust</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => copyToClipboard("@AtlanticMinistriesTrust", "venmo")}
                                    className="text-gray-400 hover:text-royal-blue transition-colors"
                                >
                                    {copied === "venmo" ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </button>
                                <a href="https://venmo.com/u/AtlanticMinistriesTrust" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-royal-blue hover:underline">
                                    Open
                                </a>
                            </div>
                        </div>

                        {/* Cash App */}
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <span className="font-black text-[#00D632]">Cash App</span>
                                <span className="text-sm font-medium text-gray-600">$AtlanticMinistriesTrust</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => copyToClipboard("$AtlanticMinistriesTrust", "cashapp")}
                                    className="text-gray-400 hover:text-royal-blue transition-colors"
                                >
                                    {copied === "cashapp" ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                </button>
                                <a href="https://cash.app/$AtlanticMinistriesTrust" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-royal-blue hover:underline">
                                    Open
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-golden-yellow/10 p-4 rounded-xl text-center">
                        <p className="text-sm text-royal-blue font-bold">
                            Memo/Note: Please write <span className="uppercase">"{campaignName}"</span> in the memo.
                        </p>
                        <p className="text-xs text-royal-blue/70 mt-1">
                            Include your email in the memo if you would like a receipt.
                        </p>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[10px] text-gray-400 text-center leading-relaxed px-4">
                    Donations are voluntary contributions and donors do not receive goods or services in exchange.
                    Merchandise purchases include the purchased item(s), and net proceeds support our mission and campaigns.
                </p>
            </div>
        </div>
    );
}
