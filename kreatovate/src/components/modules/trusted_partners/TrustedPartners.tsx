"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonOne from "@/components/shared/buttons/ButtonOne";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TrustedPartners = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // বাম দিক থেকে টেক্সট আসবে
      gsap.from(".js-trusted-left", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // ডান দিক থেকে ইমেজ আসবে
      gsap.from(".js-trusted-right", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#0F1016] py-24 overflow-hidden">
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="js-trusted-left flex flex-col justify-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-start">
            Your Trusted <span className="text-color-gradient">Partners</span>
          </h2>
          <p className="text-gray-200 text-sm leading-7 px-4 md:px-0">
            We leverage our partnerships to cover what we can’t in house. The
            rapport <br />
            we have built with our relationships is everything to us, which only
            adds to <br /> our family like working relationship. If there is a
            need to bring your <br />
            company into the digital age, we are your ultimate transition team.
            We have <br />
            many solutions to ensure you and your businesses flourish just as
            you <br /> have envisioned it.
          </p>
          <div className="w-33 px-4 md:px-0">
            <ButtonOne btnText="Contact Us" />
          </div>
        </div>

        {/* Right Section */}
        <div className="js-trusted-right flex justify-center px-4 md:px-0">
          <Image
            src="/images/partners.png"
            alt="Partners"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
