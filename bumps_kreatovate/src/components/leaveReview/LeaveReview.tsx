import Image from "next/image";
import { Button } from "../ui/button";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";

const LeaveReview = () => {
  return (
    <div className="space-y-6 px-4 sm:px-6 pt-8 pb-12">
      <div className="flex items-center justify-center bg-white/10 rounded-full mx-auto border border-gray-400 w-fit px-3 sm:px-6 py-1 sm:py-2">
        <Image
          src="/images/hrline1.png"
          alt="heading line vector 1"
          width={60}
          height={16}
          className="hidden sm:block"
        />

        <p className="font-roboto text-[10px] sm:text-xs mx-2 text-center font-bold text-gradient-special uppercase tracking-wider">
          community feedback
        </p>

        <Image
          src="/images/hrline1.png"
          alt="heading line vector 2"
          width={60}
          height={16}
          className="hidden sm:block scale-x-[-1]"
        />
      </div>

      <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold capitalize leading-tight max-w-3xl">
          loved working with{" "}
          <span className="text-color-gradient">kreatovate</span>?
        </h1>

        <p className="text-xs sm:text-sm md:text-base font-normal text-gray-400 max-w-xl">
          Your feedback helps us grow and helps others make confident decisions.
        </p>

        <div className="flex flex-col items-center gap-3">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://g.page/r/Cah1w2c3nXEJEBI/review"
          >
            <div className="p-px bg-linear-to-r from-blue-500 to-red-500 rounded-md">
              <Button className="capitalize bg-black text-sm sm:text-base md:text-lg flex items-center gap-2 py-4 sm:py-5 md:py-6 px-6 sm:px-8 hover:bg-black transition cursor-pointer">
                <BsStarFill className="text-base sm:text-lg" />
                <span>leave a review</span>
              </Button>
            </div>
          </Link>

          <p className="text-xs sm:text-sm font-normal text-gray-400">
            Takes less than a minute. We truly appreciate it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaveReview;
