import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
    {
        num: "01",
        title: "Configure & Customize",
        description: "Set up your brand colors, typography, and layout preferences in minutes. Our flexible architecture adapts to your needs."
    },
    {
        num: "02",
        title: "Build the Content",
        description: "Use our pre-built components to assemble your pages. From hero sections to pricing tables, everything is ready to go."
    },
    {
        num: "03",
        title: "Deploy & Scale",
        description: "Push to your repository and let Vercel handle the rest. Instantly global, incredibly fast, automatically scaled."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
                    <FadeIn className="flex-1 sticky top-32">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Streamined for rapid development
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            We have eliminated the boilerplate so you can focus on building unique value. Follow three simple steps to launch your digital presence.
                        </p>
                    </FadeIn>

                    <div className="flex-1 flex flex-col gap-12 text-foreground">
                        {STEPS.map((step, idx) => (
                            <FadeIn key={idx} delay={0.1 * idx} className="flex gap-6 relative">
                                {idx !== STEPS.length - 1 && (
                                    <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-border" aria-hidden="true" />
                                )}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10 shadow-lg ring-4 ring-background">
                                    {step.num}
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
