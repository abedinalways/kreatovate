import Consulting from "@/components/modules/consulting/Consulting";
import Contact from "@/components/modules/contact/Contact";
import Marketing from "@/components/modules/marketing/Marketing";
import TrustedPartners from "@/components/modules/trusted_partners/TrustedPartners";
import DynamicBanner from "@/components/shared/banner/DynamicBanner";

import Partners from "@/components/shared/partners/Partners";
import React from "react";

const ServiceDetails = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/service_banner.png"
        title="WEB3 Business"
        titleGradient="Marketing & Consulting"
      />
      <Marketing />
      <Consulting />
      <TrustedPartners />
      <Partners />
      <Contact />
    </div>
  );
};

export default ServiceDetails;
