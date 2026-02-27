import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
    return (
        <div className={cn("flex flex-col p-8 bg-card text-card-foreground rounded-2xl border shadow-sm relative", className)}>
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" aria-hidden="true" />
            <p className="text-lg mb-6 flex-grow z-10">&quot;{testimonial.content}&quot;</p>
            <div className="flex items-center gap-4 mt-auto">
                <Image
                    src={testimonial.avatarUrl}
                    alt={`Avatar of ${testimonial.author}`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
}
