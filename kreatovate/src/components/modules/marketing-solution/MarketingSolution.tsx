"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BusinessCard from "@/components/shared/cards/BusinessCard";
import Image from "next/image";
import { BusinessItem } from "../../../../types";

gsap.registerPlugin(ScrollTrigger);

const MarketingSolution = () => {
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

  const businessData: BusinessItem[] = [
    {
      id: 1,
      title: "Avatar Builder",
      price: 297,
      description:
        "Generates posts, captions, hashtags, and schedules content.",
    },
    {
      id: 2,
      title: "Content Management",
      price: 297,
      description:
        "Creates branded avatars for outreach, training, or marketing.",
    },
    {
      id: 3,
      title: "Lead Generation",
      price: 197,
      description: "Performs background checks and internet data scrubbing.",
    },
    {
      id: 4,
      title: "Lead Nurturing",
      price: 197,
      description: "Warms leads with education and timely follow-ups.",
    },
    {
      id: 5,
      title: "SEO & GEO",
      price: 297,
      description: "Schedules and confirms client calls seamlessly.",
    },
    {
      id: 6,
      title: "Website Builder",
      price: 397,
      description: "Outbound sales employee that calls and closes deals.",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden"
    >
      {/* ✅ Background Image */}
      <Image
        src="/images/personal_pricelist_bg.png"
        alt="Background"
        fill
        className="object-cover w-full h-1/2"
        priority
      />

      {/* ✅ Dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      {/* ✅ Main Content */}
      <div className="custom-container relative flex flex-col items-center gap-10 lg:gap-14">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="text-center text-3xl sm:text-5xl leading-14 font-bold text-white">
            <div className="md:py-2">
              <span>Our AI Powered </span>
              <span className="text-gradient "> Digital</span>
            </div>

            <span className="text-gradient"> Marketing Solutions</span>
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Our very Own A1 Workforce that we rent is just our own Oracle SaaS.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 business-card"
        >
          {businessData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
      <button className=" mt-4 bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 text-white font-medium  rounded-lg flex items-center justify-center transition-all duration-300 mx-auto py-3 px-4">
        View Full WOrkforce
      </button>
    </div>
  );
};

export default MarketingSolution;
