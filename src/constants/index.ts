import { NavLink, Feature, Testimonial, PricingTier, BlogPost } from "@/types";

export const NAVIGATION_LINKS: NavLink[] = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const FEATURES_DATA: Feature[] = [
    {
        id: "f1",
        title: "Blazing Fast Performance",
        description: "Built on Next.js 14 for incredibly fast page loads and seamless transitions.",
        icon: "zap",
    },
    {
        id: "f2",
        title: "Secure by Default",
        description: "Enterprise-grade security features built-in to keep your data safe.",
        icon: "shield",
    },
    {
        id: "f3",
        title: "Beautiful Animations",
        description: "Fluid and natural animations powered by Framer Motion.",
        icon: "sparkles",
    },
    {
        id: "f4",
        title: "Responsive Design",
        description: "Flawless layout across all devices from mobile to desktop.",
        icon: "smartphone",
    },
    {
        id: "f5",
        title: "SEO Optimized",
        description: "Top-tier search engine optimization out of the box.",
        icon: "search",
    },
    {
        id: "f6",
        title: "24/7 Support",
        description: "Our dedicated team is ready to help you anytime, anywhere.",
        icon: "headphones",
    },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: "t1",
        author: "Sarah Johnson",
        role: "CTO",
        company: "TechScale Inc.",
        content: "This product completely transformed how we build and deploy web applications. The speed and developer experience are unmatched.",
        avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: "t2",
        author: "Michael Chen",
        role: "Lead Designer",
        company: "Creative Studio",
        content: "The attention to detail in the UI components has saved us countless hours. It just works, beautifully.",
        avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: "t3",
        author: "Elena Rodriguez",
        role: "Founder",
        company: "Startup Co",
        content: "We were able to launch our MVP in record time thanks to this incredible toolkit. Highly recommended.",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
];

export const PRICING_TIERS: PricingTier[] = [
    {
        id: "p1",
        name: "Starter",
        price: "$29",
        description: "Perfect for small teams and side projects.",
        features: ["Up to 3 users", "Basic analytics", "Community support", "1GB storage"],
        isPro: false,
        ctaText: "Get Started",
    },
    {
        id: "p2",
        name: "Professional",
        price: "$99",
        description: "Ideal for growing businesses and professional agencies.",
        features: ["Unlimited users", "Advanced analytics", "Priority email support", "100GB storage", "Custom domains"],
        isPro: true,
        ctaText: "Start Free Trial",
    },
    {
        id: "p3",
        name: "Enterprise",
        price: "Custom",
        description: "For large scale organizations with custom needs.",
        features: ["Unlimited everything", "Dedicated account manager", "24/7 phone support", "Custom SLA", "On-premise option"],
        isPro: false,
        ctaText: "Contact Sales",
    },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
    {
        slug: "building-with-nextjs-14",
        title: "The Ultimate Guide to Building with Next.js 14",
        excerpt: "Learn how the latest features in Next.js 14 can supercharge your development workflow.",
        date: "October 26, 2024",
        author: "Alex Morgan",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        slug: "mastering-framer-motion",
        title: "Mastering Framer Motion for Web Animations",
        excerpt: "Create fluid, native-feeling internet applications with these advanced motion patterns.",
        date: "November 12, 2024",
        author: "Jordan Lee",
        imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
        content: "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Non arcu risus quis varius quam quisque id diam. \n\n Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Nulla aliquet enim tortor at auctor urna nunc. Feugiat nisl pretium fusce id velit. Tellus mauris a diam maecenas sed enim.",
    },
    {
        slug: "the-future-of-ui-design",
        title: "The Future of User Interface Design in 2025",
        excerpt: "Explore upcoming trends and how accessibility is shaping the modern web.",
        date: "January 5, 2025",
        author: "Sam Taylor",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        content: "Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Ornare massa eget egestas purus viverra. Feugiat in ante metus dictum at tempor. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. \n\n Risus pretium quam vulputate dignissim suspendisse in est ante in. In mattis pellentesque id nibh tortor id. Consectetur sagittis aliquet elit pellentesque habitant morbi.",
    },
];
