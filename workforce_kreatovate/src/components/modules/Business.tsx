"use client";
import gsap from "gsap";
import { BusinessItem } from "../../../types";
import BusinessCard from "./BusinessCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ButtonAll from "../shared/ButtonAll";

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
      title: 'Closer',
      price: 2497,
      description: 'Outbound sales employee that calls and closes deals.',
    },
    {
      id: 2,
      title: 'Appointment Setter',
      price: 1497,
      description: 'Schedules and confirms client calls seamlessly..',
    },
    {
      id: 3,
      title: 'Lead Nurturer',
      price: 1497,
      description: 'Warms leads with education and timely follow-ups.',
    },
  ];

  const businessSecondData: BusinessItem[] = [
    {
      id: 4,
      title: 'Missed Call 2 Text (MC2T)',
      price: 1497,
      description: 'Warms leads with education and timely follow-ups.',
    },
    {
      id: 5,
      title: 'Support',
      price: 1497,
      description: 'Schedules and confirms client calls seamlessly.',
    },
  ];

  return (

    <div id="our_solutions" ref={rootRef} className="py-12 bg-[#0F1016]" >
      <div className="custom-container flex flex-col px-4 gap-6 lg:gap-10">

        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl tetx-center md:text-4xl font-bold">
            Business Workforce v1
          </h1>
          <p className="bwv1-sub text-sm md:text-md lg:text-[1rem] leading-7 font-normal">
            Lite / Starter Voice Employees
          </p>
        </div>

        <div ref={gridRef} className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
          {businessData?.map(data => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessSecondData?.map(data => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
        <ButtonAll btnText="View Full Workforce" className="py-6 mx-auto" />
      </div>
    </div>
  );
};

export default Business;
