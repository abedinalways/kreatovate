"use client";
import gsap from "gsap";
import { BusinessItem } from "../../../types";
import BusinessCard from "./BusinessCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Business = () => {
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
      title: "Content Manager",
      price: 497,
      description:
        "Generates posts, captions, hashtags, and schedules for social media.",
    },
    {
      id: 2,
      title: "Avatar Builder (Business)",
      price: 497,
      description:
        "Creates branded avatars for outreach, training, or marketing use.",
    },
    {
      id: 3,
      title: "Investigator (Lite)",
      price: 597,
      description: "Basic background checks and internet scrubbing.",
    },
    {
      id: 4,
      title: "Lead Nurturer",
      price: 1497,
      description: "Warms leads with education and timely follow-ups.",
    },
    {
      id: 5,
      title: "Appointment Setter",
      price: 1497,
      description: "Schedules and confirms client calls seamlessly.",
    },
    {
      id: 6,
      title: "Closer (Voice)",
      price: 1497,
      description: "Outbound sales employee that calls and closes deals.",
    },
  ];

  return (
    <div ref={rootRef} className="py-[6.25rem] bg-[#0F1016] px-4 md:px-0">
      <div className="custom-container flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl sm:text-5xl md:text-6xl leading-14 font-bold">
            Business Workforce v1
          </h1>
          <p className="bwv1-sub text-base leading-7 font-normal">
            Lite / Starter Voice Employees
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {businessData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
