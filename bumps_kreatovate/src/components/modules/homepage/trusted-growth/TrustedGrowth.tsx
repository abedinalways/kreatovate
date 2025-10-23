"use client";

import { useEffect, useRef } from "react";
import TrustCard from "./TrustCard";
import gsap from "gsap";

const TrustedGrowth = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🟣 Title Section Animation (fade + slide-up)
      gsap.from(".trusted-title > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // 🟢 Cards Continuous Floating Motion
      const cards = gsap.utils.toArray<HTMLElement>(".trust-card");

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: 15,
          duration: 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="custom-container pt-24 flex flex-col gap-12 px-4 md:px-0"
    >
      <div className="space-y-2 trusted-title ">
        <p className="uppercase text-color-gradient font-roboto font-normal text-sm">
          [ our books ]
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-end justify-between">
          <h1 className="font-jakarta text-2xl lg:text-5xl font-bold">
            Trusted growth plans:
            <br /> data-driven, scalable.
          </h1>
          <p className="text-jakarta font-medium text-base lg:text-lg">
            Smart, simple ways to turn your ideas into real growth - <br />{" "}
            using data, hands-on strategy, and AI where it helps most.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="trust-card w-full lg:w-1/4">
          <TrustCard />
        </div>
        <div className="trust-card w-full lg:w-1/4">
          <TrustCard />
        </div>
        <div className="trust-card w-full lg:w-1/4">
          <TrustCard />
        </div>
        <div className="trust-card w-full lg:w-1/4">
          <TrustCard />
        </div>
      </div>
    </div>
  );
};

export default TrustedGrowth;
