"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeadingButton from "@/components/shared/buttons/HeadingButton";
import ServiceTabs from "./ServiceTabs";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Heading masked sweep (clip-path + blur-to-sharp)
      const masks = gsap.utils.toArray<HTMLElement>(".svc-head .mask");
      gsap.set(masks, { opacity: 1 });

      gsap.to(masks, {
        clipPath: "inset(0 0 0% 0)",
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Paragraph fade-in after masks
      gsap.fromTo(
        ".svc-head p",
        { opacity: 0, y: 12, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="our_solutions"
      ref={sectionRef}
      className="py-16 mx-auto bg-[#000000] scroll-mt-20 px-4 md:px-0"
    >
      <div className="flex flex-col items-center gap-6 custom-container">
        <div className="svc-head flex flex-col items-center gap-7 relative">
          <div>
            <HeadingButton btnText="Service" />
          </div>

          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold max-w-3xl">
              <span className="mask">Discover&nbsp;Our&nbsp;</span>
              <span className="mask text-color-gradient">
                AI&nbsp;Powered&nbsp;
              </span>
              <span className="mask text-color-gradient inline-block">
                Workforce&nbsp;Solutions
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-normal md:mt-7">
              Explore our tailored solutions designed to elevate your brand and
              boost your market presence effectively{" "}
              <br className="hidden sm:block" />
              for sustainable growth and lasting success.
            </p>
          </div>
        </div>

        <ServiceTabs />
      </div>
    </div>
  );
};

export default Service;
