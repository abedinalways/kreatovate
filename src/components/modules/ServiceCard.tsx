import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <div className="rounded-xl">
      <div className="bg-black h-full relative flex flex-col items-center gap-5 p-6 rounded-xl">
        <Image
          src="/images/service-light-1.png"
          alt="service light 1"
          width={400}
          height={400}
          className="absolute top-0 left-0 z-10 rounded-tl-xl"
        />
        <Image
          src="/images/service-light-2.png"
          alt="service light 2"
          width={400}
          height={400}
          className="absolute top-0 right-0 z-10 rounded-tr-xl"
        />
        <Image
          src="/images/service1.png"
          alt="service image"
          width={250}
          height={250}
          className="z-20"
        />

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">
            Comprehensive A.I Powered <br /> Digital Marketing Solutions
          </h1>
          <p className="text-sm text-gray-600">
            A.I. Powered Digital Marketing Solutions: Enhance your online
            presence through A.I. Powered Automation with a full suite of A.I.
            Employees at your...
          </p>

          <Button
            asChild
            variant="outline"
            className="w-full py-3 text-lg font-medium border border-gray-600 bg-transparent hover:bg-white/10"
          >
            <Link href="/" aria-label="Learn more about this service">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
