import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import AboutUs from "@/components/modules/AboutUs";
import Banner from "@/components/modules/Banner";
import Service from "@/components/modules/Service";

export default function Home() {
  return (
    <div className="w-screen">
      <Banner />

      <AboutUs />
      <Service />
      <Explore/>
      <Contact />
    </div>
  );
}
