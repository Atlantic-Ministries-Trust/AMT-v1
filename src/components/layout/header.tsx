"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Discipleship", href: "/discipleship-outreach" },
    { name: "Patriotism", href: "/patriotism-faith" },
];

const campaignLinks = [
    { name: "Campaigns Hub", href: "/campaigns" },
    { name: "Do Good (Patriot Edition)", href: "/campaigns/do-good" },
    { name: "Meals for Families & Kids", href: "/campaigns/meals" },
    { name: "Veterans + Unwanted Dogs", href: "/campaigns/veterans-dogs" },
    { name: "Combat Child & Sex Trafficking", href: "/campaigns/anti-trafficking" },
    { name: "Victory Church Nigeria", href: "/campaigns/victory-church-nigeria" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // Campaign dropdown ref + close helper
    const campaignsRef = useRef<HTMLDetailsElement | null>(null);
    const closeCampaigns = () => {
        campaignsRef.current?.removeAttribute("open");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on outside click and Escape
    useEffect(() => {
        const onPointerDown = (event: MouseEvent | TouchEvent) => {
            const el = campaignsRef.current;
            if (!el) return;

            const target = event.target as Node | null;
            if (el.hasAttribute("open") && target && !el.contains(target)) {
                closeCampaigns();
            }
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeCampaigns();
        };

        document.addEventListener("mousedown", onPointerDown);
        document.addEventListener("touchstart", onPointerDown, { passive: true });
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("mousedown", onPointerDown);
            document.removeEventListener("touchstart", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    // Close dropdown + mobile menu on any route change
    useEffect(() => {
        closeCampaigns();
        setMobileMenuOpen(false);
    }, [pathname]);

    // Dark text if: Scrolled OR Not Home
    const useDarkTheme = isScrolled || !isHome;

    const navLinkClass = (href: string) =>
        cn(
            "text-base font-semibold tracking-wide transition-colors hover:text-golden-yellow uppercase",
            pathname === href
                ? "text-golden-yellow"
                : useDarkTheme
                    ? "text-royal-blue"
                    : "text-white/90"
        );

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                    : isHome
                        ? "bg-transparent py-5"
                        : "bg-white py-5 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div
                        className={cn(
                            "relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden border-2 transition-colors",
                            useDarkTheme ? "border-royal-blue/20" : "border-golden-yellow/30"
                        )}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Atlantic Ministries Trust"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span
                        className={cn(
                            "font-serif font-bold text-xl md:text-2xl tracking-tight transition-colors group-hover:opacity-80",
                            useDarkTheme ? "text-royal-blue" : "text-white"
                        )}
                    >
                        Atlantic Ministries
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                            {item.name}
                        </Link>
                    ))}

                    {/* Campaigns Dropdown (Desktop) */}
                    <details ref={campaignsRef} className="relative">
                        <summary
                            className={cn(
                                "list-none cursor-pointer select-none flex items-center gap-1",
                                "text-base font-semibold tracking-wide transition-colors hover:text-golden-yellow uppercase",
                                useDarkTheme ? "text-royal-blue" : "text-white/90"
                            )}
                        >
                            <span className={cn(pathname.startsWith("/campaigns") ? "text-golden-yellow" : "")}>
                                Campaigns
                            </span>
                            <span aria-hidden className="text-xs">
                                ▾
                            </span>
                        </summary>

                        <div className="absolute left-0 mt-2 w-72 rounded-md border bg-white shadow-lg overflow-hidden">
                            <nav className="py-2">
                                {campaignLinks.map((c) => (
                                    <Link
                                        key={c.href}
                                        href={c.href}
                                        onClick={closeCampaigns}
                                        className={cn(
                                            "block px-4 py-2 text-sm font-semibold text-royal-blue hover:bg-gray-50",
                                            pathname === c.href ? "bg-gray-50 text-golden-yellow" : ""
                                        )}
                                    >
                                        {c.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </details>

                    {/* Shop to Support (External) */}
                    <a
                        href="https://atlanticflagpole.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "text-base font-semibold tracking-wide transition-colors hover:text-golden-yellow uppercase",
                            useDarkTheme ? "text-royal-blue" : "text-white/90"
                        )}
                    >
                        Shop to Support
                    </a>
                </nav>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/contact">
                        <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "font-black uppercase tracking-tight hover:bg-white/20",
                                useDarkTheme ? "text-royal-blue hover:bg-royal-blue/10" : "text-white"
                            )}
                        >
                            Contact
                        </Button>
                    </Link>
                    <Button
                        asChild
                        variant={useDarkTheme ? "primary" : "secondary"}
                        size="lg"
                        className="font-serif shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] active:shadow-none active:translate-y-[2px] transition-all"
                    >
                        <Link href="/donate">Donate</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

                    {/* Campaigns (Mobile) */}
                    <div className="pt-2">
                        <div className="text-sm font-extrabold text-royal-blue uppercase tracking-wide mb-2">
                            Campaigns
                        </div>
                        <div className="flex flex-col gap-2">
                            {campaignLinks.map((c) => (
                                <Link
                                    key={c.href}
                                    href={c.href}
                                    className={cn(
                                        "text-base font-bold py-2 border-b border-gray-100",
                                        pathname === c.href ? "text-golden-yellow" : "text-royal-blue"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact (Mobile) */}
                    <Link
                        href="/contact"
                        className={cn(
                            "text-lg font-bold py-2 border-b border-gray-100",
                            pathname === "/contact" ? "text-golden-yellow" : "text-royal-blue"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>

                    <a
                        href="https://atlanticflagpole.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold py-2 border-b border-gray-100 text-royal-blue"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Shop to Support
                    </a>

                    <Button asChild className="w-full py-4 text-lg">
                        <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                            Donate
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
