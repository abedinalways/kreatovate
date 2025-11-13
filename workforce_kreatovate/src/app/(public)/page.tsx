import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import FAQ from "@/components/FAQ/FAQ";
import Feedback from "@/components/feedback/Feedback";
import AboutUs from "@/components/modules/AboutUs";
import Banner from "@/components/modules/home-page/banner/Banner";
import Business from "@/components/modules/Business";
import Service from "@/components/modules/Service";
import Trailer from "@/components/modules/home-page/trailer/Trailer";
import Evolution from "@/components/modules/home-page/evolution/Evolution";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />

      <AboutUs />
      <Business />
      {/* <Service /> */}
      <Explore />
      <Trailer />
      <Evolution />
      <Feedback />
      <Contact />
      <FAQ />
    </div>
  );
}
