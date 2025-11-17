import Image from 'next/image';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BusinessItem } from '../../../../types';
import GradientBorderButton from '../buttons/GradientBorderButton';
import { CircleAlertIcon } from 'lucide-react';

interface CardProps {
  data: BusinessItem;
}

const BusinessCard = ({ data }: CardProps) => {
  const { title, price, description, availability } = data;

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
    <div className="h-full business-card relative bg-color-gradient p-[px] rounded-2xl ">
      <div className=" absolute top-0 right-0">
        <Image
          src="/images/business_card_light.png"
          alt="business card light"
          width={500}
          height={500}
          className="object-cover rounded-tr-2xl"
        />
      </div>
      <div className="bg-[#0F1016] w-full h-full p-10 rounded-2xl flex flex-col gap-4">
        {/* <button className='bg-red-100 text-red-500 px-2 w-35 text-xs font-bold rounded-2xl flex items-center gap-2 py-1 border border-red-500'> <CircleAlertIcon size={14} /> {availability}</button> */}

        {availability && (
          <>
            <button className="bg-red-100 text-red-500 px-2 w-32 text-xs font-bold rounded-lg flex items-center gap-2 py-1 border border-red-500">
              {' '}
              <CircleAlertIcon size={14} /> {availability}
            </button>
          </>
        )}
        <div className="flex items-center justify-between gap-8 flex-1">
          <h1 className="text-lg font-semibold leading-8 flex-1">{title}</h1>
          <p className="text-[#E21717] text-lg md:text-3xl font-bold leading-10">
            ${price}
          </p>
        </div>
        <p className="text-base font-normal leading-7 text-[#A5A5AB] truncate whitespace-nowrap  flex-1">
          {description}
        </p>

        <GradientBorderButton btnText="Subscribe" />
      </div>
    </div>
  );
};

export default BusinessCard;
