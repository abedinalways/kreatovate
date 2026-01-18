"use client";

import { useLayoutEffect } from "react";
import { QuoteCard } from "./QuoteCard";
import quotesData from "../../../public/quotes.json";
import HeadingButton from "../shared/HeadingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type QuoteItem = {
  quote: string;
};

export type FeatureItem = {
  title: string;
  desc: string;
};

export type QuotesData = {
  quotes: QuoteItem[];
  features: FeatureItem[];
};

export const OurBlurbs = () => {
  const data = quotesData as QuotesData;
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation (fade-up)
      gsap.fromTo(
        ".ourblurbs-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ourblurbs-heading",
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Cards animation (fade + scale)
      gsap.fromTo(
        ".quote-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".quote-card",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0F1016] min-h-screen py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
          <HeadingButton btnText="Our Blurbs" className="w-33 mx-auto" />
        </div>

        {/* <h1 className="ourblurbs-heading text-3xl md:text-5xl font-bold text-center text-white mb-10 font-jakarta">
          Meet Your <span className="text-gradient">New Workforce</span>
        </h1> */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h1 className="ourblurbs-heading text-3xl md:text-5xl font-bold text-center text-white font-jakarta">
            Workforce Intelligence
          </h1>

          <p className="font-normal text-base leading-[180%] text-center max-w-[45rem]">
            Not individual AI employees — one intelligence system executing
            specialized capabilities across your business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {data?.features?.map((q, idx) => (
            <div key={idx} className="quote-card h-full flex">
              <QuoteCard
                // quote={q}
                feature={q}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
