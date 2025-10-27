"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import SectionHead from "@/components/shared/SectionHead";
import ButtonTwo from "@/components/shared/buttons/ButtonTwo";

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
      className="text-white pt-5 md:pt-10 lg:pt-16 mx-auto relative isolate bg-[#0F1016]"
    >
      <div className="py-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-36 md:px-5 custom-container">
        <div className="about-image w-full lg:w-1/2">
          <div className="relative w-full aspect-16/17 sm:aspect-16/10 md:aspect-16/16 lg:aspect-4/4 rounded-2xl overflow-hidden scale-x-[-1]">
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
          <div className="w-fit">
            <SectionHead title="about us" />
          </div>

          <h1 className="text-2xl sm:text-5xl md:text-6xl font-semibold max-w-2xl">
            Kreatovate <span className="text-color-gradient">Marketing</span>
            <span className="text-color-gradient">& Consulting</span>
          </h1>
          <p className="text-base leading-relaxed font-normal">
            Helping organizations move into Web3 securely, simply, and with real
            value for <br />
            people.
          </p>

          <div className="flex flex-col gap-4">
            <h5 className="text-2xl font-medium leading-9">
              The 5 transaction components we build for every client
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <Image
                  src="/images/hrline1.png"
                  alt="line img"
                  width={58}
                  height={7}
                />
                <p>Privacy: Protect user data and identities</p>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/images/hrline1.png"
                  alt="line img"
                  width={58}
                  height={7}
                />
                <p>Security: Cryptographic integrity and safe transactions</p>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/images/hrline1.png"
                  alt="line img"
                  width={58}
                  height={7}
                />
                <p>Efficiency: Faster workflows and fewer manual steps</p>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/images/hrline1.png"
                  alt="line img"
                  width={58}
                  height={7}
                />
                <p>Transparency: Auditable records and clear ownership</p>
              </li>

              <li className="flex items-center gap-2">
                <Image
                  src="/images/hrline1.png"
                  alt="line img"
                  width={58}
                  height={7}
                />
                <p>Cost effectiveness: Lower transaction overhead over time</p>
              </li>
            </ul>
          </div>

          <div className="w-fit">
            <ButtonTwo btnText="Learn More" />
          </div>
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
