'use client';
import React from 'react';
import { ConsultationForm } from '../consultation form/ConsultationForm';
import { Calendar } from '../ui/calendar';
const ConatctPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="md:flex gap-10 py-8">
      <div className="flex flex-col gap-2 items-start">
        <p className="text-gradient">[ Book an appointment ]</p>
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Ready to Transform <br /> Your{' '}
          <span className="text-gradient">Business</span>?
        </h2>

        <ConsultationForm
          title="Get in Touch"
          subtitle="We'd love to hear from you"
          buttonText="Book A Consultation"
          showButtonIcon={false}
        />
      </div>
      {/* date picker */}
      <div className="text-white">
        <p className="text-gray-200 text-end">
          Get a free consultation and discover Wow we can <br />
          optimize your operations
        </p>
        <h2 className="text-xl font-bold text-center">
          Let’s Talk – Pick a Time That <br /> Works for You
        </h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419]  border-purple-500/30"
          captionLayout="dropdown"
        />
      </div>
    </div>
  );
};

export default ConatctPage;