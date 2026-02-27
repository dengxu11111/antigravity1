"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        // Basic client-side validation
        if (!data.name || !data.email || !data.message) {
            setStatus("error");
            setErrorMessage("Please fill out all required fields.");
            return;
        }

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-card border rounded-2xl text-center shadow-sm">
                <CheckCircle2 className="w-16 h-16 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-xl mx-auto p-8 bg-card border rounded-2xl shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="name" className="text-sm font-semibold">Full Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={status === "loading"}
                        className="px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
                        placeholder="Jane Doe"
                    />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="email" className="text-sm font-semibold">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === "loading"}
                        className="px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
                        placeholder="jane@example.com"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-semibold">Company (Optional)</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    disabled={status === "loading"}
                    className="px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
                    placeholder="Acme Corp"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold">Your Message *</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === "loading"}
                    className="px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none disabled:opacity-50"
                    placeholder="How can we help you?"
                />
            </div>

            {status === "error" && (
                <div className="text-destructive text-sm font-medium p-3 bg-destructive/10 rounded-lg">
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-bold transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed focus:ring-4 focus:ring-primary/30 outline-none"
            >
                {status === "loading" ? (
                    <span className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                ) : (
                    <>
                        Send Message
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>
        </form>
    );
}
