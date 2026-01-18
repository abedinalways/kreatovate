"use client";
import gsap from "gsap";
import { BusinessItem } from "../../../types";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BusinessCard from "@/components/shared/cards/BusinessCard";

gsap.registerPlugin(ScrollTrigger);

const AvailableForRent = () => {
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
    },
    {
      id: 2,
      title: "Appointment Setter",
      price: 2997,
      description:
        "Create your own A1 likeness for video avatars, voice cloning, and personalized content.",
    },
    {
      id: 3,
      title: "Lead Nurturer",
      price: 2997,
      description: "ATS-safe, A1-powered resume builder.",
    },
  ];

  const businessSecondData: BusinessItem[] = [
    {
      id: 4,
      title: "MC2T",
      price: 397,
      description: "ATS-safe, A1-powered resume builder.",
    },
    {
      id: 5,
      title: "Admin Support",
      price: 2997,
      description: "ATS-safe, A1-powered resume builder.",
    },
  ];

  return (
    <div ref={rootRef} className="py-12 bg-[#0F1016] font-jakarta">
      <div className="custom-container flex flex-col px-4 gap-6 lg:gap-10">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl tetx-center md:text-5xl leading-14 font-bold text-white">
            The only v1 employees
            <br />
            <span className="text-center flex justify-center">
              available for rent
            </span>
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Expert Voice / UCM Memory Enabled
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8"
        >
          {businessData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessSecondData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableForRent;
