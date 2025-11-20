import Image from "next/image";
import GradientBorderButton from "../shared/GradientBorderButton";
import { BusinessItem } from "../../../types";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <div className="overflow-hidden business-card relative bg-gradient-to-r from-[#E21717] to-[#3700FF] p-px rounded-2xl shadow-2xl hover:shadow-none transition-all ease-in-out duration-500">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/business_card_light.png"
          alt="business card light"
          width={200}
          height={200}
          className="object-cover rounded-tr-2xl"
        />
      </div>
      <div className="bg-[#0B111F] w-full h-full p-6 rounded-2xl flex flex-col gap-[1.125rem]">
        <div className="flex items-center justify-between">
          <h1 className=" text-lg md:text-xl font-semibold leading-8">
            {title}
          </h1>
          <p className="text-[#E21717] text-[1.5rem]  md:text-[1.8rem] font-bold leading-10">
            ${price}
          </p>
        </div>
        <p className="text-sm md:text-md font-normal leading-7 text-[#A5A5AB] truncate whitespace-nowrap overflow-hidden">
          {description}
        </p>

        <div className="mt-auto z-40">
          <GradientBorderButton btnText="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
