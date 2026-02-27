import { FadeIn } from "@/components/ui/FadeIn";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FEATURES_DATA } from "@/constants";

export function Features() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <FadeIn>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-4">Core Features</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                            Everything you need to ship faster
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our comprehensive suite of tools and components helps you focus on what matters most: building incredible products for your users.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {FEATURES_DATA.map((feature, idx) => (
                        <FadeIn key={feature.id} delay={0.1 * (idx % 3)}>
                            <FeatureCard feature={feature} className="h-full" />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
