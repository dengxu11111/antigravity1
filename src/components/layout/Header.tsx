"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION_LINKS } from "@/constants";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="flex items-center gap-2 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl leading-none">A</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">Antigravity</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAVIGATION_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary focus:outline-none focus-visible:text-primary focus-visible:underline rounded-md px-2 py-1",
                                    pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-[4rem] z-40 bg-background md:hidden px-4 py-8 overflow-y-auto border-t"
                    >
                        <nav className="flex flex-col gap-6 items-center">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-2xl font-bold transition-colors w-full text-center py-4 border-b border-border/50 focus:outline-none focus-visible:text-primary",
                                        pathname === link.href ? "text-primary" : "text-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-8 flex items-center justify-center w-full h-14 rounded-xl bg-primary text-primary-foreground text-lg font-bold"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
