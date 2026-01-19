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

      <div className="absolute ml-[-20] mt-5 z-40 flex flex-col items-center justify-center gap-2 h-full w-full px-4">
        <div className="flex flex-col items-center gap-2  px-2 mx-auto">
          <div className="flex items-center justify-center bg-white/10  md:px-6  rounded-full mx-auto banner-tagline border border-gray-400 px-2">
            <Image
              src="/images/hrline1.png"
              alt="heading line vector 1"
              width={60}
              height={16}
            />
            <p className="font-roboto bg-white/10 text-[10px] mx-2 text-center py-2 font-bold text-gradient-special  uppercase">
              Top consulting platform
              {/* KREATOVATE LAUNCHPAD */}
            </p>
            <Image
              src="/images/hrline1.png"
              alt="heading line vector 1"
              width={60}
              height={16}
              className="scale-x-[-1]"
            />
          </div>

          <h1 className="mt-3 text-2xl md:text-4xl lg:text-5xl text-center font-jakarta font-bold  banner-heading w-full ">
            Transform Ideas with
            {/* Kreatovate Project */}
            <br />
            <span className="text-gradient">
              Kreatovate’s Strategy
              {/* Launchpad */}
            </span>
          </h1>

          <p className="mt-3 md:mt-4 font-[roboto] text-xs md:text-md max-w-3xl text-center banner-subtext">
            Turn concepts into measurable growth with strategies that scale your{" "}
            <br />
            impact, increase revenue, and deepen customer loyalty.
            {/* A community-powered launchpad designed to fund and launch real
            digital projects—built to support tangible products, fuel innovation
            through value, and create shared momentum that turns participation
            into progress today and into the future. */}
          </p>

          <div className="mt-5 banner-button">
            <ButtonTwo btnText="Get Started Now" />
          </div>
        </div>

        <div className="rounded-2xl py-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[1220px] md:h-[400px] h-[300px] px-4 md:px-0 md:object-cover rounded-2xl "
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Banner;
