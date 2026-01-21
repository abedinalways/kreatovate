import Btn from "@/components/shared/buttons/Btn";
import ButtonTwo from "@/components/shared/buttons/ButtonTwo";
import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import Image from "next/image";

const LaunchpadInitiatives = () => {
  return (
    <div className="relative overflow-hidden font-jakarta" id='our_books'>
      <Image
        src="/images/launchpad-initiatives/ellipse.png"
        alt="bg light"
        width={1446}
        height={998}
        className="absolute z-0 left-1/2 -translate-x-1/2 -bottom-1/2 object-cover pointer-events-none"
      />
      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24 flex flex-col items-center">
        <div className="w-fit mb-2">
          <SiteBigBadge title="our Initiatives" />
        </div>

        <h1 className="font-bold text-2xl md:text-5xl leading-[120%] mb-4">
          Launchpad <span className="text-gradient-special">Initiatives</span>
          
        </h1>

        <p className="font-medium text-lg leading-[180%] text-ring mb-12 max-w-154 text-center">
          The NextGen 4 - Book Bundle is more than a collection of books - ifr a
          blueprint for where business, automation, and ownership are heading
          next.
        </p>

        <div className="bg-white/10 p-2 md:p-8 rounded-[12px] flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/launchpad-initiatives/image.png"
                alt="book image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-medium text-lg leading-[180%] uppercase text-gradient-special mb-2">
              Bumpsale Strategy
            </p>
            <h1 className="font-semibold text-xl md:text-[32px] leading-[130%] mb-4">
              NextGen 4 - Book Bundle Sale
            </h1>
            <p className="font-medium text-base md:text-lg leading-[180%] text-[#e9e9ea] mb-6">
              This bundle brings together four foundational works designed to
              help entrepreneurs, operators, and builders understand how AI,
              automation, and digital systems are reshaping how companies are
              built, scaled, and funded. Each book delivers practical insight,
              future-focused strategy, and real-world context you can apply
              immediately.
            </p>

            <div className="w-fit">
              <Btn btnText="Learn More" isIcon={false} className="w-34! h-14! text-center"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadInitiatives;
