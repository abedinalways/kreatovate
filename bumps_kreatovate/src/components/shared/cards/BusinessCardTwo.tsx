import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BusinessItem } from '../../../../types';
import GradientBorderButton from '../buttons/GradientBorderButton';
import { CircleAlertIcon } from 'lucide-react';

interface CardProps {
  data: BusinessItem;
}

const BusinessCardTwo = ({ data }: CardProps) => {
  const { title, monthlyPrice, availability } = data;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

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

  const isAvailable = availability?.toLowerCase() === 'available';

  const badgeClasses = isAvailable
    ? 'bg-green-100 text-green-500 border-green-500'
    : 'bg-red-100 text-red-500 border-red-500';

  return (
    <div
      ref={cardRef}
      className="business-card relative p-px rounded-2xl h-full min-h-[210px]"
    >
      {/* Light overlay */}
      <div className="absolute top-0 right-0 pointer-events-none w-40 h-40">
        <Image
          src="/images/business_card_light.png"
          alt="business card light"
          width={500}
          height={500}
          className="object-cover rounded-tr-2xl"
        />
      </div>

      {/* 🔥 FIXED HEIGHT CARD */}
      <div className="bg-[#0B111F] h-full p-4 rounded-2xl flex flex-col justify-center gap-4">
        <div className='flex justify-center items-center'>
          {/* Availability Badge */}
          {availability && (
            <button
              className={`${badgeClasses} px-3 w-fit text-xs font-bold rounded-lg flex items-center justify-center gap-2 py-1 border`}
            >
              <CircleAlertIcon size={14} /> {availability}
            </button>
          )}
        </div>

        {/* Content Center */}
        <div className="flex flex-col justify-between flex-1">
          <h1 className="text-2xl  text-center font-semibold leading-8">
            {title}
          </h1>
          <p className="text-[#E21717] text-center text-xl font-bold leading-8">
            {monthlyPrice}
          </p>
        </div>

        <GradientBorderButton btnText="Deploy" />
      </div>
    </div>
  );
};

export default BusinessCardTwo;
