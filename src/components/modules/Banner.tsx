import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative isolate w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="background"
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/10 z-10" />
      <Image
        src="/images/group1.png"
        alt="light effect 1"
        width={800}
        height={800}
        className="absolute -top-20 -left-40 z-20"
      />
      <Image
        src="/images/group2.png"
        alt="light effect 2"
        width={800}
        height={800}
        className="absolute top-0 right-0 z-20"
      />
      <Image
        src="/images/bottom-bg.png"
        alt="light effect 2"
        width={800}
        height={800}
        className="absolute bottom-0 right-0 w-full h-48 z-30"
      />

      <div className="text-white max-w-4xl space-y-6 z-50 text-center sm:text-left">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Unleash Potential with Kreatovate&apos;s{" "}
          <span className="text-color-gradient">Expert Marketing</span>{" "}
          <span className="text-color-gradient">& Consulting</span>
        </h1>

        <p className="text-gray-300 leading-relaxed sm:max-w-xl">
          Unlock Your Brand&apos;s Potential with Kreatovate Marketing &
          Consulting Where Innovation Meets Strategic Excellence to Propel Your
          Business Forward.
        </p>

        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#ED1C24] to-[#5A00E0] text-white font-medium hover:opacity-90 transition">
          Get Started Today
        </button>
      </div>

      <div className="sm:flex justify-center md:justify-end hidden">
        <Image
          src="/images/robo.png"
          alt="AI robot"
          width={500}
          height={500}
          className="object-contain animate-fade-in scale-150 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Banner;
