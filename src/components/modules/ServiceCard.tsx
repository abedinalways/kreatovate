import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
}

const ServiceCard = ({ title, desc, image, href }: ServiceItem) => {
  return (
    <div className="p-[1px] rounded-xl bg-gradient-to-r from-[#E93D3D] to-[#4E30FE]">
      <div className="rounded-[10px]">
        <div className="bg-black h-full relative flex flex-col items-center gap-5 p-6 rounded-xl">
          <Image
            src="/images/service-light-1.png"
            alt="service light 1"
            width={400}
            height={400}
            className="absolute top-0 left-0 z-10 rounded-tl-xl pointer-events-none select-none"
          />
          <Image
            src="/images/service-light-2.png"
            alt="service light 2"
            width={400}
            height={400}
            className="absolute top-0 right-0 z-10 rounded-tr-xl pointer-events-none select-none"
          />
          <Image
            src={image}
            alt="service image"
            width={250}
            height={250}
            className="z-20"
          />

          <div className="w-full flex flex-col gap-4 relative z-20">
            <h1 className="text-lg lg:text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-600">{desc}...</p>

            <div className="p-[1px] rounded-[10px] bg-gradient-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
              <Button
                asChild
                variant="ghost"
                className="w-full rounded-[10px] bg-black hover:bg-black/90 text-white hover:text-white py-3 text-lg font-medium"
              >
                <Link href={href} className="block w-full text-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
