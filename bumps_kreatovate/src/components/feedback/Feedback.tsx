import React from 'react';
import Reviews from './Reviews';

const Feedback = () => {
  return (
    <div
      id="testimonial"
      className="custom-container px-4 sm:px-36 md:px-5 md:py-20 flex-col gap-8 justify-center items-center"
    >
      <div className="text-start ml-20 mt-10 font-[roboto] flex flex-col gap-2 mb-10">
        <small className=" text-[#4D61FF]">[ Testimonial ]</small>
        <h2 className="md:text-3xl font-bold">What our Customer Say</h2>
      </div>
      <div className="flex justify-center">
        <Reviews />
      </div>
    </div>
  );
};

export default Feedback;