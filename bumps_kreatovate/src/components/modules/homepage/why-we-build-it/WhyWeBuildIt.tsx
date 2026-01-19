import SiteBigBadge from "@/components/shared/site-big-badge/SiteBigBadge";
import Image from "next/image";

const WhyWeBuildIt = () => {
  const existTo = [
    {
      id: 1,
      icon: "/images/whyWeBuildIt/fund.svg",
      title: "Fund real work",
      desc: "development, marketing, execution",
    },
    {
      id: 2,
      icon: "/images/whyWeBuildIt/access.svg",
      title: "Accessible & Transparent",
      desc: "Keep fundraising value-driven",
    },
    {
      id: 3,
      icon: "/images/whyWeBuildIt/framework.svg",
      title: "Repeatable Framework",
      desc: "Anyone can use internally or externally",
    },
  ];

  const fund = [
    { text: "Completion of our AI Workforce workflows" },
    { text: "Marketing for our AI Employees" },
    { text: "Marketing and distribution of our KDP-published books" },
  ];

  return (
    <div className="relative overflow-hidden" id='our_solutions'>
      <Image
        src="/images/whyWeBuildIt/ellipse2.svg"
        alt="bg image"
        width={1446}
        height={998}
        className="absolute -bottom-72 left-1/2 -translate-x-1/2 z-0 object-cover"
      />
      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24">
        <div className="flex flex-col items-center mb-12">
          <div className="w-fit mb-2">
            <SiteBigBadge title="Why We Build It" />
          </div>
          <h1 className="font-bold text-2xl md:text-5xl leading-[120%] text-center mb-4">
            We built the Launchpad <br className="hidden md:block" /> to{" "}
            <span className="text-gradient-special">
              solve a simple problem
            </span>
          </h1>
          <p className="font-normal text-base md:text-lg leading-[180%] text-center text-ring">
            Great ideas shouldn’t stall because of slow, centralized, or
            inaccessible fundraising.
          </p>
        </div>
        <div className="flex flex-col gap-12 mb-6">
          <div>
            <h1 className="font-semibold text-lg md:text-2xl leading-[150%] mb-6">
              The Launchpad exists to:
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {existTo?.map((exist) => (
                <div
                  key={exist.id}
                  className="bg-linear-to-l from-[#3700ff] to-[#e21717] p-px rounded-[20px]"
                >
                  <div className="bg-black p-6 rounded-[20px]">
                    <div
                      className="p-3.5 rounded-full w-fit mb-8"
                      style={{
                        background:
                          "linear-gradient(90deg, #e21717 0%, #3700ff 100%)",
                      }}
                    >
                      <Image
                        src={exist.icon}
                        alt="sca"
                        width={36}
                        height={36}
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-3">
                      <h1 className="font-semibold text-lg md:text-2xl leading-[150%]">
                        {exist.title}
                      </h1>

                      <p className="font-normal text-base md:text-lg leading-[180%] text-ring">
                        {exist.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-lg md:text-2xl leading-[150%] mb-6">
              Today, we&apos;re using the Launchpad to fund:
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {fund?.map((f) => (
                <div
                  key={f.text}
                  className="bg-linear-to-l from-[#3700ff] to-[#e21717] p-px rounded-[12px] text-center h-full"
                >
                  <div className="bg-zinc-900 rounded-[12px] p-8 h-full flex items-center justify-center">
                    {f.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="font-normal text-lg md:text-2xl leading-[150%] text-ring">
          And we&apos;re doing it by selling a digital product—not asking for
          blind support.
        </p>
      </div>
    </div>
  );
};

export default WhyWeBuildIt;
