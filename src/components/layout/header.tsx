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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-10 md:h-12 md:w-12">
                        <Image
                            src="/images/logo.png"
                            alt="Atlantic Ministries Trust"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn(
                        "font-serif font-bold text-lg md:text-xl tracking-tight",
                        isScrolled ? "text-royal-blue" : "text-white"
                    )}>
                        Atlantic Ministries
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-golden-yellow",
                                pathname === item.href
                                    ? "text-golden-yellow"
                                    : isScrolled ? "text-gray-800" : "text-white/90"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Button */}
                <div className="hidden lg:block">
                    <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
                        Give Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className={isScrolled ? "text-gray-800" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-base font-medium py-2 border-b border-gray-100",
                                pathname === item.href ? "text-royal-blue" : "text-gray-600"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-2">Give Now</Button>
                </div>
            )}
        </header>
    );
}
