import { FadeIn } from "@/components/ui/FadeIn";
import {
    Building2,
    Hexagon,
    CircleDot,
    Triangle,
    SquareAsterisk,
    Diamond
} from "lucide-react";

const LOGOS = [
    { name: "Acme Corp", icon: Building2 },
    { name: "Next Labs", icon: Hexagon },
    { name: "Circle Tech", icon: CircleDot },
    { name: "Triangle Media", icon: Triangle },
    { name: "Square Systems", icon: SquareAsterisk },
    { name: "Diamond Hands", icon: Diamond },
];

export function SocialProof() {
    return (
        <section className="py-12 border-y bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="flex flex-col items-center gap-8">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
                        Trusted by innovative teams worldwide
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
                        {LOGOS.map((Logo, idx) => (
                            <div key={idx} className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
                                <Logo.icon className="w-8 h-8 text-foreground" aria-hidden="true" />
                                <span className="text-xl font-bold font-serif hidden sm:inline-block">{Logo.name}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
