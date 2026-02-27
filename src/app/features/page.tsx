import { Metadata } from "next";
import { Features as FeaturesSection } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
    title: "Features | Antigravity",
    description: "Explore all the powerful features that make Antigravity the best Next.js template for modern web applications.",
    openGraph: {
        title: "Features | Antigravity",
        description: "Explore all the powerful features that make Antigravity the best.",
        type: "website",
    }
};

export default function FeaturesPage() {
    return (
        <div className="pt-20">
            <div className="bg-muted/30 py-20 border-b">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Everything you need, nothing you don&apos;t.
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Antigravity provides a comprehensive suite of tools, components, and patterns to help you build incredible products faster than ever before.
                    </p>
                </div>
            </div>

            <FeaturesSection />
            <HowItWorks />
            <CTABanner />
        </div>
    );
}
