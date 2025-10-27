
import Contact from "@/components/modules/contact/Contact";
import Feedback from "@/components/modules/feedback/Feedback";
import Banner from "@/components/modules/homepage/Banner";
import OurSolution from "@/components/modules/homepage/OurSolution";
import WhoWeAre from "@/components/modules/homepage/WhoWeAre";
import Team from "@/components/modules/team/Team";
import Partners from "@/components/shared/partners/Partners";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <Team/>
      <OurSolution />
      <Partners />
      <Feedback/>
      <Contact />
      
    </div>
  );

}
