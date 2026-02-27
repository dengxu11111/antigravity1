import { Feature } from "@/types";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface FeatureCardProps {
    feature: Feature;
    className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
    const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ElementType;

    return (
        <div className={cn("flex flex-col items-start p-6 bg-card text-card-foreground rounded-xl border shadow-sm hover:shadow-md transition-shadow", className)}>
            <div className="p-3 bg-primary/10 rounded-lg mb-4">
                {IconComponent ? (
                    <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                ) : (
                    <Icons.Check className="w-6 h-6 text-primary" aria-hidden="true" />
                )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
    );
}
