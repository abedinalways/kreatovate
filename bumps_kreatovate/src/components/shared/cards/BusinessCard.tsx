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

  // -----------------------------
  // DYNAMIC BADGE STYLING
  // -----------------------------
  const isAvailable = availability?.toLowerCase() === 'available';

  const badgeClasses = isAvailable
    ? 'bg-green-100 text-green-500 border-green-500'
    : 'bg-red-100 text-red-500 border-red-500';

  return (
    <div
      ref={cardRef}
      className="h-full business-card relative bg-color-gradient rounded-2xl"
    >
      {/* Top-right glow overlay */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <Image
          src="/images/business_card_light.png"
          alt="business card light"
          width={500}
          height={500}
          className="object-cover rounded-tr-2xl"
        />
      </div>

      <div className="bg-[#0F1016] w-full h-full p-10 rounded-2xl flex flex-col gap-4">
        {/* Dynamic Availability Badge */}
        {availability && (
          <button
            className={`${badgeClasses} px-3 w-fit text-xs font-bold rounded-lg flex items-center gap-2 py-1 border`}
          >
            <CircleAlertIcon size={14} /> {availability}
          </button>
        )}

        {/* Title & Price */}
        <div className="flex items-center justify-between gap-8 flex-1">
          <h1 className="text-lg font-semibold leading-8 flex-1">{title}</h1>
          <p className="text-[#E21717] text-lg md:text-3xl font-bold leading-10">
            ${price}
          </p>
        </div>

        {/* Description */}
        <p className="text-base font-normal leading-7 text-[#A5A5AB] truncate whitespace-nowrap flex-1">
          {description}
        </p>

        {/* Button */}
        <GradientBorderButton btnText="Subscribe" />
      </div>
    </div>
  );
};

export default BusinessCard;
