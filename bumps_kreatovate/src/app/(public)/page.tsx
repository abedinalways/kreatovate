import Banner from "@/components/modules/homepage/banner/Banner";
import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import Feedback from "@/components/feedback/Feedback";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Feedback/>
      <Team/>
      <Explore/>
      <Contact/>
    </div>
  );
}
