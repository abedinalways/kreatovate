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
import { saveToken, setUnlocked } from "@/utils/unlockState";
import { authenticate } from "@/utils/authClient";
import ButtonOne from "@/components/shared/buttons/ButtonOne";
import OurDevelopmentCard, {
  DevelopmentItem,
} from "./our-development/OurDevelopmentCard";

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
    title: "KOPPER Industrial Net-Zero\nCampuses",
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

  const [videoOpen, setVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string>("");

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
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
    setUnlocked(true);
    if (res.token) saveToken(res.token);
  };

  const openVideo = (src?: string, title?: string) => {
    if (!src) return;
    setVideoSrc(src);
    setVideoTitle(title || "Video");
    setVideoOpen(true);
  };

  const ourDevelopementData: DevelopmentItem[] = [
    {
      id: "workforce",
      title: "AI Workforce & Business Automation",
      desc: "Run sales, support, marketing, and operations with AI-powered workers. Automate workflows, communication, and decision-making with A.D.O.N.I.S. intelligence.",
      image: "/images/consulting/workforce.png",
      href: "https://workforce.kreatovate.com",
    },
    {
      id: "launchpad",
      title: "Initiatives & Distribution Hub",
      desc: "The launch hub for Kreatovate initiatives, educational programs, and fundraising. Explore live campaigns, book releases, and active initiatives.",
      image: "/images/consulting/launchpad.png",
      href: "https://launchpad.kreatovate.com",
    },
    {
      id: "projects",
      title: "Projects, Ventures & Investments",
      desc: "Explore ongoing and upcoming developments, ventures, and investment opportunities. Track progress, scope, and strategic objectives.",
      image: "/images/consulting/projects.png",
      href: "https://projects.kreatovate.com",
    },
    {
      id: "beta",
      title: "KINpro + A.D.O.N.I.S. Beta Environment",
      desc: "Early access environment for KINpro, Kommand Center, and A.D.O.N.I.S. intelligence—currently in development and testing.",
      image: "/images/consulting/beta.png",
      href: "https://beta.kreatovate.com",
    },
    {
      id: "aid",
      title: "Kindred Kares Foundation - Aid Network",
      desc: "Kreatovate’s charitable and community aid network—built for transparency, speed, and measurable impact using tokenized assistance.",
      image: "/images/consulting/aid.png",
      href: "https://aid.kreatovate.com",
    },
  ];

  return (
    <div className="px-4 md:px-0" id='our_development'>
      <div className="flex flex-col items-center gap-7 mb-10">
        <div className="w-fit js-solution-text">
          <SectionHead title="Our Developments" />
        </div>

        <h1 className="js-solution-text text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight max-w-4xl text-center">
          Our Projects, Products,
          <span className="block text-color-gradient">
            Solutions & Initiatives + Investor Resources
          </span>
        </h1>
      </div>

      <div className="custom-container mt-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {ourDevelopementData.map((development) => (
            <OurDevelopmentCard key={development.id} data={development} />
          ))}
        </div>
      </div>
    </div>
    // <div
    //   ref={sectionRef}
    //   className="relative bg-[#0F1016] py-20 sm:py-24 overflow-hidden"
    //   id="our_projects"
    // >
    //   {/* Background */}
    //   <Image
    //     src="/images/solution_ellipse.png"
    //     alt="solution bg"
    //     width={1980}
    //     height={1627}
    //     className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2"
    //   />

    //   <div className="custom-container space-y-16 md:space-y-20 lg:space-y-12">
    //     {/* Header */}
    //     <div className="flex flex-col items-center gap-4 text-center px-2">
    //       <div className="w-fit js-solution-text">
    //         <SectionHead
    //           // title="Our Solutions"
    //           title="Our Developments"
    //         />
    //       </div>

    //       {/* <h1 className="js-solution-text text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight max-w-4xl">
    //         Our Projects,
    //         <span className="block text-color-gradient">
    //           Solutions & Investor Access
    //         </span>
    //       </h1> */}
    //       <h1 className="js-solution-text text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight max-w-4xl">
    //         Our Projects, Products,
    //         <span className="block text-color-gradient">
    //           Solutions & Initiatives + Investor Resources
    //         </span>
    //       </h1>

    //       {/* <p className="js-solution-text text-sm sm:text-base lg:text-lg font-normal font-roboto max-w-2xl">
    //         Turn private data into protected value faster settlements, compliant
    //         by design
    //       </p>

    //       <ButtonOne
    //         btnText="hub.kreatovate.com"
    //         href="http://hub.kreatovate.com/"
    //         className="py-4 sm:py-5"
    //         linkClassName="lowercase text-sm sm:text-base"
    //       /> */}
    //     </div>

    //     {/* Slider */}
    //     {/* <div className="relative"> */}
    //     {/* <div className="flex items-center gap-3 absolute -top-14 sm:-top-16 lg:top-0 right-4 lg:right-0 z-20">
    //         <button
    //           type="button"
    //           onClick={() => swiperRef.current?.slidePrev()}
    //           className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border border-gray-800 flex items-center justify-center rounded-full hover:bg-white/5"
    //         >
    //           <ChevronLeft className="text-gray-300" />
    //         </button>

    //         <button
    //           type="button"
    //           onClick={() => swiperRef.current?.slideNext()}
    //           className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-color-gradient flex items-center justify-center rounded-full"
    //         >
    //           <ChevronRight className="text-white" />
    //         </button>
    //       </div> */}
    //     {/* Swiper Section */}
    //     {/* </div> */}

    //     {ourDevelopementData?.map((development) => (
    //       <OurDevelopmentCard key={development.id} data={development} />
    //     ))}
    //   </div>

    //   {/* Modals */}
    //   {/* <SolutionProtectedModal
    //     open={open}
    //     onOpenChange={setOpen}
    //     onSubmit={handleSubmit}
    //   /> */}

    //   {/* <VideoModal
    //     open={videoOpen}
    //     onOpenChange={(v) => {
    //       setVideoOpen(v);
    //       if (!v) setVideoSrc(null);
    //     }}
    //     title={videoTitle}
    //     src={videoSrc}
    //     autoPlay
    //     controls
    //   /> */}
    // </div>
  );
};

