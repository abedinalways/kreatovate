
import MessageForm from '@/components/shared/message-form/MessageForm';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className="custom-container justify-center grid grid-cols-1 md:grid-cols-2  items-center py-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Contact-bg.png"
          alt="contact background"
          width={1000}
          height={1000}
          className="w-400 h-200 object-cover object-center opacity-80"
        />
      </div>
      {/* 1st section */}
      <div className="flex flex-col justify-start z-10 gap-6">
        <div className=" bg-white/10 backdrop-blur-md py-2 px-4 md:px-8 rounded-full w-fit  gap-3">
          {/* Left line */}
          <Image
            src="/images/hrline1.png"
            alt="decorative line left"
            width={50}
            height={10}
            className="w-16 h-[2px] object-contain"
          />

          {/* Center text */}
          <p className="font-roboto text-xs md:text-sm lg:text-base font-light text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 uppercase tracking-wider">
            Contact Us
          </p>

          {/* Right line (mirrored) */}
          <Image
            src="/images/hrline1.png"
            alt="decorative line right"
            width={50}
            height={10}
            className="w-16 h-[2px] object-contain scale-x-[-1]"
          />
        </div>

        <h1 className="mt-3 text-xl sm:text-2xl md:text-3xl font-jakarta font-bold max-w-2xl ">
          Book an appointment <br />
          For
          <span className="text-gradient"> Expert Guidance</span>
        </h1>

        <p className="mt-3 md:mt-4 font-roboto text-xs md:text-md max-w-xl banner-subtext">
          Ready to elevate your business? Contact Kreatovate today to schedule a{' '}
          <br />
          consultation and discover.
        </p>
      </div>

      {/* 2nd section */}

      <div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Contact;