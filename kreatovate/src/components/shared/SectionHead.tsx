import Image from "next/image";
import { cn } from "@/lib/utils";

export interface SectionHeadProps {
  title: string;
  className?: string;
  titleClassName?: string;
}

const SectionHead = ({
  title,
  className,
  titleClassName,
}: SectionHeadProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-white/10 py-2 px-8 md:px-16 w-fit rounded-full mx-auto banner-tagline border border-gray-400",
        className
      )}
    >
      <Image
        src="/images/hr-line.png"
        alt="heading line vector 1"
        width={80}
        height={16}
      />
      <p
        className={cn(
          "font-roboto text-sm md:text-lg font-light text-color-gradient uppercase text-center pb-0!",
          titleClassName
        )}
      >
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