export default OurSolution;

//  <Swiper
//             slidesPerView={1}
//             spaceBetween={24}
//             onSwiper={(sw) => (swiperRef.current = sw)}
//             className="relative z-10"
//           >
//             {slides.map((s, idx) => (
//               <SwiperSlide key={idx}>
//                 <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20 px-2 sm:px-4">
//                   {/* Video */}
//                   <div className="relative w-full max-w-md lg:max-w-none">
//                     <Image
//                       src={s.videoBg}
//                       alt="video bg"
//                       width={658}
//                       height={536}
//                       className="w-full h-auto rounded-xl"
//                     />
//                     <Image
//                       src="/images/play_button.png"
//                       alt="play button"
//                       width={80}
//                       height={80}
//                       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer sm:w-[100px] sm:h-[100px] lg:w-[140px] lg:h-[140px]"
//                       onClick={() => openVideo(s.videoUrl, s.title)}
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col gap-6 sm:gap-8 w-full px-2 sm:px-6 md:px-10">
//                     <Image
//                       src={s.logo}
//                       alt="kopper logo"
//                       width={220}
//                       height={60}
//                       className="w-40 sm:w-[200px] md:w-[220px]"
//                     />

//                     <div className="bg-color-gradient pb-px ">
//                       <div className="bg-[#0F1016] pb-6 flex flex-col gap-3">
//                         <h4 className="text-xl sm:text-2xl md:text-3xl font-medium whitespace-pre-line">
//                           {s.title}
//                         </h4>
//                         <p className="text-sm sm:text-base md:text-lg font-roboto text-[#A5A5AB]">
//                           {s.subtitle}
//                         </p>
//                       </div>
//                     </div>

//                     <ul className="flex flex-col gap-3">
//                       {s.bullets.map((b, i) => (
//                         <li key={i} className="flex items-start gap-2">
//                           <Image
//                             src="/images/dot.png"
//                             alt=""
//                             width={7}
//                             height={7}
//                             className="mt-2"
//                           />
//                           <p className="font-roboto text-sm sm:text-base text-[#D9D9D9]">
//                             {b}
//                           </p>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
