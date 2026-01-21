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
    <div ref={sectionRef} className="pb-24 font-jakarta mx-2 md:mx-0" id='dashboard'>
      <div className=" custom-container ">
        <div className="btnOne-bg-gradient rounded-[20px] p-px custom-container">
          <div className="bg-black rounded-[20px]">
            <div
              className="custom-container bg-[url('/images/frame01.png')]
          bg-cover bg-center bg-no-repeat 
          relative z-10 px-4 md:px-8 py-20 rounded-[20px] h-[350px] flex flex-col justify-center items-center text-center gap-4"
            >
              <h2 className="js-book-text text-2xl sm:text-5xl md:text-5xl font-semibold max-w-2xl">
                Welcome to the <br />{' '}
                <span className="text-gradient">Launchpad Dashboard</span>
              </h2>

              <p className="js-book-text text-gray-300  text-sm md:text-base leading-[180%]">
                A centralized platform hosting multiple initiatives—built to
                turn ideas into action.
              </p>

              <div className="js-book-text">
                <ButtonTwo
                  link="/"
                  btnText="Launchpad  Dashboard"
                  className="px-6 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
