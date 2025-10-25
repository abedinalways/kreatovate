
import Contact from "@/components/modules/contact/Contact";
import Banner from "@/components/modules/homepage/Banner";
import WhoWeAre from "@/components/modules/homepage/WhoWeAre";
import Partners from "@/components/shared/partners/Partners";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Contact />
      <WhoWeAre />
      <Partners />
    </div>
  );

}
