'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { BusinessItem } from '../../../../types';
import AddOnsCard from '@/components/shared/cards/AddOnsCard';

gsap.registerPlugin(ScrollTrigger);

const AddOnsUpgrades = () => {
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

  // ✅ Updated JSON data directly inside component
  const AddOnsData: BusinessItem[] = [
    {
      id: 1,
      title: 'Extra AI Employee Seat',
      price: 3997,
      duration: 'monthly',
      description: 'Add more AI employees to your team as your business grows.',
      button: 'Add to Plan',
    
    },
    {
      id: 2,
      title: 'Advanced Analytics',
      price: 3997,
      duration: 'monthly',
      description:
        'Get deeper insights with advanced reporting and real-time dashboards.',
      button: 'Add to Plan',
      
    },
    {
      id: 3,
      title: 'Custom Training Session',
      price: 3997,
      duration: 'monthly',
      description:
        'Personalized AI training session to optimize for your business needs.',
      button: 'Add to Plan',
      
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
            Add-ons & Upgrades
          </h1>
          <p className="bwv1-sub text-sm md:text-md leading-7 font-normal text-gray-300">
            Enhance your AI workforce with powerful add-ons
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch business-card"
        >
          {AddOnsData?.map(data => (
            <AddOnsCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOnsUpgrades;
