import Image from "next/image";
import React from "react";
import ButtonOne from "../shared/buttons/ButtonOne";
import ButtonTwo from "../shared/buttons/ButtonTwo";

const Solution = () => {
  return (
    <div className="custom-container pt-24 relative w-full overflow-hidden px-2">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
        <div className="lg:w-1/2">
          <p className="uppercase text-color-gradient font-roboto font-normal text-sm">
            [ Our Solution ]
          </p>
          <h1 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Trusted growth plans: <br /> data-driven, scalable.
          </h1>
        </div>
        <p className="mt-4 lg:mt-20 lg:w-1/2 text-sm md:text-base">
          Smart, simple ways to turn your ideas into real growth — using data,
          <br />
          hands-on strategy, and AI where it helps most.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-[#1A1A1A] p-6 md:p-8 mt-4 flex flex-col md:flex-row gap-6 md:gap-10 rounded-2xl">
        {/* Image */}
        <div className="w-full sm:h-[150px] md:h-[350px] md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/images/solution.jpg"
            alt="Solution Image"
            width={574}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 mx-auto flex justify-center items-center ">
          <div className="flex flex-col gap-6">
            <small className="uppercase text-color-gradient font-roboto font-normal text-sm">
              /02 SaaS Marketing
            </small>
            <h2 className="text-2xl md:text-3xl font-bold">
              AI Powered Workforce Solutions
            </h2>
            <p className="text-xs md:text-sm">
              Growth playbooks for every stage: acquisition, activation,
              retention.
              <br />
              Data + AI to find what converts and scale it reliably.
            </p>
            <div className="w-fit">
              <ButtonOne
                btnText="View Details"
                width="w-full md:w-auto"
                padding="py-2 px-4"
                fontSize="text-lg md:text-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center w-full">
        <div className="w-fit">
          <ButtonTwo
            btnText="workforce.kreatovate.com"
            isIcon={false}
            className="lowercase!"
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
