import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import HowItWorksCard from "./HowItWorksCard";
import Image from "next/image";

const HowItWorks = () => {
  const cardData = [
    {
      title: "A real initiative",
      photo: "/images/how-it-works/image1.png",
      points: [
        "A startup, product, company, or internal build with a defined purpose",
        "Clear use of funds and supporting investor or project materials",
      ],
      hasDescription: false,
      reversed: false,
    },
    {
      title: "A value - driven digital product",
      photo: "/images/how-it-works/image2.png",
      points: [
        "Must add real value",
        "Must be instantly deliverable",
        "No onboarding, programming, or fulfillment delays",
      ],
      hasDescription: true,
      description:
        "Examples include: eBooks & workbooks, Digital art & media, Seminars & educational content, Printables & templates,Tokens & on-chain assets (future phases)",
      reversed: true,
    },
    {
      title: "A transparent fundraising strategy",
      photo: "/images/how-it-works/image3.png",
      points: [
        "Today: Bumpsale",
        "Future: Tokenized crowdfunding, coin offerings, on-chain campaigns",
      ],
      hasDescription: false,
      reversed: false,
    },
  ];
  return (
    <div className="relative overflow-hidden font-jakarta" id="process_overview">
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
              <SiteBigBadge title="How It Works" />
            </div>
            <h1 className="font-bold text-2xl md:text-5xl leading-[120%] text-center">
              How the{' '}
              <span className="text-gradient-special">Launchpad Works</span>
            </h1>
          </div>

          <p className="font-normal text-lg leading-[180%] text-ring text-center">
            Every project on the Launchpad must meet a clear standard:
          </p>
        </div>

        <HowItWorksCard cardData={cardData} />
      </div>
    </div>
  );
};

export default HowItWorks;
