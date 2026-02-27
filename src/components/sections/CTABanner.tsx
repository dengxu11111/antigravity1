import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABanner() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <FadeIn className="flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                            Ready to accelerate your workflow?
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                            Join thousands of developers and teams already building the future with Antigravity. Start your 14-day free trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-primary text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 w-full sm:w-auto"
                            >
                                Get Started Now
                                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-black/20 text-white backdrop-blur-md text-lg font-bold transition-colors hover:bg-black/30 border border-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 w-full sm:w-auto"
                            >
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-white/60 mt-6 font-medium">No credit card required for setup.</p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
