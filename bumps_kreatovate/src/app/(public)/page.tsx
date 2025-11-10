import Banner from "@/components/modules/homepage/banner/Banner";
import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import Feedback from "@/components/feedback/Feedback";
import Service from "@/components/modules/homepage/service/Service";
import TrustedGrowth from "@/components/modules/homepage/trusted-growth/TrustedGrowth";
// import Strategy from "@/components/modules/homepage/strategy/Strategy";
import Solution from "@/components/solution/Solution";
import Team from "@/components/team/Team";
import FAQ from "@/components/FAQ/FAQ";
import Counter from "@/components/modules/homepage/counter/Counter";
import Trailer from "@/components/modules/homepage/trailer/Trailer";
import BumpsProject from "@/components/modules/homepage/bumps-project/BumpsProject";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Counter />
      {/* <div className="bg-[#0F0F0F]">
        <Strategy />
      </div> */}
      <BumpsProject />
      <TrustedGrowth />
      <Trailer />
      <Feedback />
      <Solution />
      <Team />
      <Service />
      <div className="bg-[#0F0F0F]">
        <Explore />
        <Contact />
        <FAQ />
      </div>
    </div>
  );
}
