import Image from "next/image";

export interface SectionHeadProps {
  title: string;
}

const SectionHead = ({ title }: SectionHeadProps) => {
  return (
    <div className="flex items-center gap-3 bg-white/10 py-2 px-8 md:px-16 w-fit rounded-full mx-auto banner-tagline border border-gray-400">
      <Image
        src="/images/hr-line.png"
        alt="heading line vector 1"
        width={80}
        height={16}
      />
      <p className="font-roboto text-sm md:text-lg font-light text-color-gradient uppercase text-center">
        {title}
      </p>
      <Image
        src="/images/hr-line.png"
        alt="heading line vector 1"
        width={80}
        height={16}
        className="scale-x-[-1]"
      />
    </div>
  );
};

export default SectionHead;
