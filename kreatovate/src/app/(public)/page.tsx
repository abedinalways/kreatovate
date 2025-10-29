import Contact from "@/components/modules/contact/Contact";
import Feedback from "@/components/modules/feedback/Feedback";
import AboutUs from "@/components/modules/homepage/AboutUs";
import Banner from "@/components/modules/homepage/Banner";
import BookAppointment from "@/components/modules/homepage/BookAppointment";
import OurSolution from "@/components/modules/homepage/OurSolution";
import Service from "@/components/modules/homepage/service/Service";
import WhoWeAre from "@/components/modules/homepage/WhoWeAre";
import Team from "@/components/modules/team/Team";
import Partners from "@/components/shared/partners/Partners";

export default function HomePage() {
  return (
    <div>
      <Banner />

      <AboutUs />
      <WhoWeAre />
      <BookAppointment />
      <Service />
      <Team />
      <OurSolution />
      <Partners />
      <Feedback />
      <Contact />
    </div>
  );
}
