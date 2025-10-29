'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { BusinessItem } from '../../../../../kreatovate/types';
import BusinessCardTwo from '@/components/shared/cards/BusinessCardTwo';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const BusinessWorkForceV2 = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bwv1-title', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.bwv1-sub', {
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.business-card', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const businessData: BusinessItem[] = [
    {
      id: 1,
      title: 'Closer (Trilingual)',
      monthlyPrice: '$497/monthly',
      button: 'SDeplo',
    },
    {
      id: 2,
      title: 'Appointment Setter (Trilingual)',
      monthlyPrice: '$497/monthly',
      button: 'Deplo',
    },
    {
      id: 3,
      title: 'Appointment Setter (Trilingual)',
      monthlyPrice: '$497/monthly',
      button: 'Deploy',
    },
    {
      id: 4,
      title: 'Support Employee (Trilingual)',
      monthlyPrice: '$497/monthly',
      button: 'Deploy',
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden"
    >
      {/* ✅ Background Image */}
      <Image
        src="/images/personal_pricelist_bg.png"
        alt="Background"
        fill
        className="object-cover w-full h-1/2"
        priority
      />

      {/* ✅ Dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      {/* ✅ Main Content */}
      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl sm:text-5xl md:text-6xl leading-14 font-bold text-white">
            Business Workforce v2
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Standard / Trilingual Support
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 business-card"
        >
          {businessData?.map(data => (
            <BusinessCardTwo key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessWorkForceV2;
