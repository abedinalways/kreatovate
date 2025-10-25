import ButtonTwo from "@/components/shared/buttons/ButtonTwo";
import SectionHead from "@/components/shared/SectionHead";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-180 lg:h-screen w-full">
      <div className="absolute w-full h-full z-10">
        <Image
          src="/images/banner-ellipse-top.png"
          alt="banner circle 1"
          width={604}
          height={584}
          className="absolute top-0 left-0 z-20"
        />

        <Image
          src="/images/banner-ellipse-bottom.png"
          alt="banner circle 2"
          width={1258}
          height={1205}
          className="absolute bottom-0 left-0 z-20"
        />

        <Image
          src="/images/banner-bg.png"
          alt="main banner image"
          width={835}
          height={750}
          className="absolute right-0 top-1/2 -translate-y-[50%] aspect-147/130 z-10 blur-xs xl:blur-none opacity-50 lg:opacity-15"
        />
      </div>
      <div className="custom-container w-full h-full flex flex-col items-start justify-center gap-4 md:gap-16 z-50 px-2 md:px-6">
        <div className="flex flex-col items-start gap-7 z-50">
          <div className="w-fit">
            <SectionHead title="Top consulting platform" />
          </div>
          <h1 className="text-2xl md:text-5xl lg:text-[3.5rem] font-bold leading-7 md:leading-12 lg:leading-16">
            KREATOVATE <br />
            Marketing & Consulting
          </h1>
          <p className="text-sm md:text-base leading-7 font-roboto font-normal">
            A Kindred Interests, Inc. Company Leveraging Blockchain, A.I. &
            Green Technologies so you, <br />
            your family and businesses can enjoy peace of mind.
          </p>
        </div>
        <div className="w-fit z-50">
          <ButtonTwo btnText="Get Started Today " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
