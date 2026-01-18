"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BusinessCard from "@/components/shared/cards/BusinessCard";
import { BusinessItem } from "../../../../types";

gsap.registerPlugin(ScrollTrigger);

const BusinessWorkForce = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bwv1-title", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".bwv1-sub", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
      });

      gsap.from(".business-card", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // -------------------------------
  // UPDATED DATA (Matches Screenshot)
  // -------------------------------
  const businessData: BusinessItem[] = [
    {
      id: 1,
      title: "Avatar Builder",
      price: 497,
      availability: "Not Available",
      description:
        "Creates branded avatars for outreach, training, or marketing.",
      button: "Subscribe",
    },
    {
      id: 2,
      title: "MC2T",
      price: 397,
      availability: "Available",
      description: "ATS-safe, AI-powered resume builder.",
      button: "Subscribe",
    },
    {
      id: 3,
      title: "Investigator",
      price: 597,
      availability: "Not Available",
      description: "Basic background checks and internet scrubbing.",
      button: "Subscribe",
    },
    {
      id: 4,
      title: "Lead Generation",
      price: 997,
      availability: "Not Available",
      description:
        "AI prospector that finds, qualifies, and routes high-intent leads.",
      button: "Subscribe",
    },
    {
      id: 5,
      title: "Content Manager",
      price: 497,
      availability: "Not Available",
      description:
        "Generates posts, captions, hashtags, and schedules for social media.",
      button: "Subscribe",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-25 px-4 md:px-0 bg-[#0F1016] overflow-hidden font-jakarta"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70 -z-10"></div>

      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        {/* Title */}
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="bwv1-title text-2xl md:text-5xl font-bold text-white text-center">
            Business Workforce Non-Voice v1
          </h1>
          <p className="bwv1-sub text-sm md:text-md text-gray-300 text-center">
            Lite / Starter Non-Voice Employees
          </p>
        </div>

        {/* GRID — UPDATED */}
        <div
          ref={gridRef}
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            items-stretch 
            justify-center
            w-full
          "
        >
          {businessData.map((item) => (
            <BusinessCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessWorkForce;
