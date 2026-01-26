import HeadingButton from "@/components/shared/buttons/HeadingButton";
import React from "react";
import Reviews from "./Reviews";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="relative font-jakarta">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 z-0">
        <Image
          src="/images/testimonial/testimonial-shadow.png"
          alt="testimonial bg"
          width={536}
          height={536}
          className="object-cover"
        />
      </div>
      <div
        id="testimonial"
        className="custom-container px-4 sm:px-6 md:px-5 py-20 flex-col gap-8 justify-center items-center"
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
    </div>
  );
};

export default Feedback;
