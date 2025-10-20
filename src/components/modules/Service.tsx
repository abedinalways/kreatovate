import HeadingButton from "../shared/HeadingButton";
import ServiceTabs from "./ServiceTabs";

const Service = () => {
  return (
    <div
      id="our_solutions"
      className="py-16 mx-auto bg-[#000000] scroll-mt-20 px-4 md:px-0"
    >
      <div className="flex flex-col items-center gap-6 custom-container">
        <div className="flex flex-col items-center gap-7 relative">
          <div>
            <HeadingButton btnText="Service" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center max-w-3xl">
              Discover Our{" "}
              <span className="text-color-gradient">AI Powered</span>
              <span className="text-color-gradient inline-block">
                Workforce Solutions
              </span>
            </h1>
            <p className="text-xs sm:text-sm font-normal md:mt-7 text-center">
              Explore our tailored solutions designed to elevate your brand and
              boost your market presence effectively{" "}
              <br className="hidden sm:block" /> for sustainable growth and
              lasting success.
            </p>
          </div>
        </div>

        <ServiceTabs />
      </div>
    </div>
  );
};

export default Service;
