import Contact from "@/components/modules/contact/Contact";
import Service from "@/components/modules/service/Service";
import Team from "@/components/modules/team/Team";
import DynamicBanner from "@/components/shared/banner/DynamicBanner";
import Partners from "@/components/shared/partners/Partners";
import React from "react";

const ServicePage = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/service_banner.png"
        title="Service"
        titleGradient="We Provide"
      />
      <Service />
      <Team />
      <Partners />
      <Contact />
    </div>
  );
};

export default ServicePage;
