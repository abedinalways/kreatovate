"use client";

import HeadingButton from "@/components/shared/HeadingButton";
import Image from "next/image";
import EvolutionCard from "./EvolutionCard";
import { Brain, Languages, Phone, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Evolution = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const evolutionData = [
    {
      id: 1,
      version: "V1",
      title: "Inbound + Outbound Closer",
      description: "Core voice & messaging agent",
      buttonText:
        "Handles calls, texts, chats, emails & social DMs from one AI",
      icon: <Phone className="size-6" />,
      iconBg: "#FB2C361A",
      iconColor: "#E21717",
    },
    {
      id: 2,
      version: "V2",
      title: "Trilingual Closer",
      description: "Expand instantly into 3 languages",
      buttonText:
        "Handles calls, texts, chats, emails & social DMs from one AI",
      icon: <Languages className="size-6" />,
      iconBg: "#FB2C361A",
      iconColor: "#E21717",
    },
    {
      id: 3,
      version: "V3",
      title: "UCM Closer",
      description: "Every conversation remembered, every detail recalled",
      buttonText:
        "Handles calls, texts, chats, emails & social DMs from one AI",
      icon: <Brain className="size-6" />,
      iconBg: "#FB2C361A",
      iconColor: "#E21717",
    },
    {
      id: 4,
      version: "V4",
      title: "All Encompassing Closer",
      description: "Includes all v1-v3 Characteristics + Omni-Channel Enabled",
      buttonText:
        "Handles calls, texts, chats, emails & social DMs from one AI",
      icon: <Sparkles className="size-6" />,
      iconBg: "#FB2C361A",
      iconColor: "#E21717",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".evo-heading", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".evo-heading",
          start: "top 80%",
        },
      });

      gsap.from(".evo-image", {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".evo-image",
          start: "top 75%",
        },
      });

      gsap.from(".evo-card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".evo-card-wrapper",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#0F1016] py-10 md:py-16 px-4 lg:px-0"
    >
      <div className="custom-container mx-auto space-y-10 lg:space-y-0">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4 evo-heading">
              <HeadingButton btnText="our Evolution" className="w-33 py-0" />
              <h1 className="font-jakarta text-2xl sm:text-3xl md:text-5xl font-bold leading-tight md:leading-[1.1]">
                Al Closer <span className="text-color-gradient">Evolution</span>
              </h1>
            </div>

            <div className="relative w-full max-w-[670px] mx-auto lg:mx-0 aspect-[670/621] evo-image">
              <Image
                src="/images/evolution.png"
                alt="evolution img"
                fill
                className="object-contain md:object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 w-full flex flex-col gap-4 evo-card-wrapper">
            {evolutionData.map((item) => (
              <div key={item.id} className="evo-card">
                <EvolutionCard
                  version={item.version}
                  title={item.title}
                  description={item.description}
                  buttonText={item.buttonText}
                  icon={item.icon}
                  iconBg={item.iconBg}
                  iconColor={item.iconColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
