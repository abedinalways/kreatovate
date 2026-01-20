'use client'
import Image from 'next/image'
import React from 'react'
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonTwo from '@/components/shared/buttons/ButtonTwo';

gsap.registerPlugin(ScrollTrigger);
export default function Welcome() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.js-book-text', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#0F1016] pb-24">
      <div className="mx-4">
        <div
          className="custom-container bg-[url('/images/explore.png')]
          bg-cover bg-center bg-no-repeat 
          relative z-10 px-4 md:px-8 py-20 rounded-[20px] h-[350px] flex flex-col justify-center items-center text-center gap-4"
        >
          <h2 className="js-book-text text-2xl sm:text-5xl md:text-5xl font-semibold max-w-2xl">
            Book Appointment NOW!
          </h2>

          <p className="js-book-text text-gray-300 max-w-xl text-sm md:text-base">
            Experience how we’re transforming the workforce with AI-powered
            innovation. Dive deeper into our ecosystem.
          </p>

          <div className="js-book-text">
            <ButtonTwo link="#contact_us" btnText="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
