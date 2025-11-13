'use client';

import Image from 'next/image';
import TrailerModal from './TrailerModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Trailer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.from('.trailer-heading, .trailer-text', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    gsap.from('.trailer-poster', {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-10 pb-24 px-4 lg:px-0 font-jakarta"
      aria-label="trailer section"
    >
      {/* ----------------------
          BACKGROUND LAYERS (exact top 50% solid + bottom gradient)
         ---------------------- */}

      {/* 1) Top half solid #0F1016 */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full"
        style={{ height: '50%', background: '#0F1016', zIndex: 0 }}
      />

      {/* 2) Bottom gradient (covers full area but visually blends with top half) */}
      <div
        aria-hidden
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
          background:
            // gradient designed so top 50% is visually the same as #0F1016 then blends into colorful hues
            'linear-gradient(to bottom, rgba(15,16,22,0) 0%, rgba(15,16,22,0) 48%, rgba(38,6,32,0.95) 60%, rgba(110,8,90,0.85) 75%, rgba(16,6,60,0.95) 100%)',
        }}
      />

      {/* 3) Soft radial glows to mimic the purple/pink/blue band from screenshot */}
      <div
        aria-hidden
        className="absolute -left-20 bottom-10 w-[520px] h-[420px] rounded-full"
        style={{
          zIndex: 0,
          filter: 'blur(80px)',
          background:
            'radial-gradient(circle at 30% 70%, rgba(176,22,85,0.18) 0%, rgba(176,22,85,0.10) 20%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden
        className="absolute right-0 -bottom-10 w-[720px] h-[520px] rounded-full"
        style={{
          zIndex: 0,
          filter: 'blur(100px)',
          background:
            'radial-gradient(circle at 70% 60%, rgba(59,10,160,0.18) 0%, rgba(59,10,160,0.10) 25%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* 4) Vignette / darken edges */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.25) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ----------------------
          CONTENT (on top of backgrounds)
         ---------------------- */}
      <div className="relative z-10 custom-container space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row items-end justify-between">
          <div className="trailer-heading flex flex-col items-center md:items-start gap-2.5">
            <p className="uppercase text-color-gradient font-roboto font-normal text-xs">
              [ our trailer ]
            </p>
            <h1 className="text-color-gradient text-3xl md:text-5xl font-bold leading-14 text-center md:text-left">
              The Trailer You Can’t Miss
            </h1>
          </div>

          <p className="trailer-text text-base lg:text-lg font-medium md:leading-8 lg:max-w-md text-center md:text-right">
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
            className="rounded-3xl bg-black shadow-[0_0_45px_rgba(120,30,200,0.18)]"
          />

          {/* Play button modal */}
          <TrailerModal />
        </div>
      </div>
    </section>
  );
};

export default Trailer;
