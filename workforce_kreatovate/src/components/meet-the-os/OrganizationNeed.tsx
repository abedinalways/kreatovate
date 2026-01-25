import React from 'react'
import OrganizationCard from '../shared/cards/OrganizationCard';

export default function OrganizationNeed() {
  return (
    <div className="custom-container">
      <h2 className="text-3xl md:text-5xl  mx-auto font-bold font-[arimo] leading-[125%] text-center">
        Organizations don&apos;t need more <br /> data—they need a system
      </h2>
      <p className="text-xs md:text-[18px] font-normal leading-[185%] text-center mt-4 mb-10 font-[arimo]">
        The difference between chaos and clarity isn&apos;t information.
        It&apos;s <br />
        intelligence. It&apos;s knowing what to do with what you have.
      </p>
      <OrganizationCard />
    </div>
  );
}
