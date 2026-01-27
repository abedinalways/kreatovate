import Image from 'next/image';
import StatIcon from '../icons/statIcon';
import RobotIcon from '../icons/RobotIcon';
import { CircleCheck, Clock10Icon } from 'lucide-react';
import StarIcon from '../icons/StarIcon';

const WorkforceCard = () => {
  const existTo = [
    {
      id: 1,
      icon: '/images/img001.png',
      title: 'Data Analyst',
      desc: 'Processes 10K+ records/hour',
      summary: '95% accuracy',
    },
    {
      id: 2,
      icon: '/images/img002.png',
      title: 'Customer Support',
      desc: 'Handles 500+ queries/day',
      summary: '24/7 availability',
    },
    {
      id: 3,
      icon: '/images/img003.png',
      title: 'Operations Manager',
      desc: 'Automates 200+ workflows',
      summary: '99.9% uptime',
    },
  ];

  return (
    <div className="relative overflow-hidden font-jakarta" >
      <Image
        src="/images/ellipse2.svg"
        alt="bg image"
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
                  <div className="p-px rounded-md w-fit mb-8 gradient-btn">
                    <div className="bg-black rounded-md p-3.5 w-fit">
                      <Image
                        src={exist.icon}
                        alt="sca"
                        width={36}
                        height={36}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h1 className="font-semibold text-lg md:text-2xl leading-[150%] flex items-center gap-2">
                      <RobotIcon /> {exist.title}
                    </h1>

                    <p className="font-normal text-xs md:text-sm leading-[180%] text-ring flex gap-2 items-center">
                      <Clock10Icon size={16} /> {exist.desc}
                    </p>
                    <hr />
                    <p className="flex gap-2 items-center">
                      <CircleCheck size={16} />{' '}
                      <span className="text-[#e93d3d] font-[arimo] text-[14px] leading-[143%] font-bold">
                        {exist.summary}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4  border-l-4 border-red-500 rounded-[14px] my-10 p-6">
          <div>
            <StarIcon />
          </div>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-2xl font-bold leading-[133%]">
              The Future of Work is Collaborative
            </h2>
            <p className="text-md leading-[140%] font-normal text-[#cacaca]">
              Your team focuses on strategy and innovation while AI handles the
              repetitive, time-consuming tasks. Experience exponential
              productivity without burning out your workforce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceCard;
