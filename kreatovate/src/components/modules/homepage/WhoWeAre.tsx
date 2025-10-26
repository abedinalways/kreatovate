import SectionHead from "@/components/shared/SectionHead";
import WwaCard from "./WwaCard";

const WhoWeAre = () => {
  const cardData = [
    {
      title: "Purposeful Development",
      description:
        "We design and build SMART micro-cities with real purpose — compact, tech-enabled communities that improve lives and long-term value.",
      icon: "/images/wwa1.png",
    },
    {
      title: "Integrated Delivery",
      description:
        "We handle consulting, design, marketing, and implementation to take projects from concept to completion.",
      icon: "/images/wwa2.png",
    },
    {
      title: "Carbon Neutrality",
      description:
        "We commit to net-zero carbon across our work, using green solutions and off-grid utilities to lead by action, not just words.",
      icon: "/images/wwa3.png",
    },
    {
      title: "Growth Protection",
      description:
        "We focus on boosting your bottom line while ensuring data protection, future scalability, and lasting organizational success.",
      icon: "/images/wwa4.png",
    },
  ];

  return (
    <div className="bg-[#0F1016] py-24 px-4 lg:px-4 xl:px-0">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-6 lg:row-span-2">
          <div className="flex flex-col gap-4 md:gap-1">
            <div className="w-fit">
              <SectionHead title="Who Are We" className="px-0!" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-14">
              Who <span className="text-color-gradient">are We</span>
            </h1>
          </div>
          <p className="font-roboto text-sm md:text-base font-normal leading-8">
            Our job is to simply positively affect your organizations overall{" "}
            <br />
            bottom line while simultaneously ensuring exponential growth, data{" "}
            <br />
            protection, its future success & its ability to scale in the
            process!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {cardData?.map((data, i) => (
            <WwaCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
