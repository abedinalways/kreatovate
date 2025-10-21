import React from "react";
import MainBg from "./MainBg";
import Image from "next/image";
import ButtonTwo from "@/components/shared/buttons/ButtonTwo";

const Banner = () => {
  return (
    <div className="relative min-h-[700px] md:min-h-screen overflow-hidden">
      <MainBg />

      <div className="absolute top-36 inset-x-0 z-40 flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center gap-3 bg-white/10 py-2 px-8 md:px-16 w-fit rounded-full mx-auto">
          <Image
            src="/images/hrline1.png"
            alt="heading line vector 1"
            width={80}
            height={16}
          />
          <p className="font-roboto text-sm md:text-lg font-light text-gradient uppercase">
            Top consulting platform
          </p>
          <Image
            src="/images/hrline1.png"
            alt="heading line vector 1"
            width={80}
            height={16}
            className="scale-x-[-1]"
          />
        </div>

        <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-jakarta font-bold max-w-2xl">
          Transform Ideas with{" "}
          <span className="text-gradient-special">Kreatovate’s Strategy</span>
        </h1>

        <p className="mt-3 md:mt-4 font-roboto text-sm md:text-lg max-w-3xl">
          Turn concepts into measurable growth with strategies that scale your
          impact, increase revenue, and deepen customer loyalty.
        </p>

        <div className="mt-5">
          <ButtonTwo btnText="Get Started" />
        </div>
      </div>

      <Image
        src="/images/banner-over.png"
        alt="banner over image"
        width={800}
        height={700}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 w-[90%] md:w-[70%] lg:w-[40%] h-auto px-2 md:px-0"
        priority
      />
    </div>
  );
};

export default Banner;
