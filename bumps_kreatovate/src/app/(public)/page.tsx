// import BumpsProject from "@/components/modules/homepage/bumps-project/BumpsProject";
import Banner from "@/components/modules/homepage/banner/Banner";

import WhyWeBuildIt from "@/components/modules/homepage/why-we-build-it/WhyWeBuildIt";
import OurModel from "@/components/modules/homepage/our-model/OurModel";
import LaunchpadInitiatives from "@/components/modules/homepage/launchpad-initiatives/LaunchpadInitiatives";
import HowItWorks from "@/components/modules/homepage/how-it-works/HowItWorks";
import OurVision from "@/components/modules/homepage/our-vision/OurVision";
import ReadyToLaunch from "@/components/modules/homepage/ready-to-launch/ReadyToLaunch";
import Launchpad from "@/components/modules/homepage/launchpad/Launchpad";
import TrustedGrowth from "@/components/modules/homepage/trusted-growth/TrustedGrowth";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      {/* <Counter /> */}
      {/* <BumpsProject /> */}
      <Launchpad />
      <WhyWeBuildIt />
      <OurModel />
      <Welcome/>
      <LaunchpadInitiatives />
      {/* <TrustedGrowth /> */}
      <HowItWorks />
      <OurVision />
      {/* <Trailer /> */}
      {/* <Feedback /> */}
      {/* <Solution /> */}
      {/* <Team /> */}
      {/* <Service /> */}
      <div className="bg-[#0F0F0F]">
        {/* <Explore /> */}
        <ReadyToLaunch />
        {/* <Contact /> */}
        {/* <FAQ /> */}
      </div>
    </div>
  );
}
