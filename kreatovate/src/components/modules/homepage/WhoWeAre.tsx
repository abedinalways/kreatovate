"use client";

import SectionHead from "@/components/shared/SectionHead";
import WwaCard from "./WwaCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardData = [
    {
      title: "Purposeful Development",
      description:
        "We design and build SMART micro-cities with real purpose — compact, tech-enabled communities that improve lives and long-term value.",
      icon: "/images/wwa1.png",
    },
    {
      title: "Integrated Delivery",
      description:
        "We handle consulting, design, marketing, and implementation to take projects from concept to completion.",
      icon: "/images/wwa2.png",
    },
    {
      title: "Carbon Neutrality",
      description:
        "We commit to net-zero carbon across our work, using green solutions and off-grid utilities to lead by action, not just words.",
      icon: "/images/wwa3.png",
    },
    {
      title: "Growth Protection",
      description:
        "We focus on boosting your bottom line while ensuring data protection, future scalability, and lasting organizational success.",
      icon: "/images/wwa4.png",
    },
  ];

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 40%",
          // once: true, // ❌ বাদ
          toggleActions: "play none none reverse", // ✅ স্ক্রলে প্লে, উপরে গেলে রিভার্স
          invalidateOnRefresh: true, // ✅ রিফ্রেশে পজিশন রিক্যাল্ক
          // markers: true, // ডিবাগ দরকার হলে খুলে দাও
        },
      });

      // 🎞️ Heading
      tl.from(".js-wwa-heading", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // sub
      tl.from(
        ".js-wwa-sub",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // 🌬️🎯 cards (stagger)
      tl.from(
        ".js-wwa-card",
        {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.1"
      );
    }, sectionRef);

    
    ScrollTrigger.refresh();

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#0F1016] py-24 px-4 lg:px-4 xl:px-0">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-6 lg:row-span-2">
          <div className="flex flex-col gap-4 md:gap-1 js-wwa-heading">
            <div className="w-fit">
              <SectionHead title="Who Are We" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-14">
              Who <span className="text-color-gradient">are We</span>
            </h1>
          </div>

          <p className="font-roboto text-sm md:text-base font-normal leading-8 js-wwa-sub">
            Our job is to simply positively affect your organizations overall
            <br />
            bottom line while simultaneously ensuring exponential growth, data
            <br />
            protection, its future success & its ability to scale in the
            process!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {cardData.map((data, i) => (
            <div key={i} className="js-wwa-card">
              <WwaCard
                data={data}
                className="transition-transform duration-300 will-change-transform hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
