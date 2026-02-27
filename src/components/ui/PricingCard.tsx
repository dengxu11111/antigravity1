import { PricingTier } from "@/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
    tier: PricingTier;
    className?: string;
}

export function PricingCard({ tier, className }: PricingCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col p-8 rounded-3xl border transition-all",
                tier.isPro ? "bg-primary text-primary-foreground shadow-xl scale-105 border-transparent" : "bg-card text-card-foreground shadow-sm",
                className
            )}
        >
            {tier.isPro && (
                <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full self-start mb-4">
                    Most Popular
                </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <p className={cn("mb-6", tier.isPro ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {tier.description}
            </p>
            <div className="mb-6">
                <span className="text-5xl font-extrabold">{tier.price}</span>
                {tier.price !== "Custom" && <span className={cn("text-lg", tier.isPro ? "text-primary-foreground/80" : "text-muted-foreground")}>/mo</span>}
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check className={cn("w-5 h-5 flex-shrink-0 mt-0.5", tier.isPro ? "text-accent" : "text-primary")} aria-hidden="true" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link
                href="/contact"
                className={cn(
                    "w-full py-4 px-6 rounded-xl font-semibold text-center transition-opacity hover:opacity-90 focus:ring-4 focus:ring-offset-2 outline-none",
                    tier.isPro
                        ? "bg-accent text-accent-foreground focus:ring-accent focus:ring-offset-primary"
                        : "bg-primary text-primary-foreground focus:ring-primary focus:ring-offset-background"
                )}
            >
                {tier.ctaText}
            </Link>
        </div>
    );
}
