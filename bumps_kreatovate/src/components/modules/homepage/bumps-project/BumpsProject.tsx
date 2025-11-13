import ButtonTwo from "@/components/shared/buttons/ButtonTwo";
import Image from "next/image";

const BumpsProject = () => {
  return (
    <div className="relative overflow-hidden font-jakarta" id='about_us'>
      <div className="flex flex-col-reverse lg:flex-row gap-8 sm:gap-10 lg:gap-14 custom-container px-4 md:px-0 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-12">
        {/* Left column */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          {/* Top image */}
          <div className="relative w-full aspect-16/11 sm:aspect-16/10 md:aspect-5/3 lg:w-156 lg:h-120">
            <Image
              src="/images/bumps-project-1.png"
              alt="section image 1"
              fill
              className="absolute top-0 left-0 object-cover rounded-xl lg:rounded-none"
              sizes="(min-width: 1024px) 624px, 100vw"
            />
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-5 sm:gap-6 font-jakarta">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="font-jakarta text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug lg:leading-14 lg:max-w-xl">
                Get in early before{" "}
                <span className="text-color-gradient">the next bump!</span>
              </h1>

              <p className="text-base sm:text-lg font-normal  leading-7 sm:leading-8 lg:max-w-lg">
                Every purchase raises the price by $1 — until it resets again.
                Round 1 just restarted at $1.00, so your timing couldn’t be
                better.
              </p>

              <p className="text-base sm:text-lg font-normal  leading-7 sm:leading-8 text-ring lg:max-w-2xl">
                You’re locking in your copy at the current bump price — every
                purchase raises it by $1 until reset. Each order includes all 4
                books in the NextGen Education Series.
              </p>

              <p className="text-xs md:text-sm font-semibold leading-7 sm:leading-8">
                Round 1 Reset: $1.00
              </p>
            </div>

            <div className="w-35">
              <ButtonTwo btnText="Buy Now" />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col md:flex-col gap-8 sm:gap-10 lg:gap-12">
          {/* Tagline + Headings */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="w-fit">
              <div className="flex items-center justify-center bg-white/10  md:px-4  rounded-full mx-auto banner-tagline border border-gray-400 px-2">
                <Image
                  src="/images/hrline1.png"
                  alt="heading line vector 1"
                  width={60}
                  height={16}
                />
                <p className="mx-2 font-roboto bg-white/10 text-[10px] text-center py-2 font-bold text-gradient-special  uppercase">
                  HOW IT WORKS
                </p>
                <Image
                  src="/images/hrline1.png"
                  alt="heading line vector 1"
                  width={60}
                  height={16}
                  className="scale-x-[-1]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug lg:leading-14">
                The <span className="text-color-gradient">Bumps Project</span>
              </h1>

              <p className="text-base sm:text-lg font-semibold leading-7 sm:leading-8">
                Reset. Reignite. Rise from $1.
              </p>

              <p className="text-base sm:text-lg font-normal leading-7 sm:leading-8 text-roboto text-ring">
                Welcome to Bumps, our dynamic fundraising model that lets you
                own a piece of progress—one purchase at a time. Each round
                starts at just $1, and with every purchase, the price bumps up
                by $1 until it resets again. Every buyer gets all four books in
                our NextGen Education Series: Cash Flow Legacy, Are You Ready
                for the 4th Industrial Revolution, Welcome to the 5th Industrial
                Revolution, and Own the Grid.
              </p>

              <p className="text-base sm:text-lg font-normal leading-7 sm:leading-8 text-roboto text-ring">
                Bumps isn’t just about books—it’s about belief. Every dollar
                fuels innovation, community projects, and the rise of a smarter,
                self-funding economy.
              </p>

              <p className="text-base sm:text-lg font-normal leading-7 sm:leading-8 text-roboto text-ring">
                Now that{" "}
                <span className="text-white font-semibold">Round 1</span> is
                reset to <span className="text-white font-semibold">$1</span>,
                there’s never been a better time to jump in.
              </p>
            </div>
          </div>

          {/* Bottom image */}
          <div className="relative w-full aspect-16/11 sm:aspect-16/10 md:aspect-5/3 lg:w-156 lg:h-100">
            <Image
              src="/images/bumps-project-2.png"
              alt="section image 2"
              fill
              className="absolute top-0 left-0 object-cover rounded-xl lg:rounded-none"
              sizes="(min-width: 1024px) 624px, 100vw"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src="/images/bump-project-light.png"
          alt="bg light"
          width={513}
          height={208}
        />
      </div>
    </div>
  );
};

export default BumpsProject;
