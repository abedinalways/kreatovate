import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BtnProps {
  btnText: string;
  width?: string; // e.g., "w-full", "w-40"
  padding?: string; // e.g., "py-3 px-6"
  fontSize?: string; // e.g., "text-lg", "text-sm"
}

const ButtonOne = ({
  btnText,
  width = 'w-full',
  padding = 'py-3',
  fontSize = 'text-lg',
}: BtnProps) => {
  return (
    <div className="p-px rounded-[10px] bg-gradient-to-r from-[#E93D3D] to-[#4E30FE] cursor-pointer">
      <Button
        asChild
        variant="ghost"
        className={`${width} rounded-[10px] bg-black hover:bg-black/90 text-white hover:text-white ${padding} ${fontSize} font-medium`}
      >
        <Link href="#" className="block w-full text-center capitalize">
          {btnText}
        </Link>
      </Button>
    </div>
  );
};

export default ButtonOne;
