
import DynamicBanner from "@/components/banner/DynamicBanner";
import Contact from "@/components/modules/contact_us/ContactUs";


import Support from "@/components/support/Support";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/contact_us_banner.png"
        title="Get in"
        titleGradient="Touch"
      />
      <Contact/>
      <Support/>
    </div>
  );
};

export default ContactUsPage;
