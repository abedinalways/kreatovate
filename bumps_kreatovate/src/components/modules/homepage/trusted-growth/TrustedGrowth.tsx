import TrustCard from "./TrustCard";

const TrustedGrowth = () => {
  return (
    <div className="custom-container pt-24 flex flex-col gap-12 px-4 md:px-0">
      <div className="space-y-2">
        <p className="uppercase text-color-gradient font-roboto font-normal text-sm">
          [ our books ]
        </p>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-end justify-between">
          <h1 className="font-jakarta text-2xl lg:text-5xl font-bold">
            Trusted growth plans:
            <br /> data-driven, scalable.
          </h1>
          <p className="text-jakarta font-medium text-base lg:text-lg">
            Smart, simple ways to turn your ideas into real growth - <br />{" "}
            using data, hands-on strategy, and AI where it helps most.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <TrustCard />
        <TrustCard />
        <TrustCard />
        <TrustCard />
      </div>
    </div>
  );
};

export default TrustedGrowth;
