import { Metadata } from "next";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { MOCK_BLOG_POSTS } from "@/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
    title: "Blog | Antigravity",
    description: "Read the latest news, tutorials, and insights from the Antigravity team. Learn how to build better Next.js applications.",
    openGraph: {
        title: "Blog | Antigravity",
        description: "Read the latest news, tutorials, and insights from the Antigravity team.",
        type: "website",
    }
};

export default function BlogIndexPage() {
    return (
        <div className="pt-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 md:px-6 py-20 pb-32">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            Insights & Updates
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Discover articles, tutorials, and news about Next.js, web development, and design from the Antigravity team.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_BLOG_POSTS.map((post, idx) => (
                        <FadeIn key={post.slug} delay={0.1 * (idx % 3)}>
                            <BlogPostCard post={post} className="h-full" />
                        </FadeIn>
                    ))}
                </div>
            </div>

            <CTABanner />
        </div>
    );
}
