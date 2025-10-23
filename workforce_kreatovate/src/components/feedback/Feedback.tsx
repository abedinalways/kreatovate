import React from "react";
import HeadingButton from "../shared/HeadingButton";
import Reviews from "./Reviews";

const Feedback = () => {
  return (
    <div
      id="testimonial"
      className="custom-container px-4 sm:px-36 md:px-5 py-20 flex-col gap-8 justify-center items-center"
    >
      <div className="flex justify-center items-center mb-4">
        <HeadingButton btnText="Testimonial" />
      </div>
      <h2 className="md:text-5xl text-3xl text-center font-bold">
        What our <span className="text-color-gradient">Customer Say</span>
      </h2>
      <div className="flex justify-center">
        <Reviews />
      </div>
    </div>
  );
};

export default Feedback;
