import Banner from "@/components/modules/homepage/banner/Banner";
import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <h1>test</h1>
      <Explore/>
      <Contact/>
    </div>
  );
}
