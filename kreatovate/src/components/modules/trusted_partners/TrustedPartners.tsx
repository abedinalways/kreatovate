import ButtonOne from '@/components/shared/buttons/ButtonOne';
import Image from 'next/image';
import React from 'react';

const TrustedPartners = () => {
  return (
    <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12">
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-3xl md:text-5xl font-bold ">
          Your Trusted <span className='text-color-gradient'>Partners</span>
        </h2>
        <p className="text-gray-200 text-sm">
          We leverage our partnerships to cover what we can’t in house. The
          rapport <br />we have built with our relationships is everything to us,
          which only adds to <br /> our family like working relationship. If there is a
          need to bring your <br />company into the digital age, we are your ultimate
          transition team. We have <br />many solutions to ensure you and your
          businesses flourish just as you <br /> have envisioned it.
        </p>
        <div className="w-33">
          <ButtonOne btnText="Contact Us" />
        </div>
      </div>
      <div>
        <Image
          src="/images/partners.png"
          alt="Partners"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default TrustedPartners;