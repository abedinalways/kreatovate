import React from 'react';
import Reviews from './Reviews';

const Feedback = () => {
  return (
    <div className="bg-[#0F1016]" id="testimonial">
      <div className=" px-4 sm:px-6 md:px-5 py-6 flex-col gap-8 ">
        <div className="custom-container text-start mt-10 font-[roboto] flex flex-col gap-2 mb-10">
          <small className=" text-[#4D61FF] text-md mt-6">[ Testimonial ]</small>
          <h2 className="text-3xl md:text-5xl font-bold">What our Customer Say</h2>
        </div>
        <div className="flex justify-center">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Feedback;