"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BusinessCard from "@/components/shared/cards/BusinessCard";
import { BusinessItem } from "../../../../types";

gsap.registerPlugin(ScrollTrigger);

const BusinessWorkForceV3 = () => {
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
      title: "Closer",
      price: 3997,
      description: "ATS-safe, A1-powered resume builder.",
      button: "Subscribe",
    },
    {
      id: 2,
      title: "Appointment Setter",
      price: 2997,
      description:
        "Create your own A1 likeness for video avatars, voice cloning, and personalized content.",
      button: "Subscribe",
    },
    {
      id: 3,
      title: "Lead Nurturer (Memory Enabled",
      price: 2997,
      description: "ATS-safe, A1-powered resume builder..",
      button: "Subscribe",
    },
    {
      id: 4,
      title: "Admin Support",
      price: 2997,
      description: "ATS-safe, A1-powered resume builder.",
      button: "Subscribe",
    },
    {
      id: 5,
      title: "Technical Support Emp Enabled",
      price: 2997,
      description: "ATS-safe, A1-powered resume builder.",
      button: "Subscribe",
    },
    {
      id: 6,
      title: "Administrative Assistant",
      price: 2997,
      description: "ATS-safe, A1-powered resume builder.",
      button: "Subscribe",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden font-jakarta"
    >
      {/* ✅ Dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      {/* ✅ Main Content */}
      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl md:text-5xl leading-14 font-bold text-white">
            Business Workforce v3
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Expert Voice / UCM Memory Enabled
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch business-card"
        >
          {businessData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessWorkForceV3;
