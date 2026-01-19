import ButtonTwo from "@/components/shared/buttons/ButtonTwo";
import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import Image from "next/image";

const Launchpad = () => {
  return (
    <div className="relative overflow-hidden" id='about_us'>
      <Image
        src="/images/launchpad/ellipse-1.png"
        alt="ellipse 1"
        width={1046}
        height={598}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none"
      />
      <Image
        src="/images/launchpad/ellipse-2.png"
        alt="ellipse 1"
        width={1012}
        height={708}
        className="absolute bottom-0 right-0 z-10 pointer-events-none select-none"
      />
      <div className="custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24 flex flex-col lg:flex-row items-center justify-between gap-14 w-full relative z-10">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="w-fit mb-2">
            <SiteBigBadge title="fundraising, reimagined" />
          </div>
          <h1 className="font-bold text-2xl md:text-5xl leading-[120%] mb-3 whitespace-nowrap">
            The{" "}
            <span className="text-gradient-special">Kreatovate Launchpad</span>
          </h1>
          <p className="font-semibold text-base md:text-lg leading-[180%] text-white mb-5">
            The Kreatovate Launchpad is our centralized fundraising and
            activation hub built to help ideas, startups, and operating
            businesses raise capital by delivering value, not promises.
          </p>
          <p className="font-normal text-base md:text-lg leading-[180%] text-ring mb-6">
            Instead of traditional donations, ads, or speculative raises, the
            Launchpad enables fundraising through digital products that can be
            delivered instantly, paired with transparent, repeatable fundraising
            strategies. This allows both Kreatovate and future clients to fund
            initiatives, complete builds, launch products, and validate
            demand—without friction or gatekeepers.
          </p>
          <div className="w-fit">
            <ButtonTwo btnText="Explore the Launchpad" isIcon />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[270px] md:h-[546px]">
            <Image
              src="/images/bumps-project-1.png"
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

export default Launchpad;
