/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ConsultationForm } from "../shared/consultationForm/consultationForm";
import { Calendar } from "../ui/calendar";

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

const Contact = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [selectedZone, setSelectedZone] = useState("America/New_York");
  const [selectedSlot, setSelectedSlot] = useState<{
    start: string;
    end: string;
  } | null>(null);

  // Scope GSAP animations to this section only
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Convert selected dates + slot to appointment objects
  const prepareAppointments = (
    dates: Date[],
    timeZone: string,
    slot: { start: string; end: string }
  ) => {
    return dates.map((date) => {
      const [sHour] = slot.start.split(":").map(Number);
      const [eHour] = slot.end.split(":").map(Number);

      const start = new Date(date);
      start.setHours(sHour, 0, 0, 0);

      const end = new Date(date);
      end.setHours(eHour, 0, 0, 0);

      // GHL needs “YYYY-MM-DD HH:mm”
      const format = (d: Date) =>
        d
          .toLocaleString("sv-SE", {
            timeZone,
            hour12: false,
          })
          .replace("T", " ")
          .slice(0, 16);

      return {
        startTime: format(start),
        endTime: format(end),
        timezone: timeZone,
      };
    });
  };

  const getServiceLabel = (val?: string) => {
    const map: any = {
      "digital-marketing": "Digital Marketing",
      seo: "SEO Services",
      "social-media": "Social Media Marketing",
      "content-creation": "Content Creation",
      "web-development": "Web Development",
      consulting: "Business Consulting",
    };
    return map[val || ""] || "Consultation";
  };

  // FORM SUBMISSION
  const handleFormSubmit = async (data: ConsultationFormData) => {
    if (selectedDates.length === 0) {
      alert("Please select at least one date.");
      return false;
    }

    if (!selectedSlot) {
      alert("Please select a time slot.");
      return false;
    }

    const appointments = prepareAppointments(
      selectedDates,
      selectedZone,
      selectedSlot
    );

    const payload = {
      ...data,
      locationId: process.env.NEXT_PUBLIC_GHL_LOCATION_ID,
      source: "Website - Consultation Form",
      tags: ["Consultation Request", getServiceLabel(data.service)],
      customFields: [
        { key: "service", field_value: data.service || "" },
        { key: "message", field_value: data.message || "" },
        {
          key: "dates_selected",
          field_value: selectedDates.map((d) => d.toISOString()).join(", "),
        },
        { key: "timezone", field_value: selectedZone },
      ],
      appointments,
    };

    const res = await fetch("/api/ghl/book-consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log(result)
    if (!res.ok || result.error) {
      const msg = result.message?.toLowerCase() || "";

      if (msg.includes("slot") && msg.includes("available")) {
        alert(
          "❌ This time slot is no longer available. Please choose a different time."
        );
      } else {
        alert("❌ Error: " + result.message);
      }

      return false; // prevent form reset
    }
    console.log("resss", result);
    alert("🎉 Appointment booked successfully!");

    // Reset ONLY after success
    setSelectedDates([]);
    setSelectedSlot(null);
    return true;
  };

  return (
    <div className="bg-[#0F1016]" id="contact_us" ref={sectionRef}>
      <div className="md:flex gap-30 md:py-[100px] custom-container px-4 sm:px-36 md:px-5 justify-center items-start pb-20">
        {/* LEFT SIDE FORM */}
        <div className="flex flex-col gap-2 items-start" data-animate="image">
          <p className="text-gradient">[ Book an appointment ]</p>
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Ready to Transform <br /> Your{" "}
            <span className="text-gradient">Business</span>?
          </h2>

          <ConsultationForm
            title="Schedule Your Free Consultation"
            subtitle="We'd love to hear from you"
            buttonText="Book A Consultation"
            showButtonIcon={false}
            onSubmit={handleFormSubmit}
            selectedDates={selectedDates}
            selectedZone={selectedZone}
          />
        </div>

        {/* RIGHT SIDE CALENDAR */}
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
            onDatesChange={setSelectedDates}
            onTimeZoneChange={setSelectedZone}
            onTimeSlotChange={setSelectedSlot}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
