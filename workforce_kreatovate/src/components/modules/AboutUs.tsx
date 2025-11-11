"use client";

import Image from "next/image";
import ButtonAll from "../shared/ButtonAll";
import HeadingButton from "../shared/HeadingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../shared/AboutUsAccordion";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image: slide in from left
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

      // Text: slide in from right
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

  return (
    <div id="about_us" className="text-white pt-5  mx-auto relative isolate">
      <div className="py-12 flex flex-col-reverse lg:flex-row  gap-8 lg:gap-20 px-4 md:px-0 custom-container">
        <div className="about-image">
          <div className="relative aspect-[16/15] sm:aspect-[16/10] rounded-2xl overflow-hidden scale-x-[-1] ">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[393px] rounded-2xl object-cover"
            >
              <source src="/videos/about_us1.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <h2 className="md:mt-8 mt-5 text-lg font-[roboto] mb-5">
              Our Workforce Solutions Include:
            </h2>
            <p className="text-sm font-[roboto] text-[#E9E9EA]">
              Our goal is simple — replace repetitive labor with intelligent
              automation, allowing you to scale output without scaling payroll.
              Your business keeps its personality, consistency, and control —
              just with fewer missed calls, faster responses, and smarter
              execution.
            </p>
            <br />
            <p className="text-sm font-[roboto] text-[#E9E9EA]">
              Kreatovate — The home of AI-Powered Business Automation &
              Workforce Solutions.
            </p>
            <h4 className="py-6 text-lg font-[roboto]">
              Your Problems, Our Solutions!
            </h4>
          </div>
          <ButtonAll
            btnText="Try Demo"
            className="text-sm md:text-md py-5 w-44"
          />
        </div>
        <div className="about-text w-full h-full space-y-4">
          <HeadingButton btnText="about us" className="w-33 py-0" />
          <h1 className="text-3xl md:text-4xl font-semibold max-w-2xl leading-[1.2]">
            Power Your Organization <br />
            <span className="text-white"> with </span>{' '}
            <span className="text-gradient"> an Intelligent</span>
            <br />
            <span className="text-gradient">Workforce</span>
          </h1>
          <p className="font-[roboto] text-[#E9E9EA] text-sm md:text-md leading-relaxed ">
            Kreatovate delivers full-stack automation systems and AI-powered
            employees that handle the work most teams struggle to keep up with —
            from lead capture and scheduling to follow-ups, closing, and
            customer support.
          </p>{' '}
          <p className=" font-[roboto] text-[#E9E9EA] text-sm md:text-md leading-relaxed">
            We design, deploy, and maintain turn-key business automation
            ecosystems that integrate seamlessly with your existing tools, CRMs,
            and communication channels.
          </p>
          <div className="w-full h-full md:py-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>AI Employees</AccordionTrigger>
                <AccordionContent className="">
                  <p>
                    AI Employees that manage your marketing, sales, and service
                    pipelines around the clock
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Process Automation</AccordionTrigger>
                <AccordionContent className="">
                  <p>
                    We offer worldwide shipping through trusted courier
                    partners. Standard delivery takes 3-5 business days, while
                    express shipping ensures delivery within 1-2 business days.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Unified Dashboards</AccordionTrigger>
                <AccordionContent className="">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Compliance & Data Security</AccordionTrigger>
                <AccordionContent className="">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Custom Integrations</AccordionTrigger>
                <AccordionContent className="">
                  <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Image
        src="/images/aboutus-elips.png"
        alt="background shadow"
        width={900}
        height={900}
        className="pointer-events-none select-none object-cover absolute bottom-0 right-0 -z-10"
      />
    </div>
  );
};

export default AboutUs;
