import Image from "next/image";
import ButtonTwo from "@/components/shared/buttons/ButtonTwo";
import { useState } from "react";

export type PricePlan = {
  title: string;
  price: string;
  billing: string;
  description: string;
  buttonText: string;
  features: string[];
};

const PriceBannerCard = ({ plan }: { plan: PricePlan }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[424px] aspect-424/631 rounded-2xl overflow-hidden">
      {/* Frame + decor */}
      <Image
        src="/images/price/price-card-frame.png"
        alt="frame"
        fill
        className="object-contain"
      />
      <Image
        src="/images/price/ellipse-top-right.png"
        alt=""
        fill
        className="absolute top-0 right-0 object-cover rounded-tr-2xl z-10 pointer-events-none"
      />
      <Image
        src="/images/price/ellipse-bottom-left.png"
        alt=""
        fill
        className="absolute bottom-0 left-0 object-cover rounded-bl-2xl z-10 pointer-events-none"
      />

      {/* Content grid */}
      <div className="absolute inset-0 z-20 grid grid-rows-[auto_auto_auto_1fr] gap-6 p-5 sm:p-6">
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold leading-tight min-h-11 sm:min-h-14">
          {plan.title}
        </h2>

        <div className="min-h-[140px] sm:min-h-[150px]">
          <p className="text-2xl sm:text-3xl font-semibold leading-snug">
            <span className="text-[#E7000B] text-4xl sm:text-5xl font-bold">
              {plan.price} /
            </span>{" "}
            {plan.billing}
          </p>
          <p
            className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 font-roboto text-white/85 ${
              open ? "" : "line-clamp-2"
            }`}
          >
            {plan.description}
          </p>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-xs sm:text-sm mt-1 text-[#70a9de] hover:underline focus:outline-none"
          >
            {open ? "Show less" : "Read more"}
          </button>
        </div>

        <ButtonTwo btnText={plan.buttonText} className="border border-white" />

        <ul className="self-end space-y-3 sm:space-y-4">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Image
                src="/images/price/tik.png"
                alt=""
                width={14}
                height={14}
              />
              <p className="text-sm sm:text-lg leading-6 sm:leading-7">{f}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceBannerCard;
