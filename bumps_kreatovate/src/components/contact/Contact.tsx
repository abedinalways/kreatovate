/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useLayoutEffect, useState } from "react";
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
  selectedDates?: string[];
  timeZone?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [selectedZone, setSelectedZone] = useState("America/New_York");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  /**
   * Convert selected dates to appointment times
   * Default duration: 1 hour per appointment
   */
  const prepareAppointments = (
    dates: Date[],
    timeZone: string,
    durationMinutes: number = 60
  ) => {
    return dates.map((date) => {
      const startTime = new Date(date);
      const endTime = new Date(
        startTime.getTime() + durationMinutes * 60 * 1000
      );

      // Format as ISO string (GHL accepts standard ISO format)
      return {
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        timezone: timeZone,
      };
    });
  };

  /**
   * Get service label from service value
   */
  const getServiceLabel = (serviceValue?: string): string => {
    const serviceMap: Record<string, string> = {
      "digital-marketing": "Digital Marketing",
      seo: "SEO Services",
      "social-media": "Social Media Marketing",
      "content-creation": "Content Creation",
      "web-development": "Web Development",
      consulting: "Business Consulting",
    };
    return serviceMap[serviceValue || ""] || serviceValue || "Consultation";
  };

  const handleFormSubmit = async (formData: ConsultationFormData) => {
    try {
      // Prepare appointments from selected dates
      const appointments =
        selectedDates.length > 0
          ? prepareAppointments(selectedDates, selectedZone)
          : [];

      // Prepare payload for GHL API
      const payload = {
        locationId: process.env.NEXT_PUBLIC_GHL_LOCATION_ID,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        companyName: formData.company,
        source: "Website - Consultation Form",
        tags: ["Consultation Request", getServiceLabel(formData.service)],
        customFields: [
          { key: "service_interest", field_value: formData.service || "" },
          { key: "message", field_value: formData.message || "" },
          {
            key: "selected_dates",
            field_value: selectedDates.map((d) => d.toISOString()).join(", "),
          },
          { key: "time_zone", field_value: selectedZone },
        ],
        appointments: appointments,
      };

      // Submit to API
      const res = await fetch("/api/ghl/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to submit consultation");
      }

      // Show success message
      const appointmentCount =
        result.appointments?.filter((a: any) => a.success).length || 0;
      const errorCount =
        result.appointments?.filter((a: any) => a.error).length || 0;

      let message = "Form submitted successfully! ";

      if (appointmentCount > 0) {
        message += `${appointmentCount} appointment(s) have been scheduled. We'll send you a confirmation email shortly.`;
      } else if (errorCount > 0) {
        message +=
          "We received your request but there was an issue scheduling the appointment. We'll contact you to confirm the schedule.";
      } else {
        message += "We'll contact you to confirm the schedule.";
      }

      alert(message);

      // Reset form
      setSelectedDates([]);
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    }
  };

  const handleDatesChange = (dates: Date[]) => {
    setSelectedDates(dates);
  };

  const handleTimeZoneChange = (zone: string) => {
    setSelectedZone(zone);
  };

  return (
    <div className="bg-[#0F1016]" id="contact_us">
      <div className="md:flex gap-30 md:py-[100px] custom-container px-4 sm:px-36 md:px-5 justify-center items-start pb-20">
        {/* Left side: Form */}
        <div className="flex flex-col gap-2 items-start about-image">
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

        {/* Right side: Calendar */}
        <div className="text-white about-text md:pl-10 mt-10 md:mt-0">
          <p className="text-gray-200 text-end mb-4">
            Get a free consultation and discover how we can <br />
            optimize your operations
          </p>
          <h2 className="text-xl font-bold text-center my-10">
            Let's Talk – Pick a Time That <br /> Works for You
          </h2>

          <Calendar
            onDatesChange={handleDatesChange}
            onTimeZoneChange={handleTimeZoneChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
