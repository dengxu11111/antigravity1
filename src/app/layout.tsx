import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Antigravity | Modern Next.js Template",
  description: "The most powerful Next.js template for modern web applications. Ship faster, scale further, and create stunning user experiences out of the box.",
  openGraph: {
    title: "Antigravity | Modern Next.js Template",
    description: "The most powerful Next.js template for modern web applications.",
    type: "website",
    url: "https://example.com",
    siteName: "Antigravity"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
