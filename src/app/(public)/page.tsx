import Contact from "@/components/contact/Contact";
import AboutUs from "@/components/modules/AboutUs";
import Banner from "@/components/modules/Banner";
import Service from "@/components/modules/Service";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />

      <AboutUs />
      <Service />
      {/* <Contact /> */}
    </div>
  );
}
