

import ContactUs from "@/components/modules/contact_us/ContactUs";
import Support from "@/components/modules/support/Support";
import DynamicBanner from "@/components/shared/banner/DynamicBanner";
import React from "react";

const AppointmentPage = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/contact_us_banner.png"
        title="Get in"
        titleGradient="Touch"
      />
      <ContactUs />
      <Support />
    </div>
  );
};

export default AppointmentPage;
