import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/LenisProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Workforce Kreatovate | Build Your Smart, Scalable AI Workforce",
  description:
    "Workforce Kreatovate helps businesses automate operations and scale effortlessly with AI-powered employees. Hire, deploy, and manage intelligent virtual team members — all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased bg-[#000] font-jakarta text-white`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
