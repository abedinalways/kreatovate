import Banner from "@/components/modules/homepage/banner/Banner";
import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Team/>
      <Explore/>
      <Contact/>
    </div>
  );
}
