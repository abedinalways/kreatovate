"use client";
import React from "react";
import { ConsultationForm } from "../shared/consultation form/ConsultationForm";
import { Calendar } from "../ui/calendar";
const Contact = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div
      id="contact_us"
      className="md:flex gap-30 md:py-[100px] custom-container px-4 sm:px-36 md:px-5 justify-center items-center"
    >
      <div className="flex flex-col gap-2 items-start">
        <p className="text-gradient">[ Book an appointment ]</p>
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Ready to Transform <br /> Your{' '}
          <span className="text-gradient">Business</span>?
        </h2>

        <ConsultationForm
          title="Schedule Your Free Consultation"
          subtitle="We'd love to hear from you"
          buttonText="Book A Consultation"
          showButtonIcon={false}
        />
      </div>
      {/* date picker */}
      <div className="text-white">
        <p className="text-gray-200 text-end mt-10 mb-4">
          Get a free consultation and discover Wow we can <br />
          optimize your operations
        </p>
        <h2 className="text-xl font-bold text-center my-10">
          Let’s Talk – Pick a Time That <br /> Works for You
        </h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
        />
      </div>
    </div>
  );
};

export default Contact;
