import { BlogPost } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogPostCardProps {
    post: BlogPost;
    className?: string;
}

export function BlogPostCard({ post, className }: BlogPostCardProps) {
    return (
        <article className={cn("flex flex-col bg-card text-card-foreground rounded-2xl border shadow-sm overflow-hidden group hover:shadow-md transition-all", className)}>
            <div className="relative w-full h-48 sm:h-64 overflow-hidden">
                <Image
                    src={post.imageUrl}
                    alt={`Cover image for ${post.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{post.author}</span>
                    </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="group/link focus:outline-none">
                    <h3 className="text-xl font-bold mb-3 group-hover/link:text-primary transition-colors focus-visible:text-primary focus-visible:underline outline-none">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold group/link2 focus:outline-none focus-visible:underline outline-none"
                        aria-label={`Read more about ${post.title}`}
                    >
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link2:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
