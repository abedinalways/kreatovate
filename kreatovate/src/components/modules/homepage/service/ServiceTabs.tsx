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
      id: 'm1',
      title: 'AI Powered Digital Marketing Solutions',
      desc: 'Enhance your online presence through A.I. Powered Automation with a full suite of A.I. Employees at your service.',
      image: '/images/service01.png',
      href: '/services/ai-digital-marketing',
    },
    {
      id: 'm2',
      title: 'Lead Generation',
      desc: 'We identify potential customers who are genuinely interested in your services. By using targeted efforts and data-driven strategies, we deliver qualified leads.',
      image: '/images/marketing/img01.png',
      href: '/services/lead-generation',
    },
    {
      id: 'm3',
      title: 'SEO/GEO Service',
      desc: 'We boost your website’s visibility and make sure local customers find you easily. With strong search engine rankings and geo-targeted optimisation, you stand out.',
      image: '/images/marketing/img04.png',
      href: '/services/seo-geo-service',
    },
    {
      id: 'm4',
      title: 'Social Media Management',
      desc: 'We keep your social media channels lively and engaging with consistent, high-quality posts. By building your community and interacting with followers, we grow your brand.',
      image: '/images/marketing/img03.png',
      href: '/services/social-media-management',
    },
    {
      id: 'm5',
      title: 'Social Content Generation',
      desc: 'We create visually appealing and brand-aligned content for your social media platforms. From images and captions to theme and layout, we craft your digital voice.',
      image: '/images/marketing/img02.png',
      href: '/services/social-content-generation',
    },
  ];


  const consultingData: ServiceItem[] = [
    {
      id: 'c1',
      title: 'SMART Property Conversion',
      desc: 'We introduce blockchain system to convert properties into SMART digital assets for tokenization, fractional ownership, and seamless transactions. This enables liquidity and accessibility in the real estate market.',
      image: '/images/service/service01.png',
      href: '/services/smart-property-conversion',
    },
    {
      id: 'c2',
      title: 'Green Property Conversion',
      desc: 'We convert traditional properties into green, sustainable assets. Using blockchain, we support ESG compliance, carbon credit integration, and transparency in property management.',
      image: '/images/service/service02.png',
      href: '/services/green-property-conversion',
    },
    {
      id: 'c3',
      title: 'NextGen Education',
      desc: 'We deliver tech-driven, immersive education – linked to blockchain credentials and digital portfolios. Preparing learners for future careers in emerging technologies.',
      image: '/images/service/service03.png',
      href: '/services/nextgen-education',
    },
    {
      id: 'c4',
      title: 'Data Center Development + Management',
      desc: 'We build and manage data centers for blockchain, AI, and other tech applications. Ensuring high availability, security, and scalability for digital operations.',
      image: '/images/service/service04.png',
      href: '/services/data-center-development',
    },
    {
      id: 'c5',
      title: 'Data Mining Facilitation',
      desc: 'We help you unlock, refine, and utilize data. Providing tools for data collection, processing, and analysis – enabling smarter decisions and insights.',
      image: '/images/service/service05.png',
      href: '/services/data-mining-facilitation',
    },
    {
      id: 'c6',
      title: 'Crypto Mining Facilitation',
      desc: 'We provide access to crypto mining setups and services. From hardware procurement to operational management – optimizing mining efficiency and returns.',
      image: '/images/service/service06.png',
      href: '/services/crypto-mining-facilitation',
    },
    {
      id: 'c7',
      title: 'Web/App/Ecosystem Architecture & Development',
      desc: 'We design and build digital ecosystems – including websites, apps, and platforms. Ensuring seamless user experiences and robust backend systems.',
      image: '/images/service/service07.png',
      href: '/services/web-app-architecture',
    },
    {
      id: 'c8',
      title: 'Blockchain/Web3 Infrastructure Development',
      desc: 'We create decentralized infrastructures – from smart contracts to dApps. Enabling secure, transparent, and scalable blockchain solutions.',
      image: '/images/service/service08.png',
      href: '/services/blockchain-infrastructure',
    },
    {
      id: 'c9',
      title: 'Real World Asset (RWA) Tokenization',
      desc: 'We convert physical assets into tradable digital tokens. Increasing liquidity, transparency, and accessibility in asset investment and management.',
      image: '/images/service/service09.png',
      href: '/services/rwa-tokenization',
    },
  ];


  const automationData: ServiceItem[] = [
    {
      id: 'a1',
      title: 'AI Workforce Solutions',
      desc: 'AI Powered Digital Workstyles Solutions: Enhance your enterprise operations through AI Powered Automation with a full suite of AI Employee styles.',
      image: '/images/consulting/img01.png',
      href: '/services/ai-workforce-solutions',
    },
    {
      id: 'a2',
      title: 'AI Powered Sales Force',
      desc: 'AI Powered Digital Workstyles Solutions: Enhance your enterprise operations through AI Powered Automation with a full suite of AI Employee styles.',
      image: '/images/consulting/img02.png',
      href: '/services/ai-powered-sales-force',
    },
    {
      id: 'a3',
      title: 'SaaS Implementation',
      desc: 'We shape and elevate your brand identity with precision SaaS implementation strategies to solidify the presence in the competitive market.',
      image: '/images/consulting/img03.png',
      href: '/services/saas-implementation',
    },
    {
      id: 'a4',
      title: "Automated Operating Systems & Oracle's",
      desc: "Leverage comprehensive market analysis and innovative capabilities for Oracle's key insights, trends, and automated business for informed decision.",
      image: '/images/consulting/img04.png',
      href: '/services/automated-operating-systems',
    },
    {
      id: 'a5',
      title: 'Automated Workflows',
      desc: 'Leverage expert guidance for optimal business performance through automated workflows and comprehensive consulting and business strategy.',
      image: '/images/consulting/img05.png',
      href: '/services/automated-workflows',
    },
    {
      id: 'a6',
      title: 'Blockchain Implementation',
      desc: 'Transform your business with intelligent automation. Our AI SaaS business solutions are designed to handle the complex daily tasks, freeing up time.',
      image: '/images/consulting/img06.png',
      href: '/services/blockchain-implementation',
    },
    {
      id: 'a7',
      title: 'Smart Contract Automation',
      desc: "Leverage comprehensive market analysis and innovative capabilities for Oracle's key insights, trends, and automated business for informed decision.",
      image: '/images/consulting/img04.png',
      href: '/services/smart-contract-automation',
    },
    {
      id: 'a8',
      title: 'Automated Social Content Engine',
      desc: 'Leverage expert guidance for optimal business performance through automated workflows and comprehensive consulting and business strategy.',
      image: '/images/consulting/img05.png',
      href: '/services/automated-social-content-engine',
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
