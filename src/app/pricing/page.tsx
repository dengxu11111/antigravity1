import { Metadata } from "next";
import { Pricing as PricingSection } from "@/components/sections/Pricing";
import { CTABanner } from "@/components/sections/CTABanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing | Antigravity",
    description: "Simple, transparent pricing for teams of all sizes. Choose the plan that best fits your needs.",
    openGraph: {
        title: "Pricing | Antigravity",
        description: "Simple, transparent pricing for teams of all sizes.",
        type: "website",
    }
};

const FAQS = [
    {
        q: "Can I switch plans later?",
        a: "Absolutely. You can upgrade or downgrade your plan at any time from your account dashboard. Prorated charges will be applied automatically."
    },
    {
        q: "Do you offer a free trial?",
        a: "Yes, all paid plans come with a 14-day free trial. No credit card is required to start your trial."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal and wire transfers for annual enterprise plans."
    },
    {
        q: "Is there a discount for yearly billing?",
        a: "Yes! If you choose to be billed annually, you'll receive a 20% discount compared to monthly billing."
    }
];

export default function PricingPage() {
    return (
        <div className="pt-20">
            <div className="bg-background pt-20 pb-10">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Plans that scale with you
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Start for free, upgrade when you need more power. We have a plan for everyone, from solo developers to large enterprises.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <PricingSection />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Everything you need to know about the product and billing.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {FAQS.map((faq, idx) => (
                            <FadeIn key={idx} delay={0.1 * idx} className="flex flex-col gap-3">
                                <h3 className="font-semibold text-lg">{faq.q}</h3>
                                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30 border-y">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-card p-10 md:p-16 rounded-3xl shadow-sm border">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
                            <p className="text-muted-foreground mb-6">
                                Our enterprise plan offers custom integrations, dedicated support, and SLAs tailored to your organization&apos;s specific needs.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Dedicated account manager", "Custom contract & invoicing", "SAML SSO & Advanced provisioning"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <Check className="w-5 h-5 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-auto">
                            <a href="/contact" className="inline-flex items-center justify-center h-14 w-full md:w-auto px-8 rounded-xl bg-primary text-primary-foreground text-lg font-bold transition-transform hover:scale-105 active:scale-95">
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </div>
    );
}
