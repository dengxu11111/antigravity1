export interface NavLink {
    label: string;
    href: string;
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    id: string;
    author: string;
    role: string;
    company: string;
    content: string;
    avatarUrl: string;
}

export interface PricingTier {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    isPro: boolean;
    ctaText: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    imageUrl: string;
    content: string;
}
