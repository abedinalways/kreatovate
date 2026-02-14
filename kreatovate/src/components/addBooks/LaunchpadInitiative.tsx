
import Image from 'next/image';

import ButtonIn from '../shared/buttons/ButtonIn';

const LaunchpadInitiatives = () => {
  return (
    <div className="relative overflow-hidden font-jakarta" id="our_initiatives">
      <Image
        src="/images/books/ellipse.png"
        alt="bg light"
        width={1446}
        height={998}
        className="absolute z-0 left-1/2 -translate-x-1/2 -bottom-1/2 object-cover pointer-events-none"
      />
      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24 flex flex-col items-center">
        {/* <div className="w-fit mb-2">
          <SiteBadge title="our Initiatives" />
        </div> */}
        {/* 
        <h1 className="font-bold text-2xl md:text-5xl leading-[120%] mb-4">
          Launchpad <span className="text-gradient-special">Initiatives</span>
        </h1> */}

        {/* <p className="font-medium text-lg leading-[180%] text-ring mb-12 max-w-154 text-center">
          The NextGen 4 - Book Bundle is more than a collection of books - ifr a
          blueprint for where business, automation, and ownership are heading
          next.
        </p> */}

        <div className="bg-white/20 p-2 md:p-8 rounded-[12px] flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/books/img.png"
                alt="book image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-medium text-lg leading-[180%] text-gradient-special mb-2">
              Launchpad Initiatives
            </p>
            <h1 className="font-semibold text-xl md:text-[32px] leading-[130%] mb-4">
              NextGen 4 - Book Bundle Sale
            </h1>
            <p className="font-medium text-base md:text-lg leading-[180%] text-[#e9e9ea] mb-6">
              This bundle brings together four foundational works designed to
              help entrepreneurs, operators, and builders understand how AI,
              automation, and digital systems are reshaping how companies are
              built, scaled, and funded. Each book delivers practical insight,
              future-focused strategy, and real-world context you can apply
              immediately.
            </p>

            <div className="w-fit">
              <ButtonIn
                btnText="Purchase Now"
                isIcon={false}
                target="_blank"
                className="  text-center"
                link="https://launchpad.kreatovate.com/dashboard/our-books"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadInitiatives;
