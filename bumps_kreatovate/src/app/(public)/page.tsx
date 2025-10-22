import Banner from "@/components/modules/homepage/banner/Banner";
import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import Team from "@/components/team/Team";
import Service from "@/components/modules/homepage/service/Service";
import TrustedGrowth from "@/components/modules/homepage/trusted-growth/TrustedGrowth";
import Strategy from "@/components/modules/homepage/strategy/Strategy";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Strategy />
      <TrustedGrowth />

      <Team />
      <Service />
      <Explore />
      <Contact />
    </div>
  );
}
