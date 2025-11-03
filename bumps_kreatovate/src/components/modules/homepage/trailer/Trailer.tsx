"use client";

import Image from "next/image";
import TrailerModal from "./TrailerModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Trailer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.from(".trailer-heading, .trailer-text", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(".trailer-poster", {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, []);
  return (
    <div ref={sectionRef} className="bg-[#0F1016] pt-10 pb-24 px-4 lg:px-0">
      <div className="custom-container space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row items-end justify-between">
          <div className="trailer-heading flex flex-col items-center md:items-start gap-2.5">
            <p className="uppercase text-color-gradient font-roboto font-normal text-sm">
              [ our trailer ]
            </p>
            <h1 className="text-color-gradient text-3xl md:text-5xl font-bold leading-14 text-center md:text-left">
              The Trailer You Can’t Miss
            </h1>
          </div>
          <p className="trailer-text text-base lg:text-lg font-medium md:leading-8 lg:max-w-md text-center">
            Fast-forward into a world built on speculative ideas; this trailer
            shows the book’s core provocations.
          </p>
        </div>

        <div className="relative trailer-poster">
          <Image
            src="/images/trailer-poster.png"
            alt="trailer image"
            width={1320}
            height={547}
          />

          <TrailerModal />
        </div>
      </div>
    </div>
  );
};

export default Trailer;
