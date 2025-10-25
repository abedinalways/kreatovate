import MessageForm from '@/components/shared/message-form/MessageForm';
import SectionHead from '@/components/shared/SectionHead';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className="relative py-40">
      {/* ✅ Background Image Layer */}
      <Image
        src="/images/Contact.png"
        alt="contact background"
        fill
       className="w-[1600px] h-[438px] object-cover"
      />

      {/* ✅ Content Layer */}
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center relative z-10 px-4">
        {/* Left Section */}
        <div className="flex flex-col justify-start gap-6">
          <div className="w-fit">
            <SectionHead title="Contact Us" />
          </div>

          <h1 className="mt-3 text-[42px] md:text-[57px] font-jakarta font-bold max-w-2xl leading-tight">
            Book an appointment <br />
            For <span className="text-gradient">Expert Guidance</span>
          </h1>

          <p className="mt-3 md:mt-4 font-roboto text-sm md:text-md max-w-xl text-gray-200 banner-subtext">
            Ready to elevate your business? Contact Kreatovate today to schedule
            a consultation and discover.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
