import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Brand & Description */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg w-fit">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xl leading-none">A</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">Antigravity</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-xs">
                            Building the future of digital experiences with bleeding-edge technology and unparalleled design.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus:ring-2 focus:ring-primary outline-none" aria-label="Follow us on Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus:ring-2 focus:ring-primary outline-none" aria-label="Follow us on GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors focus:ring-2 focus:ring-primary outline-none" aria-label="Follow us on LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-lg">Quick Links</h3>
                        <nav className="flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:text-primary focus-visible:underline w-fit"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-lg">Legal</h3>
                        <nav className="flex flex-col gap-4">
                            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:text-primary focus-visible:underline w-fit">Privacy Policy</Link>
                            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:text-primary focus-visible:underline w-fit">Terms of Service</Link>
                            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:text-primary focus-visible:underline w-fit">Cookie Policy</Link>
                        </nav>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="flex flex-col gap-6 lg:ml-auto w-full max-w-sm">
                        <h3 className="font-bold text-lg">Subscribe</h3>
                        <p className="text-muted-foreground">
                            Get the latest updates, news, and exclusive offers straight to your inbox.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>

                <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Antigravity Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>Built in San Francisco</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
