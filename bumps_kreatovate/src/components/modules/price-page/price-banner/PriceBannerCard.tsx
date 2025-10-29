import { cn } from '@/lib/utils';
import Image from 'next/image';
import ButtonTwo from '@/components/shared/buttons/ButtonTwo';
import { useState } from 'react';

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
    <div
      className={cn(
        'w-full h-full max-w-full sm:aspect-424/631 lg:aspect-auto',

        'bg-linear-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419] border border-purple-500/60 shadow-2xl p-2px rounded-xl'
      )}
    >
      <div
        className="rounded-xl h-full  flex flex-col justify-between p-4 sm:p-6"
        style={{
          background:
            'linear-gradient(120deg, rgba(226, 15, 18, 0.2) 40%, rgba(56, 83, 255, 0.2) 60%)',
        }}
      >
        {/* Title */}
        <h2 className="font-sans text-xl xs:text-2xl sm:text-3xl font-semibold leading-tight">
          {plan.title}
        </h2>

        {/* Price + Description */}
        <div className="mt-3 sm:mt-4">
          <p className="text-lg sm:text-3xl font-semibold leading-snug flex items-baseline gap-x-2 flex-wrap">
            <span className="text-[#E7000B] text-3xl sm:text-5xl font-bold whitespace-nowrap">
              {plan.price}
            </span>
            <span className="text-base sm:text-xl whitespace-nowrap">
              / {plan.billing}
            </span>
          </p>

          <p
            className={cn(
              'mt-2 text-sm sm:text-base leading-6 sm:leading-7 font-roboto text-white/85',
              open ? '' : 'line-clamp-2'
            )}
          >
            {plan.description}
          </p>
          <button
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            className="text-xs sm:text-sm mt-1 text-[#70a9de] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#70a9de] rounded"
          >
            {open ? 'Show less' : 'Read more'}
          </button>
        </div>

        {/* Button */}
        <div className="mt-4 sm:mt-6">
          <ButtonTwo
            btnText={plan.buttonText}
            className="border border-white w-full"
          />
        </div>

        {/* Features */}
        <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
          {plan.features.map(f => (
            <li key={f} className="flex items-start gap-2">
              <Image
                src="/images/price/tik.png"
                alt=""
                width={16}
                height={16}
                className="shrink-0 translate-y-[2px]"
                priority={false}
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
