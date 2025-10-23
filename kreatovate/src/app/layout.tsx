import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kreatovate | Marketing, Strategy & AI-Driven Business Consulting",
  description:
    "Kreatovate empowers businesses to transform ideas into measurable growth. Our marketing, automation, and AI consulting solutions drive innovation, scale impact, and build lasting customer loyalty.",

  keywords: [
    "Kreatovate",
    "business consulting",
    "marketing strategy",
    "AI consulting",
    "automation",
    "digital transformation",
    "lead generation",
    "growth strategy",
    "GoHighLevel CRM integration",
  ],

  openGraph: {
    title: "Kreatovate | Marketing, Strategy & AI-Driven Business Consulting",
    description:
      "Transform your business with Kreatovate’s marketing, automation, and AI-powered consulting. Strategy meets innovation to drive measurable growth.",
    url: "https://kreatovate.com",
    siteName: "Kreatovate",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
