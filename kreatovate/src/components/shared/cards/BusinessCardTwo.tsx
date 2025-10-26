import Image from 'next/image';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BusinessItem } from '../../../../types';
import GradientBorderButton from '../buttons/GradientBorderButton';

interface CardProps {
  data: BusinessItem;
}

const BusinessCardTwo = ({ data }: CardProps) => {
  const { title, monthlyPrice } = data;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // subtle hover scale/elevate
    const onEnter = () =>
      gsap.to(el, { scale: 1.02, y: -4, duration: 0.25, ease: 'power2.out' });
    const onLeave = () =>
      gsap.to(el, { scale: 1, y: 0, duration: 0.25, ease: 'power2.out' });

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="business-card relative  p-px rounded-2xl ">
      <div className="w-64 h-48 absolute top-0 right-0">
        <Image
          src="/images/business_card_light.png"
          alt="business card light"
          width={500}
          height={500}
          className="object-cover rounded-tr-2xl"
        />
      </div>
      <div className="bg-[#0B111F] w-full p-6 rounded-2xl flex flex-col gap-[1.125rem]">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-xl font-semibold leading-8">{title}</h1>
          <p className="text-[#E21717] text-md font-bold leading-10">
            {monthlyPrice}
          </p>
        </div>
        

        <GradientBorderButton btnText="Deploy" />
      </div>
    </div>
  );
};

export default BusinessCardTwo;
