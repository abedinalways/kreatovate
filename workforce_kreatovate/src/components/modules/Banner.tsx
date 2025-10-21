import Image from "next/image";
import BannerBg from "./BannerBg";
import RoboBg from "./RoboBg";

const Banner = () => {
  return (
    <div id="home" className="-mt-28 relative h-[35rem] md:h-dvh banner-bg">
      <BannerBg />
      <RoboBg />
      <Image
        src="/images/bottom-bg.png"
        alt="light effect 2"
        width={800}
        height={800}
        className="absolute -bottom-36 md:bottom-0 right-0 w-full h-10 md:h-8 z-30"
      />
    </div>
  );
};

export default Banner;
