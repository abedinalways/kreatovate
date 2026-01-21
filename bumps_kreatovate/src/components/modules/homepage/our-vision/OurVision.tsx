import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import Image from "next/image";
import OurVisionCard from "./OurVisionCard";

const OurVision = () => {
  const cardData = [
    {
      title:
        "Phase 1 is about building the infrastructure—proving that value-based fundraising works at scale. Future phases will introduce:",
      photo: "/images/how-it-works/image2.png",
      points: [
        "Tokenized fundraising",
        "On - chain participation",
        "Community - owned capital formation",
      ],
      hasDescription: true,
      description:
        "Whether it's Kreatovate funding its ecosystem or clients funding their own startups - the Launchpad becomes the place where ideas turn into execution.",
      reversed: true,
    },
  ];
  return (
    <div className="relative overflow-hidden font-jakarta" id='our_vision'>
      <Image
        src="/images/how-it-works/ellipse.svg"
        alt="bg light"
        width={1596}
        height={1123}
        className="absolute z-0 left-1/2 bottom-0 -translate-x-1/2 object-cover pointer-events-none"
      />
      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24 space-y-16 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-fit">
              <SiteBigBadge title="our vision" />
            </div>
            <h1 className="font-bold text-2xl md:text-5xl leading-[120%] text-center">
              The{" "}
              <span className="text-gradient-special pb-2">Bigger Vision</span>
            </h1>
          </div>

          <p className="font-normal text-lg leading-[180%] text-ring text-center">
            The Launchpad is designed to evolve into a fully decentralized
            fundraising engine.
          </p>
        </div>

        <OurVisionCard cardData={cardData} />
      </div>
    </div>
  );
};

export default OurVision;
