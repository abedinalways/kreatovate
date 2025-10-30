"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ServiceCard, { ServiceItem } from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServiceTabs = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState("marketing_service");

  const animateGridIn = (value: string) => {
    const grid = rootRef.current?.querySelector(
      `[data-tab="${value}"]`
    ) as HTMLElement | null;
    if (!grid) return;

    // mark visible
    gsap.set(grid, { opacity: 1 });

    // card pop: random order
    const cards = gsap.utils.toArray<HTMLElement>(
      grid.querySelectorAll(".svc-card")
    );
    gsap.set(cards, { opacity: 1 });

    gsap.fromTo(
      cards,
      { y: 18, scale: 0.96, filter: "blur(8px)" },
      {
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
        stagger: { each: 0.06, from: "random" },
      }
    );
  };

  const animatePrevOut = (value: string) => {
    const others = rootRef.current?.querySelectorAll(
      `.service-grid:not([data-tab="${value}"])`
    );
    if (!others) return;

    others.forEach((el) => {
      gsap.to(el, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        ease: "power1.out",
      });
    });
  };

  useLayoutEffect(() => {
    animateGridIn(active);
  }, []);

  const marketingData: ServiceItem[] = [
    {
      id: "m1",
      title: "AI Ad Campaign Orchestration",
      desc: "Multi-channel ads with creative generation, targeting, and budget optimization powered by AI.",
      image: "/images/service1.png",
      href: "/services/ai-ad-orchestration",
    },
    {
      id: "m2",
      title: "SEO + Programmatic Pages",
      desc: "Keyword clustering, internal links, and AI-generated long-tail landing pages at scale.",
      image: "/images/service2.png",
      href: "/services/seo-programmatic",
    },
    {
      id: "m3",
      title: "Content Engine",
      desc: "AI-assisted blog, social, and email calendars with brand voice control.",
      image: "/images/service3.png",
      href: "/services/content-engine",
    },
    {
      id: "m4",
      title: "CRO & Personalization",
      desc: "On-site experiments, copy variants, and AI segments that adapt to user intent.",
      image: "/images/service4.png",
      href: "/services/cro-personalization",
    },
    {
      id: "m5",
      title: "Lead Qualification Bots",
      desc: "Website and WhatsApp agents that qualify leads and book meetings 24/7.",
      image: "/images/service5.png",
      href: "/services/lead-bots",
    },
    {
      id: "m6",
      title: "Analytics & Attribution",
      desc: "Unified dashboard, channel ROI, and LTV models to guide spend.",
      image: "/images/service1.png",
      href: "/services/analytics-attribution",
    },
  ];

  const consultingData: ServiceItem[] = [
    {
      id: "c1",
      title: "Al Workforce Solutions",
      desc: "A.I. Powered Digital Marketing Solutions: Enhance your online presence through A.I. Powered Automation with a full suite of A.I. Employees at your disposal handling administrative tasks like inbound/outbound calling, scheduling, updating records, chatting, and texting just to scratch the service. Of course we also offer the traditional SEO, PPC, content marketing, and social media marketing to effectively connect with your audience.",
      image: "/images/service/service9.png",
      href: "/services/ai-readiness",
    },

    {
      id: "c2",
      title: "Al Powered Sales Force",
      desc: "A.I. Powered Digital Marketing Solutions: Enhance your online presence through A.I. Powered Automation with a full suite of A.I. Employees at your disposal handling administrative tasks like inbound/outbound calling, scheduling, updating records, chatting, and texting just to scratch the service. Of course we also offer the traditional SEO, PPC, content marketing, and social media marketing to effectively connect with your audience.",
      image: "/images/service/service2.png",
      href: "/services/operating-model",
    },
    {
      id: "c3",
      title: "SaaS Implementation",
      desc: "We shape and elevate your brand’s identity with cohesive visuals and strategic positioning to solidify its presence in the competitive market.",
      image: "/images/service/service3.png",
      href: "/services/data-strategy",
    },
    {
      id: "c4",
      title: "Automated Operating Systems & Oracle's",
      desc: "Leverage comprehensive market analysis and innovative analytics tools to uncover key insights, trends, and customer behaviors for informed decision-making and strategic alignment.",
      image: "/images/service/service4.png",
      href: "/services/usecase-prioritization",
    },
    {
      id: "c5",
      title: "Automated Workflows",
      desc: "Leverage expert guidance for optimal business performance and strategic growth with our comprehensive consulting and business strategy services.",
      image: "/images/service/service5.png",
      href: "/services/change-management",
    },
    {
      id: "c6",
      title: "Blockchain Implementation",
      desc: "Transform your business with intelligent automation. Our A.I. SaaS (Software as a Service) solutions handle the complex daily tasks, freeing your team to focus on what truly matters-building relationships and driving strategy.",
      image: "/images/service/service6.png",
      href: "/services/compliance-advisory",
    },
    {
      id: "c7",
      title: "Smart Contract Automation",
      desc: "Leverage comprehensive market analysis and innovative analytics tools to uncover key insights, trends, and customer behaviors for informed decision-making and strategic alignment.",
      image: "/images/service/service7.png",
      href: "/services/compliance-advisory",
    },
    {
      id: "c8",
      title: "Automated Social Content Engine",
      desc: "Leverage expert guidance for optimal business performance and strategic growth with our comprehensive consulting and business strategy services.",
      image: "/images/service/service8.png",
      href: "/services/compliance-advisory",
    },
  ];

  const automationData: ServiceItem[] = [
    {
      id: "a1",
      title: "Customer Support Agent",
      desc: "LLM agent with RAG + actions to resolve tickets and update systems.",
      image: "/images/service3.png",
      href: "/services/support-agent",
    },
    {
      id: "a2",
      title: "Sales Enablement Agent",
      desc: "Prospect research, email drafts, and CRM updates automatically.",
      image: "/images/service4.png",
      href: "/services/sales-agent",
    },
    {
      id: "a3",
      title: "HR Assistant",
      desc: "Candidate screening, onboarding flows, and knowledge answers.",
      image: "/images/service5.png",
      href: "/services/hr-assistant",
    },
    {
      id: "a4",
      title: "Finance Reconciler",
      desc: "Invoice parsing, coding, and exception handling with audit logs.",
      image: "/images/service1.png",
      href: "/services/finance-reconciler",
    },
    {
      id: "a5",
      title: "Ops Workflow Bot",
      desc: "Orchestrate multi-step back-office processes via APIs and webhooks.",
      image: "/images/service2.png",
      href: "/services/ops-bot",
    },
    {
      id: "a6",
      title: "Knowledge Search",
      desc: "Enterprise RAG with connectors, redaction, and secure indexing.",
      image: "/images/service3.png",
      href: "/services/knowledge-search",
    },
  ];

  return (
    <div ref={rootRef} className="w-full">
      <Tabs
        defaultValue="marketing_service"
        className="flex flex-col gap-6"
        onValueChange={(v) => {
          animatePrevOut(v);
          setActive(v);
          setTimeout(() => animateGridIn(v), 40);
        }}
      >
        <TabsList className="px-8 py-10 bg-[#161721] flex items-center justify-between gap-8 w-full overflow-auto overflow-y-hidden">
          <TabsTrigger
            value="marketing_service"
            className="group py-6 px-7 border border-gray-500 flex items-center bg-linear-to-t from-[#FFFFFF00] to-[#777980] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#E93D3D] data-[state=active]:to-[#4E30FE] transition-all duration-300 cursor-pointer"
          >
            <p className="text-lg font-semibold leading-none text-transparent bg-clip-text bg-linear-to-r from-[#9767e4] to-[#47cfeb] pb-2 group-data-[state=active]:text-white! group-data-[state=active]:bg-none!">
              Marketing Services
            </p>
          </TabsTrigger>

          <TabsTrigger
            value="business_consultant"
            className="group py-6 px-7 border border-gray-500 flex items-center bg-linear-to-t from-[#FFFFFF00] to-[#777980] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#E93D3D] data-[state=active]:to-[#4E30FE] transition-all duration-300 cursor-pointer"
          >
            <p className="text-lg font-semibold leading-none text-transparent bg-clip-text bg-linear-to-r from-[#9767e4] to-[#47cfeb] pb-2 group-data-[state=active]:text-white! group-data-[state=active]:bg-none!">
              Business Consulting
            </p>
          </TabsTrigger>

          <TabsTrigger
            value="business_automation"
            className="group py-6 px-7 border border-gray-500 flex items-center bg-linear-to-t from-[#FFFFFF00] to-[#777980] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#E93D3D] data-[state=active]:to-[#4E30FE] transition-all duration-300 cursor-pointer"
          >
            <p className="text-lg font-semibold leading-none text-transparent bg-clip-text bg-linear-to-r from-[#9767e4] to-[#47cfeb] pb-2 group-data-[state=active]:text-white! group-data-[state=active]:bg-none!">
              Business Automation
            </p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="marketing_service">
          <div
            data-tab="marketing_service"
            className="service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0"
          >
            {marketingData.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="business_consultant">
          <div
            data-tab="business_consultant"
            className="service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0"
          >
            {consultingData.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="business_automation">
          <div
            data-tab="business_automation"
            className="service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0"
          >
            {automationData.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
