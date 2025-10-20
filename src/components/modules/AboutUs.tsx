import Image from "next/image";
import ButtonAll from "../shared/ButtonAll";
import HeadingButton from "../shared/HeadingButton";

const AboutUs = () => {
  return (
    <div
      id="about_us"
      className="text-white px-4 sm:px-36 md:px-36 pt-28 mx-auto relative isolate"
    >
      <div className="py-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/about_us.png"
              alt="about us image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <HeadingButton btnText="about us" />
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-semibold max-w-2xl">
            Explore Our Tailored{" "}
            <span className="text-color-gradient">Marketing</span> & Consulting{" "}
            <span className="text-color-gradient">Solutions</span>
          </h1>
          <p className="text-base leading-relaxed font-normal">
            Discover high-impact A.I. Powered marketing solutions that elevate
            your brand and drive substantial growth. Our personalized services,
            quick software deployment time and cater uniquely to your strategic
            and operational needs.
          </p>

          <ButtonAll btnText="Start Your Success Journey!" />
        </div>
      </div>
      <Image
        src="/images/aboutus-elips.png"
        alt="background shadow"
        width={900}
        height={900}
        className="object-cover absolute bottom-0 right-0"
      />
    </div>
  );
};

export default AboutUs;
