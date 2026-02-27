import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <FadeIn>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                                Build the future faster with <span className="text-primary">Antigravity</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                                The most powerful Next.js template for modern web applications. Ship faster, scale further, and create stunning user experiences out of the box.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground text-lg font-bold transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/features"
                                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-secondary text-secondary-foreground text-lg font-bold transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/50"
                            >
                                View Features
                            </Link>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.3} className="relative mx-auto lg:ml-auto w-full max-w-xl aspect-square lg:aspect-[4/3]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] -rotate-6 scale-105 transform-gpu blur-2xl opacity-50"></div>
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-background bg-muted shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                                alt="Developer working on code"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
