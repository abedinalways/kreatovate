import Contact from "@/components/modules/contact/Contact";
import Service from "@/components/modules/homepage/service/Service";
import Team from "@/components/modules/team/Team";
import TeamAll from "@/components/modules/team/TeamAll";
import TeamForService from "@/components/modules/team/TeamForService";
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
      <TeamForService/>
      <Partners />
      <Contact />
    </div>
  );
};

export default ServicePage;
