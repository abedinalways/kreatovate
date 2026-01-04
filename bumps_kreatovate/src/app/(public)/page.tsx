import Banner from "@/components/modules/homepage/banner/Banner";
// import Contact from "@/components/contact/Contact";
// import Explore from "@/components/explore/Explore";
// import Feedback from "@/components/feedback/Feedback";
// import Service from "@/components/modules/homepage/service/Service";
// import Strategy from "@/components/modules/homepage/strategy/Strategy";
// import Solution from "@/components/solution/Solution";
// import Team from "@/components/team/Team";
// import FAQ from "@/components/FAQ/FAQ";
// import Counter from "@/components/modules/homepage/counter/Counter";
// import Trailer from "@/components/modules/homepage/trailer/Trailer";
import TrustedGrowth from "@/components/modules/homepage/trusted-growth/TrustedGrowth";
import Launchpad from "@/components/modules/homepage/launchpad/Launchpad";
import WhyWeBuildIt from "@/components/modules/homepage/why-we-build-it/WhyWeBuildIt";
import OurModel from "@/components/modules/homepage/our-model/OurModel";
import LaunchpadInitiatives from "@/components/modules/homepage/launchpad-initiatives/LaunchpadInitiatives";
import HowItWorks from "@/components/modules/homepage/how-it-works/HowItWorks";
import OurVision from "@/components/modules/homepage/our-vision/OurVision";
import ReadyToLaunch from "@/components/modules/homepage/ready-to-launch/ReadyToLaunch";
import BumpsProject from "@/components/modules/homepage/bumps-project/BumpsProject";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      {/* <Counter /> */}
      <BumpsProject />
      <Launchpad />
      <WhyWeBuildIt />
      <OurModel />
      <LaunchpadInitiatives />
      <HowItWorks />
      <OurVision />
      <TrustedGrowth /> 
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
