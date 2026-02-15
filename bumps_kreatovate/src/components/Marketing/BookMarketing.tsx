import Image from 'next/image';

const BookMarketing = () => {
  return (
    <div className="px-6 py-12 font-jakarta">
      <div className=" md:flex items-center justify-between gap-10">
        <div className=" w-full md:w-1/2 h-full">
          <Image
            src="/images/books/marketing.jpg"
            alt="bg image"
            width={627}
            height={507}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="space-y-4 w-full md:w-1/2 h-full text-center md:text-left">
          <h1 className="font-jakarta font-bold text-4xl  leading-[120%] py-1 text-gradient-special">
            Bump Strategy Explanation:
          </h1>
          <h3 className="text-md font-normal ">
            Round Price Increments:{' '}
            <span className="text-green-400 font-semibold">$1</span>
          </h3>
          <h3 className="text-md font-semibold">
            Max Round Price:{' '}
            <span className="text-green-300 font-semibold">$75</span>{' '}
          </h3>
          <h3 className="text-md font-semibold ">
            Number of Rounds:{' '}
            <span className="text-green-500 font-semibold">TBD</span>{' '}
          </h3>
          <p className="font-roboto text-base leading-[180%] texty-[#E9E9EA] py-2">
            When you purchase our digital books at the price currently shown,
            the next purchase will BUMP the price up by $1. Once we reach $75
            the round ends and the next round starts back @ $1
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookMarketing;
