import { FadeIn } from "@/components/ui/FadeIn";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS_DATA } from "@/constants";

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <FadeIn>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-4">Wall of Love</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                            Don&apos;t just take our word for it
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Read what other incredible teams have to say about building with Antigravity.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {TESTIMONIALS_DATA.map((testimonial, idx) => (
                        <FadeIn key={testimonial.id} delay={0.1 * (idx % 3)}>
                            <TestimonialCard testimonial={testimonial} className="h-full hover:-translate-y-2 transition-transform duration-300" />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
