"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Our Story", href: "/our-story" },
    { name: "Discipleship", href: "/discipleship-outreach" },
    { name: "Patriotism", href: "/patriotism-faith" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine if we should show dark text/UI
    const useDarkTheme = isScrolled || !isHome;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                    : isHome ? "bg-transparent py-6" : "bg-white py-5 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={cn(
                        "relative transition-all duration-500 rounded-full overflow-hidden border-2",
                        isScrolled ? "h-10 w-10 md:h-12 md:w-12" : "h-12 w-12 md:h-16 md:w-16",
                        useDarkTheme ? "border-royal-blue/20" : "border-white/30 shadow-glow"
                    )}>
                        <Image
                            src="/images/logo.png"
                            alt="Atlantic Ministries Trust"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={cn(
                        "font-serif font-bold tracking-tight transition-all duration-500 group-hover:opacity-80",
                        isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl",
                        useDarkTheme ? "text-royal-blue" : "text-white drop-shadow-md"
                    )}>
                        Atlantic Ministries
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-base font-bold tracking-wide transition-all duration-300 hover:text-golden-yellow uppercase relative group/link",
                                pathname === item.href
                                    ? "text-golden-yellow"
                                    : useDarkTheme ? "text-royal-blue" : "text-white/95"
                            )}
                        >
                            {item.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-golden-yellow transition-all duration-300 group-hover/link:w-full",
                                pathname === item.href ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden lg:block">
                    <Button
                        variant={useDarkTheme ? "primary" : "secondary"}
                        size={isScrolled ? "sm" : "lg"}
                        className="font-serif font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[2px] transition-all"
                    >
                        Give Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={useDarkTheme ? "text-royal-blue" : "text-white"} size={28} />
                    ) : (
                        <Menu className={useDarkTheme ? "text-royal-blue" : "text-white"} size={28} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-2xl font-black py-4 border-b border-gray-100 flex justify-between items-center group",
                                pathname === item.href ? "text-golden-yellow" : "text-royal-blue"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </Link>
                    ))}
                    <div className="mt-auto space-y-4">
                        <Button className="w-full py-6 text-xl font-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">Give Now</Button>
                        <p className="text-center text-gray-400 text-sm">Serving Schenectady since 1993</p>
                    </div>
                </div>
            )}
        </header>
    );
}
