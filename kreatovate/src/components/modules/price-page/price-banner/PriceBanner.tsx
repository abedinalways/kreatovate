"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import PriceBannerCard, { PricePlan } from "./PriceBannerCard";

const DECOR = [
  { t: "10%", l: "15%", w: 8, h: 8 },
  { t: "20%", r: "25%", w: 4, h: 4 },
  { b: "15%", l: "10%", w: 3, h: 3 },
  { b: "20%", r: "15%", w: 5, h: 5 },
  { t: "50%", l: "40%", w: 4, h: 4 },
  { t: "30%", r: "35%", w: 2, h: 2 },
  { b: "25%", l: "45%", w: 6, h: 6 },
  { t: "70%", l: "60%", w: 1, h: 1 },
  { t: "15%", r: "50%", w: 3, h: 3 },
  { b: "10%", r: "30%", w: 5, h: 5 },
  { t: "5%", l: "25%", w: 3, h: 3 },
  { b: "5%", r: "20%", w: 4, h: 4 },
  { t: "40%", l: "75%", w: 2, h: 2 },
  { t: "60%", r: "10%", w: 6, h: 6 },
  { b: "30%", l: "35%", w: 5, h: 5 },
  { t: "25%", r: "60%", w: 2, h: 2 },
  { b: "40%", r: "40%", w: 3, h: 3 },
  { t: "35%", l: "20%", w: 7, h: 7 },
  { b: "5%", l: "55%", w: 4, h: 4 },
  { t: "10%", r: "10%", w: 1, h: 1 },
  { b: "60%", l: "10%", w: 3, h: 3 },
  { t: "80%", r: "5%", w: 4, h: 4 },
  { b: "50%", r: "70%", w: 2, h: 2 },
  { t: "55%", l: "50%", w: 6, h: 6 },
  { t: "33%", r: "30%", w: 3, h: 3 },
  { b: "70%", l: "15%", w: 5, h: 5 },
  { t: "90%", l: "10%", w: 4, h: 4 },
  { b: "15%", r: "5%", w: 2, h: 2 },
  { t: "45%", l: "85%", w: 6, h: 6 },
  { b: "80%", r: "25%", w: 1, h: 1 },
];

const PRICES: PricePlan[] = [
  {
    title: "Lifestyle Manager",
    price: "$1,497",
    billing: "monthly",
    description:
      "Includes all vl Non-Voice Agents plus Inbound Voice v3 (Closer)(UCM) to answer all incoming personal calls, screen and take messages, and set priority.",
    buttonText: "Get Started",
    features: [
      "All Non-Voice Agents",
      "Inbound Voice Assistant",
      "Call Screening",
      "Priority Management",
    ],
  },
  {
    title: "Chief of Staff",
    price: "$9,497",
    billing: "monthly",
    description:
      "Includes all Lite vl Non-Voice + all Expert v3 Voice Roles (UCM).",
    buttonText: "Get Started",
    features: [
      "All Lite Non-Voice",
      "Expert Voice Roles",
      "Memory Enabled",
      "UCM Integration",
    ],
  },
  {
    title: "Chief Operating Officer",
    price: "$14,497",
    billing: "monthly",
    description:
      "Includes all Lite vl Non-Voice + all Elite v4 Voice + all Premium vl (UCM + Trilingual).",
    buttonText: "Get Started",
    features: [
      "All Elite Features",
      "Trilingual Support",
      "Premium UCM",
      "Full Workforce Access",
    ],
  },
];

const PriceBanner = () => {
  const decoRef = useRef<HTMLDivElement>(null);

  // shooting lines + twinkling dots
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".line");
      lines.forEach((el, i) => {
        const shoot = () => {
          const fromLeft = i % 2 === 0;
          gsap.set(el, {
            opacity: 0,
            x: fromLeft ? -200 : 200,
            y: fromLeft ? -100 : 100,
            rotate: fromLeft ? 20 : -20,
            scale: 0.5,
          });
          gsap.to(el, {
            opacity: 1,
            x: fromLeft ? 600 : -600,
            y: fromLeft ? 300 : -300,
            duration: 1.5,
            scale: 1,
            ease: "power4.out",
            onComplete: () => {
              gsap.to(el, { opacity: 0, duration: 0.5, ease: "power2.inOut" });
              gsap.delayedCall(gsap.utils.random(3, 7), shoot);
            },
          });
        };
        gsap.delayedCall(gsap.utils.random(1, 4), shoot);
      });

      gsap.to(".dot", {
        opacity: "random(0.2, 1)",
        duration: "random(0.8, 2)",
        repeat: -1,
        yoyo: true,
        stagger: { amount: 3, from: "random" },
        ease: "sine.inOut",
      });
    }, decoRef);

    return () => ctx.revert();
  }, []);

  // refresh-only intro animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".banner-title", { y: 24, opacity: 0, duration: 0.6 })
      .from(".banner-sub", { y: 16, opacity: 0, duration: 0.5 }, "-=0.25")
      .from(
        ".price-card",
        { y: 30, opacity: 0, duration: 0.6, stagger: 0.12 },
        "-=0.15"
      );
  }, []);

  return (
    <section className="relative min-h-svh md:min-h-screen bg-[#0F1016] overflow-hidden">
      {/* BG + decorations (pointer-events none) */}
      <div ref={decoRef} className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/banner.png"
          alt="banner background"
          fill
          className="object-cover"
          priority
        />

        {/* shooting lines */}
        <Image
          src="/images/price/line1.png"
          alt="line 1"
          width={140}
          height={140}
          className="absolute top-32 sm:top-44 md:top-64 left-1 sm:left-6 md:left-20 z-10 rotate-6 md:rotate-12 line"
        />
        <Image
          src="/images/price/line1.png"
          alt="line 1.1"
          width={64}
          height={64}
          className="absolute top-20 left-0 z-10 line"
        />
        <Image
          src="/images/price/line1.png"
          alt="line 1.2"
          width={64}
          height={64}
          className="absolute top-24 right-6 md:right-20 scale-x-[-1] z-10 line"
        />
        <Image
          src="/images/price/line1.png"
          alt="line 2"
          width={140}
          height={140}
          className="absolute top-32 sm:top-44 md:top-64 right-0 md:right-20 z-10 scale-x-[-1] -rotate-6 md:-rotate-12 line"
        />

        {/* dots */}
        {DECOR.map((d, i) => (
          <Image
            key={i}
            src="/images/price/dot.png"
            alt={`dot ${i + 1}`}
            width={d.w}
            height={d.h}
            className="absolute dot"
            style={{
              top: d.t as any,
              bottom: d.b as any,
              left: d.l as any,
              right: d.r as any,
              zIndex: 10,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-44 sm:pt-20 md:pt-28 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="text-center mx-auto max-w-3xl">
          <h1 className="banner-title text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            AI Workforce Employees
          </h1>
          <p className="banner-sub mt-3 md:mt-4 font-roboto text-sm sm:text-base md:text-lg text-white/85">
            Kreatovate Marketing & Consulting — “Your Problems, Our Solutions!”
          </p>
        </div>

        {/* Mobile/Tablet carousel: 1 on small, 2 on md, hidden on lg */}
        <div className="lg:hidden mt-10 -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {PRICES.map((plan) => (
              <div
                key={plan.title}
                className="price-card snap-center shrink-0 w-[90%] sm:w-[85%] md:w-[48%]"
              >
                <PriceBannerCard plan={plan} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 items-stretch">
          {PRICES.map((plan) => (
            <div key={plan.title} className="price-card">
              <PriceBannerCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PriceBanner;
