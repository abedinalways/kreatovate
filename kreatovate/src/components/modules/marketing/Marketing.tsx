import Image from 'next/image';
import React from 'react';

const Marketing = () => {
  return (
    <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 mt-20 px-4">
      <div>
        <Image
          src="/images/marketing.png"
          alt="Marketing Image"
          width={600}
          height={500}
        />
      </div>
      <div className="flex flex-col gap-6 ">
        <h2 className="text-3xl md:text-5xl font-bold py-4">
          Business <span className="text-gradient">Marketing &</span> <br />
          <span className="text-red-700">Consulting</span>
        </h2>
        <p className='text-gray-200 text-sm'>
          This is ultimately why we do this, for our fellow business owners and
          entrepreneurs. We know how deeply important optics really are.
          Furthermore, having a strong Brand, a strong online presence and a
          tailored operating productivity oracle/applications is paramount in
          todays business world. It is not ok to utilize right out of the box
          all in one systems, our businesses are too complex and tech driven. If
          it is not, it needs to be, and that’s where we come in!
        </p>
        <div>
          <ul className="grid grid-cols-2 gap-2 text-xs md:text-lg">
            <li className="flex gap-2 items-center">
              {' '}
              <Image
                src="/images/hr-line.png"
                alt="heading line vector 1"
                width={80}
                height={16}
                className="w-[58px] h-[7px]"
              />{' '}
              Build Your Brand
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <Image
                src="/images/hr-line.png"
                alt="heading line vector 1"
                width={40}
                height={10}
                className="w-[58px] h-[7px]"
              />{' '}
              Grow Online Reach
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <Image
                src="/images/hr-line.png"
                alt="heading line vector 1"
                width={80}
                height={16}
                className="w-[58px] h-[7px]"
              />{' '}
              Automate Daily Tasks
            </li>
            <li className="flex gap-2 items-center">
              {' '}
              <Image
                src="/images/hr-line.png"
                alt="heading line vector 1"
                width={58}
                height={7}
                className="w-[58px] h-[7px]"
              />{' '}
              Secure Business Growth
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marketing;