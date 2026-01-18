import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import ArrowIcon from "../icons/ArrowIcon";

interface BtnProps {
  btnText: string;
  className?: string;
  isIcon?: boolean;
  link?: string;
}

const ButtonTwo = ({ btnText, className, isIcon = true, link }: BtnProps) => {
  return (
    <div className="p-px rounded-[12px] bg-gradient-btn cursor-pointer hover:bg-transparent font-[roboto]">
      <Button
        asChild
        variant="ghost"
        className={` ${className} w-[208px] h-[52px] rounded-[12px] text-[16px] font-normal leading-[180%] text-center text-white hover:text-white hover:bg-transparent`}
      >
        <Link
          href={link ? link : '/'}
          className="block w-full text-center capitalize"
        >
          {btnText}<ArrowIcon/>
        </Link>
      </Button>
    </div>
  );
};

export default ButtonTwo;
