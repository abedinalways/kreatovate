'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { pricingData } from '@/data/pricingData';


interface PricingItem {
  id: number;
  title: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
}

const PricingSection = () => {
  return (
    <section className=" text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {pricingData.map((item: PricingItem) => (
          <Card
            key={item.id}
            className="relative overflow-hidden rounded-3xl   bg-gradient-to-b from-white/10 to-white/5  p-6 shadow-lg  md:w-[648px] md:h-[346px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="absolute"
            />
            <CardContent className="relative z-10">
              <div className="flex gap-2">
                <div className="rounded-full">
                  <Image
                    src="/images/badge.png"
                    alt="icon"
                    width={73}
                    height={73}
                  />
                </div>
                
                  <h3 className="md:text-5xl font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                
              </div>

              <div className="md:text-5xl font-bold text-red-500 pl-2">
                {item.price}
                <span className="md:text-2xl text-red-500 font-medium">
                  /{item.duration}
                </span>
              </div>

              <hr className="my-5 border-white/10" />

              <ul className="space-y-4 text-sm text-gray-300">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
