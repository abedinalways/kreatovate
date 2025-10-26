'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { BusinessItem } from '../../../../types';
import BusinessCard from '@/components/shared/cards/BusinessCard';

gsap.registerPlugin(ScrollTrigger);

const BusinessWorkForce = () => {
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
      title: 'Content Manager',
      price: 497,
      description:
        'Generates posts, captions, hashtags, and schedules content.',
      button: 'Subscribe',
    },
    {
      id: 2,
      title: 'Avatar Builder (Business)',
      price: 497,
      description:
        'Creates branded avatars for outreach, training, or marketing.',
      button: 'Subscribe',
    },
    {
      id: 3,
      title: 'Investigator (Lite)',
      price: 597,
      description: 'Basic background checks and internet scrubbing.',
      button: 'Subscribe',
    },
    {
      id: 4,
      title: 'Lead Generation Employee',
      price: 997,
      description:
        'AI prospector that finds, qualifies, and routes high-quality leads.',
      button: 'Subscribe',
    },
    {
      id: 5,
      title: 'Order Taker Employee',
      price: 997,
      description: 'Captures and confirms orders via voice or chat support.',
      button: 'Subscribe',
    },
    {
      id: 6,
      title: 'Closer (Voice)',
      price: 1497,
      description: 'Outbound sales employee that calls and closes deals.',
      button: 'Subscribe',
    },
    {
      id: 7,
      title: 'Appointment Setter',
      price: 1497,
      description: 'Schedules and confirms client calls seamlessly.',
      button: 'Subscribe',
    },
    {
      id: 8,
      title: 'Lead Nurturer',
      price: 1497,
      description: 'Warms leads with education and timely follow-ups.',
      button: 'Subscribe',
    },
    {
      id: 9,
      title: 'Support Employee',
      price: 1497,
      description: 'Handles FAQs, service issues, and retention.',
      button: 'Subscribe',
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden"
    >
      

      {/* ✅ Dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      {/* ✅ Main Content */}
      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl sm:text-5xl md:text-6xl leading-14 font-bold text-white">
            Business Workforce v1
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Lite / Starter Voice Employees
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {businessData?.map(data => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessWorkForce;
