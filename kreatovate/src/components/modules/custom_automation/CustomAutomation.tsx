import ButtonAll from '@/components/shared/buttons/ButtonAll';
import React from 'react';

const CustomAutomation = () => {
  return (
    <div className="bg-[#0F1016] py-10 px-4">
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
            Do you have a custom <br />
            automation in mind?
          </h2>

          <p className="text-gray-300 max-w-xl text-sm md:text-base">
            Book a time to discuss your goals!
          </p>

          <ButtonAll btnText="Get Started Free" />
        </div>
      </div>
    </div>
  );
};

export default CustomAutomation;
