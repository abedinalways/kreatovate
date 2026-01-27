
import Image from 'next/image';
import StatIcon from '../icons/statIcon';

const OperatingCard = () => {
  const existTo = [
    {
      id: 1,
      icon: '/images/icon.png',
      title: 'OKRs Dashboard',
      desc: 'Set objectives and track key results across your entire organization in real-time.',
    },
    {
      id: 2,
      icon: '/images/icon.png',
      title: 'OKRs Dashboard',
      desc: 'Set objectives and track key results across your entire organization in real-time.',
    },
    {
      id: 3,
      icon: '/images/icon.png',
      title: 'OKRs Dashboard',
      desc: 'Set objectives and track key results across your entire organization in real-time.',
    },
  ];

 

  return (
    <div className="relative overflow-hidden font-jakarta" id="our_solutions">
      <Image
        src="/images/ellipse2.svg"
        alt="bg-image"
        width={1446}
        height={998}
        className="absolute -bottom-72 left-1/2 -translate-x-1/2 z-0 object-cover"
      />
      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24">
        <div className="flex flex-col gap-12 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {existTo?.map(exist => (
              <div
                key={exist.id}
                className="bg-linear-to-l from-[#3700ff] to-[#e21717] p-px rounded-[20px]"
              >
                <div className="bg-black p-6 rounded-[20px]">
                  <div className="p-3.5 rounded-full w-fit mb-8 bg-white">
                    <Image
                      src={exist.icon}
                      alt="sca"
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <h1 className="font-semibold text-lg md:text-2xl leading-[150%]">
                      {exist.title}
                    </h1>

                    <p className="font-normal text-xs md:text-sm leading-[180%] text-ring">
                      {exist.desc}
                    </p>
                    <p className='flex gap-2 items-center'>
                      <StatIcon />{' '}
                      <span className="text-[#e93d3d] font-[arimo] text-[14px] leading-[143%] font-bold">
                        3x faster goal alignment
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingCard;
