"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BusinessCard from "@/components/shared/cards/BusinessCard";
import { BusinessItem } from "../../../../types";

gsap.registerPlugin(ScrollTrigger);

const SaaSA1EmployeeLicensing = () => {
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
      title: 'Starter Voice (v1)',
      price: 25000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 2,
      title: 'Standard Voice (v2)',
      price: 35000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 3,
      title: 'Expert Voice (v3)',
      price: 40000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 4,
      title: 'Elite Voice (v4)',
      price: 50000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 5,
      title: 'Administrative Assistant',
      price: 35000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 6,
      title: 'Executive Assistant',
      price: 50000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 7,
      title: 'Order Taker',
      price: 20000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 8,
      title: 'Technical Support',
      price: 35000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 9,
      title: 'Lead Generation',
      price: 25000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 10,
      title: 'QA Employee',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 11,
      title: 'Resume Builder Agent',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 12,
      title: 'Avatar Builder Agent',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 13,
      title: 'Credit Repair Agent',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 14,
      title: 'Personal Assistant',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 15,
      title: 'Trader (Uni)',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 16,
      title: 'Content Manager',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 17,
      title: 'Avatar Builder',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 18,
      title: 'Investigator (Lite)',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 19,
      title: 'Lead Generator',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 20,
      title: 'Order Taker Employee',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 21,
      title: 'Technical Support+',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 22,
      title: 'QA Employee+',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 23,
      title: 'Closer (Voice)',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 24,
      title: 'Appointment Setter',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 25,
      title: 'Lead Hunter (Voice)',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 26,
      title: 'Support Employee',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 27,
      title: 'Admin Assistant',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 28,
      title: 'Property Security',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 29,
      title: 'Ticket Advisor Agent',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 30,
      title: 'Retail Clothing Agent',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 31,
      title: 'Expert Trader',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 32,
      title: 'Expert Investigator',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
    {
      id: 33,
      title: 'CFO',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },

    {
      id: 34,
      title: 'A.D.O.N.I.S. AI Oracle',
      price: 30000,
      description: 'Messaging + reports package',
      button: 'Subscribe',
    },
  ];


  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden font-jakarta"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl sm:text-5xl md:text-6xl leading-14 font-bold text-white">
            SaaS – A1 Employee Licensing
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Own the license, own the revenue.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch business-card"
        >
          {businessData?.map((data) => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaaSA1EmployeeLicensing;
