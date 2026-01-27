// import BumpsaleButton from "@/components/BumpsaleButton";
import Image from "next/image";

interface TGProps {
  // title: string;
  description: string;
  image: string;
  bumpsaleId?: string;
  price?: string | number;
}

const TrustCard = ({ description, image }: TGProps) => {
  return (
    <div className="relative w-full h-full rounded-xl p-px bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
      <div className="relative bg-black rounded-xl p-8 flex flex-col gap-4 items-center h-full overflow-hidden">
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

        <div className="relative z-10 flex flex-col items-center gap-4 w-full grow">
          <Image
            src={image}
            alt=''
            width={612}
            height={512}
            className="w-full max-w-[331px] object-contain"
          />

          <div className="flex flex-col items-center md:items-start gap-3 w-full grow">
            {/* <h1 className="font-jakarta font-semibold text-sm text-center md:text-left">
              {title}
            </h1> */}

            <p className="font-roboto text-sm font-normal text-ring text-center md:text-left">
              {description}
            </p>

            {/* <div className="w-fit lg:w-full mt-auto">
              <BumpsaleButton />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCard;
