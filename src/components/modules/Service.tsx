import Image from "next/image";
import HeadingButton from "../shared/HeadingButton";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div
      id="our_solutions"
      className="px-4 py-16 sm:p-36 md:p-36 mx-auto bg-gray-900 scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-7 relative">
          <div>
            <HeadingButton btnText="Service" />
          </div>
          <div className="absolute w-full h-full">
            <Image
              src="/images/man-head.png"
              alt="man head"
              fill
              className="object-cover absolute bottom-0 right-0 z-0"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Discover Our AI{" "}
            <span className="text-color-gradient">
              Driven Marketing Services
            </span>
          </h1>
          <p className="text-sm font-normal md:mt-7">
            Explore our tailored solutions designed to elevate your <br /> brand
            and boost your market presence effectively for <br /> sustainable
            growth and lasting success.
          </p>
        </div>

        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
