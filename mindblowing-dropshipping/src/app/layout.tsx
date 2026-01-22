import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Dropship | AI-Powered Dropshipping Empire",
  description:
    "Launch, automate, and scale a next-generation dropshipping brand with AI-led sourcing, high-converting funnels, and performance insights.",
  keywords: [
    "dropshipping",
    "ecommerce",
    "ai automation",
    "product sourcing",
    "digital marketing",
  ],
  openGraph: {
    title: "Nova Dropship | AI-Powered Dropshipping Empire",
    description:
      "Discover a blueprint for building a mindblowing dropshipping business with automated product ops, conversion-optimized funnels, and real-time analytics.",
    url: "https://agentic-ddcc16c6.vercel.app",
    siteName: "Nova Dropship",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
        width: 1200,
        height: 630,
        alt: "Nova Dropship Growth Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
