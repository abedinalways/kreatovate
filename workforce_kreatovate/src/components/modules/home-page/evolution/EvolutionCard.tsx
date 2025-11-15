"use client";
import { Button } from "@/components/ui/button";
import { useBreakpoint } from "@/utils/useBreakpoint";
import { Phone } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  version: string;
  title: string;
  description: string;
  buttonText: string;
  icon?: ReactNode;
  iconBg?: string;
  iconColor?: string;
}

const EvolutionCard = ({
  version,
  title,
  description,
  buttonText,
  icon = <Phone className="size-6" />,
  iconBg = "#FB2C361A",
  iconColor = "#E21717",
}: Props) => {
  const breakpoint = useBreakpoint();

  const shortText =
    breakpoint === "mobile"
      ? buttonText.slice(0, 26) + "..."
      : breakpoint === "tablet"
      ? buttonText.slice(0, 28) + "..."
      : buttonText;

  return (
    <div className="bg-[#18181B80] p-4 md:p-5 rounded-xl w-full group transition-all duration-300 hover:shadow-[0_0_20px_#EB3D4D44] hover:bg-[#18181bcc]">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <div
            className="p-2.5 md:p-3 rounded-full flex items-center justify-center"
            style={{ background: iconBg, color: iconColor }}
          >
            {icon}
          </div>

          <div className="px-4 md:px-5 py-1.5 md:py-2.5 border border-[#EB3D4D] rounded-full">
            <h1 className="text-xs sm:text-sm md:text-base font-semibold text-[#EB3D4D] uppercase">
              {version}
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
          <p className="text-sm sm:text-base text-ring">{description}</p>
        </div>

        <div className="block sm:hidden">
          <Button
            variant="default"
            className="text-sm leading-6 w-full text-left px-4 py-3 bg-[#FB2C360D] border border-[#FB2C3633] rounded-[12px]"
          >
            {shortText}
          </Button>
        </div>

        <div className="hidden sm:block opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 w-fit">
          <Button
            variant="default"
            className="
              text-base leading-7 w-fit text-left
              px-6 py-4
              bg-[#FB2C360D] border border-[#FB2C3633] rounded-[12px]
            "
          >
            {shortText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvolutionCard;
