import React from 'react';
import Card from './Card';
import Image from 'next/image';

const Consulting = () => {
  return (
    <div>
      <div className="relative h-screen w-screen flex items-center justify-center">
        <Image
          src="/images/consulting.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute md:top-1/2 md:right-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Consulting;