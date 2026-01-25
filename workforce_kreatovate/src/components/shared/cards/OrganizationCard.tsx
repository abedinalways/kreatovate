import Image from 'next/image';
import StatIcon from '../icons/statIcon';
import ElipseIcon from '../icons/ElipseIcon';

const borderColorMap: Record<string, string> = {
  'purple-500': 'border-[#4E30FE]',
  'red-500': 'border-red-500',
};

const OrganizationCard = () => {
  const existTo = [
    {
      id: 1,
      icon: '/images/img007.png',
      title: 'Unified Data',
      desc: 'Break down silos and centralize your intelligence',
      
    },
    {
      id: 2,
      icon: '/images/img008.png',
      title: 'Actionable Insights',
      desc: 'Break down silos and centralize your intelligence',
      
    },
    {
      id: 2,
      icon: '/images/img008.png',
      title: 'Scalable Growth',
      desc: 'Build systems that grow with your ambitions',
      
    },
  ];

  return (
    <div className="relative overflow-hidden font-jakarta" id="our_solutions">
      <div className="absolute top-2 left-3  ">
        <ElipseIcon className="w-140 h-140 rounded-full" />
      </div>

      <div className="relative z-10 custom-container px-4 md:px-4 pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-24">
        <div className="flex flex-col gap-12 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {existTo.map(exist => (
              <div
                key={exist.id}
                className="bg-linear-to-l from-[#3700ff] to-[#e21717] p-px rounded-[16px] h-[160px] md:w-[397px]"
              >
                <div className="bg-black p-6 rounded-[16px] h-full w-full">
                  <div
                    className={`p-2 rounded-md w-fit mb-3 mx-auto`}
                  >
                    <Image
                      src={exist.icon}
                      alt={exist.title}
                      width={28}
                      height={28}
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <h1 className="font-semibold text-lg leading-[150%] text-center">
                      {exist.title}
                    </h1>

                    <p className="font-normal text-xs leading-[180%] text-ring text-center">
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

export default OrganizationCard;
