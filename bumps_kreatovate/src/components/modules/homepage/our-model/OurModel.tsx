import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import Image from "next/image";

const OurModel = () => {
  const model = [
    { text: "Initiative" },
    { text: "NextGen 4 - Book Bundle Sale" },
    { text: "Strategy" },
    { text: "The Bumpsale Strategy" },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="w-[1046px] h-[598px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
        <Image
          src="/images/our-model/ellipse.svg"
          alt="ellipse 1"
          fill
          className="object-cover"
        />
      </div>

      <div className="custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24 flex flex-col lg:flex-row items-center justify-between gap-14 w-full relative z-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start">
          <div className="w-fit mb-2">
            <SiteBigBadge title="our model" />
          </div>
          <h1 className="font-bold text-2xl md:text-5xl leading-[120%] mb-3 whitespace-nowrap text-center md:text-left">
            Our Current <br />
            <span className="text-gradient-special pb-4">
              Fundraising Model
            </span>
          </h1>
          <ul className="flex flex-col gap-4 mb-8">
            {model?.map((m) => (
              <li key={m.text}>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/hr-line.png"
                    alt="hr line"
                    width={38}
                    height={7}
                    className="object-cover"
                  />
                  <p className="font-medium text-base md:text-2xl leading-[150%]">
                    {m.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="font-normal text-base md:text-lg leading-[180%] text-ring mb-6">
            The Bumpsale Strategy starts each fundraising round at a low entry
            point and gradually increases the price with each purchase,
            resetting once a cap is reached. This keeps participation open,
            rewards early supporters, and allows fundraising to continue in
            cycles—without exclusivity or barriers.
          </p>
          <p className="font-normal text-base md:text-lg leading-[180%] text-ring mb-6">
            This is our only active fundraising strategy in Phase 1, but
            it&apos;s just the beginning.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[270px] md:h-[546px]">
            <Image
              src="/images/our-model/model.png"
              alt="Bumps Project 1"
              fill
              className="object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModel;
