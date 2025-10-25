import Image from "next/image";

const WwaCard = () => {
  return (
    <div className="bg-color-gradient p-px rounded-xl">
      <div className="bg-[#0F1016] rounded-xl p-6">
        <Image src="/images/wwa1.png" alt="wwa 1" width={48} height={48} />
        <h5 className="text-xl md:text-2xl font-semibold leading-9">
          Purposeful Development
        </h5>
        <p className="font-roboto text-sm md:text-lg font-normal leading-6 md:leading-9 text-[#A5A5AB]">
          We design and build SMART micro-cities with real purpose — compact,
          tech-enabled communities that improve lives and long-term value.
        </p>
      </div>
    </div>
  );
};

export default WwaCard;
