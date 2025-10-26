import { cn } from "@/lib/utils";
import Image from "next/image";

export interface WwaCardData {
  icon: string;
  title: string;
  description: string;
}

export interface WwaCardProps {
  data: WwaCardData;
  className?: string;
}

const WwaCard = ({ data, className }: WwaCardProps) => {
  const { icon, title, description } = data;
  return (
    <div className={cn("bg-color-gradient p-px rounded-xl h-full", className)}>
      <div className="bg-[#0F1016] rounded-xl p-6 h-full flex flex-col">
        <Image src={icon} alt={title} width={48} height={48} />
        <h5 className="text-xl md:text-2xl font-semibold leading-9 mt-3">
          {title}
        </h5>
        {/* flex-1 pushes the content to fill height evenly */}
        <p className="font-roboto text-sm md:text-lg font-normal leading-6 md:leading-9 text-[#A5A5AB] mt-2 flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WwaCard;
