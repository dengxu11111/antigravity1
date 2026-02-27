import { FadeIn } from "@/components/ui/FadeIn";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_TIERS } from "@/constants";

export function Pricing() {
    return (
        <section className="py-24 md:py-32 bg-muted/30 border-y relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <FadeIn>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-4">Pricing</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                            Simple, transparent pricing
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            No hidden fees. No surprise charges. Choose the plan that best fits your needs and scale as you grow.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {PRICING_TIERS.map((tier, idx) => (
                        <FadeIn key={tier.id} delay={0.1 * idx} className={tier.isPro ? "lg:-mx-4 z-10" : ""}>
                            <PricingCard tier={tier} className={tier.isPro ? "h-full py-12" : "h-full"} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
