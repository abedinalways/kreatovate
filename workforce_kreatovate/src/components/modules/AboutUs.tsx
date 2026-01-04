"use client";

import Image from "next/image";
import ButtonAll from "../shared/ButtonAll";
import HeadingButton from "../shared/HeadingButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shared/AboutUsAccordion";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const accordionData = [
    {
      value: "item-1",
      title: "AI Employees",
      desc: "On demand AI Employees designed to handle sales, support, marketing, administration, and operations 24/7. Each role is pre-trained, customizable, and seamlessly integrated into your business workflows.",
    },
    {
      value: "item-2",
      title: "Automation Engine",
      desc: "An intelligent automation layer that connects your systems, eliminates manual tasks, and executes workflows behind the scenes routing leads, triggering actions, and scaling operations without additional staff.",
    },
    {
      value: "item-3",
      title: "Workforce Control Center",
      desc: "A unified command center to manage your AI Employees, conversations, pipelines, performance metrics, and activity logs giving you full visibility and control across your entire workforce ecosystem.",
    },
    {
      value: "item-4",
      title: "Compliance First Architecture",
      desc: "Built with compliance and trust at the core secure data handling, consent management, role based access, and industry aligned safeguards to ensure your AI workforce operates responsibly and securely.",
    },
    {
      value: "item-5",
      title: "Enterprise Integrations",
      desc: "Custom integrations that connect your AI workforce to CRMs, telephony providers, marketing platforms, databases, and internal systems engineered to fit your operations, not force you into rigid tools.",
    },
  ];
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
            <span className="text-white"> with </span>{" "}
            <span className="text-gradient"> an Intelligent</span>
            <br />
            <span className="text-gradient">Workforce</span>
          </h1>
          <p className="font-[roboto] text-[#E9E9EA] text-sm md:text-md leading-relaxed ">
            Kreatovate delivers full-stack automation systems and AI-powered
            employees that handle the work most teams struggle to keep up with —
            from lead capture and scheduling to follow-ups, closing, and
            customer support.
          </p>{" "}
          <p className=" font-[roboto] text-[#E9E9EA] text-sm md:text-md leading-relaxed">
            We design, deploy, and maintain turn-key business automation
            ecosystems that integrate seamlessly with your existing tools, CRMs,
            and communication channels.
          </p>
          <div className="w-full h-full md:pb-6">
            <h2 className="md:mt-8 mt-5 text-lg font-[roboto] mb-5">
              Our Workforce Solutions Include:
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {accordionData?.map((data, i) => (
                <AccordionItem key={i} value={data.value}>
                  <AccordionTrigger>{data.title}</AccordionTrigger>
                  <AccordionContent className="">
                    <p>{data.desc}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
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
