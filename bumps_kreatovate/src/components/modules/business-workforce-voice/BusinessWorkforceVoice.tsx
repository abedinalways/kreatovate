'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import BusinessCard from '@/components/shared/cards/BusinessCard';
import { BusinessItem } from '../../../../types';

gsap.registerPlugin(ScrollTrigger);

const BusinessWorkForceVoice = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // -------------------------
  // GSAP Animations
  // -------------------------
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

  // -------------------------
  // Updated Data (Matches Screenshot)
  // -------------------------
  const businessData: BusinessItem[] = [
    {
      id: 1,
      title: 'Closer',
      price: 2497,
      availability: 'Not available',
      description: 'Outbound sales employee that calls and closes deals.',
      button: 'Subscribe',
    },
    {
      id: 2,
      title: 'Avatar Builder',
      price: 497,
      availability: 'Not available',
      description:
        'Creates branded avatars for outreach, training or marketing.',
      button: 'Subscribe',
    },
    {
      id: 3,
      title: 'Investigator',
      price: 597,
      availability: 'Not available',
      description: 'Basic background checks and internet scrubbing.',
      button: 'Subscribe',
    },
    {
      id: 4,
      title: 'Lead Generation',
      price: 997,
      availability: 'Not available',
      description:
        'AI prospector that finds, qualifies, and routes high-quality leads.',
      button: 'Subscribe',
    },
    {
      id: 5,
      title: 'Order Taker',
      price: 997,
      availability: 'Not available',
      description: 'Captures and confirms orders via voice or chat updates.',
      button: 'Subscribe',
    },
    {
      id: 6,
      title: 'Content Manager',
      price: 497,
      availability: 'Available',
      description:
        'Generates posts, captions, hashtags, and schedules content.',
      button: 'Subscribe',
    },
    {
      id: 7,
      title: 'Appointment Setter',
      price: 1497,
      availability: 'Available',
      description: 'Schedules and confirms client calls seamlessly.',
      button: 'Subscribe',
    },
    {
      id: 8,
      title: 'Lead Nurturer',
      price: 1497,
      availability: 'Available',
      description: 'Warms leads with education and timely follow-ups.',
      button: 'Subscribe',
    },
    {
      id: 9,
      title: 'Admin Support',
      price: 1497,
      availability: 'Available',
      description: 'Handles FAQs, service issues, and client retention.',
      button: 'Subscribe',
    },
  ];

  // -------------------------
  // Layout
  // -------------------------
  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden font-jakarta"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        {/* Title */}
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl md:text-5xl leading-14 font-bold text-white">
            Business Workforce Voice v1
          </h1>

          <p className="bwv1-sub text-sm md:text-md font-normal text-gray-300">
            Lite / Starter Voice Employees
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full"
        >
          {businessData.map(item => (
            <BusinessCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessWorkForceVoice;
