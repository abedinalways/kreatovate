"use client";

import { useEffect, useRef } from "react";
import MainBg from "./MainBg";
import Image from "next/image";
import ButtonTwo from "@/components/shared/buttons/ButtonTwo";
import gsap from "gsap";

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for smooth sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".banner-tagline", {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".banner-heading",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.3"
        )
        .from(
          ".banner-subtext",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".banner-button",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="home"
      ref={bannerRef}
      className="relative min-h-svh md:min-h-screen overflow-hidden pt-14 px-4 mx-auto"
    >
      <MainBg />

      <div className="absolute z-40 flex flex-col items-center justify-center gap-2 h-full w-full">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center bg-white/10  md:px-10  rounded-full mx-auto banner-tagline border border-gray-400 px-2">
            <Image
              src="/images/hrline1.png"
              alt="heading line vector 1"
              width={80}
              height={16}
            />
            <p className="font-roboto text-xs md:text-md py-2 font-light text-gradient uppercase">
              Top consulting platform
            </p>
            <Image
              src="/images/hrline1.png"
              alt="heading line vector 1"
              width={80}
              height={16}
              className="scale-x-[-1]"
            />
          </div>

          <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-jakarta font-bold max-w-2xl banner-heading">
            Transform Ideas with{' '}
            <span className="text-gradient-special">Kreatovate’s Strategy</span>
          </h1>

          <p className="mt-3 md:mt-4 font-roboto text-sm md:text-lg max-w-3xl banner-subtext">
            Turn concepts into measurable growth with strategies that scale your
            impact, increase revenue, and deepen customer loyalty.
          </p>

          <div className="mt-5 banner-button">
            <ButtonTwo btnText="Get Started" />
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[800px] h-[40%] px-4 md:px-0 object-contain rounded-lg"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Banner;
