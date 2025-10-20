import Image from "next/image";

const BannerBg = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/10 z-10" />
      <Image
        src="/images/group1.png"
        alt="light effect 1"
        width={1000}
        height={1000}
        className="absolute -top-20 -left-40 z-20"
      />
      <Image
        src="/images/group2.png"
        alt="light effect 2"
        width={1000}
        height={1000}
        className="absolute top-0 right-0 z-20"
      />
    </div>
  );
};

export default BannerBg;
