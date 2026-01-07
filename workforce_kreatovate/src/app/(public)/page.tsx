import Contact from "@/components/contact/Contact";
import Explore from "@/components/explore/Explore";
import FAQ from "@/components/FAQ/FAQ";
import Feedback from "@/components/feedback/Feedback";
import AboutUs from "@/components/modules/AboutUs";
import Banner from "@/components/modules/home-page/banner/Banner";
import Business from "@/components/modules/Business";
import Trailer from "@/components/modules/home-page/trailer/Trailer";
import Evolution from "@/components/modules/home-page/evolution/Evolution";
import { OurBlurbs } from "@/components/blurbs/OurBlurbs";
import SplitShowcase from "@/components/splitshowcase/SplitShowcase";

export default function Home() {
  const splitData1 = {
    title: "KINpro Command Center",
    desc: "KINpro is the control layer for your Business OS. Manage contacts, conversations, pipelines, projects, tasks, and automations in one place. ADONIS continuously prioritizes what matters, while you retain control over what is automated vs manual.",
    image: "/images/kinpro.png",
  };
  const splitData2 = {
    title: "ADONIS Configures Your OS During Onboarding",
    desc: "During onboarding, you provide basic business inputs (industry, services, team structure, goals, and communication channels). ADONIS uses this to determine which dashboard modules you need (CRM, inbox, tasks, projects, time tracking, automations, analytics) and which capabilities to activate first. You can expand your stack anytime after your baseline OS is generated.",
    image: "/images/kinpro2.png",
  };
  const splitData3 = {
    title: "ADONIS Configures Your OS During Onboarding",
    desc: "During onboarding, you provide basic business inputs (industry, services, team structure, goals, and communication channels). ADONIS uses this to determine which dashboard modules you need (CRM, inbox, tasks, projects, time tracking, automations, analytics) and which capabilities to activate first. You can expand your stack anytime after your baseline OS is generated.",
    image: "/images/kinpro3.png",
  };
  const splitData4 = {
    title: "Rent the Platform - or License the Engine",
    desc: "Most teams start by activating KINpro with the intelligence tier that fits their needs. For agencies and advanced operators, licensing options enable white‑label deployment and resale. You’re not buying disconnected automations — you’re operating a unified Business OS governed by intelligence",
    image: "/images/kinpro4.png",
  };
  return (
    <div className="overflow-hidden">
      <Banner />

      <AboutUs />
      <OurBlurbs />
      <SplitShowcase data={splitData1} />
      <Explore />
      <SplitShowcase data={splitData2} reversed={true} />
      <SplitShowcase data={splitData3} />
      <Business />
      {/* <Service /> */}
      <SplitShowcase data={splitData4} reversed={true} />
      {/* <Trailer />
      <Evolution />
      <Feedback />
      <Contact />
      <FAQ /> */}
    </div>
  );
}
