import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface BtnProps {
  btnText: string;
}

const ButtonTwo = ({ btnText }: BtnProps) => {
  return (
    <div className="p-px rounded-[10px] bg-linear-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer hover:bg-transparent">
      <Button
        asChild
        variant="ghost"
        className="w-full rounded-[10px] py-6 px-5 text-base md:text-lg font-medium text-white hover:text-white hover:bg-transparent"
      >
        <Link href="#" className="block w-full text-center capitalize">
          {btnText} <MoveRight />
        </Link>
      </Button>
    </div>
  );
};

export default ButtonTwo;
