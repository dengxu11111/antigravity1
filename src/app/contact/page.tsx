import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Antigravity",
    description: "Get in touch with the Antigravity team. We're here to answer any questions and help you build your future.",
    openGraph: {
        title: "Contact Us | Antigravity",
        description: "Get in touch with the Antigravity team.",
        type: "website",
    }
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-background min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Let&apos;s build something great together.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 max-w-6xl mx-auto">
                    <FadeIn delay={0.1} className="flex flex-col gap-8 lg:pr-8">
                        <h2 className="text-2xl font-bold mb-2">Get in touch</h2>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                                <p className="text-muted-foreground">
                                    100 Innovation Way<br />
                                    San Francisco, CA 94107
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                <p className="text-muted-foreground">
                                    +1 (555) 123-4567<br />
                                    Mon-Fri, 9am-6pm PST
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground">
                                    hello@antigravity.dev<br />
                                    support@antigravity.dev
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <ContactForm />
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
