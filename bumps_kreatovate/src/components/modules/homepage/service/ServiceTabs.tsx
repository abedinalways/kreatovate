"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ServiceCard, { ServiceItem } from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServiceTabs = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState("marketing_service");

  // helper: animate grid in with mask + pop
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

  // helper: fade/slide out previous visible grids
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
    // initial in
    animateGridIn(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // DATA
  const marketingData: ServiceItem[] = [
    {
      id: "m1",
      title: "AI Workforce Solutions",
      desc: "AI Powered Digital Marketing Solutions. Enhance your entire operations through AI. Powered automation with a full suite of AI. Employees at your service.",
      image: "/images/marketing01.png",
      href: "/services/ai-workforce-solutions",
    },
    {
      id: "m2",
      title: "AI Powered Sales Force",
      desc: "AI Powered Digital Marketing Solutions. Enhance your performance through AI. Powered automation with a full suite of AI. Employees at your service.",
      image: "/images/marketing02.png",
      href: "/services/ai-powered-sales-force",
    },
    {
      id: "m3",
      title: "SaaS Implementation",
      desc: "We shape and elevate your brand’s identity with cohesive values and strategic positioning to solidify your presence in the competitive market.",
      image: "/images/marketing03.png",
      href: "/services/saas-implementation",
    },
    {
      id: "m4",
      title: "Automated Operating Systems & Oracle’s",
      desc: "Leverage comprehensive market analysis and automation tools to uncover key insights, trends, and opportunities for informed decisions.",
      image: "/images/marketing04.png",
      href: "/services/automated-operating-systems",
    },
    {
      id: "m5",
      title: "Automated Workflows",
      desc: "Leverage expert guidance for optimal business performance. Gain access to comprehensive automation strategies to drive success.",
      image: "/images/marketing05.png",
      href: "/services/automated-workflows",
    },
    {
      id: "m6",
      title: "Blockchain Implementation",
      desc: "Transform your business with intelligent automation tools. Our AI SaaS software delivers a seamless solution to handle complex daily tasks through smart blockchain integration.",
      image: "/images/marketing08.png",
      href: "/services/blockchain-implementation",
    },
    {
      id: "m7",
      title: "Smart Contract Automation",
      desc: "Leverage comprehensive market analysis and automation tools to unlock key insights, trends, and opportunities for informed decision-making.",
      image: "/images/service07.png",
      href: "/services/smart-contract-automation",
    },
    {
      id: "m8",
      title: "Automated Social Content Engine",
      desc: "Leverage expert guidance for optimal business performance. Gain access to comprehensive strategies to enhance social automation efficiency.",
      image: "/images/service08.png",
      href: "/services/automated-social-engine",
    },
  ];

  const consultingData: ServiceItem[] = [
    {
      id: "c1",
      title: "SMART Property Conversion",
      desc: "We retrofit existing buildings with IoT, automation, and integrated building management so spaces become safer, more efficient, and easier to run.",
      image: "/images/service01.png",
      href: "/services/smart-property-conversion",
    },
    {
      id: "c2",
      title: "Green Property Conversion",
      desc: "We transform properties to lower-carbon, energy-efficient assets — solar integration, LED retrofits, efficient HVAC, and passive design improvements.",
      image: "/images/service02.png",
      href: "/services/green-property-conversion",
    },
    {
      id: "c3",
      title: "NextGen Education",
      desc: "We build modern learning ecosystems — blended curriculum design, interactive digital platforms, adaptive assessments, and teacher toolkits.",
      image: "/images/service03.png",
      href: "/services/nextgen-education",
    },
    {
      id: "c4",
      title: "Data Center Development + Management",
      desc: "We design, build, and commission resilient data centers tailored to your performance and uptime needs, managing operations and monitoring efficiency.",
      image: "/images/service04.png",
      href: "/services/data-center-development",
    },
    {
      id: "c5",
      title: "Data Mining Facilitation",
      desc: "We help you unlock value from raw data: collection pipelines, cleansing, feature engineering, and model-ready datasets with governance tooling.",
      image: "/images/service05.png",
      href: "/services/data-mining-facilitation",
    },
    {
      id: "c6",
      title: "Crypto Mining Facilitation",
      desc: "We provide end-to-end support to plan, deploy, and operate efficient crypto-mining setups — site selection, power strategy, cooling, and hardware management.",
      image: "/images/service06.png",
      href: "/services/crypto-mining-facilitation",
    },
    {
      id: "c7",
      title: "Web/App/Ecosystem Architecture & Development",
      desc: "We design and build end-to-end web and mobile systems that scale — from high-level architecture to UX and DevOps deployment pipelines.",
      image: "/images/service07.png",
      href: "/services/web-app-architecture",
    },
    {
      id: "c8",
      title: "Blockchain/Web3 Infrastructure Development",
      desc: "We set up secure, production-ready Web3 infrastructure — smart contract frameworks, Layer-2 integrations, and wallet/oracle support.",
      image: "/images/service08.png",
      href: "/services/blockchain-infrastructure",
    },
    {
      id: "c9",
      title: "Real World Asset (RWA) Tokenization",
      desc: "We turn physical assets (real estate, commodities, invoices, etc.) into compliant digital tokens — managing legal mappings, custody models, and issuance.",
      image: "/images/service09.png",
      href: "/services/rwa-tokenization",
    },
  ];

  const automationData: ServiceItem[] = [
    {
      id: "a1",
      title: "Customer Support Agent",
      desc: "LLM agent with RAG + actions to resolve tickets and update systems.",
      image: "/images/service03.png",
      href: "/services/support-agent",
    },
    {
      id: "a2",
      title: "Sales Enablement Agent",
      desc: "Prospect research, email drafts, and CRM updates automatically.",
      image: "/images/service04.png",
      href: "/services/sales-agent",
    },
    {
      id: "a3",
      title: "HR Assistant",
      desc: "Candidate screening, onboarding flows, and knowledge answers.",
      image: "/images/service05.png",
      href: "/services/hr-assistant",
    },
    {
      id: "a4",
      title: "Finance Reconciler",
      desc: "Invoice parsing, coding, and exception handling with audit logs.",
      image: "/images/service01.png",
      href: "/services/finance-reconciler",
    },
    {
      id: "a5",
      title: "Ops Workflow Bot",
      desc: "Orchestrate multi-step back-office processes via APIs and webhooks.",
      image: "/images/service02.png",
      href: "/services/ops-bot",
    },
    {
      id: "a6",
      title: "Knowledge Search",
      desc: "Enterprise RAG with connectors, redaction, and secure indexing.",
      image: "/images/service03.png",
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
          // slight delay to ensure new content is mounted
          setTimeout(() => animateGridIn(v), 40);
        }}
      >
        <TabsList className="px-8 py-10 bg-[#161721] flex items-center justify-between gap-8 w-full overflow-auto overflow-y-hidden">
          {/* Your triggers unchanged */}
          <TabsTrigger
            value="marketing_service"
            className="group py-6 px-7 border border-gray-500 flex items-center bg-linear-to-t from-[#FFFFFF00] to-[#777980] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#E93D3D] data-[state=active]:to-[#4E30FE] transition-all duration-300 cursor-pointer"
          >
            <p className="text-lg font-semibold leading-none text-transparent bg-clip-text bg-linear-to-r from-[#9767e4] to-[#47cfeb] group-data-[state=active]:text-white! group-data-[state=active]:bg-none!">
              Marketing Services
            </p>
          </TabsTrigger>

          <TabsTrigger
            value="business_consultant"
            className="group py-6 px-7 border border-gray-500 flex items-center bg-linear-to-t from-[#FFFFFF00] to-[#777980] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#E93D3D] data-[state=active]:to-[#4E30FE] transition-all duration-300 cursor-pointer"
          >
            <p className="text-lg font-semibold leading-none text-transparent bg-clip-text bg-linear-to-r from-[#9767e4] to-[#47cfeb] pb-0.5 group-data-[state=active]:text-white! group-data-[state=active]:bg-none!">
              Business Consulting
            </p>
          </TabsTrigger>

          <TabsTrigger
            value="business_automation"
            className="group py-6 px-7 border border-gray-500 flex items-center bg-linear-to-t from-[#FFFFFF00] to-[#777980] data-[state=active]:bg-linear-to-r data-[state=active]:from-[#E93D3D] data-[state=active]:to-[#4E30FE] transition-all duration-300 cursor-pointer"
          >
            <p className="text-lg font-semibold leading-none text-transparent bg-clip-text bg-linear-to-r from-[#9767e4] to-[#47cfeb] pb-0.5 group-data-[state=active]:text-white! group-data-[state=active]:bg-none!">
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
