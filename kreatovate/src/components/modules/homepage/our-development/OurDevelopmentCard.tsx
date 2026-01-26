import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface DevelopmentItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
  btnName?: string;
}

export interface Props {
  data: DevelopmentItem;
}

const OurDevelopmentCard = ({ data }: Props) => {
  return (
    <div className="p-px rounded-[10px] bg-gradient-to-r from-[#E93D3D] to-[#4E30FE] last:col-span-2">
      <div className="rounded-[10px] w-full h-full bg-[#0F1016] text-white overflow-hidden">
        <div className="relative flex flex-col items-center gap-5 p-6 h-full">
          {/* background lights */}
          <Image
            src="/images/service-light-1.png"
            alt="service light 1"
            width={400}
            height={400}
            className="absolute top-0 left-0 opacity-40 pointer-events-none select-none"
          />
          <Image
            src="/images/service-light-2.png"
            alt="service light 2"
            width={400}
            height={400}
            className="absolute top-0 right-0 opacity-40 pointer-events-none select-none"
          />

          {/* main image */}
          {/* <Image
            src={data.image}
            alt={data.title}
            width={250}
            height={250}
            className="z-20 object-contain"
          /> */}

          {/* text section */}
          <div className="z-20 flex flex-col gap-4 text-center flex-1 w-full">
            <div>
              <h1 className="text-lg lg:text-2xl font-semibold text-white">
                {data.title}
              </h1>

              <p className="text-xs md:text-sm text-[#A5A5AB] mt-2">
                {data.desc}
              </p>
            </div>

            {/* button always bottom */}
            <div className="mt-auto p-px rounded-[10px] bg-gradient-to-r from-[#E93D3D] to-[#4E30FE]">
              <Button
                asChild
                variant="ghost"
                className="w-full rounded-[10px] bg-black hover:bg-black/90 text-white hover:text-white py-3 text-lg font-medium"
              >
                <Link
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center"
                >
                  {data?.btnName}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDevelopmentCard;
