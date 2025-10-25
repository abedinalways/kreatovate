"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect } from "react";
import ButtonAll from "../shared/ButtonAll";

const RoboBg = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          immediateRender: false,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="custom-container relative h-[35rem] md:h-screen w-screen">
      <div className="absolute left-0 top-80 md:top-96 z-10">
        <div className="px-4 sm:px-36 md:px-5 flex flex-col gap-4">
          <h1 className="fade-up text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-xl lg:max-w-4xl leading-7 md:leading-10 lg:leading-16">
            Unleash Potential with <br />
            Kreatovate&apos;s{" "}
            <span className="text-color-gradient">Expert Marketing</span>{" "}
            <span className="text-color-gradient">& Consulting</span>
          </h1>
          <p className="fade-up text-xs lg:text-[1rem] font-normal max-w-md lg:max-w-xl mb-5 md:mb-12">
            Unlock Your Brand&apos;s Potential with Kreatovate Marketing &
            Consulting Where Innovation Meets Strategic Excellence to Propel
            Your Business Forward.
          </p>

          <div>
            <ButtonAll
              btnText="Get Started Today"
              className="text-sm md:text-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 -bottom-36 md:bottom-0 z-20">
        <Image
          src="/images/robo.png"
          alt="AI robot"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default RoboBg;
