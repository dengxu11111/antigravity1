"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus("success");
        (e.target as HTMLFormElement).reset();
    };

    if (status === "success") {
        return (
            <div className="flex items-center gap-2 text-accent font-medium">
                <CheckCircle2 className="w-5 h-5" />
                <span>Subscribed successfully!</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
            <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                disabled={status === "loading"}
                className="flex-1 min-w-0 px-4 py-2 text-sm rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none disabled:opacity-50 transition-all"
                aria-label="Email address for newsletter"
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary outline-none disabled:opacity-70"
                aria-label="Subscribe to newsletter"
            >
                {status === "loading" ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                ) : (
                    <span className="hidden sm:inline">Subscribe</span>
                )}
                <ArrowRight className="w-4 h-4 sm:hidden" aria-hidden="true" />
            </button>
        </form>
    );
}
