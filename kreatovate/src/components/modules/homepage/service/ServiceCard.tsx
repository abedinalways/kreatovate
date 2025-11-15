import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
}

const ServiceCard = ({ title, desc, image, href }: ServiceItem) => {
  return (
    <div className="svc-card p-px rounded-[10px] bg-linear-to-r from-[#E93D3D] to-[#4E30FE]">
      <div className="rounded-[10px] w-full h-full bg-black overflow-hidden">
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
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
            className="z-20"
          />

          {/* text section */}
          <div className="z-20 flex flex-col gap-4 text-center">
            <h1 className="text-lg lg:text-2xl font-semibold">{title}</h1>
            <p className="text-xs md:text-sm text-[#A5A5AB]">{desc}</p>

            <div className="p-px rounded-[10px] bg-linear-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
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
