'use client';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ConsultationForm } from '../shared/consultationForm/consultationForm';
import { Calendar } from '../ui/calendar';

interface ConsultationFormData {
  name?: string;
  email?: string;
  message?: string;
  [key: string]: string | undefined;
}

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [selectedZone] = React.useState('CET');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

  // Form submission handler
  const handleFormSubmit = async (formData: ConsultationFormData) => {
    const payload = {
      ...formData,
      selectedDates: selectedDates.map(d => d.toISOString()),
      timeZone: selectedZone,
    };

    console.log('Submitting combined data:', payload);

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to submit form');

      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <div className="bg-[#0F1016]" id="contact_us">
      <div className="md:flex gap-30 md:py-[100px] custom-container px-4 sm:px-36 md:px-5 justify-center items-start pb-20">
        {/* Left side: Form */}
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
            onSubmit={handleFormSubmit}
          />
        </div>

        {/* Right side: Calendar */}
        <div className="text-white about-text md:pl-10 mt-10 md:mt-0">
          <p className="text-gray-200 text-end mb-4">
            Get a free consultation and discover how we can <br />
            optimize your operations
          </p>
          <h2 className="text-xl font-bold text-center my-10">
            Let’s Talk – Pick a Time That <br /> Works for You
          </h2>

          {/* Calendar component */}
          <Calendar onDatesChange={setSelectedDates} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
