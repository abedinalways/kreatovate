import React from 'react'
import { Badge } from '../ui/badge';

export default function AIWorkforce() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#0f1016] py-16 px-4 md:px-0">
      <Badge className="badge-gradient px-[20px] py-[7px] rounded-[56px]">
        AI Workforce
      </Badge>
      <h1 className="text-4xl md:text-[56px] leading-[120%] font-bold text-center md:text-start">
        Automation & AI Workforce
      </h1>
      <p className="text-xs md:text-sm leading-[180%] font-normal text-center md:text-start">
        A unified platform to manage every aspect of your business operations
      </p>

      <div className="flex justify-center w-full mx-auto px-10">
        <ul className="md:flex w-full mx-auto justify-evenly gap-10 md:gap-16 mx-auto mt-10 space-y-6 md:space-y-0  ">
          <li className="flex flex-col items-center">
            <h1 className="text-[#e93d3d] font-bold font-[arimo] text-5xl">
              87%
            </h1>
            <p>Time Saved</p>
          </li>
          <li className="flex flex-col items-center">
            <h1 className="text-[#e93d3d] font-bold font-[arimo] text-5xl">
              3.5x
            </h1>
            <p>Productivity Boost</p>
          </li>
          <li className="flex flex-col items-center">
            <h1 className="text-[#e93d3d] font-bold font-[arimo] text-5xl">
              24/7
            </h1>
            <p>Operation Hours</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
