import Image from 'next/image';

const SiteBadge = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-white/10  md:px-6  rounded-full mx-auto banner-tagline border border-gray-400 px-2 ${className}`}
    >
      <Image
        src="/images/hrline1.png"
        alt="heading line vector 1"
        width={60}
        height={16}
      />
      <p className="font-roboto bg-white/10 text-[10px] mx-2 text-center py-2 font-bold text-gradient-special  uppercase">
        {title}
      </p>
      <Image
        src="/images/hrline1.png"
        alt="heading line vector 1"
        width={60}
        height={16}
        className="scale-x-[-1]"
      />
    </div>
  );
};

export default SiteBadge;
