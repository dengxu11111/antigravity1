import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Antigravity | Build the future faster",
  description: "The most powerful Next.js template for modern web applications. Ship faster, scale further, and create stunning user experiences out of the box.",
  openGraph: {
    title: "Antigravity | Build the future faster",
    description: "The most powerful Next.js template for modern web applications.",
    type: "website",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
