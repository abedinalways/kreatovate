import Contact from "@/components/modules/contact/Contact";

import TeamAll from "@/components/modules/team/TeamAll";

import DynamicBanner from "@/components/shared/banner/DynamicBanner";
import React from "react";

const TeamPage = () => {
  return (
    <div className="overflow-hidden">
      <DynamicBanner
        imageUrl="/images/service_banner.png"
        title="The People Behind"
        titleGradient="Our Success"
      />
      <TeamAll/>
      <Contact />
    </div>
  );
};

export default TeamPage;
