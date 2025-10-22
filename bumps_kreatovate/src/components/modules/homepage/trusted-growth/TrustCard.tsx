import ButtonOne from "@/components/shared/buttons/ButtonOne";
import Image from "next/image";

const TrustCard = () => {
  return (
    <div className="relative w-full rounded-xl p-px bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
      {/* inner dark box */}
      <div className="relative bg-black rounded-xl p-8 flex flex-col gap-4 items-center overflow-hidden">
        {/* decorative lights */}
        <Image
          src="/images/service-light-1.png"
          alt="service light 1"
          width={400}
          height={400}
          className="absolute top-0 left-0 rounded-tl-xl opacity-60 pointer-events-none select-none"
        />
        <Image
          src="/images/service-light-2.png"
          alt="service light 2"
          width={400}
          height={400}
          className="absolute top-0 right-0 rounded-tr-xl opacity-60 pointer-events-none select-none"
        />

        {/* main content */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Image
            src="/images/tg1.png"
            alt="book 1"
            width={222}
            height={186}
            className="w-full h-full"
          />

          <div className="flex flex-col items-start gap-3 text-center md:text-left">
            <h1 className="font-jakarta font-semibold text-2xl">
              5TH INDUSTRIAL REVOLUTION
            </h1>
            <p className="font-roboto text-base font-normal text-ring">
              A practical playbook that shows step-by-step how to grow with AI.
              Templates, examples, and checklists you can use right away.
            </p>
            <div className="w-full">
              <ButtonOne btnText="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCard;
