'use client';

import { Card, CardContent } from '@/components/ui/card';

import { QuoteIcon } from 'lucide-react';
import { Quote } from './OurBlurbs';
import Image from 'next/image';


interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <Card className="bg-[#0E0E12] border border-gray-800 rounded-xl shadow-md transition-all hover:shadow-lg hover:border-gray-700 sm:w-90 w-68">
      <CardContent className="px-4 flex gap-3 justify-between h-full">
        <p className="text-gray-200 text-sm leading-relaxed w-5/6 ">{quote.quote}</p>
        <div className="flex justify-end items-start">
          <Image
            src="/images/quote.png"
            alt="trailer image"
            width={50}
            height={50}
            className='w-[20px] h-[20px]'
          />
        </div>
      </CardContent>
    </Card>
  );
};
