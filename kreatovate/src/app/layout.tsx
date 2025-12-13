import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";
import { ReactNode } from "react";
import Script from "next/script";

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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${roboto.variable} antialiased bg-black`}
      >
        <LenisProvider>
          <div id="page-root">{children}</div>
        </LenisProvider>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="693bbcb7e9d47628adf3781e"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
