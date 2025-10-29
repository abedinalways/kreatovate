"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionHead from "@/components/shared/SectionHead";
import MessageForm from "@/components/shared/message-form/MessageForm";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".js-contact-intro", {
        opacity: 0,
        y: 18,
        scale: 0.98,
        filter: "blur(6px)",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.from(".js-col-left", {
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".js-col-left",
          start: "top 80%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".js-col-right", {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".js-col-right",
          start: "top 85%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="contact_us"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-[lightgray]/10"
    >
      <Image
        src="/images/contact2.jpg"
        alt="contact background"
        fill
        className="w-screen h-[438px] object-cover object-center mix-blend-luminosity opacity-25"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center relative z-10 px-4">
        {/* Left Section */}
        <div className="js-col-left flex flex-col justify-start gap-6">
          <div className="w-fit js-contact-intro">
            <SectionHead title="Contact Us" />
          </div>

          <h1 className="js-contact-intro mt-3 text-[42px] md:text-[57px] font-jakarta font-bold max-w-2xl leading-tight">
            Book an appointment <br />
            For <span className="text-gradient">Expert Guidance</span>
          </h1>

          <p className="js-contact-intro mt-3 md:mt-4 font-roboto text-sm md:text-md max-w-xl text-gray-200 banner-subtext">
            Ready to elevate your business? Contact Kreatovate today to schedule
            a consultation and discover.
          </p>
        </div>

        {/* Right Section */}
        <div className="js-col-right">
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
