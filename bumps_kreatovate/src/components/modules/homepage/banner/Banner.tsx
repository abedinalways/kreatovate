'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import MainBg from './MainBg';
import ButtonTwo from '@/components/shared/buttons/ButtonTwo';


gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // scroll animation ONLY for the button
      gsap.from('.banner-button', {
        scrollTrigger: {
          trigger: '.banner-button',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTarget = () => {
    document.getElementById('about_us')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  return (
    <div
      id="home"
      ref={bannerRef}
      className="relative min-h-svh md:min-h-screen overflow-hidden pt-20 px-4 mx-auto"
    >
      <MainBg />

      <div className="absolute z-40 flex flex-col items-center justify-center gap-2 h-full w-full px-4">
        <div className="flex flex-col items-center gap-2 px-2 mx-auto">
          {/* TAGLINE */}
          <div className="flex items-center justify-center bg-white/10 md:px-6 rounded-full mx-auto border border-gray-400 px-2">
            <Image
              src="/images/hrline1.png"
              alt="heading line vector"
              width={60}
              height={16}
            />
            <p className="font-roboto text-[10px] mx-2 text-center py-2 font-bold uppercase text-gradient-special">
              Top consulting platform
            </p>
            <Image
              src="/images/hrline1.png"
              alt="heading line vector"
              width={60}
              height={16}
              className="scale-x-[-1]"
            />
          </div>

          {/* HEADING */}
          <h1 className="mt-3 text-2xl md:text-4xl lg:text-5xl text-center font-jakarta font-bold">
            Transform Ideas with
            <br />
            <span className="text-gradient">Kreatovate’s Strategy</span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-3 md:mt-4 font-[roboto] text-xs md:text-lg leading-[180%] font-normal text-[#E9E9EA] max-w-3xl text-center">
            Turn concepts into measurable growth with strategies that scale your
            <br />
            impact, increase revenue, and deepen customer loyalty.
          </p>

          {/* CTA BUTTON (SCROLL ANIMATED) */}
          <div className="mt-5 banner-button">
            {/* <button
              onClick={scrollToTarget}
              className="cursor-pointer gradient-btns w-[208px] h-[52px] rounded-[10px] flex items-center justify-center gap-1 "
            >
              <span>Get Started Now</span><ArrowIcon />
            </button> */}
            <ButtonTwo
              onClick={scrollToTarget}
              btnText="Get Started Now"
            ></ButtonTwo>
          </div>
        </div>

        {/* VIDEO */}
        <div className="rounded-2xl py-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[1220px] md:h-[400px] h-[300px] px-4 md:px-0 md:object-cover rounded-2xl"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Banner;
