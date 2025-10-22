import React from 'react';
import ButtonAll from '../shared/buttons/ButtonAll';

const Explore = () => {
  return (
    <div
      className="bg-gray-800 py-10"
    >
      <div
        className="custom-container bg-[url('/images/explore.png')] 
        bg-cover bg-center bg-no-repeat 
        relative z-10 px-4 sm:px-36 md:px-5 py-20 rounded-[20px] h-[350px]"
      >
        <div
          className="
            flex flex-col justify-center items-center gap-4 text-center
            rounded-[20px]"
        >
          <h2 className="text-2xl sm:text-5xl md:text-5xl font-semibold max-w-2xl">
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
    </div>
  );
};

export default Explore;
