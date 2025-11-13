"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHead from "@/components/shared/SectionHead";
import SolutionProtectedModal from "@/components/shared/modals/SolutionProtectedModal";
import VideoModal from "@/components/shared/modals/VideoModal";
import { getUnlocked, saveToken, setUnlocked } from "@/utils/unlockState";
import { authenticate } from "@/utils/authClient";

gsap.registerPlugin(ScrollTrigger);

type SlideItem = {
  logo: string;
  videoBg: string;
  title: string;
  subtitle: string;
  bullets: string[];
  videoUrl?: string;
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const OurSolution = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlockedState] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return getUnlocked();
  });

  const [videoOpen, setVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title, subtitle, and paragraph
      gsap.from(".js-solution-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (email: string, password: string) => {
    const res = await authenticate(email, password);
    if (!res.ok) throw new Error(res.error);
    setUnlockedState(true);
    setUnlocked(true);
    if (res.token) saveToken(res.token);
  };

  const openVideo = (src?: string, title?: string) => {
    if (!src) return;
    setVideoSrc(src);
    setVideoTitle(title || "Video");
    setVideoOpen(true);
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#0F1016] py-24 overflow-hidden"
      id="our_projects"
    >
      {/* background ellipse */}
      <Image
        src="/images/solution_ellipse.png"
        alt="solution bg"
        width={1980}
        height={1627}
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2"
      />

      <div className="custom-container space-y-24 lg:space-y-12">
        {/* Text Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-fit js-solution-text">
            <SectionHead title="Our Solutions" />
          </div>

          <h1 className="js-solution-text text-3xl lg:text-5xl font-bold leading-tight">
            Our solution:{" "}
            <span className="block text-color-gradient">
              Protect Data, Unlock Growth
            </span>
          </h1>

          <p className="js-solution-text text-sm lg:text-lg font-normal font-roboto">
            Turn private data into protected value faster settlements, compliant
            by design
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative">
          <div className="flex items-center gap-4 absolute -top-20 lg:top-0 right-0 z-20">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 border border-gray-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/5"
            >
              <ChevronLeft className="text-gray-300" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 bg-color-gradient flex items-center justify-center rounded-full cursor-pointer"
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
                      onClick={() => openVideo(s.videoUrl, s.title)}
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

      {/* Locked overlay */}
      {!unlocked && (
        <div className="bg-white/20 h-full w-full absolute top-0 left-0 z-30 backdrop-blur-sm">
          <Image
            src="/images/lock.png"
            alt="lock image"
            width={300}
            height={300}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      )}

      {/* Modals */}
      <SolutionProtectedModal
        open={open}
        onOpenChange={setOpen}
        onSubmit={handleSubmit}
      />

      <VideoModal
        open={videoOpen}
        onOpenChange={(v) => {
          setVideoOpen(v);
          if (!v) setVideoSrc(null);
        }}
        title={videoTitle}
        src={videoSrc}
        autoPlay
        controls
      />
    </div>
  );
};

export default OurSolution;
