import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ArrowIcon from '../icons/ArrowIcon';

interface BtnProps {
  btnText: string;
  className?: string;
  isIcon?: boolean;
  link?: string;
  onClick?: () => void;
}

const ButtonTwo = ({
  btnText,
  link,
  onClick,
}: BtnProps) => {
  return (
    <div className="p-px rounded-[32px] gradient-btns flex cursor-pointer hover:bg-transparent font-[roboto] border-t border-l border-r border-gray-400 ">
      <button 
        onClick={onClick}
        className="px-6 py-4 rounded-[32px] flex items-center text-[16px] font-normal leading-[180%] text-center text-white hover:text-white hover:bg-transparent cursor-pointer"
      >
        {link ? (
          <Link href={link} className="block w-full text-center capitalize">
            <span className="flex items-center text-center justify-center">
              {btnText}
              <ArrowIcon />
            </span>
          </Link>
        ) : (
          <span className="flex items-center text-center justify-center">
            {btnText}
            <ArrowIcon />
          </span>
        )}
      </button>
    </div>
  );
};
  

export default ButtonTwo;
