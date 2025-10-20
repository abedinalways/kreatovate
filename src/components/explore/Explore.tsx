import React from 'react';
import ButtonAll from '../shared/ButtonAll';

const Explore = () => {
  return (
    <div className="custom-container px-4 sm:px-36 md:px-5">
      <div
        className="
        flex flex-col justify-center items-center gap-4 text-center py-12
        rounded-[20px] border border-[#E20F12]
        bg-[linear-gradient(90deg,rgba(226,23,23,0.10)_0%,rgba(55,0,255,0.10)_100%)]
      "
      >
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-white">
          Continue Your Journey with <br />
          <span className="text-gradient">Kreatovate</span>
        </h2>

        <p className="text-gray-300 max-w-xl text-sm md:text-base">
          Experience how we’re transforming the workforce with AI-powered
          innovation. Dive deeper into our ecosystem.
        </p>

        <ButtonAll btnText="Explore Kreatovate.com" />
      </div>
    </div>
  );
};

export default Explore;
