"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import BusinessCard from "@/components/shared/cards/BusinessCard";

import { BusinessItem } from "../../../../types";

import SectionHead from "@/components/shared/SectionHead";

gsap.registerPlugin(ScrollTrigger);

const OurPricing = () => {
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
      title: "ESSENTIALS AUTOMATION",
      // price: "$1000-$1500/mo",
      duration: "(3–6 month minimum)",
      description:
        "A clean foundation for businesses needing automated customer handling. Includes MC2T responsiveness, basic support flows, and light nurture sequences.",
      availability: "Not available",
    },
    {
      id: 2,
      title: "LEAD MACHINE",
      // price: "$2500–$4000/mo",
      duration: "(3–6 month minimum)",
      description:
        "Full lead nurturing, booking, and follow-up system run by the internal A1 Workforce. Includes Nurture, Appointment Setter, and Closer Assist modules.",
      availability: "Not available",
    },
    {
      id: 3,
      title: "MULTI-CHANNEL SALES ACCELERATOR",
      // price: "$6000–$12000/mo",
      duration: "(6 month minimum)",
      description:
        "We run TikTok/Meta/Google/LinkedIn campaigns and all inbound/outbound workflows. Includes full Closer, multi-channel messaging, reporting, optimization.",
      availability: "Not available",
    },
    {
      id: 4,
      title: "ENTERPRISE (CUSTOM)",
      // price: "Custom Quote",
      duration: "",
      description:
        "Full takeover of sales, support, nurture, automation, content systems. Built using the full Kreatovate A1 Workforce.",
      availability: "Not available",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-25 px-4 md:px-0 bg-[#0F1016] overflow-hidden font-jakarta" id='our_pricing'
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <div className="">
            <SectionHead title="OUR PRICING" />
          </div>
          {/* <h1 className="font-jakarta text-3xl md:text-5xl font-bold md:leading-16 text-center text-color-gradient">
            <span className="text-white text-center">Kreatovate </span>
            <span>- A1 Digital Services</span> <br />{" "}
            <div className="md:text-center mx-auto mt-2">
              Pricing (Hybrid Model)
            </div>
          </h1> */}
          <h1 className="font-jakarta text-3xl md:text-5xl font-bold md:leading-16 text-center text-color-gradient max-w-5xl">
            <span className="text-white text-center">
              Kreatovate Kreatovate{" "}
            </span>
            <span>- Advanced Automated Intelligence Services -</span>
            Pricing (Hybrid Model)
          </h1>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 business-card"
        >
          {businessData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
