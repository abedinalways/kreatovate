import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface BtnProps {
  btnText: string;
  className?: string;
  isIcon?: boolean;
  link?: string;
}

const ButtonTwo = ({ btnText, className, isIcon = true, link }: BtnProps) => {
  return (
    <div className="p-px rounded-[10px] bg-linear-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer hover:bg-transparent font-[roboto]">
      <Button
        asChild
        variant="ghost"
        className={` ${className} w-full rounded-[10px] py-5 px-6 text-xs md:text-sm font-medium text-center text-white hover:text-white hover:bg-transparent`}
      >
        <Link
          href={link ? link : "/"}
          className="block w-full text-center capitalize"
        >
          {btnText} {isIcon && <MoveRight />}
        </Link>
      </Button>
    </div>
  );
};

export default ButtonTwo;
