'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { BusinessItem } from '../../../../../kreatovate/types';
import BusinessCard from '@/components/shared/cards/BusinessCard';

gsap.registerPlugin(ScrollTrigger);

const SaaSA1EmployeeLicensing = () => {
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
      title: 'Starter Voice (v1)',
      price: 25000,
      description: 'Includes full workflow package + …',
      button: 'Subscribe',
    },
    {
      id: 2,
      title: 'Standard Voice (v2)',
      price: 35000,
      description: 'Creates branded avatars for outreach, training, or …',
      button: 'Subscribe',
    },
    {
      id: 3,
      title: 'Expert Voice (v3)',
      price: 40000,
      description: 'Memory-enabled workflows',
      button: 'Subscribe',
    },
    {
      id: 4,
      title: 'Elite Voice (v4)',
      price: 50000,
      description: 'Top-tier AI stack with global …',
      button: 'Subscribe',
    },
    {
      id: 5,
      title: 'Administrative Assistant',
      price: 35000,
      description: 'Standard voice workflows, trilingual',
      button: 'Subscribe',
    },
    {
      id: 6,
      title: 'Executive Assistant',
      price: 50000,
      description: 'Premium hybrid workflows, …',
      button: 'Subscribe',
    },
    {
      id: 7,
      title: 'Order Taker Employee',
      price: 20000,
      description: 'Voice-enabled, retail/event-ready',
      button: 'Subscribe',
    },
    {
      id: 8,
      title: 'Technical Support',
      price: 35000,
      description: 'Memory-enabled workflows',
      button: 'Subscribe',
    },
    {
      id: 9,
      title: 'Lead Generation',
      price: 25000,
      description: 'Lead scoring and routing',
      button: 'Subscribe',
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative py-[6.25rem] px-4 md:px-0 bg-[#0F1016] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 -z-10"></div>

      <div className="custom-container relative flex flex-col items-center gap-14 lg:gap-24">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="bwv1-title text-2xl sm:text-5xl md:text-6xl leading-14 font-bold text-white">
            SaaS – A1 Employee Licensing
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Own the license, own the revenue.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch business-card"
        >
          {businessData?.map(data => (
            <BusinessCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaaSA1EmployeeLicensing;
