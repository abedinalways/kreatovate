import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BtnProps {
  btnText: string;
  bgColor?: string;
}

const ButtonOne = ({ btnText, bgColor }: BtnProps) => {
  return (
    <div className="p-px rounded-[10px] bg-linear-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
      <Button
        asChild
        variant="ghost"
        className={`w-full rounded-[10px] ${
          bgColor
            ? "bg-[#0f1016] hover:bg-[#0f1016]/90"
            : "bg-black hover:bg-black/90"
        } text-white hover:text-white py-3 text-lg font-medium`}
      >
        <Link href="#" className="block w-full text-center capitalize">
          {btnText}
        </Link>
      </Button>
    </div>
  );
};

export default ButtonOne;
