"use client";
import Image from "next/image";
import ButtonAll from "../../../shared/ButtonAll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./banner.module.css";

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      );

      tl.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      );

      tl.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, ease: "back.out(1.7)", duration: 0.8 },
        "-=0.3"
      );

      tl.fromTo(
        robotRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative h-[40rem] md:h-[50rem] xl:h-screen"
    >
      {/* background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 z-10" />
        <Image
          src="/images/group1.png"
          alt="light effect 1"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 z-20"
        />
        <Image
          src="/images/group2.png"
          alt="light effect 2"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 z-30"
        />
      </div>

      <div className="relative custom-container w-full h-full z-30">
        <div className="px-4 md:px-5 flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 left-0 z-20">
          <h1
            ref={headingRef}
            className=" text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.25] md:leading-[1.25] lg:leading-[1.25] py-6"
          >
            Unleash Potential with{' '}
            <span className="text-gradient"> KREATOVATE&apos;s </span> <br />
            Expert Business <span className="text-gradient">
              {' '}
              Automation
            </span>{' '}
            and AI <br />
            Powered <span className="text-gradient">Digital Marketing</span>
          </h1>
          <p
            ref={textRef}
            className="relative text-sm md:text-md lg:text-[1rem] font-normal  mb-5 md:mb-6 z-40 font-[roboto] leading-relaxed"
          >
            Unlock Your Brand&apos;s Potential with Kreatovate Marketing &
            Consulting Where Innovation Meets <br /> Strategic Excellence to
            Propel Your Business Forward.
          </p>

          <div ref={buttonRef} className="cursor-pointer w-fit">
            <ButtonAll
              btnText="Get Started Today"
              className="text-sm md:text-md py-5"
            />
          </div>
        </div>

        <Image
          ref={robotRef}
          src="/images/robo.png"
          alt="AI robot"
          width={900}
          height={900}
          className={`absolute right-0 bottom-0 z-10 ${styles.roboImg}`}
        />
      </div>
      <Image
        src="/images/bottom-bg.png"
        alt="light effect 2"
        width={800}
        height={800}
        className="absolute bottom-0 xl:-bottom-0.5 left-0 w-full z-40"
      />
    </div>
  );
};

export default Banner;
