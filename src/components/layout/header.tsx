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
    // Dark text if: Scrolled OR Not Home (inner pages usually have white bg)
    const useDarkTheme = isScrolled || !isHome;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                    : isHome ? "bg-transparent py-5" : "bg-white py-5 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={cn(
                        "relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden border-2 transition-colors",
                        useDarkTheme ? "border-royal-blue/20" : "border-golden-yellow/30"
                    )}>
                        <Image
                            src="/images/logo.png"
                            alt="Atlantic Ministries Trust"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={cn(
                        "font-serif font-bold text-xl md:text-2xl tracking-tight transition-colors group-hover:opacity-80",
                        useDarkTheme ? "text-royal-blue" : "text-white"
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
                                "text-base font-semibold tracking-wide transition-colors hover:text-golden-yellow uppercase",
                                pathname === item.href
                                    ? "text-golden-yellow"
                                    : useDarkTheme ? "text-royal-blue" : "text-white/90"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden lg:block">
                    <Button variant={useDarkTheme ? "primary" : "secondary"} size="lg" className="font-serif">
                        Give Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={useDarkTheme ? "text-royal-blue" : "text-white"} />
                    ) : (
                        <Menu className={useDarkTheme ? "text-royal-blue" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 border-t border-gray-100">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-lg font-bold py-2 border-b border-gray-100",
                                pathname === item.href ? "text-golden-yellow" : "text-royal-blue"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="w-full py-4 text-lg">Give Now</Button>
                </div>
            )}
        </header>
    );
}
