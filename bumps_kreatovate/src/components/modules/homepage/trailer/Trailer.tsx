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
          BACKGROUND LAYERS
         ---------------------- */}

      {/* 1) Top 50% solid color */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full"
        style={{
          height: '50%',
          background: '#0F1016',
          zIndex: 0,
        }}
      />

      {/* 2) Bottom 50% background image */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{
          height: '50%',
          zIndex: 0,
        }}
      >
        <Image
          src="/images/image88.png"
          alt="background image"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      {/* 3) Soft radial glow effect */}
      <div
        aria-hidden
        className="absolute -left-20 bottom-10 w-[520px] h-[420px] rounded-full opacity-30"
        style={{
          zIndex: 0,
          filter: 'blur(90px)',
          background:
            'radial-gradient(circle at 30% 70%, rgba(176,22,85,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* 4) Vignette / dark edges */}
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
          CONTENT (on top)
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
            alt="trailer poster"
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
