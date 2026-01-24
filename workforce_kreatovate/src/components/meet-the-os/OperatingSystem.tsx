import React from 'react'
import { Badge } from '../ui/badge';
import OperatingCard from '../shared/cards/OperatingCard';

export default function OperatingSystem() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#0f1016] py-16">
      <Badge className="badge-gradient px-[20px] py-[7px] rounded-[56px]">
        KIK.pro Platform
      </Badge>
      <h1 className="text-4xl md:text-[56px] leading-[120%] font-bold ">
        Business Operating System
      </h1>
      <p className="text-xs md:text-sm leading-[180%] font-normal">
        A unified platform to manage every aspect of your business operations
      </p>
      <OperatingCard />
    </div>
  );
}
