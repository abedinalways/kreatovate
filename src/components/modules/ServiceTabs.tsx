import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ServiceCard, { ServiceItem } from "./ServiceCard";

const ServiceTabs = () => {
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
      title: "AI Readiness Assessment",
      desc: "Capability, data, and risk audit with a phased roadmap and ROI estimates.",
      image: "/images/service1.png",
      href: "/services/ai-readiness",
    },
    {
      id: "c2",
      title: "Operating Model Design",
      desc: "RACI, roles, and governance for AI-assisted teams and workflows.",
      image: "/images/service4.png",
      href: "/services/operating-model",
    },
    {
      id: "c3",
      title: "Data Strategy",
      desc: "Source mapping, quality, privacy posture, and warehouse architecture.",
      image: "/images/service3.png",
      href: "/services/data-strategy",
    },
    {
      id: "c4",
      title: "Use Case Prioritization",
      desc: "Stack-rank automations by impact, feasibility, and time-to-value.",
      image: "/images/service5.png",
      href: "/services/usecase-prioritization",
    },
    {
      id: "c5",
      title: "Change Management",
      desc: "Playbooks, enablement plans, and adoption metrics for AI rollouts.",
      image: "/images/service3.png",
      href: "/services/change-management",
    },
    {
      id: "c6",
      title: "Compliance Advisory",
      desc: "Policy, redaction, and data retention aligned to SOC2/GDPR.",
      image: "/images/service2.png",
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
    <div className="w-full">
      <Tabs defaultValue="marketing_service" className="flex flex-col gap-6">
        <TabsList className="px-8 py-10 bg-[#161721] flex items-center justify-between gap-8 w-full overflow-auto overflow-y-hidden">
          <TabsTrigger
            value="marketing_service"
            className="
              group
              py-6 px-7 border border-gray-500 flex items-center
              bg-gradient-to-t from-[#FFFFFF00] to-[#777980]
              data-[state=active]:bg-gradient-to-r
              data-[state=active]:from-[#E93D3D]
              data-[state=active]:to-[#4E30FE]
              transition-all duration-300 cursor-pointer
            "
          >
            <p
              className="
                text-lg font-semibold leading-none
                text-transparent bg-clip-text
                bg-gradient-to-r from-[#9767e4] to-[#47cfeb]
                group-data-[state=active]:!text-white
                group-data-[state=active]:!bg-none
              "
            >
              Marketing Services
            </p>
          </TabsTrigger>

          <TabsTrigger
            value="business_consultant"
            className="
              group
              py-6 px-7 border border-gray-500 flex items-center
              bg-gradient-to-t from-[#FFFFFF00] to-[#777980]
              data-[state=active]:bg-gradient-to-r
              data-[state=active]:from-[#E93D3D]
              data-[state=active]:to-[#4E30FE]
              transition-all duration-300 cursor-pointer
            "
          >
            <p
              className="
                text-lg font-semibold leading-none
                text-transparent bg-clip-text
                bg-gradient-to-r from-[#9767e4] to-[#47cfeb]
                group-data-[state=active]:!text-white
                group-data-[state=active]:!bg-none
              "
            >
              Business Consulting
            </p>
          </TabsTrigger>

          <TabsTrigger
            value="business_automation"
            className="
              group
              py-6 px-7 border border-gray-500 flex items-center
              bg-gradient-to-t from-[#FFFFFF00] to-[#777980]
              data-[state=active]:bg-gradient-to-r
              data-[state=active]:from-[#E93D3D]
              data-[state=active]:to-[#4E30FE]
              transition-all duration-300 cursor-pointer
            "
          >
            <p
              className="
                text-lg font-semibold leading-none
                text-transparent bg-clip-text
                bg-gradient-to-r from-[#9767e4] to-[#47cfeb]
                group-data-[state=active]:!text-white
                group-data-[state=active]:!bg-none
              "
            >
              Business Automation
            </p>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="marketing_service">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingData.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="business_consultant">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingData.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="business_automation">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
