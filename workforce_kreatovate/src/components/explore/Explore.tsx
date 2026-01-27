'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonTwo from '@/components/shared/buttons/ButtonTwo';
import ButtonAll from '../shared/ButtonAll';

gsap.registerPlugin(ScrollTrigger);
export default function Explore() {
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
    <div ref={sectionRef} className="pb-24 font-jakarta mx-2 md:mx-0">
      <div className=" custom-container ">
        <div className="btnOne-bg-gradient rounded-[20px] p-px custom-container">
          <div className="bg-black rounded-[20px]">
            <div
              className="custom-container bg-[url('/images/frame0001.png')]
          bg-cover bg-center bg-no-repeat 
          relative z-10 px-4 md:px-8 py-20 rounded-[20px] h-[350px] flex flex-col justify-center items-center text-center gap-4"
            >
              <h2 className="text-2xl md:text-5xl font-semibold max-w-3xl">
                If the workforce site references voice/SMS or calling
              </h2>

              <p className="text-gray-300 text-sm md:text-md lg:text-[1rem] leading-7 font-normal max-w-2xl">
                Acquire and manage local and toll-free numbers directly inside
                the platform for voice and SMS - no external provisioning
                workflows required.
              </p>

              <div className="js-book-text">
                <ButtonAll
                  btnText="Explore kreatovate.com"
                  href={process.env.NEXT_PUBLIC_EXPLORE_BTN_LINK}
                  target="_blank"
                  className="md:py-6 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
