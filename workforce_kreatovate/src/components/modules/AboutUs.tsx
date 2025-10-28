"use client";

import Image from "next/image";
import ButtonAll from "../shared/ButtonAll";
import HeadingButton from "../shared/HeadingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image: slide in from left
      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );

      // Text: slide in from right
      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about_us"
      className="text-white pt-5 md:pt-10 lg:pt-16 mx-auto relative isolate"
    >
      <div className="py-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 px-4 md:px-5 custom-container">
        <div className="about-image w-full lg:w-1/2">
          <div className="relative w-full aspect-[16/17] sm:aspect-[16/10] md:aspect-[16/16] lg:aspect-[4/4] rounded-2xl overflow-hidden scale-x-[-1]">
            {/* <Image
              src="/images/about_us.png"
              alt="about us image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/about_us1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="about-text w-full lg:w-1/2 space-y-6">
          <HeadingButton btnText="about us" />
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-semibold max-w-2xl">
            Explore Our Tailored{" "}
            <span className="text-color-gradient">AI Automation</span> &{" "}
            <span className="text-color-gradient">Workforce Solutions</span>
          </h1>
          <p className="text-base leading-relaxed font-normal">
            Discover high-impact A.I. Powered marketing solutions that elevate
            your brand and drive substantial growth. Our personalized services,
            quick software deployment time and cater uniquely to your strategic
            and operational needs.
          </p>

          <ButtonAll btnText="Try Demo" className="py-6" />
        </div>
      </div>
      <Image
        src="/images/aboutus-elips.png"
        alt="background shadow"
        width={900}
        height={900}
        className="pointer-events-none select-none object-cover absolute bottom-0 right-0 -z-10"
      />
    </div>
  );
};

export default AboutUs;
