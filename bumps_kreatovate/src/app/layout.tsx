import type { Metadata } from "next";
import { Open_Sans, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import LenisProvider from "@/providers/LenisProvider";
import Script from "next/script";
import BumpSaleLoader from "@/components/BumpSaleLoader";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});

export const metadata: Metadata = {
  title: "Bumps Kreatovate | Book Funnels & Smart Sales Automation",
  description:
    "Bumps Kreatovate helps authors and entrepreneurs launch high-converting book funnels with Bumpsale integration. Capture leads, automate sales through GoHighLevel CRM, and grow your business with seamless marketing technology.",
  openGraph: {
    title: "Bumps Kreatovate | Book Funnels & Smart Sales Automation",
    description:
      "Launch your next bestseller funnel with Bumps Kreatovate — a complete system for selling books, automating lead capture, and syncing with GoHighLevel CRM.",
    // url: "https://bumps.kreatovate.com",
    siteName: "Kreatovate",
    // images: [
    //   {
    //     url: "/images/og-bumps.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Bumps Kreatovate Funnel",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Bumps Kreatovate",
    "book funnel",
    "Bumpsale integration",
    "GoHighLevel CRM",
    "marketing automation",
    "lead capture funnel",
    "author sales funnel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="min-w-[320px]">
      <body
        className={`${jakarta.variable} ${roboto.variable} ${openSans.variable} antialiased min-h-screen flex flex-col bg-black text-white`}
      >
        <LenisProvider>{children}</LenisProvider>
        {/* <BumpSaleLoader /> */}
        {/* <Script
          src="https://widgets.bumpsale.co/button.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("Bumpsale widget script loaded");
          }}
        /> */}
        <Script
          src="https://widgets.bumpsale.co/button.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
