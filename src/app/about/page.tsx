import { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
    title: "About Us | Antigravity",
    description: "Learn more about the team behind Antigravity and our mission to simplify web development.",
    openGraph: {
        title: "About Us | Antigravity",
        description: "Learn more about the team behind Antigravity.",
        type: "website",
    }
};

const TEAM = [
    { name: "Alice Freeman", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Bob Smith", role: "CTO", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400" },
    { name: "Charlie Davis", role: "Head of Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Diana Prince", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
];

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                                We&apos;re on a mission to make web development elegant again.
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Antigravity was born out of frustration with complex setups and boilerplate code. We believe that developers should spend their time building unique features, not configuring build tools and CSS architectures.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Story Image */}
            <section className="pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeIn className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden bg-muted shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
                            alt="Team collaborating"
                            fill
                            className="object-cover"
                            priority
                        />
                    </FadeIn>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-muted/30 border-y">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-lg text-muted-foreground">The principles that guide everything we do.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: "Simplicity first", desc: "Complexity is the enemy of execution. We strive for elegant, simple solutions to complex problems." },
                            { title: "Design matters", desc: "Good design is not just how it looks, but how it works. We obsess over every detail of the user experience." },
                            { title: "Built for speed", desc: "Performance is a feature. We engineer our tools to be incredibly fast, saving developers valuable time." },
                            { title: "Developer happiness", desc: "We believe that happy developers write better code. Everything we build is designed to improve developer quality of life." }
                        ].map((value, idx) => (
                            <FadeIn key={idx} delay={0.1 * idx} className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-2">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-2xl font-bold">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
                        <p className="text-lg text-muted-foreground">The people behind the product.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {TEAM.map((member, idx) => (
                            <FadeIn key={idx} delay={0.1 * idx} className="flex flex-col items-center text-center">
                                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 bg-muted shadow-lg ring-4 ring-background">
                                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-muted-foreground">{member.role}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
