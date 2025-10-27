"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Card from "./Card";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Consulting = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Card animation
      gsap.from(".js-consult-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
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
    <div ref={sectionRef}>
      <div className="relative h-screen w-screen">
        {/* 🔹 Background Image */}
        <Image
          src="/images/consulting.png"
          alt="Background"
          fill
          className="absolute top-0 left-0 object-cover"
        />

        {/* 🔹 Card with animation */}
        <div className="custom-container h-full w-full flex items-center px-4 lg:px-0">
          <div className="js-consult-card">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
