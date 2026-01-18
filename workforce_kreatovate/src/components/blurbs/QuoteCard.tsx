"use client";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { FeatureItem } from "./OurBlurbs";

type QuoteCardProps = {
  feature: FeatureItem;
};

export const QuoteCard = ({ feature }: QuoteCardProps) => {
  return (
    // <Card className="bg-[#0E0E12] border border-gray-800 rounded-xl shadow-md transition-all hover:shadow-lg hover:border-gray-700 sm:w-90 w-68">
    //   <CardContent className="px-4 flex gap-3 justify-between h-full">
    //     <p className="text-gray-200 text-sm leading-relaxed w-5/6 ">{quote.quote}</p>
    //     <div className="flex justify-end items-start">
    //       <Image
    //         src="/images/quote.png"
    //         alt="trailer image"
    //         width={50}
    //         height={50}
    //         className='w-[20px] h-[20px]'
    //       />
    //     </div>
    //   </CardContent>
    // </Card>
    <Card className="btn-gradient border-none p-px rounded-xl">
      <CardContent className="bg-[#0E0E12] h-full rounded-xl p-4 space-y-4">
        <div className="relative w-12 h-12">
          <Image
            src="/images/our-blurb.png"
            alt="blurb image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-white font-semibold font-jakarta text-xl leading-[150%] -tracking-[2%]">
            {feature?.title}
          </h1>
          <p className="text-base leading-[140%] text-[#A5A5AB]">
            {feature?.desc}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
