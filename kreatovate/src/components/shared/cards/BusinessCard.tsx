import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BusinessItem } from "../../../../types";
import GradientBorderButton from "../buttons/GradientBorderButton";

interface CardProps {
  data: BusinessItem;
}

const BusinessCard = ({ data }: CardProps) => {
  const { title, price, description } = data;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // subtle hover scale/elevate
    const onEnter = () =>
      gsap.to(el, { scale: 1.02, y: -4, duration: 0.25, ease: "power2.out" });
    const onLeave = () =>
      gsap.to(el, { scale: 1, y: 0, duration: 0.25, ease: "power2.out" });

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="h-full business-card relative bg-color-gradient p-[1px] rounded-2xl overflow-hidden">
      <div className=" absolute top-0 right-0">
        <Image
          src="/images/business_card_light.png"
          alt="business card light"
          width={500}
          height={500}
          className="object-cover rounded-tr-2xl"
        />
      </div>
      <div className="bg-black w-full h-full p-10 rounded-2xl flex flex-col gap-4">
        <div className="flex items-center justify-between gap-8 flex-1">
          <h1 className="text-2xl font-semibold leading-8 flex-1">{title}</h1>
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
