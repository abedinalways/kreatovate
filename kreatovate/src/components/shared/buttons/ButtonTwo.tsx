import { Button } from "@/components/ui/button";
import { handleSmoothLink } from "@/utils/smoothScroll";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface BtnProps {
  btnText: string;
  className?: string;
  link?: string;
  headerSelector?: string;
}

const ButtonTwo = ({
  btnText,
  className,
  link,
  headerSelector = "nav",
}: BtnProps) => {
  return (
    <div
      className={`p-px rounded-[12px] btn-bg cursor-pointer hover:bg-transparent ${className}`}
    >
      <Button
        asChild
        variant="ghost"
        className=" rounded-[12px] w-[172px]! h-[56px]! text-base md:text-lg flex items-center font-medium text-white hover:text-white hover:bg-transparent"
      >
        <Link
          href={link ? link : '#'}
          onClick={e => handleSmoothLink(e, link as string, headerSelector)}
          className="block w-full text-center capitalize"
        >
          {btnText} <MoveRight />
        </Link>
      </Button>
    </div>
  );
};

export default ButtonTwo;
