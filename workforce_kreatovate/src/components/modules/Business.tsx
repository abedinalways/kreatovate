"use client";
import gsap from "gsap";
import { BusinessItem } from "../../../types";
import BusinessCard from "./BusinessCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Business = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title fade-up
      gsap.from(".bwv1-title", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      });

      // Subtitle fade-up
      gsap.from(".bwv1-sub", {
        opacity: 0,
        y: 15,
        duration: 0.7,
        delay: 0.1,
        ease: "power2.out",
      });

      // Card animation
      gsap.from(".business-card", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        immediateRender: false, // ← REQUIRED FIX
        scrollTrigger: {
          trigger: ".business-grid",
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
      price: 2497,
      description: "Outbound sales employee that calls and closes deals.",
    },
    {
      id: 2,
      title: "Appointment Setter",
      price: 1497,
      description: "Schedules and confirms client calls seamlessly..",
    },
    {
      id: 3,
      title: "Lead Nurturer",
      price: 1497,
      description: "Warms leads with education and timely follow-ups.",
    },
  ];

  const businessSecondData: BusinessItem[] = [
    {
      id: 4,
      title: "Missed Call 2 Text (MC2T)",
      price: 397,
      description: "Warms leads with education and timely follow-ups.",
    },
    {
      id: 5,
      title: "Admin Support",
      price: 1497,
      description: "Schedules and confirms client calls seamlessly.",
    },
  ];

  return (
    <div id="price" ref={rootRef} className="py-12 bg-[#0F1016]">
      <div className="custom-container flex flex-col px-4 gap-6 lg:gap-10">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          {/* <h1 className="bwv1-title text-2xl tetx-center md:text-4xl font-bold">
            Business Workforce V1
            <br />
            <span className="text-center flex justify-center">
              Monthly Pricing
            </span>
          </h1> */}
          <h1 className="bwv1-title text-2xl tetx-center md:text-4xl font-bold max-w-xl text-center">
            Pricing Scales by Authority, Not Headcount
          </h1>
          {/* <p className="bwv1-sub text-sm md:text-md lg:text-[1rem] leading-7 font-normal">
            Lite / Starter Voice Employees
          </p> */}
          <p className="bwv1-sub text-sm md:text-md lg:text-[1rem] leading-7 font-normal text-center max-w-4xl">
            KINpro pricing reflects the decision authority and operational scope
            you want A.D.O.N.I.S. to manage — from execution (Admin) to full
            operational leadership (COO). Core Business OS capabilities (CRM,
            inbox, tasks, projects, time tracking, automation, analytics) remain
            consistent; higher tiers expand autonomy, cross-department reach,
            and intelligence authority.
          </p>
        </div>

        {/* GRID 1 */}
        <div className="business-grid grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
          {businessData?.map((data) => (
            <div key={data.id} className="business-card">
              <BusinessCard data={data} />
            </div>
          ))}
        </div>

        {/* GRID 2 */}
        <div className="business-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessSecondData?.map((data) => (
            <div key={data.id} className="business-card">
              <BusinessCard data={data} />
            </div>
          ))}
        </div>

        {/* <ButtonAll btnText="View Full Workforce" className="py-6 mx-auto" /> */}
      </div>
    </div>
  );
};

export default Business;
