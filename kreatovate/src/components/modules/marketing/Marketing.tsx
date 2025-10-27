"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Marketing = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 🎞️ Left image animation
      gsap.from(".js-marketing-image", {
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

      // 🎬 Right text animation (staggered)
      gsap.from(".js-marketing-text > *", {
        x: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
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
    <div ref={sectionRef} className="bg-[#0F1016] overflow-hidden">
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24 px-4">
        {/* Left Image */}
        <div className="js-marketing-image">
          <Image
            src="/images/marketing.png"
            alt="Marketing Image"
            width={600}
            height={500}
          />
        </div>

        {/* Right Text */}
        <div className="js-marketing-text flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            Business <span className="text-gradient">Marketing &</span> <br />
            <span className="text-red-700">Consulting</span>
          </h2>

          <p className="text-gray-200 text-sm leading-7">
            This is ultimately why we do this, for our fellow business owners
            and entrepreneurs. We know how deeply important optics really are.
            Furthermore, having a strong Brand, a strong online presence and a
            tailored operating productivity oracle/applications is paramount in
            todays business world. It is not ok to utilize right out of the box
            all in one systems, our businesses are too complex and tech driven.
            If it is not, it needs to be, and that’s where we come in!
          </p>

          <ul className="grid grid-cols-2 gap-2 text-xs md:text-lg">
            <li className="flex gap-2 items-center">
              <Image
                src="/images/hr-line.png"
                alt="line"
                width={58}
                height={7}
                className="w-[58px] h-[7px]"
              />
              Build Your Brand
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src="/images/hr-line.png"
                alt="line"
                width={58}
                height={7}
                className="w-[58px] h-[7px]"
              />
              Grow Online Reach
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src="/images/hr-line.png"
                alt="line"
                width={58}
                height={7}
                className="w-[58px] h-[7px]"
              />
              Automate Daily Tasks
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src="/images/hr-line.png"
                alt="line"
                width={58}
                height={7}
                className="w-[58px] h-[7px]"
              />
              Secure Business Growth
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
