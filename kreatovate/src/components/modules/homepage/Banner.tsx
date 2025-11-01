"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import SectionHead from "@/components/shared/SectionHead";
import ButtonTwo from "@/components/shared/buttons/ButtonTwo";

const Banner = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // ✨ হেডার ব্লক (tagline, heading, paragraph, button) — staggered fade+up+scale
      tl.from(".js-hero-seq > *", {
        opacity: 0,
        y: 18,
        scale: 0.985,
        filter: "blur(6px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });

      // 🫧 ব্যাকগ্রাউন্ড স্ট্যাটিক ইমেজগুলোতে subtle float (infinite, low amplitude)
      gsap.to(".js-blob-top", {
        y: 10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".js-blob-bottom", {
        y: -10,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      });
      gsap.to(".js-main-bg", {
        y: 8,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="home"
      ref={rootRef}
      className="relative h-180 lg:h-screen w-full overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute w-full h-full z-10">
        <Image
          src="/images/banner-ellipse-top.png"
          alt="banner circle 1"
          width={604}
          height={584}
          className="js-blob-top absolute top-0 left-0 z-20 select-none pointer-events-none"
          priority
        />
        <Image
          src="/images/banner-ellipse-bottom.png"
          alt="banner circle 2"
          width={1258}
          height={1205}
          className="js-blob-bottom absolute bottom-0 left-0 z-20 select-none pointer-events-none"
        />
        <Image
          src="/images/banner-bg.png"
          alt="main banner image"
          width={835}
          height={750}
          className="js-main-bg absolute right-0 top-1/2 -translate-y-[50%] aspect-147/130 z-10  xl:blur-none opacity-20 md:opacity-100 select-none pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="custom-container w-full h-full flex flex-col items-start justify-center gap-4 md:gap-16 z-40 px-2 md:px-6 relative">
        <div className="js-hero-seq flex flex-col items-start gap-7 z-40">
          <div className="w-fit">
            <SectionHead title="Top consulting platform" />
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-[3.5rem] font-bold leading-7 md:leading-12 lg:leading-16">
            KREATOVATE <br />
            Marketing & Consulting
          </h1>

          <p className="text-sm md:text-base leading-7 font-roboto font-normal">
            A Kindred Interests, Inc. Company Leveraging Blockchain, A.I. &
            Green Technologies so you, <br />
            your family and businesses can enjoy peace of mind.
          </p>
        </div>

        <div className="js-hero-seq w-fit z-40">
          <ButtonTwo btnText="Get Started Today " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
