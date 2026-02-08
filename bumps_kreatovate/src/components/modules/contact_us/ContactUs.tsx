/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Calendar } from '@/components/ui/calendar';
import { ConsultationForm } from '@/components/shared/consultationForm/consultationForm';
import { toast } from 'sonner';

interface ConsultationFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

gsap.registerPlugin(ScrollTrigger);

type Slot = { startTime: string; endTime: string };

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedZone, setSelectedZone] = useState('America/New_York');
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const getServiceLabel = (val?: string) => {
    const map: any = {
      'digital-marketing': 'Digital Marketing',
      seo: 'SEO Services',
      'social-media': 'Social Media Marketing',
      'content-creation': 'Content Creation',
      'web-development': 'Web Development',
      consulting: 'Business Consulting',
    };
    return map[val || ''] || 'Consultation';
  };

  const handleFormSubmit = async (data: ConsultationFormData) => {
    if (!selectedDate) {
      toast('Please select a date.');
      return false;
    }

    if (!selectedSlot?.startTime) {
      toast('Please select an available time slot.');
      return false;
    }

    const payload = {
      ...data,
      source: 'Website - Consultation Form',
      tags: ['Consultation Request', getServiceLabel(data.service)],
      timezone: selectedZone,
      customFields: [
        { key: 'service', field_value: data.service || '' },
        { key: 'message', field_value: data.message || '' },
        { key: 'date_selected', field_value: selectedDate.toISOString() },
        { key: 'timezone', field_value: selectedZone },
      ],
      appointment: {
        startTime: selectedSlot.startTime,
        endTime: selectedSlot.endTime,
      },
    };

    const res = await fetch('/api/book-consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok || result.error) {
      const msg = (result.message || '').toLowerCase();
      if (
        msg.includes('slot') ||
        msg.includes('available') ||
        msg.includes('validation')
      ) {
        toast(
          '❌ This slot is no longer available. Please choose another time.',
        );
      } else {
        toast('❌ Error: ' + (result.message || 'Unknown error'));
      }
      return false;
    }

    toast('Appointment booked successfully!');
    setSelectedDate(null);
    setSelectedSlot(null);
    return true;
  };

  return (
    <div className="bg-[#0F1016]" id="contact_us" ref={sectionRef}>
      <div className="md:flex gap-30 md:py-[100px] custom-container px-4 sm:px-36 md:px-5 justify-center items-start pb-20">
        {/* LEFT */}
        <div className="flex flex-col gap-2 items-start" data-animate="image">
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
            // keep these if your form uses them (optional)
            selectedDates={selectedDate ? [selectedDate] : []}
            selectedZone={selectedZone}
          />
        </div>

        {/* RIGHT */}
        <div
          className="text-white md:pl-10 mt-10 md:mt-0 w-full md:w-auto"
          data-animate="text"
        >
          <p className="text-gray-200 text-end mb-4">
            Get a free consultation and discover how we can <br />
            optimize your operations
          </p>

          <h2 className="text-xl font-bold text-center my-10">
            Let&apos;s Talk – Pick a Time That Works for You
          </h2>

          <Calendar
            onDateChange={setSelectedDate}
            onTimeZoneChange={setSelectedZone}
            onSlotChange={setSelectedSlot}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
