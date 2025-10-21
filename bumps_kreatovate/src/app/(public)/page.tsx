import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Explore/>
      <Contact/>
    </div>
  );
}
