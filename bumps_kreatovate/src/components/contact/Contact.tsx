'use client';
import React, { useLayoutEffect } from 'react';

import { Calendar } from '../ui/calendar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ConsultationForm } from '../shared/consultation form/consultationForm';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image: slide in from left
      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        }
      );

      // Text: slide in from right
      gsap.fromTo(
        '.about-text',
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text',
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="contact_us"
      className="md:flex gap-30 md:py-[100px] custom-container px-4 sm:px-36 md:px-5 justify-center items-center"
    >
      <div className="flex flex-col gap-2 items-start about-image">
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
      <div className="text-white about-text">
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
