import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_BLOG_POSTS } from "@/constants";
import { CTABanner } from "@/components/sections/CTABanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: "Post Not Found | Antigravity",
        };
    }

    return {
        title: `${post.title} | Antigravity Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [post.imageUrl],
        },
    };
}

// Generate static parameters for all blog posts at build time
export function generateStaticParams() {
    return MOCK_BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
                <FadeIn>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-10 pb-6 border-b">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1} className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl bg-muted">
                    <Image
                        src={post.imageUrl}
                        alt={`Cover image for ${post.title}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </FadeIn>

                <FadeIn delay={0.2} className="prose prose-lg dark:prose-invert max-w-none">
                    {post.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed text-foreground mb-6">
                            {paragraph}
                        </p>
                    ))}
                </FadeIn>
            </div>

            <CTABanner />
        </article>
    );
}
