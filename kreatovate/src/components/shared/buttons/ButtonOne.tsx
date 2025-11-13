import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BtnProps {
  btnText: string;
  width?: string;
  padding?: string;
  fontSize?: string;
  href?: string;
}

const ButtonOne = ({
  btnText,
  width = "w-full",
  padding = "py-3",
  fontSize = "text-lg",
  href = "#",
}: BtnProps) => {
  return (
    <div className="p-px rounded-[10px] bg-linear-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
      <Button
        asChild
        variant="ghost"
        className={`${width} rounded-[10px] bg-black hover:bg-black/90 text-white hover:text-white ${padding} ${fontSize} font-thin font-roboto leading-8`}
      >
        <Link href={href} className="block w-full text-center capitalize">
          {btnText}
        </Link>
      </Button>
    </div>
  );
};

export default ButtonOne;
