import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export function ShopToSupport() {
    return (
        <section className="py-16 bg-gradient-to-br from-royal-blue to-[#1a237e] text-white relative overflow-hidden rounded-3xl my-12 mx-4 md:mx-0 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                    <ShoppingBag size={18} className="text-golden-yellow" />
                    <span className="text-sm font-bold tracking-wide uppercase">Merch with a Mission</span>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl font-black mb-6 tracking-tight drop-shadow-md">
                    Shop to Support
                </h2>

                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                    Prefer to give by purchasing? Shop to Support at <span className="text-golden-yellow font-bold">atlanticflagpole.com</span>.
                    Customers receive the items purchased; net proceeds support Atlantic Ministries Trust campaigns.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://atlanticflagpole.com" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6 font-black shadow-xl hover:scale-105 transition-transform">
                            Shop Flagpoles & Flags
                        </Button>
                    </a>
                    <a href="https://atlanticflagpole.com" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-white text-white bg-transparent hover:bg-white/10 font-black">
                            Shop to Honor Service
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
