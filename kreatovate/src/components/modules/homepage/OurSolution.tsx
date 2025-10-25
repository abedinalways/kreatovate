"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import SectionHead from "@/components/shared/SectionHead";

// JSON/dynamic data (use your own or import from a .json file)
type SlideItem = {
  logo: string;
  videoBg: string;
  title: string; // use \n for line breaks
  subtitle: string;
  bullets: string[];
};

const slides: SlideItem[] = [
  {
    logo: "/images/kopper-logo.png",
    videoBg: "/images/kopper_video_bg.png",
    title: "KOPPER communities Net-\nZero SMART Properties",
    subtitle: "Waste / Water / Energy / Mining / Private 5G + Rentals & Leases",
    bullets: [
      "Mixed-Use Resort Style Blockchain Backed Intelligent Microcities",
      "Smart meters + ESG dashboards",
      "Tokenized leases & rentals",
      "Private 5G connectivity",
      "Circular waste-to-energy",
      "Water capture & reuse",
    ],
  },
  {
    logo: "/images/kopper-logo.png",
    videoBg: "/images/kopper_video_bg.png",
    title: "KOPPER Industrial\nNet-Zero Campuses",
    subtitle: "Energy / Water / Security / Logistics",
    bullets: [
      "Industrial parks with on-site renewables",
      "AI-driven resource optimization",
      "Secure access & private network",
      "Real-time sustainability reporting",
      "Green financing ready",
      "Modular growth",
    ],
  },
  {
    logo: "/images/kopper-logo.png",
    videoBg: "/images/kopper_video_bg.png",
    title: "KOPPER communities Net-\nZero SMART Properties",
    subtitle: "Waste / Water / Energy / Mining / Private 5G + Rentals & Leases",
    bullets: [
      "Mixed-Use Resort Style Blockchain Backed Intelligent Microcities",
      "Smart meters + ESG dashboards",
      "Tokenized leases & rentals",
      "Private 5G connectivity",
      "Circular waste-to-energy",
      "Water capture & reuse",
    ],
  },
  {
    logo: "/images/kopper-logo.png",
    videoBg: "/images/kopper_video_bg.png",
    title: "KOPPER Industrial\nNet-Zero Campuses",
    subtitle: "Energy / Water / Security / Logistics",
    bullets: [
      "Industrial parks with on-site renewables",
      "AI-driven resource optimization",
      "Secure access & private network",
      "Real-time sustainability reporting",
      "Green financing ready",
      "Modular growth",
    ],
  },
];

const OurSolution = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative bg-[#0F1016] py-24 overflow-hidden">
      {/* background ellipse */}
      <Image
        src="/images/solution_ellipse.png"
        alt="solution bg"
        width={1980}
        height={1627}
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2"
      />

      <div className="custom-container space-y-24 lg:space-y-12 blur-sm">
        <div className="flex flex-col items-center gap-4">
          <div className="w-fit">
            <SectionHead title="Our Solutions" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-center leading-tight">
            Our solution:{" "}
            <span className="block text-color-gradient">
              Protect Data, Unlock Growth
            </span>
          </h1>

          <p className="text-sm lg:text-lg font-normal font-roboto text-center">
            Turn private data into protected value faster settlements, compliant
            by design
          </p>
        </div>
        {/* Custom nav buttons (manual control) */}
        <div className="relative">
          <div className="flex items-center gap-4 absolute -top-20 lg:top-0 right-0 z-20">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 border border-gray-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/5"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-gray-300" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 bg-color-gradient flex items-center justify-center rounded-full cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            onSwiper={(sw) => (swiperRef.current = sw)}
            className="mySwiper relative z-10"
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-4">
                  {/* left: video preview */}
                  <div className="relative w-fit">
                    <Image
                      src={s.videoBg}
                      alt="video bg"
                      width={658}
                      height={536}
                    />
                    <Image
                      src="/images/play_button.png"
                      alt="play button"
                      width={141}
                      height={141}
                      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer"
                    />
                  </div>

                  {/* right: content */}
                  <div className="flex flex-col gap-8 w-full lg:w-auto md:px-10">
                    <Image
                      src={s.logo}
                      alt="kopper logo"
                      width={220}
                      height={60}
                      className="h-auto w-40 sm:w-[200px] md:w-[220px]"
                    />

                    <div className="bg-color-gradient pb-px">
                      <div className="bg-[#0F1016] pb-6 flex flex-col gap-3">
                        <h4 className="text-2xl md:text-3xl font-medium leading-snug whitespace-pre-line">
                          {s.title}
                        </h4>
                        <p className="text-base md:text-lg font-roboto text-[#A5A5AB]">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-3">
                      {s.bullets.map((b, i) => (
                        <li key={i}>
                          <div className="flex items-start gap-2">
                            <Image
                              src="/images/dot.png"
                              alt=""
                              width={7}
                              height={7}
                              className="mt-2"
                            />
                            <p className="font-roboto text-sm md:text-base text-[#D9D9D9]">
                              {b}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-white/20 h-full w-full absolute top-0 left-0 z-30">
        <Image
          src="/images/lock.png"
          alt="lock image"
          width={300}
          height={300}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default OurSolution;
