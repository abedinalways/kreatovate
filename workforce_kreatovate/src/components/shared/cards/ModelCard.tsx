import Image from 'next/image';
import StatIcon from '../icons/statIcon';
import ElipseIcon from '../icons/ElipseIcon';

const borderColorMap: Record<string, string> = {
  'purple-500': 'border-[#4E30FE]',
  'red-500': 'border-red-500',
};

const ModelCard = () => {
  const existTo = [
    {
      id: 1,
      icon: '/images/image002.png',
      title: 'Autonomous',
      desc: 'Self-running systems that operate without constant human intervention.',
      iconBorder: 'purple-500',
    },
    {
      id: 2,
      icon: '/images/image004.png',
      title: 'Digital',
      desc: 'Cloud-native infrastructure built for scale and reliability',
      iconBorder: 'red-500',
    },
    {
      id: 3,
      icon: '/images/image001.png',
      title: 'Operation',
      desc: 'Seamless execution across all organizational processes',
      iconBorder: 'purple-500',
    },
    {
      id: 4,
      icon: '/images/image005.png',
      title: 'Neural',
      desc: 'Adaptive learning that evolves with your business needs',
      iconBorder: 'red-500',
    },
    {
      id: 5,
      icon: '/images/image003.png',
      title: 'Intelligence',
      desc: 'Data-driven decision making powered by advanced analytics',
      iconBorder: 'purple-500',
    },
  ];

  return (
    <div className="relative overflow-hidden font-jakarta" id="our_solutions">
      <div className="absolute top-2 left-3  ">
        <ElipseIcon className="w-140 h-140 rounded-full" />
      </div>

      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24">
        <div className="flex flex-col gap-12 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">
            {existTo.map(exist => (
              <div
                key={exist.id}
                className="bg-linear-to-l from-[#3700ff] to-[#e21717] p-px rounded-[16px] h-[228px] w-[244px]"
              >
                <div className="bg-black p-6 rounded-[16px] h-full w-full">
                  <div
                    className={`p-2 rounded-md w-fit mb-8 border-2 ${
                      borderColorMap[exist.iconBorder]
                    }`}
                  >
                    <Image
                      src={exist.icon}
                      alt={exist.title}
                      width={28}
                      height={28}
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <h1 className="font-semibold text-lg md:text-xl leading-[150%]">
                      {exist.title}
                    </h1>

                    <p className="font-normal text-xs leading-[180%] text-ring">
                      {exist.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-3  ">
        <ElipseIcon className="w-140 h-140 rounded-full" />
      </div>
    </div>
  );
};

export default ModelCard;
